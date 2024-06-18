"use client";

import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../public/bg-2.jpg";
import { useEffect, useState } from "react";
import nookies from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";

//islogin
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role === "super admin") {
    return {
      redirect: {
        destination: "/dashboard/superAdmin",
      },
    };
  }

  return {
    props: {},
  };
}

const PelaporanBencana = () => {
  const [selectedKec, setSelectedKec] = useState("");
  const [selectedDesa, setSelectedDesa] = useState("");
  const [dataKecamatan, setDataKec] = useState([]);
  const [dataDesa, setDataDesa] = useState([]);

  const [jenisBencana, setJenisBencana] = useState("");
  const [waktuBencana, setWaktuBencana] = useState("");
  const [deskripsiBencana, setDeskripsiBencana] = useState("");
  const [lokasiKejadian, setLokasiKejadian] = useState("");
  const [jumlahPenduduk, setJumlahPenduduk] = useState(0);

  // console.log(selectedDesa);
  // console.log(jenisBencana);
  // console.log(waktuBencana);
  // console.log(deskripsiBencana);
  // console.log(lokasiKejadian);
  // console.log(jumlahPenduduk);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/Kecamatan");
      setDataKec(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/desa?id=${selectedKec}`);
      setDataDesa(response.data);
    };
    fetchData();
  }, [selectedKec]);

  const router = useRouter();

  async function addPelaporan() {
    const res = await axios.post("/api/pelaporanAwal", {
      jenisBencana: jenisBencana,
      waktuKejadian: waktuBencana,
      deskripsi: deskripsiBencana,
      lokasi: lokasiKejadian,
      desa_id: selectedDesa,
      jumlahPendudukTerancam: jumlahPenduduk,
    });
    console.log(res.data);
    router.push(
      `/dashboard/pelaporanBencana/jumlahKorban?id=${encodeURIComponent(
        res.data.id_pelaporan
      )}`
    );
  }

  return (
    <section className="container-fluid w-full h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image
          src={bgDashboard}
          alt="background-image"
          className="lg:max-h-screen h-full"
        />
      </div>
      <div className="flex flex-col justify-center pb-10">
        <h1 className="text-black text-3xl font-bold text-center my-8">
          Kuisioner Pelaporan Kejadian Awal Bencana
        </h1>
        <div className="bg-white p-8 h-auto w-auto border rounded-2xl shadow-lg mx-8 md:mx-14 lg:mx-32 xl:mx-32 mt-3">
          <div className="grid grid-cols-1 md:grid-cols-1 ">
            <div className="input-dataumum mx-3">
              <h1 className="text-black font-bold text-2xl">Isi Kuisioner :</h1>
              <div className="grid grid-cols-2 gap-x-3">
                <div className="flex flex-col">
                  <label className="font-semibold text-md text-black">
                    Jenis Bencana
                  </label>
                  <input
                    className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                    type="text"
                    name="jenisBencana"
                    onChange={(e) => setJenisBencana(e.target.value)}
                    placeholder="ex: banjir"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-md text-black">
                    Waktu Kejadian Bencana
                  </label>
                  <input
                    className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                    type="date"
                    onChange={(e) => setWaktuBencana(e.target.value)}
                    name="waktuKejadian"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col mt-2">
                  <label className="font-semibold text-md text-black">
                    Deskripsi Bencana
                  </label>
                  <textarea
                    className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                    type="text"
                    name="deskripsi"
                    onChange={(e) => setDeskripsiBencana(e.target.value)}
                    placeholder="ex: bencana xxxxxx"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <label className="font-semibold text-md text-black">
                  Lokasi Kejadian
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                  type="text"
                  name="lokasi"
                  onChange={(e) => setLokasiKejadian(e.target.value)}
                  placeholder="ex: dusun xxxxx"
                />
              </div>
              <div className="grid grid-cols-2 gap-x-3">
                <div className="flex flex-col mt-2">
                  <label className="font-semibold text-md text-black">
                    Kecamatan
                  </label>
                  <select
                    className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                    onChange={(e) => setSelectedKec(e.target.value)}
                  >
                    <option value="">Pilih......</option>
                    {dataKecamatan.map((kec) => (
                      <option value={kec.id}>{kec.nama}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mt-2">
                  <label className="font-semibold text-md text-black">
                    Desa
                  </label>
                  <select
                    className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                    onChange={(e) => setSelectedDesa(e.target.value)}
                  >
                    <option value="">Pilih......</option>
                    {dataDesa
                      ? dataDesa.map((desa) => (
                          <option value={desa.id}>{desa.nama}</option>
                        ))
                      : null}
                  </select>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <label className="font-semibold text-md text-black">
                  Jumlah Penduduk Terancam
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                  type="number"
                  onChange={(e) => setJumlahPenduduk(e.target.value)}
                  name="jumlahPendudukTerancam"
                  placeholder="ex: 1445 korban"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={(e) => addPelaporan()}
            className="bg-secondary-default w-full mx-8 md:mx-14 lg:mx-32 xl:mx-32 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
          >
            Lanjut Kuisioner Berikutnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default PelaporanBencana;

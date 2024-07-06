import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../../../../public/bg-2.jpg";
import Router from "next/router";
import nookies from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
    props: { role: cookies.role, desaId: cookies.desa_id || null },
  };
}

const UpayaPenanggulangan = (role) => {
  const cookies = nookies.get();
  const [upayaPenanggulangan, setUpayaPenanggulangan] = useState("");
  const [pelayananKesehatan, setPelayananKesehatan] = useState("");
  const [pelayananKesehatanReproduksi, setPelayananKesehatanReproduksi] =
    useState("");
  const [pengendalianPenyakit, setPengendalianPenyakit] = useState("");
  const [DVI, setDVI] = useState("");
  const [pelayananGizi, setPelayananGizi] = useState("");
  const [logisticKesehatan, setLogisticKesehatan] = useState("");
  const [pelayananJiwa, setPelayananJiwa] = useState("");

  const [HambatanPelayananKesehatan, setHambatanPelayananKesehatan] =
    useState("");
  const [bantuanYangDiperlukanSegera, setBantuanYangDiperlukanSegera] =
    useState([]);
  const [rencanaTindakLanjut, setRencanaTindakLanjut] = useState("");
  const [statusDesa, setStatusDesa] = useState("");
  const [bayi, setBayi] = useState("");
  const [bumil, setBumil] = useState("");
  const [balita, setBalita] = useState("");
  const [cacat, setCacat] = useState("");
  const [buteki, setButeki] = useState("");
  const [lansia, setLansia] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const addUpayaPenanggulangan = async () => {
    const res = await axios.post("/api/pelaporanAwal/upaya", {
      upayaPenanggulangan,
      pelayananKesehatan,
      pelayananKesehatanReproduksi,
      pengendalianPenyakit,
      DVI,
      pelayananGizi,
      logisticKesehatan,
      pelayananJiwa,
      HambatanPelayananKesehatan,
      bantuanYangDiperlukanSegera,
      rencanaTindakLanjut,
      statusDesa,
      pelaporan_id: id,
      bayi,
      bumil,
      balita,
      cacat,
      buteki,
      lansia,
    });
    console.log(res.data);
    if (res.data.status === "success") {
      toast(`✅ ${res.data.message}`, {
        position: "top-right",
        autoClose: 1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 1,
        theme: "light",
      });
      {
        role == "relawan"
          ? router.push(
              `/dashboard/user/pelaporanBencana/jumlahKorban/fasilitas/upayaPenanggulangan/detailPelaporanBencana?id=${id}`
            )
          : router.push(
              `/dashboard/user/pelaporanBencana/jumlahKorban/fasilitas/upayaPenanggulangan/detailPelaporanBencana?id=${id}&desa_id=${encodeURIComponent(
                cookies.desa_id
              )}`
            );
      }
    } else {
      toast(`❌ ${res.data.message}`, {
        position: "top-right",
        autoClose: 0.1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 1,
        theme: "light",
      });
    }
  };

  return (
    <section className="container-fluid w-full h-full relative">
      <ToastContainer />
      <div className="absolute -z-10 inset-0">
        <Image src={bgDashboard} alt="background-image" className="h-full" />
      </div>
      <div className="flex flex-col justify-center pb-10">
        <h1 className="text-black text-3xl font-bold text-center my-8">
          Kuisioner Pelaporan Kejadian Awal Bencana
        </h1>
        <div className="bg-white p-8 h-auto w-auto border rounded-2xl shadow-lg mx-8 md:mx-14 lg:mx-32 xl:mx-32 mt-3">
          <h1 className="text-black text-2xl font-bold">Isi Kuisioner :</h1>
          {/* Upaya Penanggulangan */}
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-md text-black">
              Upaya Penanggulangan yang Telah Dilakukan
            </label>
            <input
              className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
              type="text"
              name=""
              onChange={(e) => setUpayaPenanggulangan(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-3">
            {/* Upaya */}
            <div className="grid-one">
              {/* A */}
              <div className="mt-3">
                <h1 className="text-black font-semibold">
                  a. Upaya sub klaster pelayanan kesehatan :
                </h1>
                <textarea
                  className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                  type="text"
                  onChange={(e) => setPelayananKesehatan(e.target.value)}
                />
              </div>
              {/* B */}
              <div className="mt-3">
                <h1 className="text-black font-semibold">
                  b. Upaya sub klaster pengendalian penyakit, penyehatan
                  lingkungan dan air bersih :
                </h1>
                <textarea
                  className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                  type="text"
                  onChange={(e) => setPengendalianPenyakit(e.target.value)}
                />
              </div>
              {/* C */}
              <div className="mt-3">
                <h1 className="text-black font-semibold">
                  c. Upaya sub klaster pelayanan gizi :
                </h1>
                <textarea
                  className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                  type="text"
                  onChange={(e) => setPelayananGizi(e.target.value)}
                />
              </div>
              {/* D */}
              <div className="mt-3">
                <h1 className="text-black font-semibold">
                  d. Upaya sub klaster pelayanan jiwa :
                </h1>
                <textarea
                  className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                  type="text"
                  onChange={(e) => setPelayananJiwa(e.target.value)}
                />
              </div>
            </div>
            <div className="grid-two">
              {/* E */}
              <div className="mt-3">
                <h1 className="text-black font-semibold">
                  e. Upaya sub klaster pelayanan kesehatan reproduksi :
                </h1>
                <textarea
                  className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                  type="text"
                  name=""
                  onChange={(e) =>
                    setPelayananKesehatanReproduksi(e.target.value)
                  }
                />
              </div>
              {/* F */}
              <div className="mt-3">
                <h1 className="text-black font-semibold">
                  f. Upaya sub klaster Disaster Victim Identification (DVI):
                </h1>
                <textarea
                  className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                  type="text"
                  name=""
                  onChange={(e) => setDVI(e.target.value)}
                />
              </div>
              {/* G */}
              <div className="mt-3">
                <h1 className="text-black font-semibold">
                  g. Upaya tim logistic kesehatan :
                </h1>
                <textarea
                  className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                  type="text"
                  name=""
                  onChange={(e) => setLogisticKesehatan(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Hambatan */}
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-md text-black">
              Hambatan Pelayanan Kesehatan
            </label>
            <input
              className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
              type="text"
              name=""
              onChange={(e) => setHambatanPelayananKesehatan(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-3">
            <div className="flex items-center gap-x-2 mt-2">
              <input type="radio" id="" value="ada" name="" />
              <label className="text-black font-semibold text-[16px]">
                Ada
              </label>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <input type="radio" id="" value="tidak" name="" />
              <label className="text-black font-semibold text-[16px]">
                Tidak, Apa hambatannya :
              </label>
            </div>
            <div className="mt-3">
              <label className="font-semibold text-md text-black">
                Bantuan yang diperlukan segera
              </label>
              <input
                className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                type="text"
                onChange={(e) => setBantuanYangDiperlukanSegera(e.target.value)}
              />
            </div>
            {/* Kelompok Rentan */}
            <div className="mt-3">
              <h1 className="text-md text-black font-semibold">
                a. Untuk kelompok rentan :
              </h1>
              <div className="ml-5">
                <div className="grid grid-cols-2 gap-x-8">
                  <div>
                    {/* Bayi */}
                    <div className="mt-3 flex flex-col">
                      <label className="text-black font-semibold text-[16px]">
                        Bayi
                      </label>
                      <input
                        type="number"
                        className="bg-input-default border-primary-default rounded"
                        id=""
                        onChange={(e) => setBayi(e.target.value)}
                      />
                    </div>
                    {/* Balita */}
                    <div className="mt-3 flex flex-col">
                      <label className="text-black font-semibold text-[16px]">
                        Balita
                      </label>
                      <input
                        type="number"
                        className="bg-input-default border-primary-default rounded"
                        id=""
                        onChange={(e) => setBalita(e.target.value)}
                      />
                    </div>
                    {/* Buteki */}
                    <div className="mt-3 flex flex-col">
                      <label className="text-black font-semibold text-[16px]">
                        Buteki
                      </label>
                      <input
                        type="number"
                        className="bg-input-default border-primary-default rounded"
                        id=""
                        onChange={(e) => setButeki(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    {/* Bumil */}
                    <div className="mt-3 flex flex-col">
                      <label className="text-black font-semibold text-[16px]">
                        Bumil
                      </label>
                      <input
                        type="number"
                        className="bg-input-default border-primary-default rounded"
                        id=""
                        onChange={(e) => setBumil(e.target.value)}
                      />
                    </div>
                    {/* Cacat */}
                    <div className="mt-3 flex flex-col">
                      <label className="text-black font-semibold text-[16px]">
                        Cacat/sakit fisik
                      </label>
                      <input
                        type="number"
                        className="bg-input-default border-primary-default rounded"
                        id=""
                        onChange={(e) => setCacat(e.target.value)}
                      />
                    </div>
                    {/* Lansia */}
                    <div className="mt-3 flex flex-col">
                      <label className="text-black font-semibold text-[16px]">
                        Lansia
                      </label>
                      <input
                        type="number"
                        className="bg-input-default border-primary-default rounded"
                        id=""
                        onChange={(e) => setLansia(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Rencana Tindak Lanjut */}
          <div className="flex flex-col mt-3 gap-x-3">
            <label className="font-semibold text-md text-black">
              Rencana Tindak Lanjut :
            </label>
            <input
              className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
              type="text"
              name=""
              onChange={(e) => setRencanaTindakLanjut(e.target.value)}
            />
          </div>
          {/* Status Desa */}
          <div className="flex flex-col mt-3 gap-x-3">
            <label className="font-semibold text-md text-black">
              Status Desa
            </label>
            <select
              className="w-full border rounded p-2 mt-1 text-black bg-input-default border-primary-default"
              onChange={(e) => setStatusDesa(e.target.value)}
            >
              <option value="Pilih jenis perawatan">Pilih status desa</option>
              <option value="Aman">Aman</option>
              <option value="Tidak aman">Tidak Aman</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <button
            type=""
            className="bg-secondary-default w-full mx-8 md:mx-14 lg:mx-32 xl:mx-32 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
          >
            Kembali
          </button>
          <button
            type=""
            onClick={(e) => addUpayaPenanggulangan()}
            className="bg-secondary-default w-full mx-8 md:mx-14 lg:mx-32 xl:mx-32 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
          >
            Kirim
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpayaPenanggulangan;

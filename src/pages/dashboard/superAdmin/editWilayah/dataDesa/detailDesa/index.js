import Link from "next/link";
import Image from "next/image";
// import bgDasboard from "../../../../../../public/bg-2.jpg";
import nookies from "nookies";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

//checkUser
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role === "desa" || cookies.role === "relawan") {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  return {
    props: {},
  };
}

const DetailDesa = () => {
  const router = useRouter();
  const { id } = router.query;
  const backTo = () => {
    Router.back();
  };

  //setter get data input
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [luas, setLuas] = useState(0);
  const [letak_dan_batas, setLetak] = useState("");
  const [banyak_dusun, setDusun] = useState(0);
  const [jumlah_penduduk, setPenduduk] = useState(0);
  const [akses_komunikasi, setAksesKomunikasi] = useState("");
  const [akses_transportasi, setAksesTransportasi] = useState("");
  const [nama_responden, setResponded] = useState("");
  const [nip_responden, setNip] = useState("");
  const [jabatan_responden, setJabatan] = useState("");
  const [nomor_hp_responden, setNomor] = useState("");

  // Fetching data desa
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await axios.get(`/api/desa/id?id=${id}`);
        const data = response.data;

        setNama(data.nama);
        setAlamat(data.alamat);
        setTelepon(data.telepon);
        setWebsite(data.website);
        setEmail(data.email);
        setLuas(data.luas);
        setLetak(data.letak_dan_batas);
        setDusun(data.banyak_dusun);
        setPenduduk(data.jumlah_penduduk);
        setAksesKomunikasi(data.akses_komunikasi);
        setAksesTransportasi(data.akses_transportasi);
        setResponded(data.nama_responden);
        setNip(data.nip_responden);
        setJabatan(data.jabatan_responden);
        setNomor(data.nomor_hp_responden);
      };
      fetchData();
    }
  }, [id]);

  async function updateDesa() {
    const send = await axios.put("/api/desa", {
      nama,
      alamat,
      telepon,
      website,
      email,
      luas,
      letak_dan_batas,
      banyak_dusun,
      jumlah_penduduk,
      akses_komunikasi,
      akses_transportasi,
      nama_responden,
      nip_responden,
      jabatan_responden,
      nomor_hp_responden,
      id: id,
    });
    if (send.data.status === "success") {
      toast(`✅ ${send.data.message}`, {
        position: "top-right",
        autoClose: 1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 1,
        theme: "light",
      });
      Router.back();
    } else {
      toast(`❌ ${send.data.message}`, {
        position: "top-right",
        autoClose: 0.1,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 1,
        theme: "light",
      });
    }
  }

  return (
    <section className="container-fluid h-screen">
      <ToastContainer />
      <div className="flex flex-col justify-center pb-10">
        <div className="flex justify-between mx-8 md:mx-14 lg:mx-32 xl:mx-32 mt-10">
          <h1 className="text-black text-xl font-bold">Data Wilayah Desa</h1>
          <div>
            <button
              type="button"
              onClick={backTo}
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md flex justify-center items-center"
            >
              Kembali
            </button>
          </div>
        </div>
        <div className="bg-white p-6 h-auto w-auto border shadow-lg mx-8 md:mx-14 lg:mx-32 xl:mx-32 mt-3">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="input-dataumum mx-3">
                <h1 className="text-black font-bold text-xl">Data Umum</h1>
                <div className="mt-5">
                  <div className="flex flex-col">
                    <label className="font-semibold text-md text-black">
                      Nama Desa
                    </label>
                    <input
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: Sukoharjo"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Alamat Kantor Desa
                    </label>
                    <input
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      disabled
                      placeholder="ex: jl. paguyuban xxxxxx"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Telepon
                    </label>
                    <input
                      value={telepon}
                      onChange={(e) => setTelepon(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      disabled
                      placeholder="ex: +628xxxxx"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Website
                    </label>
                    <input
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      disabled
                      placeholder="ex: sukoharjo.net"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="email"
                      disabled
                      placeholder="ex: sukoharjo@xxxx"
                    />
                  </div>
                </div>
              </div>
              <div className="input-karateristik mx-3 mt-5 md:mt-0">
                <h1 className="text-black font-bold text-xl">
                  Karateristik Wilayah
                </h1>
                <div className="mt-5">
                  <div className="flex flex-col">
                    <label className="font-semibold text-md text-black">
                      Luas Wilayah
                    </label>
                    <input
                      value={luas}
                      onChange={(e) => setLuas(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      disabled
                      placeholder="ex: 36,35"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Letak dan Batas Wilayah
                    </label>
                    <input
                      value={letak_dan_batas}
                      onChange={(e) => setLetak(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      disabled
                      placeholder="ex: letak Sukoharjo, batas wilayah Maguwoharjo"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Dusun dalam Wilayahnya
                    </label>
                    <input
                      value={banyak_dusun}
                      onChange={(e) => setDusun(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      disabled
                      placeholder="ex: 14"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Jumlah Penduduk
                    </label>
                    <input
                      value={jumlah_penduduk}
                      onChange={(e) => setPenduduk(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      disabled
                      placeholder="ex: 4509"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Akses Komunikasi
                    </label>
                    <input
                      value={akses_komunikasi}
                      onChange={(e) => setAksesKomunikasi(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      disabled
                      placeholder="ex: jaringan telpon dan wifi"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Akses Transportasi
                    </label>
                    <input
                      value={akses_transportasi}
                      onChange={(e) => setAksesTransportasi(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      disabled
                      placeholder="ex: taxi"
                    />
                  </div>
                </div>
              </div>
              <div className="input-responden mt-5 mx-3">
                <h1 className="text-black font-bold text-xl">Responden</h1>
                <div className="mt-5">
                  <div className="flex flex-col">
                    <label className="font-semibold text-md text-black">
                      Nama
                    </label>
                    <input
                      value={nama_responden}
                      onChange={(e) => setResponded(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      disabled
                      placeholder="ex: fulan"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      NIP
                    </label>
                    <input
                      value={nip_responden}
                      onChange={(e) => setNip(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      disabled
                      placeholder="ex: 199xxxxxxx"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Jabatan
                    </label>
                    <input
                      value={jabatan_responden}
                      onChange={(e) => setJabatan(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      disabled
                      placeholder="ex: kepala desa"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Nomor HP
                    </label>
                    <input
                      value={nomor_hp_responden}
                      onChange={(e) => setNomor(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      disabled
                      placeholder="ex: +628xxxxx"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="flex justify-center mt-5">
          <button
            onClick={() => updateDesa()}
            type=""
            className="bg-secondary-default w-full mx-8 md:mx-14 lg:mx-32 xl:mx-32 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
          >
            Simpan Data
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default DetailDesa;

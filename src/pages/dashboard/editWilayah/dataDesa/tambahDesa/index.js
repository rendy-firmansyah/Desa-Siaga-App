import Link from "next/link";
import Image from "next/image";
import bgDasboard from "../../../../../../public/bg-2.jpg";
import nookies from "nookies";
import Router from "next/router";
import { useState } from "react";
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
  } else if (cookies.role === "super admin") {
    return {
      redirect: {
        destination: "/admin",
      },
    };
  }

  return {
    props: {},
  };
}

const AddDesa = () => {
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

  async function AddDesa() {
    const send = await axios.post("/api/desa", {
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
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
              <h1 className="ml-2">Kembali</h1>
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
                      onChange={(e) => setNama(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: Sukoharjo"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Alamat Kantor Desa
                    </label>
                    <input
                      onChange={(e) => setAlamat(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: jl. paguyuban xxxxxx"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Telepon
                    </label>
                    <input
                      onChange={(e) => setTelepon(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      placeholder="ex: +628xxxxx"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Website
                    </label>
                    <input
                      onChange={(e) => setWebsite(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: sukoharjo.net"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="email"
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
                      onChange={(e) => setLuas(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      placeholder="ex: 36,35"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Letak dan Batas Wilayah
                    </label>
                    <input
                      onChange={(e) => setLetak(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: letak Sukoharjo, batas wilayah Maguwoharjo"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Dusun dalam Wilayahnya
                    </label>
                    <input
                      onChange={(e) => setDusun(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      placeholder="ex: 14"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Jumlah Penduduk
                    </label>
                    <input
                      onChange={(e) => setPenduduk(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      placeholder="ex: 4509"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Akses Komunikasi
                    </label>
                    <input
                      onChange={(e) => setAksesKomunikasi(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: jaringan telpon dan wifi"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Akses Transportasi
                    </label>
                    <input
                      onChange={(e) => setAksesTransportasi(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: mobil dan sepeda motor"
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
                      onChange={(e) => setResponded(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: fulan"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      NIP
                    </label>
                    <input
                      onChange={(e) => setNip(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: 199xxxxxxx"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Jabatan
                    </label>
                    <input
                      onChange={(e) => setJabatan(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="ex: kepala desa"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="font-semibold text-md text-black">
                      Nomor HP
                    </label>
                    <input
                      onChange={(e) => setNomor(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="number"
                      placeholder="ex: +628xxxxx"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={() => AddDesa()}
            type=""
            className="bg-secondary-default w-full mx-8 md:mx-14 lg:mx-32 xl:mx-32 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
          >
            Simpan Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddDesa;

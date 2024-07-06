import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../../../public/bg-2.jpg";
// import Router from "next/router";
import nookies from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { cookies } from "next/headers";

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

const Fasilitas = (role, desaId) => {
  const cookies = nookies.get();
  const [mudahDiakses, setMudahDiakses] = useState("");
  const [sukar, setSukar] = useState("");
  const [Narahubung, setNarahubung] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jalurKomuikasi, setJalurKomuikasi] = useState("");
  const [keadaanListrik, setKeadaanListrik] = useState("");
  const [bangunanSekolah, setBangunanSekolah] = useState("");
  const [bangunanBalai, setBangunanBalai] = useState("");
  const [sumberAir, setSumberAir] = useState("");
  const [fasilitasUmum, setFasilitasUmum] = useState("");
  const [bangunanPustu, setBangunanPustu] = useState("");
  const [fasilitasIbadah, setFasilitasIbadah] = useState("");
  const [totalData, setTotalData] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/pelaporanAwal/korbanmeninggal?id=${id}`
        );
        const data = res.data; // Data yang diterima dari API
        const total = data.length; // Menghitung panjang array data
        setTotalData(total);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const addFasilitas = async () => {
    const res = await axios.post("/api/pelaporanAwal/aksesDanKeadaan", {
      mudahDiakses,
      sukar,
      Narahubung,
      alamat,
      jalurKomuikasi,
      keadaanListrik,
      bangunanSekolah,
      bangunanBalai,
      sumberAir,
      fasilitasUmum,
      bangunanPustu,
      fasilitasIbadah,
      pelaporan_id: id,
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
        role.role === "relawan"
          ? router.push(
              `/dashboard/user/pelaporanBencana/jumlahKorban/fasilitas/upayaPenanggulangan?id=${id}`
            )
          : router.push(
              `/dashboard/user/pelaporanBencana/jumlahKorban/fasilitas/upayaPenanggulangan?id=${id}&desa_id=${encodeURIComponent(
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
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-md text-black">
              Jumlah Korban Meninggal
            </label>
            <input
              className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
              type="number"
              disabled
              value={totalData}
            />
          </div>
          <form>
            <div className="mt-3">
              <h1 className="text-black text-md font-semibold">
                a. Akses ke lokasi kejadian bencana/krisis Kesehatan :{" "}
              </h1>
              {/* A1 */}
              <div className=" ml-5">
                <div className="flex items-center gap-x-3">
                  <h1 className="text-black font-semibold">
                    1. Mudah dijangkau menggunakan
                  </h1>
                  <input
                    className="w-72 h-8 border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                    type="text"
                    name=""
                    onChange={(e) => setMudahDiakses(e.target.value)}
                  />
                </div>
              </div>
              {/* A2 */}
              <div className=" ml-5">
                <div className="flex items-center gap-x-3">
                  <h1 className="text-black font-semibold">2. Sukar, karena</h1>
                  <input
                    className="w-72 h-8 border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                    type="text"
                    name=""
                    onChange={(e) => setSukar(e.target.value)}
                  />
                </div>
              </div>
              {/* A3 */}
              <div className=" ml-5">
                <div className="flex items-center gap-x-3">
                  <h1 className="text-black font-semibold">
                    3. Narahubung/relawan yang bisa dihubungi
                  </h1>
                  <input
                    className="w-72 h-8 border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                    type="text"
                    name=""
                    onChange={(e) => setNarahubung(e.target.value)}
                  />
                </div>
              </div>
              {/* A4 */}
              <div className=" ml-5">
                <div className="flex items-center gap-x-3">
                  <h1 className="text-black font-semibold">
                    4. Alamat url google maps
                  </h1>
                  <input
                    className="w-72 h-8 border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                    type="text"
                    name=""
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* B */}
            <div className="mt-3 flex items-center gap-3">
              <h1 className="text-black text-md font-semibold">
                b. Jalur komunikasi yang masih bisa digunakan :
              </h1>
              <input
                className="w-72 h-8 border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
                type="text"
                name=""
                onChange={(e) => setJalurKomuikasi(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="grid-one">
                {/* C */}
                <div className="mt-3">
                  <h1 className="text-black text-md font-semibold">
                    c. Keadaan jaringan Listrik:
                  </h1>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="baik"
                      name="jaringan_listrik"
                      onChange={(e) => setKeadaanListrik(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Baik
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="terputus"
                      name="jaringan_listrik"
                      onChange={(e) => setKeadaanListrik(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Terputus
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="belum_ada"
                      name="jaringan_listrik"
                      onChange={(e) => setKeadaanListrik(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Belum tersedia/belum ada
                    </label>
                  </div>
                </div>
                {/* D */}
                <div className="mt-3">
                  <h1 className="text-black text-md font-semibold">
                    d. sumber air bersih yang digunakan:
                  </h1>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="tercemar"
                      name="sumber_air_bersih"
                      onChange={(e) => setSumberAir(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tercemar
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="tidak_tercemar"
                      name="sumber_air_bersih"
                      onChange={(e) => setSumberAir(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Tercemar
                    </label>
                  </div>
                </div>
                {/* E */}
                <div className="mt-3">
                  <h1 className="text-black text-md font-semibold">
                    e. Fasilitas umum MCK :
                  </h1>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="rusak"
                      name="fasilitas_mck"
                      onChange={(e) => setFasilitasUmum(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Rusak
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="tidak_rusak"
                      name="fasilitas_mck"
                      onChange={(e) => setFasilitasUmum(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Rusak
                    </label>
                  </div>
                </div>
                {/* F */}
                <div className="mt-3">
                  <h1 className="text-black text-md font-semibold">
                    f. Fasilitas ibadah (masjid/mushollah) :
                  </h1>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="rusak"
                      name="fasilitas_ibadah"
                      onChange={(e) => setFasilitasIbadah(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Rusak
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="tidak_rusak"
                      name="fasilitas_ibadah"
                      onChange={(e) => setFasilitasIbadah(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Rusak
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid-two">
                {/* G */}
                <div className="mt-3">
                  <h1 className="text-black text-md font-semibold">
                    g. Bangunan sekolah :
                  </h1>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="rusak"
                      name="bangunan_sekolah"
                      onChange={(e) => setBangunanSekolah(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Rusak
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="tidak_rusak"
                      name="bangunan_sekolah"
                      onChange={(e) => setBangunanSekolah(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Rusak
                    </label>
                  </div>
                </div>
                {/* H */}
                <div className="mt-3">
                  <h1 className="text-black text-md font-semibold">
                    h. Bangunan balai desa :
                  </h1>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="rusak"
                      name="balai_desa"
                      onChange={(e) => setBangunanBalai(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Rusak
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="tidak_rusak"
                      name="balai_desa"
                      onChange={(e) => setBangunanBalai(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Rusak
                    </label>
                  </div>
                </div>
                {/* I */}
                <div className="mt-3">
                  <h1 className="text-black text-md font-semibold">
                    i. Bangunan pustu :
                  </h1>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="rusak"
                      name="pustu"
                      onChange={(e) => setBangunanPustu(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Rusak
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <input
                      type="radio"
                      id=""
                      value="tidak_rusak"
                      name="pustu"
                      onChange={(e) => setBangunanPustu(e.target.value)}
                    />
                    <label className="text-black font-semibold text-[16px]">
                      Tidak Rusak
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={(e) => addFasilitas()}
            type=""
            className="bg-secondary-default w-full mx-8 md:mx-14 lg:mx-32 xl:mx-32 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
          >
            Lanjut Kuisioner Berikutnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;

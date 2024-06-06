import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../public/bg-2.jpg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import nookies from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import DataTable from "datatables.net-dt";

import AddMeninggal from "./addMeninggal";
import AddHilang from "./addHilang";
import AddLuka from "./addLuka";
import AddPengungsi from "./addPengungsi";

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
        destination: "/admin",
      },
    };
  }

  return {
    props: {},
  };
}

const JumlahKorban = () => {
  const [dataMeninggal, setDataMeninggal] = useState([]);
  const [dataMenghilang, setDataMenghilang] = useState([]);
  const [dataKorbanLuka, setDataKorbanLuka] = useState([]);
  const [dataPengungsi, setDataPengungsi] = useState([]);

  // Modal Start
  const [showModalKorbanMeninggal, setShowModalKorbanMeninggal] = useState(false);
  const [showModalKorbanHilang, setShowModalKorbanHilang] = useState(false);
  const [showModalKorbanLuka, setShowModalKorbanLuka] = useState(false);
  const [showModalJumlahPengungsi, setShowModalJumlahPengungsi] = useState(false);

  const showVisibleKorbanMeninggal = () => {
    setShowModalKorbanMeninggal(true);
  };
  const showVisibleKorbanHilang = () => {
    setShowModalKorbanHilang(true);
  };
  const showVisibleKorbanLuka = () => {
    setShowModalKorbanLuka(true);
  };
  const showVisibleJumlahPengungsi = () => {
    setShowModalJumlahPengungsi(true);
  };

  const handleCloseModal = () => {
    setShowModalKorbanMeninggal(false);
    setShowModalKorbanHilang(false);
    setShowModalKorbanLuka(false);
    setShowModalJumlahPengungsi(false)
  };

  // Modal End

  
  const router = useRouter();
  const { id } = router.query;
  const nextPage = () => {
    router.push(`/dashboard/pelaporanBencana/jumlahKorban/fasilitas?id=${id}`);
  };

  const getDataMeninggal = async () => {
    const response = await axios.get(`/api/pelaporanAwal/korbanmeninggal?id=${id}`);
    setDataMeninggal(response.data);
  };
  useEffect(() => {
    getDataMeninggal();
  }, []);

  const getDataMenghilang = async () => {
    const response = await axios.get(`/api/pelaporanAwal/korbanHilang?id=${id}`);
    setDataMenghilang(response.data);
  };
  useEffect(() => {
    getDataMenghilang();
  }, []);

  const getDataLuka = async () => {
    const response = await axios.get(`/api/pelaporanAwal/korbanLuka?id=${id}`);
    setDataKorbanLuka(response.data);
  };
  useEffect(() => {
    getDataLuka();
  }, []);

  const getDataPengungsi = async () => {
    const response = await axios.get(`/api/pelaporanAwal/korbanPengungsi?id=${id}`);
    setDataPengungsi(response.data);
  };
  useEffect(() => {
    getDataPengungsi();
  }, []);

  return (
    <section className="container-fluid w-full h-full relative">
      <ToastContainer/>
      <div className="absolute -z-10 inset-0">
        <Image src={bgDashboard} alt="background-image" className="h-full" />
      </div>
      <div className="flex flex-col justify-center pb-10">
        <h1 className="text-black text-3xl font-bold text-center my-8">
          Kuisioner Pelaporan Kejadian Awal Bencana
        </h1>
        <div className="bg-white p-8 h-auto w-auto border rounded-2xl shadow-lg mx-8 md:mx-14 lg:mx-32 xl:mx-32 mt-3">
          <h1 className="text-black text-2xl font-bold">Isi Kuisioner :</h1>
          <div className="mt-3">
            {/* Modal Start */}
            <AddMeninggal
              isShow={showModalKorbanMeninggal}
              onClose={handleCloseModal}
              onSuccess={() => getDataMeninggal()}
            />
            {/* Modal End */}
            <div className="flex flex-col">
              <label className="font-semibold text-md text-black">
                Jumlah Korban Meninggal
              </label>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-3 items-center justify-center">
                <input
                  className="w-full border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                  type="number"
                  disabled
                />
                <button
                  onClick={showVisibleKorbanMeninggal}
                  type="button"
                  className="bg-secondary-default mt-3 md:mt-0 lg:mt-0 xl:mt-0 w-full md:w-auto lg:w-auto xl:w-auto px-8 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                >
                  Tambah
                </button>
              </div>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="table1 min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
                <thead className="">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Kelamin
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usia
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alamat Korban
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tempat Meninggal
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Penyebab Kematian
                    </th>
                  </tr>
                </thead>

                {dataMeninggal.map((items) => (
                  <tbody key={items.id} className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.nama}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.jenisKelamin}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.usia}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.alamat}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.tempatMeninggal}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.penyebab}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div className="mt-3">
            {/* Modal Start */}
            <AddHilang
              isShow={showModalKorbanHilang}
              onClose={handleCloseModal}
              onSuccess={() => getDataMenghilang()}
            />
            {/* Modal End */}
            <div className="flex flex-col">
              <label className="font-semibold text-md text-black">
                Jumlah Korban Hilang
              </label>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-3 items-center justify-center">
                <input
                  className="w-full border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                  type="number"
                  disabled
                />
                <button
                  onClick={showVisibleKorbanHilang}
                  type="button"
                  className="bg-secondary-default mt-3 md:mt-0 lg:mt-0 xl:mt-0 w-full md:w-auto lg:w-auto xl:w-auto px-8 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                >
                  Tambah
                </button>
              </div>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
                <thead className="">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Kelamin
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usia
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alamat Korban
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lokasi Hilang
                    </th>
                  </tr>
                </thead>
                {dataMenghilang.map((items) => (
                  <tbody key={items.id} className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.nama}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.jenisKelamin}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.usia}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.alamat}
                      </td>
                      <td className="text-black px-6 py-4 whitespace-nowrap">
                        {items.lokasiHilang}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div className="mt-3">
            <AddLuka isShow={showModalKorbanLuka} onClose={handleCloseModal} onSuccess={() => getDataLuka()} />
            <div className="flex flex-col">
              <label className="font-semibold text-md text-black">
                Jumlah Korban Luka Berat/Rawat Inap, Luka Ringan/Rawat Jalan
              </label>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-3 items-center justify-center">
                <input
                  className="w-full border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                  type="number"
                  disabled
                />
                <button
                  onClick={showVisibleKorbanLuka}
                  type="button"
                  className="bg-secondary-default mt-3 md:mt-0 lg:mt-0 xl:mt-0 w-full md:w-auto lg:w-auto xl:w-auto px-8 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                >
                  Tambah
                </button>
              </div>
            </div>
            <h1 className="text-black font-bold text-xl my-4">
              Korban Rawat Inap :
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
                <thead className="">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama FASKES dan Lokasinya
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Kelamin (L)
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Kelamin (P)
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                {dataKorbanLuka
                  .filter((items) => items.jenisRawat === "Rawat Inap")
                  .map((items) => (
                    <tbody key={items.id} className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="text-black px-6 py-4 whitespace-nowrap">
                          {items.namaFaskes}
                        </td>
                        <td className="text-black px-6 py-4 whitespace-nowrap">
                          {items.lakiLaki}
                        </td>
                        <td className="text-black px-6 py-4 whitespace-nowrap">
                          {items.wanita}
                        </td>
                        <td className="text-black px-6 py-4 whitespace-nowrap">
                          {items.jumlah}
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
            <h1 className="text-black font-bold text-xl my-4">
              Korban Rawat Jalan :
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
                <thead className="">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama FASKES dan Lokasinya
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Kelamin (L)
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Kelamin (P)
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                {dataKorbanLuka
                  .filter((items) => items.jenisRawat === "Rawat Jalan")
                  .map((items) => (
                    <tbody key={items.id} className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="text-black px-6 py-4 whitespace-nowrap">
                          {items.namaFaskes}
                        </td>
                        <td className="text-black px-6 py-4 whitespace-nowrap">
                          {items.lakiLaki}
                        </td>
                        <td className="text-black px-6 py-4 whitespace-nowrap">
                          {items.wanita}
                        </td>
                        <td className="text-black px-6 py-4 whitespace-nowrap">
                          {items.jumlah}
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
          <div className="mt-3">
            {/* Modal Start */}
            <AddPengungsi
              isShow={showModalJumlahPengungsi}
              onClose={handleCloseModal}
              onSuccess={() => getDataPengungsi()}
            />
            {/* Modal End */}
            <div className="flex flex-col">
              <label className="font-semibold text-md text-black">
                Jumlah Korban Pengungsi
              </label>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-3 items-center justify-center">
                <input
                  className="w-full border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                  type="number"
                  disabled
                />
                <button
                  type="button"
                  onClick={showVisibleJumlahPengungsi}
                  className="bg-secondary-default mt-3 md:mt-0 lg:mt-0 xl:mt-0 w-full md:w-auto lg:w-auto xl:w-auto px-8 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                >
                  Tambah
                </button>
              </div>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
                <thead className="overflow-x-auto">
                  <tr>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" rowSpan='2'>
                      Lokasi
                      <br />
                      Pengungsian
                    </th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan='2'>
                      Gangguan Jiwa
                      <br />
                      /Psikosial
                    </th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan='4'>
                      Jumlah Pengungsi
                    </th>
                  </tr>
                  <tr>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Anak</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Dewasa</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">L</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">P</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                  </tr>
                </thead>
                {dataPengungsi.map((items) => (
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="text-black text-center">{items.lokasi}</td>
                      <td className="text-black text-center">{items.gangguanAnak}</td>
                      <td className="text-black text-center">{items.gangguanDewasa}</td>
                      <td className="text-black text-center">{items.lakiLaki}</td>
                      <td className="text-black text-center">{items.perempuan}</td>
                      <td className="text-black text-center">{items.jumlah}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
                <thead className="overflow-x-auto">
                  <tr>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" rowSpan='3'>
                      LOKASI <br />
                      PENGUNGSIAN
                    </th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan='6'>
                      Jumlah Penduduk Rentan
                    </th>
                  </tr>
                  <tr>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" rowSpan='2'>Bayi</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" rowSpan='2'>Balita</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" rowSpan='2'>Bumil</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" rowSpan='2'>Buteki</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan='2'>Cacat</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" colSpan='2'>Lansia</th>
                  </tr>
                  <tr>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">L</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">P</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">L</th>
                    <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">P</th>
                  </tr>
                </thead>
                {dataPengungsi.map((items) => (
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="text-black text-center">{items.lokasi}</td>
                      <td className="text-black text-center">{items.bayi}</td>
                      <td className="text-black text-center">{items.balita}</td>
                      <td className="text-black text-center">{items.bumil}</td>
                      <td className="text-black text-center">{items.buteki}</td>
                      <td className="text-black text-center">{items.cacatLaki}</td>
                      <td className="text-black text-center">{items.cacatPerempuan}</td>
                      <td className="text-black text-center">{items.lansiaLaki}</td>
                      <td className="text-black text-center">{items.lansiaPerempuan}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={nextPage}
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

export default JumlahKorban;

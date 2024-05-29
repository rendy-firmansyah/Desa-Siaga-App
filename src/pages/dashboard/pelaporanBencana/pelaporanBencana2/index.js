import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../public/bg-2.jpg";
import Router from "next/router";
import { useState } from "react";
import nookies from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DataTable from 'datatables.net-dt';

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

const PelaporanBencana2 = () => {
  const [selectedKec, setSelectedKec] = useState("");
  const [selectedDesa, setSelectedDesa] = useState("");

  const handleKecSelect = (kec) => {
    setSelectedKec(kec);
  };
  const handleDesaSelect = (desa) => {
    setSelectedDesa(desa);
  };
  const nextPage = () => {
    Router.push("/dashboard/pelaporanBencana/pelaporanBencana2");
  };

  return (
    <section className="container-fluid w-full h-full relative">
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
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-3">
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
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-3">
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
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                  </tr>
                </tbody>
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
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                    <td class="text-black px-6 py-4 whitespace-nowrap">
                      testing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-3">
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
                  className="bg-secondary-default mt-3 md:mt-0 lg:mt-0 xl:mt-0 w-full md:w-auto lg:w-auto xl:w-auto px-8 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                >
                  Tambah
                </button>
              </div>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-auto divide-y divide-gray-200 border-2 shadow-lg shad">
                <thead className="overflow-x-auto">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kab/Kota
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kec,
                      <br />
                      Desa/Dusun
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lokasi
                      <br />
                      Pengungsian
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gangguan Jiwa/Psikosial
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <span className="px-2">Anak</span>
                        <span className="px-2">Dewasa</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jumlah Pengungsi
                      <div className="grid grid-cols-4 gap-2 mt-1">
                        <span>Laki-Laki</span>
                        <span>Perempuan</span>
                        <span>Jumlah</span>
                        <span>KK</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      Testing
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      Testing
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      Testing
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <span className="px-2">Testing</span>
                        <span className="px-2">Testing</span>
                      </div>
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      <div className="grid grid-cols-4 gap-2">
                        <span>Testing</span>
                        <span>Testing</span>
                        <span>Testing</span>
                        <span>Testing</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
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

export default PelaporanBencana2;

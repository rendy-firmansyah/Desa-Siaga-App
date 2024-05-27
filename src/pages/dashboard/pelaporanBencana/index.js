import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../public/bg-2.jpg";
import Router from "next/router";
import { useState } from "react";

const PelaporanBencana = () => {
  const [selectedKec, setSelectedKec] = useState("Pilih.......");
  const [selectedDesa, setSelectedDesa] = useState("Pilih.......");

  const handleKecSelect = (kec) => {
    setSelectedKec(kec);
  };
  const handleDesaSelect = (desa) => {
    setSelectedDesa(desa);
  };
  const handleBack = () => {
    Router.back();
  };
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
          <form>
            <div className="grid grid-cols-1 md:grid-cols-1 ">
              <div className="input-dataumum mx-3">
                <h1 className="text-black font-bold text-2xl">
                  Isi Kuisioner :
                </h1>
                <div className="grid grid-cols-2 gap-x-3">
                  <div className="flex flex-col">
                    <label className="font-semibold text-md text-black">
                      Jenis Bencana
                    </label>
                    <input
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
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
                      onChange={(e) => handleKecSelect(e.target.value)}
                    >
                      <option value="Pilih......">Pilih......</option>
                      <option value="Kecamatan 1">Kecamatan 1</option>
                      <option value="Kecamatan 2">Kecamatan 2</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="font-semibold text-md text-black">
                      Desa
                    </label>
                    <select
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      onChange={(e) => handleKecSelect(e.target.value)}
                    >
                      <option value="Pilih......">Pilih......</option>
                      <option value="Kecamatan 1">Kecamatan 1</option>
                      <option value="Kecamatan 2">Kecamatan 2</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col mt-2">
                  <label className="font-semibold text-md text-black">
                    Jumlah Penduduk Terancam
                  </label>
                  <input
                    className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                    type="text"
                    placeholder="ex: 1445 korban"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-5">
          <button
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

export default PelaporanBencana;

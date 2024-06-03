import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../../../public/bg-2.jpg";
import Router from "next/router";
import { useState } from "react";
import nookies from "nookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

const UpayaPenanggulangan = () => {
  const [Penanggulangan, setPenanggulangan] = useState("");
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [C, setC] = useState("");
  const [D, setD] = useState("");
  const [E, setE] = useState("");
  const [F, setF] = useState("");
  const [G, setG] = useState("");
  const [Hambatan, setHambatan] = useState("");
  const [KelompokRentan, setKelompokRentan] = useState([]);
  const [Rencana, setRencana] = useState("");
  const [StatusDesa, setStatusDesa] = useState("");

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
          {/* Upaya Penanggulangan */}
          <div className="flex flex-col mt-3">
            <label className="font-semibold text-md text-black">
              Upaya Penanggulangan yang Telah Dilakukan
            </label>
            <input
              className="w-full border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
              type="text"
              name=""
              onChange={(e) => setPenanggulangan(e.target.value)}
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
                  onChange={(e) => setA(e.target.value)}
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
                  onChange={(e) => setB(e.target.value)}
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
                  onChange={(e) => setC(e.target.value)}
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
                  onChange={(e) => setD(e.target.value)}
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
                  onChange={(e) => setE(e.target.value)}
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
                  onChange={(e) => setF(e.target.value)}
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
                  onChange={(e) => setG(e.target.value)}
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
              onChange={(e) => setHambatan(e.target.value)}
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
                type="number"
                disabled
              />
            </div>
            {/* Kelompok Rentan */}
            <div className="mt-3">
              <h1 className="text-md text-black font-semibold">
                a. Untuk kelompok rentan :
              </h1>
              <div className="ml-5">
                <div className="flex items-center gap-x-2 mt-3">
                  <input
                    type="checkbox"
                    className="bg-input-default border-primary-default w-5 h-5"
                    id=""
                    name="bayi"
                    value="bayi"
                    onChange={(e) => setKelompokRentan(e.target.value)}
                  />
                  <label className="text-black font-semibold text-[16px]">
                    Bayi
                  </label>
                </div>
                <div className="flex items-center gap-x-2 mt-3">
                  <input
                    type="checkbox"
                    className="bg-input-default border-primary-default w-5 h-5"
                    id=""
                    name="balita"
                    value="balita"
                    onChange={(e) => setKelompokRentan(e.target.value)}
                  />
                  <label className="text-black font-semibold text-[16px]">
                    Balita
                  </label>
                </div>
                <div className="flex items-center gap-x-2 mt-3">
                  <input
                    type="checkbox"
                    className="bg-input-default border-primary-default w-5 h-5"
                    id=""
                    name="buteki"
                    value="buteki"
                    onChange={(e) => setKelompokRentan(e.target.value)}
                  />
                  <label className="text-black font-semibold text-[16px]">
                    Buteki
                  </label>
                </div>
                <div className="flex items-center gap-x-2 mt-3">
                  <input
                    type="checkbox"
                    className="bg-input-default border-primary-default w-5 h-5"
                    id=""
                    name="bumil"
                    value="bumil"
                    onChange={(e) => setKelompokRentan(e.target.value)}
                  />
                  <label className="text-black font-semibold text-[16px]">
                    Bumil
                  </label>
                </div>
                <div className="flex items-center gap-x-2 mt-3">
                  <input
                    type="checkbox"
                    className="bg-input-default border-primary-default w-5 h-5"
                    id=""
                    name="cacat"
                    value="cacat"
                    onChange={(e) => setKelompokRentan(e.target.value)}
                  />
                  <label className="text-black font-semibold text-[16px]">
                    Cacat/sakit fisik
                  </label>
                </div>
                <div className="flex items-center gap-x-2 mt-3">
                  <input
                    type="checkbox"
                    className="bg-input-default border-primary-default w-5 h-5"
                    id=""
                    name="lansia"
                    value="lansia"
                    onChange={(e) => setKelompokRentan(e.target.value)}
                  />
                  <label className="text-black font-semibold text-[16px]">
                    Lansia
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Rencana Tindak Lanjut */}
          <div className="flex mt-3 items-center gap-x-3">
            <label className="font-semibold text-md text-black">
              Rencana Tindak Lanjut :
            </label>
            <input
              className="w-3/4 border rounded p-2 mt-3 text-black border-primary-default bg-input-default"
              type="number"
              name=""
              onChange={(e) => setRencana(e.target.value)}
            />
          </div>
          <div className="flex mt-3 items-center gap-x-3">
            <label className="font-semibold text-md text-black">
              Status Desa
            </label>
            <select
              className="w-3/4 border rounded p-2 mt-1 text-black bg-input-default border-primary-default"
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
            className="bg-secondary-default w-full mx-8 md:mx-14 lg:mx-32 xl:mx-32 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
          >
            Lanjut Kuisioner Berikutnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpayaPenanggulangan;

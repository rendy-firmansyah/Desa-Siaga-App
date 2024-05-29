import React from "react";
import { useRouter } from "next/router";
import Router from "next/router";

export const addBerita = () => {
  const backTo = () => {
    Router.back();}
  return (
    <section className="container-fluid h-screen">
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
            <div className="grid grid-cols-1">
              <div className="input-berita mx-3">
                <div className="mt-5">
                  <div className="flex flex-col">
                        <label className="font-semibold text-md text-black">
                          Input Gambar
                        </label>
                        <input
                          className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                          type="file"
                        />
                  </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-md text-black">
                      Judul Berita
                    </label>
                    <input
                      onChange={(e) => setLuas(e.target.value)}
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      type="text"
                      placeholder="Terjadi banjir bandang di jember"
                    />
                  </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="input-dataumum mx-3">
                <div className="mt-5">
                  <div className="flex flex-col">
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
                 
                </div>
              </div>
              <div className="input-karateristik mx-3 mt-5 md:mt-0">
                <div className="mt-5">
                  <div className="flex flex-col mt-2">
                    <label className="font-semibold text-md text-black">
                      Desa
                    </label>
                    <select
                      className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                      onChange={(e) => handleKecSelect(e.target.value)}
                    >
                      <option value="Pilih......">Pilih......</option>
                      <option value="Desa 1">Desa 1</option>
                      <option value="Desa 2">Desa 2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="input-berita mx-3">
                <div className="mt-5">
                  <div className="flex flex-col">
                        <label className="font-semibold text-md text-black ">
                          Deskripsi Berita
                        </label>
                        <textarea id="message" rows="4" className="border-primary-default bg-input-default block p-2.5 w-full text-sm text-gray-900" placeholder="banjir di jember disebabkan karena curah hujan tinggi yang tak kunjung berhenti, meskipun diri ini sudah tak bisa tuk memilikinya lagi"></textarea>
                  </div>
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
            Simpan Data
          </button>
        </div>
      </div>
    </section>
  )
}

export default addBerita
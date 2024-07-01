import { useState, useEffect } from "react";
import Router from "next/router";
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export const addBerita = () => {
  const backTo = () => {
    Router.back();}

    const router = useRouter();
    const [image, setImage] = useState("");
    const [judulBerita, setJudulBerita] = useState("");
    const [deskripsiBerita, setDeskripsiBerita] = useState("");
    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDesa, setSelectedDesa] = useState("");
    const { id } = router.query

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await axios.get(`/api/berita?id=${id}`);
        const data = response.data;

        setImage(data.gambar)
        setJudulBerita(data.judul);
        setDeskripsiBerita(data.deskripsi);
        setSelectedDesa(data.desa_id);
      };
      fetchData();
    }
  }, [id]);

  async function updateDesa() {
    const send = await axios.put("/api/desa", {
      nama,
      alamat,
      telepon,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('judul', judulBerita);
    formData.append('deskripsi', deskripsiBerita);
    formData.append(id, id);
    formData.append('gambar', image);

    try {
      const response = await axios.put(`/api/berita?id=${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      if (response.data.status === "success") {
        toast(`✅ ${response.data.message}`, {
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
        toast(`❌ ${response.data.message}`, {
          position: "top-right",
          autoClose: 0.1,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: 1,
          theme: "light",
        });
      }

      // Reset form fields
      setImage(null);
      setJudulBerita("");
      setSelectedKec("");
      setSelectedDesa("");
      setDeskripsiBerita("");
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };
    
  return (
    <section className="container-fluid h-screen">
      <ToastContainer/>
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

        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1">
          <div className="input-berita mx-3">
            <div className="mt-5">
              <div className="flex flex-col">
                <label className="font-semibold text-md text-black">
                  Input Gambar
                </label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-md text-black">
                Judul Berita
              </label>
              <input
                value={judulBerita}
                onChange={(e) => setJudulBerita(e.target.value)}
                className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                type="text"
                placeholder="Terjadi banjir bandang di jember"
              />
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
                <textarea
                  value={deskripsiBerita}
                  onChange={(e) => setDeskripsiBerita(e.target.value)}
                  id="message"
                  rows="4"
                  className="border-primary-default bg-input-default block p-2.5 w-full text-sm text-gray-900"
                  placeholder="banjir di jember disebabkan karena curah hujan tinggi yang tak kunjung berhenti, meskipun diri ini sudah tak bisa tuk memilikinya lagi"
                />
              </div>
            </div>
          </div>
        </div>
        
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-secondary-default w-full mx-8 md:mx-14 lg:mx-32 xl:mx-32 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Simpan Data
            </button>
          </div>
      </form>
    </div>
      </div>
    </section>
  )
}

export default addBerita
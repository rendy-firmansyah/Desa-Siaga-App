import Link from "next/link";
import Image from "next/image";
// import bgDashboard from "../../../../../public/bg-2.jpg";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPengungsi = ({ isShow, onClose, onSuccess }) => {
  if (!isShow) return null;

  const router = useRouter();
  const { id } = router.query;

  const [lokasi, setLokasi] = useState(0);
  const [gangguanAnak, setGangguanAnak] = useState(0);
  const [gangguanDewasa, setGangguanDewasa] = useState(0);
  const [lakiLaki, setLakiLaki] = useState(0);
  const [perempuan, setPerempuan] = useState(0);
  const [bayi, setBayi] = useState(0);
  const [balita, setBalita] = useState(0);
  const [bumil, setBumil] = useState(0);
  const [buteki, setButeki] = useState(0);
  const [cacatLaki, setCacatLaki] = useState(0);
  const [cacatPerempuan, setCacatPerempuan] = useState(0);
  const [lansiaLaki, setLansiaLaki] = useState(0);
  const [lansiaPerempuan, setLansiaPerempuan] = useState(0);
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    // Menghitung jumlah laki-laki dan perempuan setiap kali nilai LakiLaki atau perempuan berubah
    setJumlah(lakiLaki + perempuan);
  }, [lakiLaki, perempuan]);

  const addPengungsi = async () => {
    const res = await axios.post("/api/pelaporanAwal/korbanPengungsi", {
      lokasi,
      gangguanAnak,
      gangguanDewasa,
      lakiLaki,
      perempuan,
      jumlah,
      bayi,
      balita,
      bumil,
      buteki,
      cacatLaki,
      cacatPerempuan,
      lansiaLaki,
      lansiaPerempuan,
      pelaporan_id: id,
    });
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
      onClose(true);
      onSuccess();
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-auto overflow-y-auto">
      <div className="w-full max-w-[90vw] md:max-w-[700px] max-h-[90vh] overflow-y-auto md:overflow-y-auto border rounded-lg bg-white">
        <div className="flex flex-col p-5 rounded-lg shadow">
          <div className="flex">
            <div className="">
              <h2 className="font-semibold text-gray-800">Tambah Jumlah Pengungsi</h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Isi form untuk menambah data Pengungsi
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="flex flex-col">
                  <label className="text-gray-600">Lokasi Pengungsian</label>
                  <input
                    className="border rounded p-2 mt-1 text-black"
                    type="text"
                    placeholder="ex: Desa Sumbersar"
                    onChange={(e) => setLokasi(e.target.value)}
                    required
                  />
                </div>
                <div className="text-gray-600 text-center my-3">
                  Gangguan Jiwa/Psikosial
                </div>
                <div className="grid grid-cols-12 gap-x-3">
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">Anak</label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        onChange={(e) => setGangguanAnak(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">Dewasa</label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        onChange={(e) => setGangguanDewasa(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-center my-3">
                  Jumlah Pengungsi
                </div>
                <div className="grid grid-cols-12 gap-x-3">
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">Laki - Laki</label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        onChange={(e) => setLakiLaki(parseInt(e.target.value))}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">Perempuan</label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        onChange={(e) => setPerempuan(parseInt(e.target.value))}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-center my-3">
                  Jumlah Penduduk Rentan
                </div>
                <div className="grid grid-cols-12 gap-x-3">
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">Bayi</label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        onChange={(e) => setBayi(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col mt-3">
                      <label className="text-gray-600">Bumil</label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        onChange={(e) => setBumil(e.target.value)}
                        required
                      />
                    </div>
                    <div className="text-gray-600 text-center my-3">
                      Cacat
                    </div>
                    <div className="grid grid-cols-12 gap-x-3">
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label className="text-gray-600">L</label>
                          <input
                            className="border rounded p-2 mt-1 text-black"
                            type="number"
                            placeholder="ex: 100"
                            onChange={(e) => setCacatLaki(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label className="text-gray-600">P</label>
                          <input
                            className="border rounded p-2 mt-1 text-black"
                            type="number"
                            placeholder="ex: 100"
                            onChange={(e) => setCacatPerempuan(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">Balita</label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        onChange={(e) => setBalita(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col mt-3">
                      <label className="text-gray-600">Buteki</label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        onChange={(e) => setButeki(e.target.value)}
                        required
                      />
                    </div>
                    <div className="text-gray-600 text-center my-3">
                      Lansia
                    </div>
                    <div className="grid grid-cols-12 gap-x-3">
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label className="text-gray-600">L</label>
                          <input
                            className="border rounded p-2 mt-1 text-black"
                            type="number"
                            placeholder="ex: 100"
                            onChange={(e) => setLansiaLaki(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label className="text-gray-600">P</label>
                          <input
                            className="border rounded p-2 mt-1 text-black"
                            type="number"
                            placeholder="ex: 100"
                            onChange={(e) => setLansiaPerempuan(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center mt-3">
            <button
              onClick={() => onClose()}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
            >
              Cancel
            </button>

            <button
              onClick={(e) => addPengungsi()}
              className="px-4 py-2 ml-2 bg-secondary-default hover:bg-secondary-light text-white text-sm font-medium rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AddPengungsi;

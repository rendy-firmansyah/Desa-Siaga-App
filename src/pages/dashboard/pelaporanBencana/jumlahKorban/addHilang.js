import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../public/bg-2.jpg";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const AddHilang = ({ isShow, onClose }) => {
  if (!isShow) return null;

  const router = useRouter();
  const { id } = router.query;

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kelamin, setKelamin] = useState("");
  const [usia, setUsia] = useState(0);
  const [lokasi, setLokasi] = useState("");

  const addKorbanHilang = async () => {
    const res = await axios.post("/api/pelaporanAwal/korbanHilang", {
      nama: nama,
      alamat: alamat,
      jenisKelamin: kelamin,
      usia: usia,
      lokasiHilang: lokasi,
      pelaporan_id: id,
    });

    console.log(res.data);
    onClose(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[700px] max-h-[400px] md:h-auto lg:h-auto xl:h-auto overflow-y-auto md:overflow-hidden lg:overflow-hidden xl:overflow-hidden border rounded-lg bg-white">
        <div className="flex flex-col p-5 rounded-lg shadow">
          <div className="flex">
            <div className="">
              <h2 className="font-semibold text-gray-800">
                Tambah Korban Hilang
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Isi form untuk menambah data korban hilang
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-3">
              <div className="flex flex-col">
                <label className="text-gray-600">Nama</label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: fulan"
                  onChange={(e) => setNama(e.target.value)}
                  required
                />

                <label className="text-gray-600 mt-2">Jenis Kelamin</label>
                <select
                  onChange={(e) => setKelamin(e.target.value)}
                  className="border rounded p-2 mt-1 text-black "
                  required
                >
                  <option value="">Jenis Kelamin</option>
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
                
                <label className="text-gray-600 mt-2">Usia</label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="number"
                  placeholder="ex: 17"
                  onChange={(e) => setUsia(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mt-2 md:mt-0 lg:mt-0 xl:mt-0">
                  Alamat Korban
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: jl. sudirman xxxx"
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                />
                <label className="text-gray-600 mt-2">Lokasi Hilang</label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: desa xxxx"
                  onChange={(e) => setLokasi(e.target.value)}
                  required
                />
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
              onClick={(e) => addKorbanHilang()}
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

export default AddHilang;

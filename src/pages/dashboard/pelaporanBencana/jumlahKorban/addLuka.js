import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../public/bg-2.jpg";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AddLuka = ({ isShow, onClose }) => {
  if (!isShow) return null;

  const router = useRouter();
  const { id } = router.query;

  const [nama, setnama] = useState("");
  const [jenis, setjenis] = useState("");
  const [laki, setlaki] = useState();
  const [wanita, setwanita] = useState();
  const [jumlah, setjumlah] = useState();

  const handleJumlahLaki = (e) => {
    setlaki(e.target.value);
  };

  const handleJumlahWanita = (e) => {
    setwanita(e.target.value);
  };

  const addKorbanLuka = async () => {
    const res = await axios.post("/api/pelaporanAwal/korbanLuka", {
      namaFaskes: nama,
      jenisRawat: jenis,
      lakiLaki: laki,
      wanita: wanita,
      jumlah: jumlah,
      pelaporan_id: id,
    });

    console.log(res.data);
    onClose(true);
  };

  useEffect(() => {
    const jumlah = parseInt(laki) + parseInt(wanita);
    setjumlah(jumlah);
  }, [handleJumlahLaki, handleJumlahWanita]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[700px] max-h-[400px] md:h-auto lg:h-auto xl:h-auto overflow-y-auto md:overflow-hidden lg:overflow-hidden xl:overflow-hidden border rounded-lg bg-white">
        <div className="flex flex-col p-5 rounded-lg shadow">
          <div className="flex">
            <div className="">
              <h2 className="font-semibold text-gray-800">
                Tambah Korban Luka Ringan/Berat
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Isi form untuk menambah data korban Luka-luka
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-3">
              <div className="flex flex-col">
                <label className="text-gray-600">
                  Nama Faskes dan Lokasinya
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: fulan"
                  onChange={(e) => setnama(e.target.value)}
                />
                <label className="text-gray-600 mt-2">Jenis Rawat</label>
                <select
                  className="border rounded p-2 mt-1 text-black"
                  onChange={(e) => setjenis(e.target.value)}
                >
                  <option value="">Pilih jenis perawatan</option>
                  <option value="Rawat Inap">Rawat Inap</option>
                  <option value="Rawat Jalan">Rawat Jalan</option>
                </select>
                <label className="text-gray-600 mt-2">
                  Jumlah Korban Laki-laki
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="number"
                  placeholder="ex: 10"
                  onChange={(e) => handleJumlahLaki(e)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mt-2 md:mt-0 lg:mt-0 xl:mt-0">
                  Jumlah Korban Wanita
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="number"
                  placeholder="ex: 10"
                  onChange={(e) => handleJumlahWanita(e)}
                />
                <label className="text-gray-600 mt-2">Jumlah Total Korban</label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  disabled
                  value={jumlah}
                  type="number"
                  placeholder="ex: 10"
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
              onClick={(e) => addKorbanLuka()}
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

export default AddLuka;

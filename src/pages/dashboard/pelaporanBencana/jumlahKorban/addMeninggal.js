import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../public/bg-2.jpg";
import axios from "axios";

const AddMeninggal = ({ isShow, onClose }) => {
  if (!isShow) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[700px] max-h-[400px] md:h-auto lg:h-auto xl:h-auto overflow-y-auto md:overflow-hidden lg:overflow-hidden xl:overflow-hidden border rounded-lg bg-white">
        <div className="flex flex-col p-5 rounded-lg shadow">
          <div className="flex">
            <div className="">
              <h2 className="font-semibold text-gray-800">
                Tambah Korban Meninggal
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Isi form untuk menambah data korban meninggal
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
                  //   onChange={(e) => setName(e.target.value)}
                />
                <label className="text-gray-600 mt-2">Jenis Kelamin</label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: laki-laki/perempuan"
                  //   onChange={(e) => setAlamat(e.target.value)}
                />
                <label className="text-gray-600 mt-2">Usia</label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="number"
                  placeholder="ex: 17"
                  //   onChange={(e) => setAlamat(e.target.value)}
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
                  //   onChange={(e) => setAlamat(e.target.value)}
                />
                <label className="text-gray-600 mt-2">Tempat Meninggal</label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: desa xxxx"
                  //   onChange={(e) => setAlamat(e.target.value)}
                />
                <label className="text-gray-600 mt-2">Penyebab Kematian</label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: hanyut karena banjir"
                  //   onChange={(e) => setAlamat(e.target.value)}
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
              //   onClick={(e) => addKecamatan()}
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

export default AddMeninggal;

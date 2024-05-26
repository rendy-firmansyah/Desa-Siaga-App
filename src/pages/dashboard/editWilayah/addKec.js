import React from "react";

const AddKec = ({ isvisible, onClose }) => {
  if (!isvisible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-md border rounded-lg bg-white">
        <div className="flex flex-col p-10 rounded-lg shadow">
          <div className="flex">
            <div className="">
              <h2 className="font-semibold text-gray-800">Tambah Kecamatan</h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Isi form untuk menambah kecamatan baru.
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <label className="text-gray-600">Nama Kecamatan</label>
            <input
              className="border rounded p-2 mt-1 text-black"
              type="text"
              placeholder="ex: Sumbersari"
            />
            <label className="text-gray-600 mt-2">Alamat</label>
            <input
              className="border rounded p-2 mt-1 text-black"
              type="text"
              placeholder="ex: jl. sudirman xxxx"
            />
          </div>

          <div className="flex justify-end items-center mt-3">
            <button
              onClick={() => onClose()}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
            >
              Cancel
            </button>

            <button className="px-4 py-2 ml-2 bg-secondary-default hover:bg-secondary-light text-white text-sm font-medium rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddKec;

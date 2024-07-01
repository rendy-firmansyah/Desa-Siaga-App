import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";

const Konfirmasi = ({ onClose,id, onDeleteSuccess }) => {
    // console.log(id);
    const handleDelete = async (id) => {
        try {
          const response = await axios.delete(`/api/berita?id=${id}`);
    
          console.log(response.data);
          if (response.data.status === "success") {
            toast(`✅ ${response.data.message}`, {
              position: "top-right",
              autoClose: 1000,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: 1,
              theme: "light",
            });
            onClose();
            onDeleteSuccess();
          } else {
            toast(`❌ ${response.data.message}`, {
              position: "top-right",
              autoClose: 1000,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: 1,
              theme: "light",
            });
          }
        } catch (error) {
          console.error('Error deleting data:', error);
          toast(`❌ Error deleting data: ${error.message}`, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded shadow-lg">
            <div className="text-black font-semibold text-lg mb-4">Konfirmasi</div>
            <div className="text-black mb-4">Apakah Anda yakin ingin menghapus?</div>
            <div className="flex justify-end gap-4">
                <button
                    className="bg-red-600 px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Batal
                </button>
                <button
                    onClick={() => handleDelete(id)}
                    className="bg-secondary-default text-white px-4 py-2 rounded"
                >
                    Hapus
                </button>
            </div>
        </div>
    </div>
  );
};

export default Konfirmasi;

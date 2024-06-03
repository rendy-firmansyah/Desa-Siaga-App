import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";

const Konfirmasi = ({ onClose }) => {
    const handleSimpan = () => {
        Router.push('/dashboard/kajianResiko/kesimpulan');
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded shadow-lg">
            <div className="text-black font-semibold text-lg mb-4">Konfirmasi</div>
            <div className="text-black mb-4">Apakah Anda yakin ingin menyimpan?</div>
            <div className="flex justify-end gap-4">
                <button
                    className="bg-red-600 px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Batal
                </button>
                <button
                    onClick={handleSimpan}
                    className="bg-secondary-default text-white px-4 py-2 rounded"
                >
                    Simpan
                </button>
            </div>
        </div>
    </div>
  );
};

export default Konfirmasi;

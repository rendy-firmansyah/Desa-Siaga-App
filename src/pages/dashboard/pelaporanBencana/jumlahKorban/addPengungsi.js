import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../public/bg-2.jpg";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AddPengungsi = ({ isShow, onClose }) => {
  if (!isShow) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[700px] max-h-auto md:h-auto lg:h-auto xl:h-auto overflow-y-auto md:overflow-hidden lg:overflow-hidden xl:overflow-hidden border rounded-lg bg-white">
        <div className="flex flex-col p-5 rounded-lg shadow">
          <div className="flex">
            <div className="">
              <h2 className="font-semibold text-gray-800">
                Tambah Jumlah Pengungsi
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Isi form untuk menambah data Pengungsi
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="flex flex-col">
                  <label className="text-gray-600">
                    Lokasi Pengungsian
                  </label>
                  <input
                    className="border rounded p-2 mt-1 text-black"
                    type="text"
                    placeholder="ex: Desa Sumbersar"
                    required
                  />
                </div>
                <div className="text-gray-600 text-center my-[10px]">Gangguan Jiwa/Psikosial</div>
                <div className="grid grid-cols-12 gap-x-3">
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">
                        Anak
                      </label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">
                        Dewasa
                      </label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-center my-[10px]">Jumlah Pengungsi</div>
                <div className="grid grid-cols-12 gap-x-3">
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">
                        Laki - Laki
                      </label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">
                        Perempuan
                      </label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 text-center my-[10px]">Jumlah Penduduk Rentan</div>
                <div className="grid grid-cols-12 gap-x-3">
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">
                        Bayi
                      </label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-600 mt-[10px]">
                        Bumil
                      </label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        required
                      />
                    </div>
                    <div className="text-gray-600 text-center my-[10px]">Cacat</div>
                    <div className="grid grid-cols-12 gap-x-3">
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label className="text-gray-600">
                            L
                          </label>
                          <input
                            className="border rounded p-2 mt-1 text-black"
                            type="number"
                            placeholder="ex: 100"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label className="text-gray-600">
                            P
                          </label>
                          <input
                            className="border rounded p-2 mt-1 text-black"
                            type="number"
                            placeholder="ex: 100"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="flex flex-col">
                      <label className="text-gray-600">
                        Balita
                      </label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-600 mt-[10px]">
                        Buteki
                      </label>
                      <input
                        className="border rounded p-2 mt-1 text-black"
                        type="number"
                        placeholder="ex: 100"
                        required
                      />
                    </div>
                    <div className="text-gray-600 text-center my-[10px]">Lansia</div>
                    <div className="grid grid-cols-12 gap-x-3">
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label className="text-gray-600">
                            L
                          </label>
                          <input
                            className="border rounded p-2 mt-1 text-black"
                            type="number"
                            placeholder="ex: 100"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label className="text-gray-600">
                            P
                          </label>
                          <input
                            className="border rounded p-2 mt-1 text-black"
                            type="number"
                            placeholder="ex: 100"
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

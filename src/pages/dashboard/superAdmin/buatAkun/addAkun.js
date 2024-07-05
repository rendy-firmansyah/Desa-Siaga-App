import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../public/bg-2.jpg";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAkun = ({ isShow, onClose, onSuccess }) => {
  if (!isShow) return null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const [selectedKec, setSelectedKec] = useState("");
  const [selectedDesa, setSelectedDesa] = useState("");
  const [dataKecamatan, setDataKec] = useState([]);
  const [dataDesa, setDataDesa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/Kecamatan");
      setDataKec(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/desa?id=${selectedKec}`);
      setDataDesa(response.data);
    };
    fetchData();
  }, [selectedKec]);

  const addAkun = async () => {
    const res = await axios.put("/api/userManagement", {
      email,
      password,
      username,
      role,
      desa_id: selectedDesa,
    });

    console.log(res.data);

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[700px] max-h-[400px] md:h-auto lg:h-auto xl:h-auto overflow-y-auto md:overflow-hidden lg:overflow-hidden xl:overflow-hidden border rounded-lg bg-white">
        <div className="flex flex-col p-5 rounded-lg shadow">
          <div className="flex">
            <div className="">
              <h2 className="font-semibold text-gray-800">
                Tambah Akun
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Isi form untuk menambah data akun
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-3">
              <div className="flex flex-col">
                <label className="text-gray-600">
                  Username
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: fulan"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label className="text-gray-600 mt-2">Role</label>
                <select
                  className="border rounded p-2 mt-1 text-black "
                  required
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Pilih Role</option>
                    <option value="super admin">Super Admin</option>
                    <option value="desa">Desa</option>
                    <option value="relawan">Relawan</option>
                </select>
                {(role === "desa") && (
                  <>
                    <label className="text-gray-600 mt-2">
                    Pilih Kecamatan
                    </label>
                    <select
                      className="border rounded p-2 mt-1 text-black "
                      onChange={(e) => setSelectedKec(e.target.value)}
                    >
                      <option>Pilih......</option>
                      {dataKecamatan.map((kec) => (
                        <option value={kec.id}>{kec.nama}</option>
                      ))}
                    </select>
                  </>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mt-2 md:mt-0 lg:mt-0 xl:mt-0">
                  Email
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: email@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="text-gray-600 mt-2">
                  Password
                </label>
                <input
                  className="border rounded p-2 mt-1 text-black"
                  type="text"
                  placeholder="ex: ***"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {(role === "desa") && (
                  <>
                    <label className="text-gray-600 mt-2">
                    Pilih Desa
                    </label>
                    <select
                      disabled={!selectedKec ? "disabled" : ""}
                      className="border rounded p-2 mt-1 text-black "
                      onChange={(e) => setSelectedDesa(e.target.value)}
                    >
                      <option value="Pilih......">Pilih......</option>
                      {dataDesa
                        ? dataDesa.map((desa) => (
                            <option value={desa.id}>{desa.nama}</option>
                          ))
                        : null}
                    </select>
                  </>
                )}
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
              onClick={(e) => addAkun()}
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

export default AddAkun;

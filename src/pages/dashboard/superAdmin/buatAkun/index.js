import Link from "next/link";
import Image from "next/image";
import bgbuatAkun from "../../../../../public/bg-2.jpg";
import nookies from "nookies";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import AddAkun from "./addAkun";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const buatAkun = () => {
  const [showModalAddAkun, setShowModalAddAkun] = useState(false);
  const [dataAkun, setDataAkun] = useState([]);

  const showVisibleAddAkun = () => {
    setShowModalAddAkun(true);
  };

  const handleCloseModal = () => {
    setShowModalAddAkun(false)
  };

  const getDataAkun = async () => {
    const response = await axios.get("/api/userManagement");
    setDataAkun(response.data);
  };
  useEffect(() => {
    getDataAkun();
  }, []);

  return (
    <section className="container-fluid h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image
          src={bgbuatAkun}
          alt="background-image"
          className="lg:max-h-screen h-full"
        />
      </div>
      {/* Modal Start */}
      <AddAkun
        isShow={showModalAddAkun}
        onClose={handleCloseModal}
        onSuccess={() => getDataAkun()}
      />
      {/* Modal End */}
      <div className="flex flex-col justify-center mx-8 md:mx-14 lg:mx-32 xl:mx-32 pt-10">
        <ToastContainer/>
        <div className="flex w-full justify-between mb-4">
          <h1 className="text-black text-xl font-bold">
            Data Akun
          </h1>
          <div>
            {/* <Link href="/dashboard/editWilayah/dataDesa/tambahDesa"> */}
            <button
              type=""
              onClick={showVisibleAddAkun}
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Tambah Akun
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
            <thead className="">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                {/* <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th> */}
              </tr>
            </thead>
            {dataAkun.map((items) => (
            <tbody  class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="text-black px-6 py-4 whitespace-nowrap">
                    {items.email}
                  </td>
                  <td class="text-black px-6 py-4 whitespace-nowrap">
                    {items.username}
                  </td>
                  <td class="text-black px-6 py-4 whitespace-nowrap">
                    {items.role}
                  </td>
                </tr>
            </tbody>
                ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default buatAkun;

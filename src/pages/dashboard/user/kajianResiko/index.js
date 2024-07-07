import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../../public/bg-2.jpg";
import Router from "next/router";
import axios from "axios";
import { useRouter } from "next/router";
import nookies from "nookies";
import ReactPaginate from "react-paginate";

//islogin
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role === "super admin") {
    return {
      redirect: {
        destination: "/dashboard/superAdmin",
      },
    };
  }

  return {
    props: {
      role: cookies.role,
      userId: cookies.user_id,
      desaId: cookies.desa_id || null,
    },
  };
}

const KajianResiko = ({ role, userId, desaId }) => {
  const router = useRouter();
  const [dataKajian, setDataKajian] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const getDataKajian = async () => {
    const response = await axios.get(`/api/pengkajian/get?id=${userId}`);
    setDataKajian(response.data);
  };
  useEffect(() => {
    getDataKajian();
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = dataKajian.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(dataKajian.length / itemsPerPage);

  const handleBack = () => {
    router.back();
  };

  const kuisioner = () => {
    if (role === "relawan") {
      router.push(`/dashboard/user/kajianResiko/pilihWilayah`);
    } else if (role === "desa" && desaId) {
      Router.push(
        `/dashboard/user/kajianResiko/ancamanRentan?desa_id=${desaId}`
      );
    }
  };

  const detailKajian = (data) => {
    router.push(
      `/dashboard/user/kajianResiko/detailKesimpulan?id=${encodeURIComponent(
        data.pengkajian_id
      )}&namaUser=${encodeURIComponent(
        data.nama_user
      )}&namaKec=${encodeURIComponent(
        data.nama_kecamatan
      )}&namaDes=${encodeURIComponent(
        data.nama_desa
      )}&tanggal=${encodeURIComponent(data.tanggal_dibuat)}`
    );
  };

  console.log(dataKajian);

  return (
    <section className="container-fluid h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image src={bgDashboard} alt="bg-image" className="h-full" />
      </div>
      <div className="flex flex-col justify-center mx-8 md:mx-14 lg:mx-32 xl:mx-32 pt-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <button
              onClick={handleBack}
              type=""
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Kembali
            </button>
          </div>
          <h1 className="text-black text-xl font-bold text-center">
            Data Kajian Awal Resiko
          </h1>
          <div>
            <button
              onClick={kuisioner}
              type=""
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Isi Kuisioner
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pengisi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Kecamatan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Desa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal Pengisian
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {currentPageData.map((items, index) => {
                const pageIndex = index + currentPage * itemsPerPage + 1;
                const date = new Date(items.tanggal_dibuat); // Mengubah timestamp menjadi objek Date
                const formattedDate = date.toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                });
                return (
                  <tr>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      {pageIndex}
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      {items.nama_user}
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      {items.nama_kecamatan}
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      {items.nama_desa}
                    </td>
                    <td className="text-black px-6 py-4 whitespace-nowrap">
                      {formattedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <button
                        onClick={() => detailKajian(items)}
                        class="flex items-center gap-2 px-3 py-3 bg-secondary-light rounded-md hover:bg-secondary-default focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M10 10C10 10.5523 10.4477 11 11 11V17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 13.5523 17 13 17V9H11C10.4477 9 10 9.44772 10 10Z"
                              fill="#FFFFFF"
                            ></path>{" "}
                            <path
                              d="M12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8Z"
                              fill="#FFFFFF"
                            ></path>{" "}
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
                              fill="#FFFFFF"
                            ></path>{" "}
                          </g>
                        </svg>{" "}
                        Lihat Selengkapnya
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex justify-center space-x-2"}
            pageClassName={"page-item"}
            pageLinkClassName={
              "page-link px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            }
            previousClassName={"page-item"}
            previousLinkClassName={
              "page-link px-4 py-2 mr-2 border rounded-md bg-secondary-default text-white hover:bg-secondary-light focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            }
            nextClassName={"page-item"}
            nextLinkClassName={
              "page-link px-4 py-2 ml-2 border rounded-md bg-secondary-default text-white hover:bg-secondary-light focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            }
            activeLinkClassName={
              "active-link border-secondary-default text-secondary-default"
            }
            disabledClassName={"disabled opacity-50 cursor-not-allowed -z-10"}
          />
        </div>
      </div>
    </section>
  );
};

export default KajianResiko;

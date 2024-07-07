import Link from "next/link";
import Image from "next/image";
import bgbuatAkun from "../../../../../public/bg-2.jpg";
import nookies from "nookies";
import Router from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import AddAkun from "./addAkun";
import EditAkun from "./editAkun";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Konfirmasi from "./konfirmasi";
import ReactPaginate from "react-paginate";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role === "desa" || cookies.role === "relawan") {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  return {
    props: {},
  };
}

const buatAkun = () => {
  const [showModalAddAkun, setShowModalAddAkun] = useState(false);
  const [showModalEditAkun, setShowModalEditAkun] = useState(false);
  const [dataAkun, setDataAkun] = useState([]);
  const [selectedAkun, setSelectedAkun] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [idAkun, setIdAkun] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handleHapus = (id) => {
    setVisibleModal(true);
    setIdAkun(id);
  };

  const showVisibleAddAkun = () => {
    setShowModalAddAkun(true);
  };

  const handleCloseModal = () => {
    setShowModalAddAkun(false)
    setShowModalEditAkun(false)
    setSelectedAkun(null);
    setVisibleModal(false);
  };

  const showVisibleEditAkun = (akun) => {
    setSelectedAkun(akun);
    setShowModalEditAkun(true);
  };

  const getDataAkun = async () => {
    const response = await axios.get("/api/userManagement");
    setDataAkun(response.data);
  };
  useEffect(() => {
    getDataAkun();
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = dataAkun.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(dataAkun.length / itemsPerPage);

  const kembali = () => {
    Router.back();
  }

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
      {/* Modal Start */}
      <EditAkun
        isShow={showModalEditAkun}
        onClose={handleCloseModal}
        onSuccess={() => getDataAkun()}
        akun={selectedAkun}
      />
      {/* Modal End */}
      <div className="flex flex-col justify-center mx-8 md:mx-14 lg:mx-32 xl:mx-32 pt-10">
        <ToastContainer/>
        <div className="flex w-full justify-between mb-4">
          <button
            onClick={kembali}
            className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
          >
            Kembali
          </button>
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
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            {currentPageData.map((items, index) => {
              const pageIndex = index + currentPage * itemsPerPage + 1;
              return (
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
                      <td class="px-6 py-4 whitespace-nowrap flex items-center">
                        <button
                            onClick={() => showVisibleEditAkun(items)}
                            class="me-2 px-3 py-3 bg-amber-400 rounded-md hover:bg-amber-200 focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
                          >
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title></title>{" "}
                                <g id="Complete">
                                  {" "}
                                  <g id="edit">
                                    {" "}
                                    <g>
                                      {" "}
                                      <path
                                        d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                                        fill="none"
                                        stroke="#0F0F0F"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                      ></path>{" "}
                                      <polygon
                                        fill="none"
                                        points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                                        stroke="#0F0F0F"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                      ></polygon>{" "}
                                    </g>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                        </button>
                        <button onClick={() => handleHapus(items.id)} class="px-3 py-3 bg-red-600 rounded-md hover:bg-red-400 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out">
                          <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></g></svg>
                        </button>
                      </td>
                    </tr>
                </tbody>
              );
            })}
          </table>
        </div>

        {visibleModal && (
          <Konfirmasi
            onClose={handleCloseModal}
            id={idAkun}
            onDeleteSuccess={getDataAkun}
          />
        )}

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

export default buatAkun;

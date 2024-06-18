import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";

const DataStatistik = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data,setData] = useState([]);
  const router = useRouter();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const fetchData = async () => {
    const response = await axios.get('/api/statistik');
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const detailDesa = (data) => {
    router.push(`data_statistik/detail_dataStatistik?id=${encodeURIComponent(data.id)}&status=${encodeURIComponent(data.status_desa)}`);
  }  

  return (
    <main>
      <Navbar />
      <div className="container-fluid xl:px-[80px] lg:px-[40px] md:px-[40px] px-[10px]">
        <div className="mt-[150px] mb-[250px]">
            <div className="flex justify-center">
              <div className="flex items-center">
                <div>
                  <input type="kecamatan" placeholder='Masukan Nama Kecamatan ....' className="xl:w-[750px] lg:w-[650px] md:w-[500px] w-[280px] xl:h-[60px] lg:h-[50px] md:h-[40px] h-[40px] mt-3 px-[20px] text-gray-700 border-[2px] border-[#757575]"/>
                </div>
                <div className="ms-[30px] mt-3">
                  <button type='submit' className="xl:w-[100px] lg:w-[100px] md:w-[100px] w-[50px] xl:h-[60px] lg:h-[55px] md:h-[45px] h-[50px] bg-secondary-default rounded-[10px] flex justify-center items-center">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-auto bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
            {data.map((items) => (
              <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="collapse-heading">
                  <button onClick={toggleAccordion} type="button" className="w-full xl:h-[60px] lg:h-[60px] md:h-[50px] bg-green-default flex items-center justify-between xl:px-[28px] lg:px-[28px] md:px-[28px] px-[15px] " data-accordion-target="#collapse-body" aria-expanded="true" aria-controls="collapse-body">
                    <span className="text-white font-semibold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[16px]">{items.nama}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                  </button>
                </h2>
                {items.desa.map((item) => (
                <div id="collapse-body" className={`${isOpen ? 'block' : 'hidden'}`} aria-labelledby="collapse-heading">
                    <button className="w-full p-5 border border-gray-200" onClick={() => detailDesa(item)}>
                      <div className="flex justify-between items-center">
                          {item.nama}
                        <p className="text-black font-semibold"></p>
                        <div className={`w-[100px] h-[40px] flex items-center justify-center font-semibold text-[20px] text-white ${item.status_desa === 'Tidak aman' ? 'bg-red-default' : item.status_desa === 'Aman' ? 'bg-green-default' : 'bg-gray-700'}`}>{item.status_desa === 'Aman' ? 'Aman' : item.status_desa === 'Tidak aman' ? 'Tidak Aman' : 'Belum Dinilai'}</div>
                      </div>
                    </button>
                </div>
                ))}
              </div>
              ))}
            </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default DataStatistik
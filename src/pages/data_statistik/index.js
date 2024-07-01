import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";

const DataStatistik = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [data,setData] = useState([]);
  const[search,setsearch]=useState('')
  const router = useRouter();

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const fetchData = async () => {
    const response = await axios.get('/api/statistik');
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data)

  const filterdata = data.filter((items) => {
    const searchTerm = search.toLowerCase();
    const kecamatanMatch = items.nama.toLowerCase().includes(searchTerm);
    const desaMatch = items.desa.some((desaItem) => desaItem.nama.toLowerCase().includes(searchTerm));
    return kecamatanMatch || desaMatch;
  });

  const detailDesa = (data) => {
    if(data !== undefined) {
      if(data.statusDesa === 'Aman' || data.statusDesa === 'Tidak aman') {
        router.push(`data_statistik/detail_dataStatistik?id=${encodeURIComponent(data.id)}&status=${encodeURIComponent(data.statusDesa)}`);
      }
      else{
        console.log('data tidak ada')
      }
    }
  }  

  return (
    <main>
      <Navbar />
      <div className="container-fluid xl:px-[80px] lg:px-[40px] md:px-[40px] px-[10px]">
        <div className="mt-[150px] mb-[250px]">
            <div className="flex justify-center">
              <div className="flex items-center">
                <div>
                  <input value={search} onChange={(e)=>{setsearch(e.target.value)}} type="kecamatan" placeholder='Masukan Nama Kecamatan ....' className="xl:w-[750px] lg:w-[650px] md:w-[500px] w-[280px] xl:h-[60px] lg:h-[50px] md:h-[40px] h-[40px] mt-3 px-[20px] text-gray-700 border-[2px] border-[#757575]"/>
                </div>
              </div>
            </div>
            <div className="w-full h-auto bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
            {filterdata.map((items, index) => (
              <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="collapse-heading">
                  <button onClick={() => toggleAccordion(index)} type="button" className="w-full xl:h-[60px] lg:h-[60px] md:h-[50px] my-[10px] bg-green-default flex items-center justify-between xl:px-[28px] lg:px-[28px] md:px-[28px] px-[15px] " data-accordion-target="#collapse-body" aria-expanded={isOpen === index} aria-controls="collapse-body">
                    <span className="text-white font-semibold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[16px]">{items.nama}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                  </button>
                </h2>
                <div id="collapse-body" className={`${isOpen === index ? 'block' : 'hidden'}`} aria-labelledby="collapse-heading">
                {items.desa.map((item) => (
                    <button className="w-full p-5 border border-gray-200" onClick={() => detailDesa(item.pelaporanAwal[0]?.upaya[0])}>
                      <div className="flex justify-between items-center text-black">
                          {item.nama}
                        <div className={`w-[120px] h-[40px] flex items-center justify-center font-semibold text-[16px] text-black ${item.pelaporanAwal[0]?.upaya[0]?.statusDesa === 'Tidak aman text-white' ? 'bg-red-default' : item.pelaporanAwal[0]?.upaya[0]?.statusDesa === 'Aman' ? 'bg-green-default text-white' : 'bg-gray-700 text-white'}`}>{item.pelaporanAwal[0]?.upaya[0]?.statusDesa === 'Aman' ? 'Aman' : item.pelaporanAwal[0]?.upaya[0]?.statusDesa === 'Tidak aman' ? 'Tidak Aman' : 'Belum Dinilai'}</div>
                      </div>
                    </button>
                ))}
                </div>
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
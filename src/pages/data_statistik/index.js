import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";

const DataStatistik = () => {
  return (
    <main>
      <Navbar />
      <div className="container-fluid px-[80px]">
        <div className="mt-[150px] mb-[250px]">
            <div className="flex justify-center">
              <div className="flex items-center">
                <div>
                  <input type="kecamatan" placeholder='Masukan Nama Kecamatan ....' className="w-[750px] h-[60px] mt-3 px-[20px] text-gray-700 border-[2px] border-[#757575]"/>
                </div>
                <div className="ms-[30px] mt-3">
                  <button type='submit' className="w-[173px] h-[60px] bg-secondary-default rounded-[10px] text-[24px] font-bold">
                    Cari
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-white px-[50px] py-[50px] shadow-lg mt-[35px]">
              <div className="w-full h-[60px] bg-green-default flex items-center justify-between px-[28px]">
                <h3 className="text-black font-semibold text-[20px]">Kecamatan Ajung</h3>
                <div className="w-[30px] h-[30px] bg-gray-500"></div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default DataStatistik
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";

const DataStatistik = () => {
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
            <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
              <div className="w-full xl:h-[60px] lg:h-[60px] md:h-[50px] bg-green-default flex items-center justify-between xl:px-[28px] lg:px-[28px] md:px-[28px] px-[15px]">
                <h3 className="text-black font-semibold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[16px]">Kecamatan Ajung</h3>
                <div className="w-[30px] h-[30px] relative">
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#fff"></path> </g></svg>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default DataStatistik
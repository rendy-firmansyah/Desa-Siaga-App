import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { set } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailBerita = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (id) {
      const getDataWithId = async () => {
        const response = await axios.get(`/api/berita?id=${id}`);
        const data = response.data;
        setData(data);
      };
      getDataWithId();
    }
  }, [id]);
  return (
    <main>
      <Navbar />
      <div className="container-fluid xl:px-[80px] lg:px-[40px] md:px-[40px] px-[10px]">
        <div className="mt-[150px] mb-[250px]">
          <div className="flex justify-center">
            <div className="w-[754px]">
              <div className="font-semibold xl:text-[32px] lg:text-[32px] md:text-[24px] text-[20px] text-black text-center">
                {data.judul}
              </div>
            </div>
          </div>
          <div className="mt-[20px] mb-[60px] flex justify-center">
            <div className="text-black font-semibold xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px]">
              Kec. Puger, Kab. Jember., Sabtu 11 Mei 2024
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12 xl:pe-[50px] lg:pe-[30px] md:pe-0 pe-0">
              <div className="w-full xl:h-[500px] lg:h-[500px] md:h-[400px] bg-gray-500 relative">
                <img src={data.gambar} className="w-full h-full object-cover" />
              </div>
              <div className="mt-[38px] mb-[82px]">
                <p className="text-black xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px]">
                  {data.deskripsi}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="xl:w-[800px] lg:w-[800px] md:w-[600px] w-full">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="xl:w-[100px] lg:w-[100px] md:w-[100px] w-[30px] xl:h-[100px] lg:h-[100px] md:h-[100px] h-[30px] relative">
                        <Image
                          src="/berita-1.png"
                          width={800}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ms-[16px] w-[150px]">
                        <div className="text-gray-700 font-bold xl:text-[16px] lg:text-[16px] md:text-[12px] text-[12px]">
                          Kembali
                        </div>
                        <div className="text-black font-bold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[14px]">
                          Lorem ipsum is placeholder
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="me-[16px] w-[150px] text-end">
                        <div className="text-gray-700 font-bold xl:text-[16px] lg:text-[16px] md:text-[12px] text-[12px]">
                          Selanjutnya
                        </div>
                        <div className="text-black font-bold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[14px]">
                          Lorem ipsum is placeholder
                        </div>
                      </div>
                      <div className="xl:w-[100px] lg:w-[100px] md:w-[100px] w-[30px] xl:h-[100px] lg:h-[100px] md:h-[100px] h-[30px] relative">
                        <Image
                          src="/berita-1.png"
                          width={800}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12 xl:ps-[40px] lg:ps-[20px] md:ps-0 ps-0 xl:mt-0 lg:mt-0 md:mt-[50px] mt-[50px]">
              <div>
                <div className="font-bold xl:text-[24px] lg:text-[24px] md:text-[24px] text-[20px] text-black mb-[25px] xl:text-start lg:text-start md:text-center text-center">
                  Berita Terbaru
                </div>
                <div className="xl:w-full xl:flex-col lg:w-full lg:flex-col md:flex">
                  <div className="xl:flex xl:mx-0 lg:flex md:flex-col flex xl:items-start lg:items-start md:items-start items-center lg:mx-[0px] md:mx-[10px] xl:my-[20px] lg:my-[20px] md:my-0 my-[20px]">
                    <div>
                      <div className="xl:w-[230px] xl:h-[153px] lg:w-[230px] lg:h-[153px] md:w-[140px] md:h-[93px] w-[140px] relative">
                        <Image
                          src="/berita-1.png"
                          width={230}
                          height={153}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="xl:mt-0 md:mt-[10px] xl:w-[230px] lg:w-[230px] md:w-[140px] w-full xl:ms-0 lg:ms-0 md:ms-0 ms-[20px]">
                      <div className="font-bold text-black xl:text-[18px] lg:text-[16px] md:text-[14px] xl:text-center lg:text-center md:text-center text-start">
                        Lorem ipsum is placeholder
                      </div>
                    </div>
                  </div>
                  <div className="xl:flex xl:mx-0 lg:flex md:flex-col flex xl:items-start lg:items-start md:items-start items-center lg:mx-[0px] md:mx-[10px] xl:my-[20px] lg:my-[20px] md:my-0 my-[20px]">
                    <div>
                      <div className="xl:w-[230px] xl:h-[153px] lg:w-[230px] lg:h-[153px] md:w-[140px] md:h-[93px] w-[140px] relative">
                        <Image
                          src="/berita-1.png"
                          width={230}
                          height={153}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="xl:mt-0 md:mt-[10px] xl:w-[230px] lg:w-[230px] md:w-[140px] w-full xl:ms-0 lg:ms-0 md:ms-0 ms-[20px]">
                      <div className="font-bold text-black xl:text-[18px] lg:text-[16px] md:text-[14px] xl:text-center lg:text-center md:text-center text-start">
                        Lorem ipsum is placeholder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DetailBerita;

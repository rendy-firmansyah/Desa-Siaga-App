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
  const [berita, setBerita] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("/api/berita?id=");
    setBerita(response.data);
  };

  useEffect(() => {
    if (id) {
      const getDataWithId = async () => {
        const response = await axios.get(`/api/berita?id=${id}`);
        const data = response.data;
        console.log(data);
        setData(data);
      };
      getDataWithId();
    }
  }, [id]);

  const date = new Date(data.created_at);
  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const getBeritaWithID = (data) => {
    router.push(`/detail_berita?id=${encodeURIComponent(data.id)}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topThreeBerita = berita
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

  const handleNextBerita = () => {
    const currentIndex = berita.findIndex((item) => item.id == id);
    const nextIndex = (currentIndex + 1) % berita.length; // Loop back to the first article if it's the last one
    const nextBerita = berita[nextIndex];
    getBeritaWithID(nextBerita);
  };

  const handleBackBerita = () => {
    const currentIndex = berita.findIndex((item) => item.id == id);
    const prevIndex = (currentIndex - 1 + berita.length) % berita.length; // Loop to the last article if it's the first one
    const prevBerita = berita[prevIndex];
    getBeritaWithID(prevBerita);
  };

  const currentIndex = berita.findIndex((item) => item.id == id);
  const nextIndex = (currentIndex + 1) % berita.length;
  const prevIndex = (currentIndex - 1 + berita.length) % berita.length;
  const nextBerita = berita[nextIndex];
  const prevBerita = berita[prevIndex];

  // console.log(prevBerita)

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
              {data.alamat_desa}, {data.nama_desa}, {data.create_at}
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
                <div className="">
                  <div className="grid grid-cols-12 xl:gap-x-10 lg:gap-x-10 md:gap-x-10 gap-x-0">
                    {prevBerita && (
                      <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 cursor-pointer" onClick={handleBackBerita}>
                        <div className="">
                          <div className="text-gray-700 font-bold xl:text-[16px] lg:text-[16px] md:text-[12px] text-[12px]">
                            Kembali
                          </div>
                          <div className="text-black font-bold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[14px]">
                            {prevBerita.judul.substring(0, 50)}...
                          </div>
                        </div>
                      </div>
                    )}
                    {nextBerita && (
                      <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 cursor-pointer" onClick={handleNextBerita}>
                        <div className="text-end">
                          <div className="text-gray-700 font-bold xl:text-[16px] lg:text-[16px] md:text-[12px] text-[12px]">
                            Selanjutnya
                          </div>
                          <div className="text-black font-bold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[14px]">
                            {nextBerita.judul.substring(0, 50)}...
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12 xl:ps-[40px] lg:ps-[20px] md:ps-0 ps-0 xl:mt-0 lg:mt-0 md:mt-[50px] mt-[50px]">
              <div>
                <div className="font-bold xl:text-[24px] lg:text-[24px] md:text-[24px] text-[20px] text-black mb-[25px] xl:text-start md:text-center">
                  Berita Terbaru
                </div>
                <div className="xl:flex-col lg:flex-col md:flex xl:justify-normal lg:justify-normal md:justify-center justify-normal">
                  {topThreeBerita.map((items, index) => (
                    <div key={index} onClick={() => getBeritaWithID(items)} className="xl:flex-col lg:flex-col md:flex-col flex xl:w-[230px] lg:w-[230px] md:w-[140px] w-full xl:mx-0 xl:items-start lg:items-start md:items-start items-center lg:mx-[10px] md:mx-[10px] xl:my-[20px] lg:my-[20px] md:my-0 my-[20px] cursor-pointer">
                      <div className="xl:w-[230px] lg:w-[230px] md:w-[140px] w-[140px]">
                        <div className="xl:w-[230px] xl:h-[153px] lg:w-[230px] lg:h-[153px] md:w-[140px] md:h-[93px] w-[140px] relative">
                          {/* <Image src={items.gambar} width={230} height={153} className="w-full h-full object-cover" /> */}
                          <img
                            className="w-64 h-40"
                            src={items.gambar}
                            alt="News"
                          />
                        </div>
                      </div>
                      <div className="xl:mt-[10px] lg:mt-[10px] md:mt-[10px] mt-0 xl:w-[230px] lg:w-[230px] md:w-[140px] w-auto xl:ms-0 lg:ms-0 md:ms-0 ms-[20px]">
                        <div className="font-bold text-black xl:text-[18px] lg:text-[16px] md:text-[14px] xl:text-center lg:text-center md:text-center text-start">
                          {items.judul}
                        </div>
                      </div>
                    </div>
                  ))}
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

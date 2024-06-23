import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Landing = () => {
  const [berita, setBerita] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("/api/berita?id=");
    setBerita(response.data);
  };

  const router = useRouter();
  const getBeritaWithID = (data) => {
    router.push(`/detail_berita?id=${encodeURIComponent(data.id)}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topThreeBerita = berita
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

  return (
    <main>
      <Navbar />
      <div className="container-fluid xl:px-[80px] lg:px-[40px] md:px-[40px] px-[10px]">
        {/* Hero Section */}
        <section className="mt-[150px] flex justify-center">
          <div className="bg-gray-500 w-full xl:h-[500px] lg:h-[400px] md:h-[350px] h-[250px] relative">
            <Image
              src="/bg-heroSection.png"
              width={1280}
              height={500}
              className="w-full h-full object-cover filter brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-[15px] text-center">
              <div className="font-extrabold xl:text-[64px] lg:text-[48px] mb-[18px] md:text-[36px] text-[26px]">
                DESA SIAGA{" "}
                <span className="font-extrabold xl:text-[64px] lg:text-[48px] text-primary-default md:text-[36px]">
                  DESA TANGGUH
                </span>
              </div>
              <div className="font-bold xl:text-[24px] lg:text-[20px] md:text-[16px] text-[14px]">
                Selamat Datang Website Kebencanaan Kabupaten Jember
              </div>
              <div className="flex justify-center xl:mt-20 lg:mt-20 md:mt-10 mt-[20px]">
                <button
                  type="submit"
                  className="xl:w-[370px] xl:h-[55px] lg:w-[250px] lg:h-[45px] bg-secondary-default rounded-[10px] xl:text-[24px] lg:text-[18px] font-bold md:text-[16px] text-[14px] md:w-[250px] md:h-[45px] w-[200px] h-[35px]"
                >
                  Lihat Data Statistik
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Line Section */}
        <section className="my-[56px] flex justify-center">
          <div className="w-full h-[108px] bg-primary-default flex items-center px-[32px]">
            <div className="font-bold xl:text-[20px] lg:text-[16px] md:text-[14px] text-[14px]">
              Kontrol Kebencanaan Di Kabupaten Jember Dengan Website Kami.....
            </div>
          </div>
        </section>

        {/* Berita Section*/}
        <section className="mb-[56px]">
          <div className="grid grid-cols-12">
            <div className="xl:col-span-8 lg:col-span-12 md:col-span-12 col-span-12">
              {berita.map((items, index) => {
                const date = new Date(items.created_at); // Mengubah timestamp menjadi objek Date
                const formattedDate = date.toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                });

                return (
                  <div key={index} className="grid grid-cols-12 mb-[20px]">
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                      <div className="w-full h-full">
                        <img
                          className="w-64 h-52"
                          src={items.gambar}
                          alt="News"
                        />
                      </div>
                    </div>
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:ps-7 lg:ps-7 md:ps-7 ps-0 xl:mt-[0px] lg:mt-[0px] md:mt-[0px] mt-[10px] flex items-center">
                      <div>
                        <div className="font-bold xl:text-[24px] lg:text-[20px] text-black md:text-[18px]">
                          {items.judul}
                        </div>
                        <div className="font-normal xl:text-[20px] lg:text-[16px] text-gray-600 md:text-[16px]">
                          {formattedDate}
                        </div>
                        <div className="font-normal xl:text-[20px] lg:text-[18px] text-black my-2 md:text-[14px]">
                          {items.deskripsi}
                        </div>
                        <div className="xl:mt-[40px] lg:mt-[40px] md:mt-[20px] mt-[20px]">
                          {/* <Link href="/detail_berita"> */}
                          <button
                            // type="submit"
                            onClick={() => getBeritaWithID(items)}
                            className="xl:w-[200px] xl:h-[50px] lg:w-[200px] lg:h-[50px] bg-secondary-default xl:text-[14px] lg:text-[14px] font-bold md:w-[180px] md:h-[40px] w-[200px] h-[40px] md:text-[12px]"
                          >
                            Baca Selengkapnya
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="xl:mt-[40px] lg:my-[40px] md:my-[30px] my-[30px] flex justify-center">
                <Link href="">
                  <button
                    type="submit"
                    className="xl:w-[200px] xl:h-[50px] lg:w-[200px] lg:h-[50px] bg-secondary-default xl:text-[14px] lg:text-[14px] font-bold md:w-[180px] md:h-[40px] w-[180px] h-[40px] md:text-[12px]"
                  >
                    Lihat Lainnya
                  </button>
                </Link>
              </div>
            </div>

            <div className="xl:col-span-4 lg:col-span-12 md:col-span-12 col-span-12 xl:ps-[50px]">
              <div>
                <div className="font-bold xl:text-[24px] lg:text-[24px] md:text-[24px] text-[20px] text-black mb-[25px] xl:text-start md:text-center">
                  Berita Terbaru
                </div>
                {topThreeBerita.map((items, index) => (
                  <div
                    key={index}
                    className="xl:w-full xl:flex-col lg:w-full lg:flex md:flex"
                  >
                    <div className="xl:flex xl:mx-0 lg:flex md:flex-col flex xl:items-start lg:items-start md:items-start items-center lg:mx-[10px] md:mx-[10px] xl:my-[20px] lg:my-[20px] md:my-0 my-[20px]">
                      <div>
                        <div className="xl:w-[230px] xl:h-[153px] lg:w-[230px] lg:h-[153px] md:w-[140px] md:h-[93px] w-[140px] relative">
                          {/* <Image src={items.gambar} width={230} height={153} className="w-full h-full object-cover" /> */}
                          <img
                            className="w-64 h-40"
                            src={items.gambar}
                            alt="News"
                          />
                        </div>
                      </div>
                      <div className="xl:mt-0 md:mt-[10px] xl:w-[230px] lg:w-[230px] md:w-[140px] w-full xl:ms-0 lg:ms-0 md:ms-0 ms-[20px]">
                        <div className="font-bold text-black xl:text-[18px] lg:text-[16px] md:text-[14px] xl:text-center lg:text-center md:text-center text-start">
                          {items.judul}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Landing;

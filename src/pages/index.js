import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <main>
      <Navbar />
      <div className="container-fluid px-[80px]">
        {/* Hero Section */}
        <section className="mt-[150px] flex justify-center">
          <div className="bg-gray-500 w-full h-[500px] relative">
            <Image
              src="/bg-heroSection.png"
              width={1280}
              height={500}
              className="w-full h-full object-cover filter brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="font-extrabold text-[64px] mb-[18px]">
                DESA SIAGA{" "}
                <span className="font-extrabold text-[64px] text-primary-default">
                  DESA TANGGUH
                </span>
              </div>
              <div className="font-bold text-[24px]">
                Selamat Datang Website Kebencanaan Kabupaten Jember
              </div>
              <div className="flex justify-center mt-20">
                <button
                  type="submit"
                  className="w-[370px] h-[55px] bg-secondary-default rounded-[10px] text-[24px] font-bold"
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
            <div className="font-bold text-[20px]">
              Kontrol Kebencanaan Di Kabupaten Jember Dengan Website Kami.....
            </div>
          </div>
        </section>

        {/* Berita Section*/}
        <section className="mb-[56px]">
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div className="grid grid-cols-12">
                <div className="col-span-6">
                  <div className="w-full h-full">
                    <Image src="/berita-1.png" width={530} height={374} />
                  </div>
                </div>
                <div className="col-span-6 ps-7 flex items-center">
                  <div className="">
                    <div className="font-bold text-[24px] text-black">
                      Lorem ipsum is placeholder
                    </div>
                    <div className="font-normal text-[20px] text-gray-600">
                      Febuary 13, 2024
                    </div>
                    <div className="font-normal text-[20px] text-black my-2">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups.......
                    </div>
                    <div className="mt-[40px]">
                      <Link href="/detail_berita">
                        <button
                          type="submit"
                          className="w-[200px] h-[50px] bg-secondary-default text-[14px] font-bold"
                        >
                          Baca Selengkapnya
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[40px] flex justify-center">
                <Link href="">
                  <button
                    type="submit"
                    className="w-[200px] h-[50px] bg-secondary-default text-[14px] font-bold"
                  >
                    Lihat Lainnya
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-4 ps-[50px]">
              <div>
                <div className="font-bold text-[24px] text-black mb-[25px]">
                  Berita Terbaru
                </div>
                <div className="grid grid-cols-12 mb-[25px]">
                  <div className="col-span-6">
                    <Image src="/berita-1.png" width={230} height={153} />
                  </div>
                  <div className="col-span-6 flex items-center">
                    <div className="font-bold text-black text-[20px] ms-3">
                      Lorem ipsum is placeholder
                    </div>
                  </div>
                </div>
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

import Link from "next/link";
import Image from "next/image";
import bgAncaman from '../../../../../public/bg-2.jpg'
import Router from "next/router";

const AncamanRentan = () => {
  const handleBack = () => {
    Router.back();
  };
  const nextKuisioner = () => {
    Router.push('/dashboard/kajianResiko/kebijakanPeraturan');
  };
  return (
    <section className="container-fluid h-full relative">
        <div className="absolute -z-10 inset-0">
            <Image
                src={bgAncaman}
                alt="bg-image"
                className="h-full"
            />
        </div>
        <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
            <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">Kuisioner Kajian Resiko Bencana/Krisis Kesehatan</div>
            <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
                <form>
                    <div>
                        <div className="text-black font-bold xl:text-[28px] lg:text-[28px] md:text-[24px] text-[22px] text-center mb-[50px]">Ancaman Bencana Hazard</div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-md text-black">
                            Jenis ancaman bencana di desa (alam, non alam atau sosial)
                            </label>
                            <textarea
                            className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                            type="text"
                            />
                        </div>
                        <div className="flex flex-col mt-[28px] mb-[50px]">
                            <label className="font-semibold text-md text-black">
                            Riwayat kejadian krisis kesehatan 5 tahun terakhir  
                            </label>
                            <textarea
                            className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                            type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="text-black font-bold xl:text-[28px] lg:text-[28px] md:text-[24px] text-[22px] text-center mb-[50px]">Kelompok Rentan</div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-md text-black">
                            Nama Dusun
                            </label>
                            <input
                            className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                            type="text"
                            />
                        </div>
                        <div className="grid grid-cols-12 mt-[28px]">
                            <div className="col-span-6">
                                <div className="me-[14px]">
                                    <div className="flex flex-col">
                                        <label className="font-semibold text-md text-black">
                                        Bayi
                                        </label>
                                        <input
                                        className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                                        type="number"
                                        />
                                    </div>
                                    <div className="flex flex-col my-[28px]">
                                        <label className="font-semibold text-md text-black">
                                        Anak- anak
                                        </label>
                                        <input
                                        className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                                        type="number"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-semibold text-md text-black">
                                        Penyandang Cacat
                                        </label>
                                        <input
                                        className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                                        type="number"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className="ms-[14px]">
                                    <div className="flex flex-col">
                                        <label className="font-semibold text-md text-black">
                                        Balita
                                        </label>
                                        <input
                                        className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                                        type="number"
                                        />
                                    </div>
                                    <div className="flex flex-col my-[28px]">
                                        <label className="font-semibold text-md text-black">
                                        Ibu Menyusui
                                        </label>
                                        <input
                                        className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                                        type="number"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-semibold text-md text-black">
                                        Lanjut Usia
                                        </label>
                                        <input
                                        className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                                        type="number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="my-5 w-full">
                <div className="grid grid-cols-12">
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-[14px] lg:me-[14px] md:me-[14px] me-0">
                        <button
                            type=""
                            className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                            onClick={handleBack}
                        >
                            Kembali 
                        </button>
                    </div>
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:ms-[14px] lg:ms-[14px] md:ms-[14px] ms-0 xl:mt-0 lg:mt-0 md:mt-0 mt-4">
                        <button
                            type=""
                            onClick={nextKuisioner}
                            className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                        >
                            Lanjut Kuisioner Berikutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AncamanRentan;

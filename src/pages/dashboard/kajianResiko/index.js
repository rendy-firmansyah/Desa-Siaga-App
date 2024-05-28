import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../public/bg-2.jpg";
import Router from "next/router";

const KajianResiko = () => {
    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDesa, setSelectedDesa] = useState("");
  
    const handleKecSelect = (kec) => {
      setSelectedKec(kec);
    };
    const handleDesaSelect = (desa) => {
      setSelectedDesa(desa);
    };

  const kuisioner = () => {
    Router.push('/dashboard/kajianResiko/ancamanRentan');
  };
  return (
    <section className="container-fluid h-screen relative">
        <div className="absolute -z-10 inset-0">
            <Image
                src={bgDashboard}
                alt="bg-image"
                className="h-full"
            />
        </div>
        <div className="h-full flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
            <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center">Pilih Wilayah Kecamatan dan Desa</div>
            <div className="w-[700px] bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
                <div className="">
                    <div className="flex flex-col mt-2">
                        <label className="font-semibold text-md text-black text-center">
                        Pilih Kecamatan
                        </label>
                        <select
                        className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                        onChange={(e) => handleKecSelect(e.target.value)}
                        >
                        <option value="Pilih......">Pilih......</option>
                        <option value="Kecamatan 1">Kecamatan 1</option>
                        <option value="Kecamatan 2">Kecamatan 2</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label className="font-semibold text-md text-black text-center">
                        Pilih Desa
                        </label>
                        <select
                            className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                            onChange={(e) => handleDesaSelect(e.target.value)}
                        >
                            <option value="Pilih......">Pilih......</option>
                            <option value="Kecamatan 1">Kecamatan 1</option>
                            <option value="Kecamatan 2">Kecamatan 2</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="my-5 w-[700px]">
                <button
                    type=""
                    onClick={kuisioner}
                    className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                >
                    Lanjut Kuisioner
                </button>
            </div>
        </div>
    </section>
  );
};

export default KajianResiko;

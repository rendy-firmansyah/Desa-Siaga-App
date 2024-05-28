import Link from "next/link";
import Image from "next/image";
import bgKesimpulan from '../../../../../public/bg-2.jpg';
import Router from "next/router";

const Kesimpulan = () => {
    const handleBack = () => {
      Router.back();
    };

    return (
        <section className="container-fluid h-screen relative">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={bgKesimpulan}
                    alt="bg-image"
                    className="h-full"
                />
            </div>
            <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
                <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">Kuisioner Kajian Resiko Bencana/Krisis Kesehatan</div>
                <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
                    <div className="text-black font-semibold text-[16px]">Kesimpulan</div>
                    <div className="my-[20px] w-full h-[50px] rounded bg-input-default border border-primary-default" />
                </div>

                <div className="my-5 w-full">
                    <button
                        type=""
                        className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                        onClick={handleBack}
                    >
                        Kembali ke Dashboard 
                    </button>   
                </div>
            </div>
        </section>
    )
};

export default Kesimpulan


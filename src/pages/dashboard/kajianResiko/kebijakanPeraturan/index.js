import Link from "next/link";
import Image from "next/image";
import bgKebijakan from '../../../../../public/bg-2.jpg';
import Router from "next/router";

const KebijakanPeraturan = () => {
    const handleBack = () => {
      Router.back();
    };

    return (
        <section className="container-fluid h-full relative">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={bgKebijakan}
                    alt="bg-image"
                    className="h-full"
                />
            </div>
            <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
                <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">Kuisioner Kajian Resiko Bencana/Krisis Kesehatan</div>
                <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
                    <div className="text-black font-semibold text-[16px]">Kebijakan/Peraturan</div>
                    <div className="my-[20px] w-full h-[50px] rounded bg-input-default border border-primary-default" />
                    <form>
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-0 lg:me-0 md:me-[20px] me-0">
                                <div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">a. Peraturan pemerintah desa terkait penanggulangan bencana/krisis kesehatan</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ada</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">b. Peraturan pemerintah desa terkait penanggulangan bencana/krisis kesehatan</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ada</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">c. Tersedia/SOP mekanisme koordinasi terkait tim tanggap bencana</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ada</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">d. Pelaksanaan pertemuan koordinasi klaster kesehatan dan tanggap bencana</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Rutin, walau tidak terjadi bencana</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Sewaktu-waktu bila ada kejadian bencana/krisis Kesehatan</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Pernah</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">e. Unit di desa yang yang memiliki tugas mengkoordinasikan upaya penanggulangan bencana/krisis kesehatan</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ada</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">f. SK klaster kesehatan desa</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ada</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">g. Desa telah mengidentifikasi institusi/lembaga non pemerintah yang dilibatkan dalam penanggulangan krisis kesehatan</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Dilakukan</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Dilakukan</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">h. Desa pernah mengadakan MoU dengan LSM/instansi/Lembaga non pemerintah dalam penanggulangan krisis kesehatan</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ya</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak</label>
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
                            <Link href='/dashboard/kajianResiko/penguatanKapasitas'>
                                <button
                                    type=""
                                    className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                                >
                                    Lanjut Kuisioner Berikutnya
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default KebijakanPeraturan


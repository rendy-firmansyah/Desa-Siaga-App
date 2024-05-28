import Link from "next/link";
import Image from "next/image";
import bgMitigasi from '../../../../../public/bg-2.jpg';
import Router from "next/router";

const Mitigasi = () => {
    const handleBack = () => {
      Router.back();
    };

    return (
        <section className="container-fluid h-full relative">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={bgMitigasi}
                    alt="bg-image"
                    className="h-full"
                />
            </div>
            <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
                <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">Kuisioner Kajian Resiko Bencana/Krisis Kesehatan</div>
                <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
                    <div className="text-black font-semibold text-[16px]">Mitigasi</div>
                    <div className="my-[20px] w-full h-[50px] rounded bg-input-default border border-primary-default" />
                    <form>
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-0 lg:me-0 md:me-[20px] me-0">
                                <div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">a. Fasilitas kepada Masyarakat dalam rangka pemberdayaan penanggulangan bencana/krisis kesehatan</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Melakukan</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Melakukan</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">b. Peta/pemetaan kapasitas sumber daya yang dapat digunakan untuk penanggulangan bencana/krisis kesehatan</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Memiliki</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Memiliki</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">c. Peta/pemetaan kelompok rentan per dusun</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Memiliki</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Memiliki</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">d. Peta/pemetaan jenis bencana per dusun</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Memiliki</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Memiliki</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">e. Peta arah evakuasi</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">f. Petunjuk jalur evakuasi</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ada</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">g. Desa mengalokasikan anggaran dana untuk penanggulangan bencana/risiko kesehatan</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">h. Data kejadian bencana/krisis kesehatan 5 tahun terakhir</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">i. Data kontak person pemegang program penanggulangan bencana/krisis kesehatan</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">j. Media informasi yang dapat diakses oleh seluruh masyarakat untuk meningkatkan kesadaran dalam kesipsiagaan bencana</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">k. Sistem pemantauan 24 jam</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ada</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
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
                            <Link href='/dashboard/kajianResiko/kesiapsiagaan'>
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

export default Mitigasi


import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Konfirm from './konfirmasi'
import bgKesiapsiagaan from '../../../../../public/bg-2.jpg';
import Router from "next/router";

const Kesiapsiagaan = () => {
    const [visibleModal, setVisibleModal] = useState(false);

    const visible = () => {
        setVisibleModal(true);
    };

    const handleCloseModal = () => {
        setVisibleModal(false);
    };

    const handleSimpan = () => {
        visible();
    };

    const handleBack = () => {
      Router.back();
    };

    return (
        <section className="container-fluid h-full relative">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={bgKesiapsiagaan}
                    alt="bg-image"
                    className="h-full"
                />
            </div>
            <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
                <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">Kuisioner Kajian Resiko Bencana/Krisis Kesehatan</div>
                <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
                    <div className="text-black font-semibold text-[16px]">Kesiapsiagaan</div>
                    <div className="my-[20px] w-full h-[50px] rounded bg-input-default border border-primary-default" />
                    <form>
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-0 lg:me-0 md:me-[20px] me-0">
                                <div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">a. Desa menyusun rencana penanggulangan bencana/krisis kesehatan</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">b. Desa melakukan simulasi dari rencana penanggulangan bencana/krisis kesehatan</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">c. SOP penanganan korban bencana dilapangan</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">d. SOP pengelolaan obat dan logistic Kesehatan bencana</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">e. SOP pengelolaan bantuan relawan</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">f. SOP pemantauan kejadian krisis kesehatan</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">g. SOP pelaporan kejadian krisis kesehatan</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Memiliki</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak Memiliki</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">h. SOP system rujukan saat terjadi bencana</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">i. SOP pelayanan kesehatan saat terjadi bencana</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">j. Desa memahami dana tak terduga dalam penanggulangan bencana</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ya</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">k. Sarana prasarana penanggulangan krisis kesehatan</div>
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
                                        <div className="text-black font-semibold text-[16px] my-[10px]">l. Penyediaan sarana prasarana telah menyesuaikan dengan ancaman bencana di desa</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ya</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">m. Sarana prasarana telah mencukupi</div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="ada" value='ada' />
                                            <label className="text-black font-semibold text-[16px]">Ya</label>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <input type="radio" id="tidak" value='tidak' />
                                            <label className="text-black font-semibold text-[16px]">Tidak</label>
                                        </div>
                                    </div>
                                    <div className="mb-[16px]">
                                        <div className="text-black font-semibold text-[16px] my-[10px]">n. Desa memiliki pos pelayanan kebencanaan terpadu</div>
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
                            <button
                                type=""
                                onClick={handleSimpan}
                                className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                            >
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {visibleModal && (
                <Konfirm onClose={handleCloseModal} />
            )}
        </section>
    )
};

export default Kesiapsiagaan


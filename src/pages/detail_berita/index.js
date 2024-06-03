import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";

const DetailBerita = () => {
  return (
    <main>
      <Navbar />
      <div className="container-fluid xl:px-[80px] lg:px-[40px] md:px-[40px] px-[10px]">
        <div className="mt-[150px] mb-[250px]">
            <div className="flex justify-center">
                <div className="w-[754px]">
                    <div className="font-semibold xl:text-[32px] lg:text-[32px] md:text-[24px] text-[20px] text-black text-center">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</div>
                </div>
            </div>
            <div className="mt-[20px] mb-[60px] flex justify-center">
                <div className="text-black font-semibold xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px]">Kec. Puger, Kab. Jember., Sabtu 11 Mei 2024</div>
            </div>
            <div className="grid grid-cols-12">
                <div className="xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12 xl:pe-[50px] lg:pe-[30px] md:pe-0 pe-0">
                    <div className="w-full xl:h-[500px] lg:h-[500px] md:h-[400px] bg-gray-500 relative">
                        <Image src='/berita-1.png' width={800} height={500} className="w-full h-full object-cover"/>
                    </div>
                    <div className="mt-[38px] mb-[82px]">
                        <p className="text-black xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px]">Lorem ipsum dolor sit amet consectetur. Vel volutpat faucibus nulla pellentesque. Pharetra purus non diam non sit. Ac convallis scelerisque augue id. Quis volutpat id faucibus vulputate malesuada tellus. Id nunc luctus congue mollis viverra. Sed cursus cursus nibh blandit. At ac quis risus bibendum curabitur viverra. Commodo nunc magna in nibh viverra dignissim.

Eget sem tortor pretium id tortor aliquet ut amet. Orci dapibus arcu arcu mauris phasellus. Convallis massa orci sapien aenean nulla faucibus aliquet imperdiet porttitor. Turpis lacus in tincidunt nunc leo. Id auctor maecenas venenatis tempus turpis venenatis justo sed vitae. Porta posuere egestas ipsum donec nibh sit. Mattis erat rhoncus nibh egestas dictumst eget. Proin turpis odio ut sapien lectus sit pharetra. Nunc accumsan congue nisl enim consequat faucibus sed. Praesent non dolor eu morbi amet id egestas diam. Varius praesent elementum velit sit aenean vestibulum dictumst lobortis eu. Eget enim ac in risus. Odio a sit facilisis in id proin in.

Neque vel at sit morbi facilisis lobortis faucibus in ipsum. Feugiat nunc sit aliquam massa. At et diam interdum ut tincidunt malesuada consequat morbi. Sed duis leo in elementum purus adipiscing vel. Euismod ornare euismod in ac non eget pharetra in sit.

Id pulvinar bibendum a nullam sem gravida amet quis. Praesent id eu rutrum turpis lobortis amet senectus enim id. Id in ut egestas quis etiam porttitor hendrerit. Proin cursus donec vitae id sem tellus neque posuere amet. Faucibus eget risus ultricies nunc volutpat commodo eu enim nibh. Dolor scelerisque fermentum urna ipsum libero ligula at ut. Venenatis vestibulum diam id facilisi sodales. Nunc hendrerit consectetur nunc phasellus turpis vulputate. Pellentesque dictumst amet est aliquet tellus quam ut in aliquam. Turpis vestibulum sit aliquet nibh nunc nam orci dolor quis.

Maecenas duis tristique erat donec urna. Urna velit quisque augue pellentesque condimentum urna ac. Tincidunt pellentesque metus nulla amet integer. Ut et pulvinar quisque tristique ut eros amet nibh pulvinar. Id lorem est elit leo duis dolor. Venenatis adipiscing a ornare platea suspendisse accumsan dui. Est porttitor gravida vitae lectus sit ullamcorper enim. Ipsum tincidunt quis sollicitudin pharetra laoreet sagittis quam. Tempor aenean facilisis pellentesque nam a placerat amet ac. Dolor viverra porttitor erat at consequat diam ut.</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="xl:w-[800px] lg:w-[800px] md:w-[600px] w-full">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <div className="xl:w-[100px] lg:w-[100px] md:w-[100px] w-[30px] xl:h-[100px] lg:h-[100px] md:h-[100px] h-[30px] relative">
                                        <Image src='/berita-1.png' width={800} height={500} className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="ms-[16px] w-[150px]">
                                        <div className="text-gray-700 font-bold xl:text-[16px] lg:text-[16px] md:text-[12px] text-[12px]">Kembali</div>
                                        <div className="text-black font-bold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[14px]">Lorem ipsum is placeholder</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="me-[16px] w-[150px] text-end">
                                        <div className="text-gray-700 font-bold xl:text-[16px] lg:text-[16px] md:text-[12px] text-[12px]">Selanjutnya</div>
                                        <div className="text-black font-bold xl:text-[20px] lg:text-[20px] md:text-[16px] text-[14px]">Lorem ipsum is placeholder</div>
                                    </div>
                                    <div className="xl:w-[100px] lg:w-[100px] md:w-[100px] w-[30px] xl:h-[100px] lg:h-[100px] md:h-[100px] h-[30px] relative">
                                        <Image src='/berita-1.png' width={800} height={500} className="w-full h-full object-cover"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12 xl:ps-[40px] lg:ps-[20px] md:ps-0 ps-0 xl:mt-0 lg:mt-0 md:mt-[50px] mt-[50px]">
                    <div>
                        <div className="font-bold xl:text-[24px] lg:text-[24px] md:text-[24px] text-[20px] text-black mb-[25px] xl:text-start lg:text-start md:text-center text-center">Berita Terbaru</div>
                        <div className="xl:w-full xl:flex-col lg:w-full lg:flex-col md:flex">
                            <div className="xl:flex xl:mx-0 lg:flex md:flex-col flex xl:items-start lg:items-start md:items-start items-center lg:mx-[0px] md:mx-[10px] xl:my-[20px] lg:my-[20px] md:my-0 my-[20px]">
                                <div>
                                    <div className="xl:w-[230px] xl:h-[153px] lg:w-[230px] lg:h-[153px] md:w-[140px] md:h-[93px] w-[140px] relative">
                                        <Image src="/berita-1.png" width={230} height={153} className="w-full h-full object-cover" />
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
                                        <Image src="/berita-1.png" width={230} height={153} className="w-full h-full object-cover" />
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
  )
}

export default DetailBerita
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";

const DetailBerita = () => {
  return (
    <main>
      <Navbar />
      <div className="container-fluid px-[80px]">
        <div className="mt-[150px] mb-[250px]">
            <div className="flex justify-center">
                <div className="w-[754px]">
                    <div className="font-semibold text-[32px] text-black text-center">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</div>
                </div>
            </div>
            <div className="mt-[20px] mb-[60px] flex justify-center">
                <div className="text-black font-semibold">Kec. Puger, Kab. Jember., Sabtu 11 Mei 2024</div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-8 pe-[50px]">
                    <div className="w-full h-[500px] bg-gray-500 relative">
                        <Image src='/berita-1.png' width={800} height={500} className="w-full h-full object-cover"/>
                    </div>
                    <div className="mt-[38px] mb-[82px]">
                        <p className="text-black">Lorem ipsum dolor sit amet consectetur. Vel volutpat faucibus nulla pellentesque. Pharetra purus non diam non sit. Ac convallis scelerisque augue id. Quis volutpat id faucibus vulputate malesuada tellus. Id nunc luctus congue mollis viverra. Sed cursus cursus nibh blandit. At ac quis risus bibendum curabitur viverra. Commodo nunc magna in nibh viverra dignissim.

Eget sem tortor pretium id tortor aliquet ut amet. Orci dapibus arcu arcu mauris phasellus. Convallis massa orci sapien aenean nulla faucibus aliquet imperdiet porttitor. Turpis lacus in tincidunt nunc leo. Id auctor maecenas venenatis tempus turpis venenatis justo sed vitae. Porta posuere egestas ipsum donec nibh sit. Mattis erat rhoncus nibh egestas dictumst eget. Proin turpis odio ut sapien lectus sit pharetra. Nunc accumsan congue nisl enim consequat faucibus sed. Praesent non dolor eu morbi amet id egestas diam. Varius praesent elementum velit sit aenean vestibulum dictumst lobortis eu. Eget enim ac in risus. Odio a sit facilisis in id proin in.

Neque vel at sit morbi facilisis lobortis faucibus in ipsum. Feugiat nunc sit aliquam massa. At et diam interdum ut tincidunt malesuada consequat morbi. Sed duis leo in elementum purus adipiscing vel. Euismod ornare euismod in ac non eget pharetra in sit.

Id pulvinar bibendum a nullam sem gravida amet quis. Praesent id eu rutrum turpis lobortis amet senectus enim id. Id in ut egestas quis etiam porttitor hendrerit. Proin cursus donec vitae id sem tellus neque posuere amet. Faucibus eget risus ultricies nunc volutpat commodo eu enim nibh. Dolor scelerisque fermentum urna ipsum libero ligula at ut. Venenatis vestibulum diam id facilisi sodales. Nunc hendrerit consectetur nunc phasellus turpis vulputate. Pellentesque dictumst amet est aliquet tellus quam ut in aliquam. Turpis vestibulum sit aliquet nibh nunc nam orci dolor quis.

Maecenas duis tristique erat donec urna. Urna velit quisque augue pellentesque condimentum urna ac. Tincidunt pellentesque metus nulla amet integer. Ut et pulvinar quisque tristique ut eros amet nibh pulvinar. Id lorem est elit leo duis dolor. Venenatis adipiscing a ornare platea suspendisse accumsan dui. Est porttitor gravida vitae lectus sit ullamcorper enim. Ipsum tincidunt quis sollicitudin pharetra laoreet sagittis quam. Tempor aenean facilisis pellentesque nam a placerat amet ac. Dolor viverra porttitor erat at consequat diam ut.</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <div className="w-[100px] h-[100px] relative">
                                <Image src='/berita-1.png' width={800} height={500} className="w-full h-full object-cover"/>
                            </div>
                            <div className="ms-[16px] w-[150px]">
                                <div className="text-gray-700 font-bold text-[16px]">Kembali</div>
                                <div className="text-black font-bold text-[20px]">Lorem ipsum is placeholder</div>
                            </div>
                        </div>
                        <div className="flex items-center ms-[120px]">
                            <div className="me-[16px] w-[150px] text-end">
                                <div className="text-gray-700 font-bold text-[16px]">Selanjutnya</div>
                                <div className="text-black font-bold text-[20px]">Lorem ipsum is placeholder</div>
                            </div>
                            <div className="w-[100px] h-[100px] relative">
                                <Image src='/berita-1.png' width={800} height={500} className="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 ps-[40px]">
                    <div>
                        <div className="font-bold text-[24px] text-black mb-[25px]">Berita Terbaru</div>
                        <div className="grid grid-cols-12 mb-[25px]">
                        <div className="col-span-6">
                            <Image src='/berita-1.png' width={230} height={153} />
                        </div>
                        <div className="col-span-6 flex items-center">
                            <div className="font-bold text-black text-[20px] ms-3">Lorem ipsum is placeholder</div>
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
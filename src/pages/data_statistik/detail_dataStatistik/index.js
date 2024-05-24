import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";

const DetailDataStatistik = () => {
  return (
    <main>
      <Navbar />
      <div className="container-fluid px-[80px]">
        <div className="mt-[150px] mb-[250px]">
            <div className="flex justify-between">
                <div className="text-black font-semibold text-[20px]">Kecamatan Arjasa, Desa Arjasa</div>
                <div className="w-[100px] h-[40px] bg-red-default flex items-center justify-center font-semibold text-[20px] text-black">Status</div>
            </div>
            <div className="w-full bg-white px-[50px] py-[50px] shadow-lg mt-[35px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-6 flex justify-center">
                        <div className="w-[490px]">
                            <div className="text-black font-semibold text-[28px]">Karakteristik Wilayah</div>
                            <div className="mt-[10px] mb-[20px]">
                                <div className="mb-[10px] text-[16px] text-black">Luas Wilayah           <span className="ms-[90px] me-[10px]">:</span>636.000 Ha</div>
                                <div className="mb-[10px] text-[16px] text-black">Letak dan Batas Wilayah<span className="ms-[16px] me-[10px]">:</span>(U) Jelbuk, (S) Kemuning Lor, (B) Darsono, (T) Biting</div>
                                <div className="mb-[10px] text-[16px] text-black">Dusun dalam Wilayah    <span className="ms-[29px] me-[10px]">:</span>Krajan, Tegalbago, Bendelan, Calok dan Gumitir</div>
                                <div className="mb-[10px] text-[16px] text-black">Jumlah Penduduk        <span className="ms-[58px] me-[10px]">:</span>41.896</div>
                                <div className="mb-[10px] text-[16px] text-black">Akses Komunikasi       <span className="ms-[56px] me-[10px]">:</span>Handphone</div>
                                <div className="text-[16px] text-black">Akses Transportasi     <span className="ms-[52px] me-[10px]">:</span>Roda Dua dan Roda Empat</div>
                            </div>
                            <div className="text-black font-semibold text-[28px]">Kelompok Rentan</div>
                            <div className="mt-[10px] mb-[20px]">
                                <div className="mb-[10px] text-[16px] text-black">Bayi <span className="ms-[154px] me-[10px]">:</span>205 orang</div>
                                <div className="mb-[10px] text-[16px] text-black">Balita <span className="ms-[144px] me-[10px]">:</span>453 orang</div>
                                <div className="mb-[10px] text-[16px] text-black">Ibu Hamil dan Menyusui <span className="ms-[10px] me-[10px]">:</span>67 orang</div>
                                <div className="mb-[10px] text-[16px] text-black">Lansia <span className="ms-[138px] me-[10px]">:</span>3.915 orang</div>
                                <div className="mb-[10px] text-[16px] text-black">Sakit Fisik <span className="ms-[113px] me-[10px]">:</span>23 orang</div>
                                <div className="text-[16px] text-black">Disabilitas <span className="ms-[110px] me-[10px]">:</span>4 orang</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 flex justify-center">
                        <div className="w-[490px]">
                            <div>
                                <div className="text-black font-semibold text-[28px] mb-[10px]">Jenis Bencana</div>
                                <div className="text-black text-[16px] mb-[20px]">Banjir</div>
                            </div>
                            <div>
                                <div className="text-black font-semibold text-[28px] mb-[10px]">Dusun yang Terdampak</div>
                                <div className="text-black text-[16px] mb-[20px]">Dusun Krajan, Dusun Tegalbago dan Dusun Calok</div>
                            </div>
                            <div className="text-black font-semibold text-[28px]">Jumlah Korban</div>
                            <div className="mt-[10px] mb-[20px]">
                                <div className="mb-[10px] text-[16px] text-black">Luka Ringan <span className="ms-[20px] me-[10px]">:</span>5 orang</div>
                                <div className="mb-[10px] text-[16px] text-black">Luka Berat <span className="ms-[33px] me-[10px]">:</span>-</div>
                                <div className="mb-[10px] text-[16px] text-black">Meninggal <span className="ms-[32px] me-[10px]">:</span>-</div>
                                <div className="mb-[10px] text-[16px] text-black">Hilang <span className="ms-[62px] me-[10px]">:</span>2 orang</div>
                                <div className="mb-[10px] text-[16px] text-black">Pengungsi <span className="ms-[34px] me-[10px]">:</span>15 orang</div>
                            </div>
                            <div>
                                <div className="text-black font-semibold text-[28px] mb-[10px]">Fasilitas yang Rusak</div>
                                <div className="text-black text-[16px] mb-[20px]">Masjid Al Hikmah dan SDN Arjasa 03</div>
                            </div>
                            <div>
                                <div className="text-black font-semibold text-[28px] mb-[10px]">Upaya yang telah dilakukan</div>
                                <div className="text-black text-[16px] mb-[20px]">Pembentukan posko darurat, pencarian korban hilang, pemberian layanan kesehatan</div>
                            </div>
                            <div>
                                <div className="text-black font-semibold text-[28px] mb-[10px]">Bantuan yang diperlukan</div>
                                <div className="text-black text-[16px] mb-[20px]">Makanan, pakaian</div>
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

export default DetailDataStatistik
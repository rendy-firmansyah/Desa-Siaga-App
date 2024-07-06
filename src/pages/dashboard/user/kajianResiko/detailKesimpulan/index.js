import Link from "next/link";
import Image from "next/image";
import bgKesimpulan from "../../../../../../public/bg-2.jpg";
import Router, { useRouter } from "next/router";
import nookies from "nookies";
import axios from "axios";
import { useEffect, useState } from "react";

//islogin
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role === "super admin") {
    return {
      redirect: {
        destination: "/dashboard/superAdmin",
      },
    };
  }

  return {
    props: {
      userId: cookies.user_id,
    },
  };
}

const Kesimpulan = ({userId}) => {
  const handleBack = () => {
    Router.push("/dashboard/user");
  };

  const router = useRouter();
  const { id, namaUser, namaKec, namaDes, tanggal } = router.query;

  console.log(namaUser)
  const [data, setdata] = useState([]);
  const [sesuai, setsesuai] = useState();
  const [tidakSesuai, settidakSesuai] = useState();
  const [datakategori, setdataKategori] = useState("");

  const getData = async () => {
    const res = await axios.get(`/api/pengkajian?id=${id}`);
    // console.log(res.data);
    setdata(res.data);
  };

  const totalSesuai = () => {
    const value =
      data.peraturanSesuai +
      data.kapasitasSesuai +
      data.peringatanSesuai +
      data.mitigasiSesuai +
      data.kesiapsiagaanSesuai;

    console.log(value);
    setsesuai(value);
  };

  const totalTidakSesuai = () => {
    const nilai =
      data.peraturanTidak +
      data.kapasitasTidak +
      data.peringatanTidak +
      data.mitigasiTidak +
      data.kesiapsiagaanTidak;
    console.log(nilai);
    settidakSesuai(nilai);
  };

  const kondisionalDesa = () => {
    if (data.persentase < 33) {
      const kategori = "RENDAH";
      setdataKategori(kategori);
    } else if (data.persentase > 33 && data.persentase < 66) {
      const kategori = "SEDANG";
      setdataKategori(kategori);
    } else if (data.persentase > 66 && data.persentase <= 100) {
      const kategori = "TINGGI";
      setdataKategori(kategori);
    }
  };

  useEffect(() => {
    getData();
    totalSesuai();
    totalTidakSesuai();
    kondisionalDesa();
  }, [data, datakategori]);

  return (
    <section className="container-fluid h-full relative">
      <div className="absolute -z-10 inset-0">
        <Image src={bgKesimpulan} alt="bg-image" className="h-full" />
      </div>
      <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
        <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">
          Kuisioner Kajian Resiko Bencana/Krisis Kesehatan
        </div>
        <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
          <div className="text-black font-semibold text-[16px]">Kesimpulan</div>
          <div className="mt-[20px] w-full h-[50px] rounded bg-input-default border border-primary-default" />
          <div className="flex justify-between my-[15px]">
            <div>
              <div className="text-black font-semibold text-[16px]">Nama <span className="ms-[40px] me-[10px]">:</span> {namaUser}</div>
              <div className="text-black font-semibold text-[16px]">Kecamatan <span className="ms-[3px] me-[10px]">:</span> {namaKec}</div>
              <div className="text-black font-semibold text-[16px]">Desa <span className="ms-[48px] me-[10px]">:</span> {namaDes}</div>
            </div>
            <div>
              <div className="text-black font-semibold text-[16px]">Tanggal <span>:</span> {tanggal}</div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border-2 shadow-lg shad">
              <thead className="">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Indikator
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jumlah Indikator
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sesuai Standart
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tidak Sesuai Standart
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="text-black px-6 py-4 whitespace-nowrap">1</td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    Kebijakan/Peraturan
                  </td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">8</td>
                  {/* Sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.peraturanSesuai}
                  </td>
                  {/* Tidak */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.peraturanTidak}
                  </td>
                </tr>
                <tr>
                  <td className="text-black px-6 py-4 whitespace-nowrap">2</td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    Penguatan Kapasitas
                  </td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">8</td>
                  {/* Sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.kapasitasSesuai}
                  </td>
                  {/* Tidak */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.kapasitasTidak}
                  </td>
                </tr>
                <tr>
                  <td className="text-black px-6 py-4 whitespace-nowrap">3</td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    Peringatan Dini
                  </td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">2</td>
                  {/* Sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.peringatanSesuai}
                  </td>
                  {/* Tidak */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.peringatanTidak}
                  </td>
                </tr>
                <tr>
                  <td className="text-black px-6 py-4 whitespace-nowrap">4</td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    Mitigasi
                  </td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">11</td>
                  {/* Sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.mitigasiSesuai}
                  </td>
                  {/* Tidak */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.mitigasiTidak}
                  </td>
                </tr>
                <tr>
                  <td className="text-black px-6 py-4 whitespace-nowrap">5</td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    Kesiapsiagaan
                  </td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">14</td>
                  {/* Sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.kesiapsiagaanSesuai}
                  </td>
                  {/* Tidak */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.kesiapsiagaanTidak}
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-black px-6 py-4 whitespace-nowrap"
                    colSpan="2"
                  >
                    Total Pencapaian
                  </td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">43</td>
                  {/* Total Sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {sesuai}
                  </td>
                  {/* Total tidak sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {tidakSesuai}
                  </td>
                </tr>
                <tr>
                  <td
                    className="text-black px-6 py-4 whitespace-nowrap"
                    colSpan="2"
                  >
                    Persentase
                  </td>
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    100%
                  </td>
                  {/* Persentase Sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap">
                    {data.persentase}%
                  </td>
                  {/* Persentase Tidak Sesuai */}
                  <td className="text-black px-6 py-4 whitespace-nowrap"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-[20px]">
            <div className="text-black font-bold text-[28px]">KETERANGAN :</div>
            {/*  */}
            <div className="my-[10px]">
              <div className="text-black font-semibold text-[16px] mb-[10px]">
                Pengkategorian Tingkat kapasitas Desa adalah sebagai berikut:
              </div>
              <div className="text-black font-semibold text-[16px] mb-[10px]">
                Rendah <span className="ms-[50px] me-[10px]">:</span>pencapaian
                1% - 33% dari seluruh indicator
              </div>
              <div className="text-black font-semibold text-[16px] mb-[10px]">
                Sedang <span className="ms-[50px] me-[10px]">:</span>pencapaian
                34% - 66% dari seluruh indicator
              </div>
              <div className="text-black font-semibold text-[16px] mb-[10px]">
                Tinggi <span className="ms-[60px] me-[10px]">:</span>pencapaian
                67% - 100% dari seluruh indicator
              </div>
            </div>
          </div>
          <div className="border bg-white p-3 rounded-md shadow-md">
            <h1 className="text-primary-default font-bold text-center">
              Desa anda memasuki pengkategorian tingkat kapasitas desa
              <span className="text-primary-dark"> "{datakategori}"</span>
            </h1>
          </div>
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
  );
};

export default Kesimpulan;

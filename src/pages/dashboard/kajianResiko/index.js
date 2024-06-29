import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../public/bg-2.jpg";
import Router from "next/router";
import axios from "axios";
import { useRouter } from "next/router";
import nookies from "nookies";

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
    props: {},
  };
}

const KajianResiko = () => {
  const router = useRouter();

  const [selectedKec, setSelectedKec] = useState("");
  const [selectedDesa, setSelectedDesa] = useState("");
  const [dataKecamatan, setDataKec] = useState([]);
  const [dataDesa, setDataDesa] = useState([]);

  const kuisioner = () => {
    router.push(
      `/dashboard/kajianResiko/ancamanRentan?id=${encodeURIComponent(
        selectedDesa
      )}`
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/Kecamatan");
      setDataKec(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/desa?id=${selectedKec}`);
      setDataDesa(response.data);
    };
    fetchData();
  }, [selectedKec]);
  return (
    <section className="container-fluid h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image src={bgDashboard} alt="bg-image" className="h-full" />
      </div>
      <div className="h-full flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
        <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center">
          Pilih Wilayah Kecamatan dan Desa
        </div>
        <div className="w-[700px] bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
          <div className="">
            <div className="flex flex-col mt-2">
              <label className="font-semibold text-md text-black text-center">
                Pilih Kecamatan
              </label>
              <select
                className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                onChange={(e) => setSelectedKec(e.target.value)}
              >
                <option>Pilih......</option>
                {dataKecamatan.map((kec) => (
                  <option value={kec.id}>{kec.nama}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mt-2">
              <label className="font-semibold text-md text-black text-center">
                Pilih Desa
              </label>
              <select
                disabled={!selectedKec ? "disabled" : ""}
                className="border rounded p-2 mt-1 text-black border-primary-default bg-input-default"
                onChange={(e) => setSelectedDesa(e.target.value)}
              >
                <option value="Pilih......">Pilih......</option>
                {dataDesa
                  ? dataDesa.map((desa) => (
                      <option value={desa.id}>{desa.nama}</option>
                    ))
                  : null}
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

import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../../public/bg-2.jpg";
import Router from "next/router";

const PelaporanBencana = () => {
  const handleBack = () => {
    Router.back();
  };
  return (
    <section className="container-fluid w-full h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image
          src={bgDashboard}
          alt="background-image"
          className="lg:max-h-screen h-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-screen mx-[50px] md:mx-[200px] lg:mx-[400px] xl:mx-[400px]">
        <h1 className="text-black font-extrabold text-2xl">
          Pilih Wilayah Kecamatan dan Desa
        </h1>
        <div className="flex flex-col w-full bg-white p-10 mt-5 rounded-2xl shadow-lg">
          <div class="relative group">
            <h2 class="text-sm text-black font-medium text-center mb-2">
              Pilih Kecamatan
            </h2>
            <button class="py-2.5 px-3 w-full md:text-sm text-black bg-input-default border-2 border-primary-default focus:border-brand focus:ring-0 peer flex items-center rounded font-semibold">
              Pilih .......
            </button>
            <div class="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-y-scroll max-h-40 shadow-lg min-w-[450px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-primary-default border border-dimmed text-xs md:text-sm">
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Kecamatan 1
              </div>
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Kecamatan 2
              </div>
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Kecamatan 3
              </div>
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Kecamatan 4
              </div>
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Kecamatan 5
              </div>
            </div>
          </div>
          <div class="relative group mt-5">
            <h2 class="text-sm text-black font-medium text-center mb-2">
              Pilih Desa
            </h2>
            <button class="py-2.5 px-3 w-full md:text-sm text-black bg-input-default border-2 border-primary-default border-dimmed  focus:border-brand focus:ring-0 peer flex items-center justify-between rounded font-semibold">
              Pilih .......
            </button>
            <div class="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-y-scroll max-h-40 shadow-lg min-w-[450px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-primary-default border border-dimmed text-xs md:text-sm">
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Desa 1
              </div>
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Desa 2
              </div>
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Desa 3
              </div>
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Desa 4
              </div>
              <div class=" w-full block cursor-pointer bg-primary-default hover:bg-primary-dark hover:text-link px-3 py-2 rounded-md">
                Desa 5
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col w-full justify-between mt-5">
          <div>
            <button
              type="button"
              onClick={handleBack}
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Kembali
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
            >
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PelaporanBencana;

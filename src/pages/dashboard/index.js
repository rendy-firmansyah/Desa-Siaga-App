import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../public/bg-2.jpg";
import menu1 from "../../../public/menu1.png";
import menu2 from "../../../public/menu2.png";
import menu3 from "../../../public/menu3.png";
import menu4 from "../../../public/menu4.png";
import nookies from "nookies";
import Router from "next/router";

//checkuser
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (!cookies.role) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else if (cookies.role == "super admin") {
    return {
      redirect: {
        destination: "/admin",
      },
    };
  }

  return {
    props: {},
  };
}

const Dashboard = () => {
  const logout = () => {
    nookies.destroy(null, "role");
    Router.push("/");
  };

  return (
    <section className="container-fluid lg:h-screen h-full relative">
      <div className="absolute -z-10 inset-0">
        <Image
          src={bgDashboard}
          alt="background-image"
          className="lg:max-h-screen h-full"
        />
      </div>
      <div className="pt-14 mb-8 md:mb-16 lg:mb-16 xl:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-center">
          <span className="text-stroke text-white">DESA SIAGA </span>
          <span className="text-primary-default">DESA TANGGUH</span>
        </h1>

        <style jsx>{`
          .text-stroke {
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #ef8300;
            color: transparent;
          }
        `}</style>
      </div>
      {/* --- */}
      <div className="bg-gray-100 mx-10 md:mx-20 lg:mx-48 xl:mx-48 py-10 rounded-2xl shadow-xl">
        <h1 className="text-black text-3xl font-bold tracking-normal text-center">
          Selamat Datang, Relawan Desa
        </h1>
        <div class="flex flex-wrap justify-center mt-5">
          <Link href="/dashboard/kajianResiko">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default hover:bg-secondary-dark transition-all duration-150 p-8 flex-col">
                <div class="flex items-center">
                  <Image src={menu1} width={64} height={80} />
                </div>
              </div>
              <h4 class="text-black text-md font-medium text-center">
                Form Pengkajian
                <br />
                Risiko Bencana
              </h4>
            </div>
          </Link>

          <Link href="/dashboard/pelaporanBencana">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default hover:bg-secondary-dark transition-all duration-150 p-8 flex-col">
                <div class="flex items-center">
                  <Image src={menu2} width={72} height={80} />
                </div>
              </div>
              <h4 class="text-black text-md font-medium text-center">
                Form Pelaporan
                <br />
                Awal Bencana
              </h4>
            </div>
          </Link>

          <Link href="/dashboard/tulisBerita">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default hover:bg-secondary-dark transition-all duration-150 p-8 flex-col">
                <div class="flex items-center">
                  <Image src={menu3} width={73} height={88} />
                </div>
              </div>
              <h4 class="text-black text-md font-medium text-center">
                Tulis Berita
                <br />
                Bencana Terkini
              </h4>
            </div>
          </Link>

          <Link href="/dashboard/editWilayah">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default hover:bg-secondary-dark transition-all duration-150 p-8 flex-col">
                <div class="flex items-center">
                  <Image src={menu4} width={76} height={80} />
                </div>
              </div>
              <h4 class="text-black text-md font-medium text-center">
                Edit Data
                <br />
                Wilayah
              </h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-5 pb-10">
        <button
          onClick={logout}
          className="bg-secondary-default px-4 py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
        >
          Keluar Dashboard
        </button>
      </div>
    </section>
  );
};

export default Dashboard;

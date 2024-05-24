import Link from "next/link";
import Image from "next/image";
import bgDashboard from "../../../public/bg-dashboard.png";
import menu1 from "../../../public/menu1.png";
import menu2 from "../../../public/menu2.png";
import menu3 from "../../../public/menu3.png";
import menu4 from "../../../public/menu4.png";

const Dashboard = () => {
  return (
    <section className="container-fluid mx-auto my-auto lg:h-screen h-full bg-white">
      <div className="pt-14 mb-16">
        <h1 className="text-6xl font-extrabold text-center">
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
      <div className="bg-gray-100 mx-10 md:mx-48 py-10 rounded-2xl shadow-xl">
        <h1 className="text-black text-3xl font-bold tracking-normal text-center">
          Selamat Datang, Relawan Desa
        </h1>
        <div class="flex flex-wrap justify-center mt-5">
          <Link href="/">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default p-8 flex-col">
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

          <Link href="/">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default p-8 flex-col">
                <div class="flex items-center">
                  <Image src={menu2} width={72} height={80} />
                </div>
              </div>
              <h4 class="text-black text-md font-medium text-center">
                Form Pengkajian
                <br />
                Awal Bencana
              </h4>
            </div>
          </Link>

          <Link href="/">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default p-8 flex-col">
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

          <Link href="/">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default p-8 flex-col">
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
    </section>
  );
};

export default Dashboard;

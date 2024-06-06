import Link from "next/link";
import Image from "next/image";
import bgSuperAdmin from "../../../../public/bg-2.jpg";
import nookies from "nookies";
import Router from "next/router";

//checkuser
// export async function getServerSideProps(ctx) {
//   const cookies = nookies.get(ctx);

//   if (!cookies.role) {
//     return {
//       redirect: {
//         destination: "/",
//       },
//     };
//   } else if (cookies.role == "super admin") {
//     return {
//       redirect: {
//         destination: "/dashboard/superAdmin",
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }

const Dashboard = () => {

  const logout = () => {
    nookies.destroy(null, "role");
    Router.push("/");
  };


  return (
    <section className="container-fluid lg:h-screen h-full relative">
      <div className="absolute -z-10 inset-0">
        <Image
          src={bgSuperAdmin}
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
      <div className="bg-gray-100 mx-10 md:mx-20 lg:mx-80 xl:mx-80 py-10 rounded-2xl shadow-xl">
        <h1 className="text-black text-3xl font-bold tracking-normal text-center">
          Selamat Datang, Relawan Desa
        </h1>
        <div class="flex justify-center mt-5">
          <Link href="/dashboard/superAdmin/buatAkun">
            <div class="p-4 max-w-sm">
              <div class="flex rounded-lg bg-secondary-default hover:bg-secondary-dark transition-all duration-150 p-8 flex-col">
                <div class="flex items-center">
                  <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#ffffff"></path> <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="#ffffff"></path> </g></svg>
                </div>
              </div>
              <h4 class="text-black text-md font-medium text-center">
                Buat Akun
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

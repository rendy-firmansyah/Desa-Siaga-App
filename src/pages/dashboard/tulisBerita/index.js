import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";

const DetailBerita = () => {
  return (
    <div className="max-w-screen-3xl flex flex-col items-center justify-center bg-gray-100">
        <title>Berita Kebencanaan</title>
      
      <main className="w-full max-w-full p-10">
        <div className="bg-white p-4 rounded-lg shadow">
          <h1 className="text-black text-4xl font-extrabold font-['Inter'] leading-10 text-center">Berita Kebencanaan</h1>
        </div>

      <Link href="/">
        <div className="mt-6 flex justify-center">
          <div className="bg-indigo-900 rounded-lg p-1 text-center w-screen">
            <h2 className="text-white text-2xl font-extrabold font-['Inter'] leading-10">+ Tambah Berita</h2>
          </div>
        </div>
      </Link>

      
        <div className="mt-6 grid grid-cols-1 gap-6">
          {Array(3).fill().map((_, index) => (
            <div key={index} className="bg-white rounded-3xl shadow p-6">
              <div className="grid grid-cols-12">
                <div className="xl:col-span-3 lg:col-span-3 md:col-span-12 col-span-12 flex justify-center items-center">
                  <div className="">
                    <img className="w-64 h-52 rounded-2xl" src="https://via.placeholder.com/265x201" alt="News"/>
                  </div>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12 flex items-center justify-center">
                  <div>
                    <div className="xl:ml-6 lg:ml-6 md:ml-0 ml-0 xl:my-0 lg:my-0 md:my-3 my-3">
                      <h3 className="text-black xl:text-xl lg:text-xl md:text-xl text-lg font-bold mb-3">
                        Banjir setinggi 150cm di Desa Karangsono, Kec. Bangsalsari, 150 orang dievakuasi.
                      </h3>
                      <p className="text-black text-sm font-normal leading-tight text-justify">
                        Lorem ipsum dolor sit amet consectetur. Volutpat sapien vitae in convallis quis magna purus dictum. Tristique eget facilisis ac habitasse dapibus libero tempor blandit consectetur. Tellus bibendum neque eu et dignissim bibendum ipsum egestas scelerisque. Ut nulla morbi ac in at pharetra nam mattis tristique. Suspendisse turpis maecenas amet lobortis laoreet natoque. Pretium eget ipsum nullam vitae orci urna quis enim a. Sed dictum curabitur volutpat odio odio morbi ullamcorper ullamcorper euismod. A nec facilisi et leo eleifend id quam tincidunt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-3 md:col-span-12 col-span-12 flex justify-center items-center">
                  <div className="">
                    <div className="flex gap-x-2">
                      <div className="w-15 h-15 p-2.5 bg-indigo-900 rounded border border-gray-200 flex justify-center items-center">
                        <div className="w-7 h-7 relative">
                          <Image src='/edit-3-svgrepo-com.png' width={800} height={500} className="w-full h-full object-cover"/>
                        </div>
                      </div>
                      <div className="w-15 h-15 p-2.5 bg-red-600 rounded border border-gray-200 flex justify-center items-center">
                        <div className="w-7 h-7 relative">
                          <Image src='/trash-bin-2-svgrepo-com.png' width={800} height={500} className="w-full h-full object-cover"/>
                        </div>
                      </div>
                      <div className="w-15 h-15 p-2.5 bg-amber-500 rounded border border-gray-200 flex justify-center items-center">
                        <div className="w-7 h-7 relative">
                          <Image src='/pin-svgrepo-com.png' width={800} height={500} className="w-full h-full object-cover"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



      </main>
    </div>
  )
}

export default DetailBerita
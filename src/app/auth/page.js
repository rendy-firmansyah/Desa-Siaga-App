import Image from 'next/image';
import Link from 'next/link';

const Login = () => {

  return (
    <div className='container bg-white'>
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-6 flex justify-center h-full relative'>
                <Image src='/bg-right.png' width={800} height={1000} className='object-cover filter brightness-50'/>
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <div className='font-extrabold text-[64px]'>DESA SIAGA</div>
                    <div className='font-extrabold text-[64px] text-primary-default'>DESA TANGGUH</div>
                </div>
            </div>
            <div className='col-span-6 flex justify-center items-center'>
                <div className='w-[550px]'>
                    <div className='flex justify-center'>
                        <div className='font-bold text-[32px] text-black mb-[80px]'>Selamat Datang</div>
                    </div>
                    <form className='mt-4'>
                        <div className="mb-[24px]">
                            <label htmlFor="username" className="block text-xl font-semibold text-gray-800">
                                Username
                            </label>
                            <input type="username" placeholder='Masukan Username' className="w-full h-[60px] mt-3 rounded-[50px] px-[20px] text-gray-700 border-[2px] border-[#757575]"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-xl font-semibold text-gray-800">
                                Password
                            </label>
                            <input type="password" placeholder='Masukan Password' className="w-full h-[60px] mt-3 rounded-[50px] px-[20px] text-gray-700 border-[2px] border-[#757575]"/>
                        </div>
                    </form>
                    <div className='flex justify-center mt-[40px]'>
                        <button type='submit' className="w-[370px] h-[55px] bg-secondary-default rounded-[10px] text-[24px] font-bold">
                            Login
                        </button>
                    </div>
                    <div className='flex items-center justify-center mt-[95px]'>
                        <div className='mr-[10px] font-bold text-black text-[24px]'>Powered by: </div>
                        <Image src='/brand.png' width={30} height={30} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
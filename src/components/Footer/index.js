import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className='w-full bottom-0'>
        <div className='bg-gray-800 py-7 xl:px-[80px] lg:px-10 md:px-10 px-[10px]'>
            <div className='grid grid-cols-12'>
                <div className='xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex xl:justify-normal lg:justify-normal md:justify-normal justify-center'>
                    <div className='font-medium text-[18px]'>© Copyright Mitigasi Bencana 2024</div>
                </div>
                <div className='xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-end pe-[100px]'>
                    <div>
                        <div className='mb-4 xl:mt-0 lg:mt-0 md:mt-0 mt-[10px] font-medium text-[16px] xl:text-start lg:text-start md:text-start text-center'>Follow Us In :</div>
                        <div className='font-medium text-[16px] flex items-center'>
                            <div className='w-[30px] h-[30px] bg-gray-500 me-3'></div>
                            <div>Mitigasi Bencana</div>
                        </div>
                        <div className='my-4 font-medium text-[16px] flex items-center'>
                            <div className='w-[30px] h-[30px] bg-gray-500 me-3'></div>
                            <div>Mitigasi Bencana</div>
                        </div>
                        <div className='font-medium text-[16px] flex items-center'>
                            <div className='w-[30px] h-[30px] bg-gray-500 me-3'></div>
                            <div>Mitigasi Bencana</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
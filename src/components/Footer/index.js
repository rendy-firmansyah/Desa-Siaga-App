import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  return (
    <footer className='w-full bottom-0'>
        <div className='bg-gray-800 h-[210px] py-7 px-[80px]'>
            <div className='grid grid-cols-12'>
                <div className='col-span-6'>
                    <div className='font-medium text-[18px]'>© Copyright Mitigasi Bencana 2024</div>
                </div>
                <div className='col-span-6 flex justify-end pe-[100px]'>
                    <div>
                        <div className='mb-4 font-medium text-[16px]'>Follow Us In :</div>
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
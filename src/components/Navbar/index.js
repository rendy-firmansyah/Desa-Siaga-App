import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="shadow-md w-full fixed top-0 z-50">
      <div className="flex items-center justify-between bg-primary-default py-6 px-20">
        <div className="cursor-pointer flex items-center">
          <Image src="/brand.png" alt="Brand" width={60} height={60} />
          <div className='ml-2 text-xl font-semibold'>Mitigasi Bencana</div>
        </div>
        <ul className='flex items-center'>
          <Link href="/auth">
            <li className="text-lg font-medium">Login</li>
          </Link>
          <Link href="/data_statistik">
            <button type="" className="ml-4 bg-secondary-default py-3 px-5 rounded-lg font-medium">
                Data Statistik
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
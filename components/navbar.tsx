import Link from 'next/link';
import Sidebar from './sidebar';
import { Github, LinkedIn } from './icons/icons';

const Navbar: React.FC = () => {
  return (
    <div className='h-[100px]'>
      {/* Sidebar */}
      <Sidebar />
      <div className='m-auto hidden h-full items-center justify-between sm:flex sm:max-w-xl lg:max-w-3xl xl:max-w-6xl'>
        <h1 className='text-2xl font-bold'>NDEV</h1>
        <div className='flex gap-5'>
          <Link
            href='https://www.linkedin.com/in/naufalzhafifpradipta/'
            target='_blank'
          >
            <LinkedIn />
          </Link>
          <Link href='https://github.com/naufalzp/' target='_blank'>
            <Github />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

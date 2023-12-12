import Image from 'next/image';
import Title from './title';

const Hero: React.FC = () => {
  return (
    <div className='h-[calc(100vh-100px)] overflow-hidden'>
      <div className='mx-auto h-full max-w-xs sm:max-w-xl lg:max-w-3xl xl:max-w-6xl'>
        <div className='flex h-full items-center justify-between'>
          <Title />
          <div className='hidden items-center justify-center sm:flex sm:w-1/2'>
            <Image
              src={'/images/me.png'}
              width={0}
              height={0}
              sizes='100vw'
              className='h-[70%] w-[70%] border-none object-contain opacity-70'
              alt='me'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

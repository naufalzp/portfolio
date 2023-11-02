import Title from './title';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='h-[calc(100vh-100px)] overflow-hidden'>
      <div className='mx-auto h-full max-w-xs sm:max-w-xl lg:max-w-3xl xl:max-w-6xl'>
        <div className='flex h-full items-center justify-between'>
          <Title />
          <div className='hidden items-center justify-center sm:flex sm:w-1/2'>
            Photos
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

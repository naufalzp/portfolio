'use client';
import { motion } from 'framer-motion';
import { description } from '@/constant/constants';
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/navigation';

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'tween',
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  scrollButton: {
    opacity: 1,
    y: 10,
    transition: {
      delay: 3,
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Title = () => {
  const router = useRouter();
  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={containerVariants}
      className='sm:w-1/2'
    >
      <motion.h1
        variants={itemVariants}
        className='text-center text-4xl font-bold sm:text-left sm:text-6xl'
      >
        <TypeAnimation
          sequence={[
            'Hi!',
            3000,
            'Halo!',
            3000,
            'Bonjour!',
            3000,
            'Konnichiwa!',
            3000,
            'Annyeong!',
            3000,
            'Nǐn hǎo!',
            3000,
            'Olá!',
            3000,
          ]}
          speed={10}
          repeat={Infinity}
        />
      </motion.h1>
      <motion.h2
        variants={itemVariants}
        className='text-center text-xl font-bold sm:text-left sm:text-2xl'
      >
        {"I'm " + description.name}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className='text-center text-base sm:text-left sm:text-xl'
      >
        {description.description}
      </motion.p>
      <motion.img
        className='mx-auto cursor-pointer sm:mx-0'
        width={60}
        height={60}
        variants={itemVariants}
        initial={{ opacity: 0, y: 0 }}
        animate='scrollButton'
        src='/images/scroll.png'
        alt=''
        onClick={() => {
          router.push('#about');
        }}
      />
    </motion.div>
  );
};

export default Title;

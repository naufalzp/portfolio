'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax: React.FC = ({}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className='relative flex h-[100%] w-[100%] items-center justify-center overflow-hidden'
      ref={ref}
    >
      <motion.h1 className='text-8xl' style={{ y: yText }}>
        Icikiwirr
      </motion.h1>
      <motion.div className='absolute z-[3] h-[100%] w-[100%] bg-[url("/images/mountains.png")] bg-cover bg-bottom'></motion.div>
      <motion.div
        className='absolute z-[2] h-[100%] w-[100%] bg-cover bg-bottom'
        style={{
          y: yBg,
          backgroundImage: 'url("/images/planets.png")',
        }}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className='absolute z-[1] h-[100%] w-[100%] bg-[url("/images/stars.png")] bg-cover bg-bottom'
      ></motion.div>
    </div>
  );
};

export default Parallax;

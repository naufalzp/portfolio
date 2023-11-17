'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Section from './section';
import Image from 'next/image';
import { items } from '@/constant/constants';

type SingleProps = {
  item: (typeof items)[0];
};

const Single: React.FC<SingleProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <Section>
      <div className='flex h-full w-full items-center justify-center overflow-hidden '>
        <div className=' m-auto flex h-full max-w-xs items-center justify-center gap-12 sm:max-w-xl lg:max-w-3xl xl:max-w-6xl'>
          <div className='h-1/2 flex-1' ref={ref}>
            <Image
              className='h-full w-full object-contain'
              width={0}
              height={0}
              sizes='100vw'
              src={item.img}
              alt=''
            />
          </div>
          <motion.div className='flex flex-1 flex-col gap-8' style={{ y }}>
            <h2 className='text-7xl'>{item.title}</h2>
            <p className='text-xl text-gray-500'>{item.desc}</p>
            <button className='w-[200px] rounded-md border-none bg-neutral-800 p-2'>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      id='projects'
      className='relative mx-auto max-w-xs sm:max-w-xl lg:max-w-3xl xl:max-w-6xl'
      ref={ref}
    >
      <div className='sticky left-0 top-0 z-10  pt-[50px] text-center text-4xl font-semibold'>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', duration: 1, delay: 0.5 }}
          className=' h-full rounded-md border border-gray-100 border-opacity-10 bg-gray-500 bg-opacity-10 py-5 backdrop-blur-sm backdrop-filter'
        >
          Projects
        </motion.h1>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;

'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Section from './section';
import Image from 'next/image';
import { items } from '@/constant/constants';
import { Github } from './icons/icons';
import Link from 'next/link';

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
        <div className='flex h-full max-w-xs flex-col items-center justify-center gap-0 space-y-96 sm:max-w-xl lg:max-w-3xl lg:flex-row lg:gap-8 lg:space-y-0 xl:max-w-6xl'>
          <div className='h-1/2 flex-1 lg:mt-0' ref={ref}>
            <Image
              className='h-full w-full object-contain'
              width={0}
              height={0}
              sizes='100vw'
              src={item.img}
              alt=''
            />
          </div>
          <motion.div
            className='flex flex-1 flex-col gap-0 lg:mt-0 lg:gap-8'
            style={{ y }}
          >
            <h2 className='text-4xl lg:text-7xl'>{item.title}</h2>
            <p className='text-base text-gray-500 lg:text-xl'>{item.desc}</p>
            <div className='flex gap-2'>
              <Link
                href={item.repository}
                target='_blank'
                className='rounded-md border-none bg-neutral-800 p-2 transition-colors ease-in-out hover:bg-neutral-700'
              >
                <Github />
              </Link>
              {item.demo && (
                <Link
                  href={item.demo}
                  target='_blank'
                  className='w-[100px] rounded-md border-none bg-neutral-800 p-2 text-center transition-colors ease-in-out hover:bg-neutral-700'
                >
                  See Demo
                </Link>
              )}
            </div>
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

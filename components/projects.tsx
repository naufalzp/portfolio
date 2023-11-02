'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Section from './section';
import Image from 'next/image';

const items = [
  {
    id: 1,
    title: 'Next.js CMS',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 2,
    title: 'Prompt Wave',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 3,
    title: 'Gethebook',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
  {
    id: 4,
    title: 'Netflix Clone',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
  },
];

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
              className='h-full w-full object-cover'
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

const Projects = () => {
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
    <div className='relative' ref={ref}>
      <div className='sticky left-0 top-0 pt-[50px] text-center text-4xl font-semibold'>
        <h1>Projects</h1>
        <motion.div
          style={{ scaleX }}
          className='mt-3 h-1 bg-neutral-900 dark:bg-white'
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;

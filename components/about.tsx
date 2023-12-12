'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { codeString } from '@/constant/constants';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useRef } from 'react';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div
      ref={ref}
      className='mx-auto h-full max-w-xs sm:max-w-xl lg:max-w-3xl xl:max-w-6xl'
    >
      <motion.div
        style={{ opacity }}
        transition={{ type: 'tween', duration: 0.5 }}
        className='flex h-full flex-col items-center justify-center'
      >
        <h1 className='text-3xl font-semibold sm:text-6xl'>{'<AboutMe />'}</h1>
        <SyntaxHighlighter
          language='typescript'
          showLineNumbers
          wrapLongLines={true}
          customStyle={{
            maxWidth: '100%',
            backgroundColor: `rgba(107, 114, 128, 0.1)`,
            backdropFilter: 'blur(10px)',
            borderWidth: 0.1,
            borderColor: `rgba(243,244,246,0.1)`,
          }}
          style={atomOneDark}
          className='mt-5 w-full rounded-md'
        >
          {codeString}
        </SyntaxHighlighter>
      </motion.div>
    </div>
  );
};

export default About;

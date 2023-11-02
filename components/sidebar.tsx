'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Links from './links';
import ToggleButton from './toggle-button';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      className={`flex flex-col items-center justify-center bg-white text-black`}
    >
      <motion.div
        className={`${
          loading ? '' : 'hidden'
        } fixed bottom-0 left-0 top-0 z-50 w-[400px] bg-white`}
        variants={variants}
      >
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton loading={loading} setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

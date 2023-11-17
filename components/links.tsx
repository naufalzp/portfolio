import { links } from '@/constant/constants';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type LinksProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links: React.FC<LinksProps> = ({ setOpen }) => {
  const pathname = usePathname();
  return (
    <motion.div
      className='absolute flex h-full w-full flex-col items-center justify-center gap-5'
      variants={variants}
    >
      {links.map((link) => (
        <motion.a
          key={link.id}
          href={`${pathname}#${link.id}`}
          variants={linkVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(false)}
          className='text-4xl'
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

import { motion } from 'framer-motion';

type ToggleButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const ToggleButton = ({ setOpen, loading }: ToggleButtonProps) => {
  // ${
  //     loading ? "" : "hidden"
  // }
  return (
    <button
      className='fixed left-[38px] top-[27px] z-50 h-[50px] w-[50px] cursor-pointer border-none bg-transparent'
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg width='25' height='25' viewBox='0 0 23 23'>
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', opacity: 1 },
            open: { d: 'M 3 16.5 L 17 2.5', opacity: 1 },
          }}
          initial={{ opacity: 0 }}
        />
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          initial={{ opacity: 0 }}
        />
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', opacity: 1 },
            open: { d: 'M 3 2.5 L 17 16.346', opacity: 1 },
          }}
          initial={{ opacity: 0 }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: Props) => {
  return (
    <section
      id={`${id}`}
      className={`h-screen snap-center overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

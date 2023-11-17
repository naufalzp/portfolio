type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
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

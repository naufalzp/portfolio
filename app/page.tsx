import Navbar from '@/components/navbar';
import Section from '@/components/section';
import Hero from '@/components/hero';
import Parallax from '@/components/parallax';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div>
      <Section id='#'>
        <Navbar />
        <Hero />
      </Section>
      <Section id='about'>
        <Parallax />
      </Section>
      <Projects />
      <Section id='contact'>
        <h1>Contact</h1>
      </Section>
    </div>
  );
}

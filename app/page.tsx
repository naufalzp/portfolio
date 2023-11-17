import Navbar from '@/components/navbar';
import Section from '@/components/section';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import About from '@/components/about';

export default function Home() {
  return (
    <div>
      <Section id='#'>
        <Navbar />
        <Hero />
      </Section>
      <Section id='about'>
        <About />
      </Section>
      <Projects />
      <Section id='contact'>
        <h1>Contact</h1>
      </Section>
    </div>
  );
}

import Acomplishments from '../components/Acomplishments/Acomplishments';
import CustomCursor from '../components/Cursor/Cursor'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <CustomCursor />
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Technologies />
      <Projects />
    </Layout>
  );
};

export default Home;

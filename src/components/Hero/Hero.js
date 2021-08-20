import React from 'react';
import { motion } from 'framer-motion'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (

  <Section row nopadding>
    <LeftSection>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
        <SectionTitle main center>
          Hello <br />
          I'm Gerhard.
        </SectionTitle>
      </motion.div>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 4 }}>
        <SectionText>
          Front-end Web Developer.
        </SectionText>
      </motion.div>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 6 }}>
        <Button onClick={() => window.location.href = "#footer"}>Contact Me</Button>
      </motion.div>
    </LeftSection>
  </Section>

);

export default Hero;
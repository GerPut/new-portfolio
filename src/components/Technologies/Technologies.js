import React from 'react';
import { FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { motion } from 'framer-motion'

const Technologies = () => (
  <motion.div animate={{ y: 0 }} initial={{ y: 320 }} transition={{ duration: 3 }}>
    <Section id="tech">

      <SectionTitle>Stack</SectionTitle>
      <SectionText>
        I have experience working with the following technologies: HTML, CSS, Javascript, Sass, Bootstrap, React, Next.js, Git, Github.
      </SectionText>

    </Section>
  </motion.div >
);

export default Technologies;

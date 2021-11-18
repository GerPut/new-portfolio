import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaReact, FaJs, FaHtml5, FaSass, FaCss3, FaGit, FaBootstrap, FaGasPump, FaWordpress } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { motion } from 'framer-motion'

const Technologies = () => (
  <motion.div animate={{ y: 0 }} initial={{ y: 320 }} transition={{ duration: 3 }}>
    <Section id="tech">

      <SectionTitle>Stack</SectionTitle>
      <div>
        <FaReact style={{ margin: 5 }} size="3rem" />
        <FaJs style={{ margin: 5 }} size="3rem" />
        <FaHtml5 style={{ margin: 5 }} size="3rem" />
        <FaCss3 style={{ margin: 5 }} size="3rem" />
        <FaSass style={{ margin: 5 }} size="3rem" />
        <FaBootstrap style={{ margin: 5 }} size="3rem" />
        <FaWordpress style={{ margin: 5 }} size="3rem" />
        <FaGit style={{ margin: 5 }} size="3rem" />
        <FaGithub style={{ margin: 5 }} size="3rem" />
      </div>
      <SectionText>
        I have experience working with the following technologies: HTML, CSS, Javascript, Sass, Bootstrap, React, Next.js, WordPress, Git, Github.
      </SectionText>

    </Section>
  </motion.div >
);

export default Technologies;

import React from 'react';
import { FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">

    <SectionTitle>Stack</SectionTitle>
    <SectionText>
      I have experience working with the following technologies: HTML, CSS, Javascript, Sass, Bootstrap, React, Next.js, Git, Github.
    </SectionText>

  </Section>
);

export default Technologies;

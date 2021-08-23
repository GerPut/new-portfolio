import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {

  return (
    <motion.div animate={{ y: 0 }} initial={{ y: 320 }} transition={{ duration: 3 }}>
      <Section id="about">
        <SectionDivider />
        <br />
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          I am a Front-End web developer based in Cape Town, South Africa. My goal is to write well designed code that is testable and efficient by using best development practices. I have been actively building small apps and working on my own bigger projects. I am someone who demonstrates a strong work ethic and can be a cooperative member of a team.
        </SectionText>
      </Section>
    </motion.div >
  );
};

export default Timeline;

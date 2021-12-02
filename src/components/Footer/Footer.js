import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaReact, FaJs, FaHtml5, FaSass } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { motion } from 'framer-motion';



const Footer = () => {
  return (

    <FooterWrapper>
      <SectionDivider />
      <br />
      <SectionTitle id="footer">Contact Me</SectionTitle>
      <LinkList>
        <motion.div whileHover={{ scale: 1.1 }}>
          <LinkColumn>
            <img src="/images/pp3.jpg" style={{ width: "100%", height: "auto", borderRadius: "15px" }} />
          </LinkColumn>
        </motion.div>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:gerhard.putter1@gmail.com">gerhard.putter1@gmail.com</LinkItem>
          <LinkTitle>Social - Codewars</LinkTitle>
          <LinkItem href="https://www.codewars.com" target="_blank"><img src="https://www.codewars.com/users/GerPut/badges/micro"></img></LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Gerhard Putter 2021. This site was compiled with Next.js</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/GerPut">
            <FaGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/gerhard-putter/">
            <FaLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/GertPert">
            <FaTwitter size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

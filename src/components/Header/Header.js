import Link from 'next/link';
import React from 'react';
import { FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion'


import { Container, Div1, Div2, NavLink, Span } from './HeaderStyles';

const Header = () => (
  <motion.div animate={{ y: 0 }} initial={{ y: -120 }} transition={{ duration: 3 }}>
    <Container>
      <Div1>
        <Link href="https://www.coderg.dev/" target_blank>
          <a style={{ display: "flex", alignItems: "center", color: "white", fontWeight: "600", marginBottom: "20px" }}>
            <FaCog size="4rem" /> <Span>CODERG.DEV</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#footer">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
    </Container>
  </motion.div>
);

export default Header;

import React from 'react';
import { motion } from 'framer-motion'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';




const Projects = () => {

  const { ref, inView } = useInView()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: '0px'
      }
      );
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: '100vw'
      })
    }
  }, [inView])

  return (
    < Section id="projects" >
      <SectionDivider />
      <br />
      <SectionTitle>Projects</SectionTitle>

      <div ref={ref}>
        <motion.div animate={animation} transition={{ duration: 1.2 }}>
          <GridContainer>
            {projects.map(({ id, image, title, description, tags, source, visit }) => (

              <BlogCard key={id}>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  {/* <Hr /> */}
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  {/* <TitleContent>
              Stack
            </TitleContent> */}
                  {/* <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>
                  {tag}
                </Tag>
              ))}
            </TagList> */}
                </div>
                <UtilityList>
                  <ExternalLinks href={source}> View Code</ExternalLinks>
                  <ExternalLinks href={visit}>Visit Site</ExternalLinks>
                </UtilityList>
              </BlogCard>
            ))}
          </GridContainer>
        </motion.div>
      </div>
    </Section >
  );
}

export default Projects;
import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: contain;
  border-radius:10px 10px 0 0;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  &:hover{
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
    transition:ease-in 0.5s;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top:0.5rem;

`;


export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1px;
  color: #fafafa;
  padding: 1rem 0.5rem 1rem 0.5rem;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 90%;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #ffffff80;
  font-style: 2rem;
  font-weight:300;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left:1.5rem;
    padding-right:1.5rem;
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#fafafa;
font-size: 1.6rem;
font-weight:300;
border-radius:15px;
border:1px solid #ec9f05;
padding:1rem 1.5rem;
transition: 0.5s;
&:hover{
  background: #ec9f05;
  color:#000;
  cursor:none;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #fff;
font-size: 1.5rem;
`
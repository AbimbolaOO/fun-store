import Layout23 from '../Layouts/Layout23';
import styled from '@emotion/styled';

const LayoutWrapper = styled(Layout23)`
  display: grid;
  /* flex-direction: column; */
  grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
  /* justify-content: center; */
  gap: 15px;
`;
const HeadingText = styled.div`
  grid-column: 3 / span 1;
  font-size: 3rem;
  text-align: center;
`;

const MainText = styled.div`
  padding-bottom: 20px;
  grid-column: 3 / span 1;
  font-size: 1.2rem;
  text-align: center;
`;

const ImageBox = styled.div`
  grid-column: 2 / span 3;
  height: 100vh;
  /* padding-top: 20px; */
  background: right / cover no-repeat url('/static/img/girls.png');
`;

const About: React.FC = () => {
  return (
    <LayoutWrapper>
      <HeadingText>Big dreams on a budget?</HeadingText>
      <MainText>
        We provide well-designed, functional, durable, affordable, and
        sustainable home furnishing solutions to African millennials with big
        dreams on a budget.
      </MainText>
      <ImageBox></ImageBox>
    </LayoutWrapper>
  );
};

export default About;

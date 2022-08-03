import { useState } from 'react';
import Layout23 from '../Layouts/Layout23';
import styled from '@emotion/styled';

import VideoModalSection from '../Sections/VideoModalSection';
import InfoCard from '../Components/InfoCard';
import AddIcon from '@mui/icons-material/Add';

const LayoutWrapper = styled(Layout23)`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
  gap: 15px;
`;
const HeadingText = styled.div`
  padding-top: 60px;
  grid-column: 3 / span 1;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 1200px) {
    grid-column: 2 / span 3;
  }

  @media screen and (max-width: 820px) {
    grid-column: 1 / span 5;
    font-size: 1.8rem;
  }
`;

const MainText = styled.div`
  padding-bottom: 20px;
  grid-column: 3 / span 1;
  font-size: 1.2rem;
  text-align: center;
  color: #535454;

  @media screen and (max-width: 1200px) {
    grid-column: 2 / span 3;
  }

  @media screen and (max-width: 820px) {
    grid-column: 1 / span 5;
    font-size: 1rem;
  }
`;

const ImageBox = styled.div`
  grid-column: 2 / span 3;
  height: 90vh;
  background: right / cover no-repeat url('/static/img/girls.png');

  @media screen and (max-width: 1200px) {
    grid-column: 1 / span 5;
  }

  @media screen and (max-width: 762px) {
    height: 70vh;
  }

  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;

const BottonSection = styled.div`
  grid-column: 2 / span 3;
  display: flex;
  justify-content: space-between;
  padding: 50px 0;

  @media screen and (max-width: 1200px) {
    grid-column: 1 / span 5;
  }

  @media screen and (max-width: 990px) {
    gap: 30px;
    flex-direction: column;
  }
`;

const PlayButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PlayButtonImg = styled.img`
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  }
`;

const OurStory = styled.div`
  font-size: 3rem;
  color: white;
  letter-spacing: 10px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const infoData = [
  {
    label: 'Address',
    content: '37 Olusoji Oladapo str, Kudenyidu estate Ijegun.',
  },
  { label: 'Phone', content: '(+234) 08119995541' },
  { label: 'Email', content: 'abimbolaolayemiwhyte@gmail.com' },
];

const Label = styled.div`
  color: #535454;
`;

const LabelContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Button = styled.button`
  width: fit-content;
  padding: 10px 40px;
  text-transform: uppercase;
  border-radius: 0;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #313131;
  color: white;
  transition: all 0.5s;
  & > * {
    color: white;
  }

  &:hover {
    color: #535454;
    background-color: white;
  }

  &:hover > * {
    color: #535454;
  }
`;

const About: React.FC = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const onclick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <LayoutWrapper>
      <HeadingText>Big dreams on a budget?</HeadingText>
      <MainText>
        We provide well-designed, functional, durable, affordable, and
        sustainable home furnishing solutions to African millennials with big
        dreams on a budget.
      </MainText>
      <ImageBox>
        <PlayButtonContainer>
          <PlayButtonImg src="/static/img/icon-play.png" onClick={onclick} />
          <OurStory>Our Story</OurStory>
        </PlayButtonContainer>
      </ImageBox>
      <BottonSection>
        <Contact>
          {infoData.map((data) => (
            <InfoCard
              key={data.label}
              label={data.label}
              content={data.content}
            />
          ))}
        </Contact>
        <LabelContentWrapper>
          <Label>Learn more about WhyteShops in the video.</Label>
          <Button>
            <AddIcon sx={{ transition: 'all 0.5s', fontSize: '20px' }} />
            Shop Now
          </Button>
        </LabelContentWrapper>
      </BottonSection>
      <VideoModalSection setShowVideo={setShowVideo} showVideo={showVideo} />
    </LayoutWrapper>
  );
};

export default About;

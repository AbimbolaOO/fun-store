import styled from '@emotion/styled';

import Box from '../Components/Box';
import Heading from '../Components/Heading';
import HorizontalLine from '../Components/HorzontalLine';
import { LinkToArticle } from '../Components/StyledLinks';
import TertiaryText from '../Components/TertiaryText';

const Img = styled.img`
  width: 100px;
  height: 120px;
`;

const RecentsSection = () => {
  return (
    <Box direction="column" gap="20px">
      <Heading>Recent Post</Heading>
      <Box gap="20px">
        <Img src="/static/img/conference-room.jpg" />
        <div>
          <LinkToArticle to="/">Ground-Breaking Ideas for</LinkToArticle>
          <TertiaryText>Dec 27, 2021</TertiaryText>
        </div>
      </Box>
      <HorizontalLine />
      <Box gap="20px">
        <Img src="/static/img/Tips_for_choosing_morden_furniture_1170x500.jpg" />
        <div>
          <LinkToArticle to="/">Tips for Choosing</LinkToArticle>
          <TertiaryText>Nov 27, 2021</TertiaryText>
        </div>
      </Box>
      <HorizontalLine />
      <Box gap="20px">
        <Img src="/static/img/Lshape-sofa.jpg" />
        <div>
          <LinkToArticle to="/">Best ways to</LinkToArticle>
          <TertiaryText>Oct 27, 2021</TertiaryText>
        </div>
      </Box>
    </Box>
  );
};

export default RecentsSection;

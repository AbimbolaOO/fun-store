import styled from '@emotion/styled';

import Box from '../Components/Box';
import Heading from '../Components/Heading';
import HorizontalLine from '../Components/HorzontalLine';
import { BasicBlueLink } from '../Components/StyledLinks';
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
          <BasicBlueLink to="/">Ground-Breaking Ideas for</BasicBlueLink>
          <TertiaryText>Dec 27, 2021</TertiaryText>
        </div>
      </Box>
      <HorizontalLine />
      <Box gap="20px">
        <Img src="/static/img/Tips_for_choosing_morden_furniture_1170x500.jpg" />
        <div>
          <BasicBlueLink to="/">Tips for Choosing</BasicBlueLink>
          <TertiaryText>Nov 27, 2021</TertiaryText>
        </div>
      </Box>
      <HorizontalLine />
      <Box gap="20px">
        <Img src="/static/img/Lshape-sofa.jpg" />
        <div>
          <BasicBlueLink to="/">Best ways to</BasicBlueLink>
          <TertiaryText>Oct 27, 2021</TertiaryText>
        </div>
      </Box>
    </Box>
  );
};

export default RecentsSection;

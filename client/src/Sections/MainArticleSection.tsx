import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { IBlogPost } from '../__mocks__/BlogPost';
import Box from '../Components/Box';
import Heading from '../Components/Heading';
import { AnimatedIconLink } from '../Components/StyledLinks';
import TertiaryText from '../Components/TertiaryText';

const DateWrapper = styled.div`
  padding-left: 16px;
`;

const ArticleSample = styled.div`
  color: ${({ theme }) => theme.palette.primaryTextColor};
`;

const MainArticleSection: React.FC<IBlogPost> = ({
  date,
  imgSrc,
  heading,
  articleSample,
}) => {
  return (
    <Box direction="column" gap="20px">
      <img alt="confrence room" src={imgSrc} />
      <DateWrapper>
        <TertiaryText>
          <CalendarMonthIcon sx={{ fontSize: '1rem' }} /> {date}
        </TertiaryText>
      </DateWrapper>
      <Heading>{heading}</Heading>
      <ArticleSample>{articleSample}</ArticleSample>
      <AnimatedIconLink to="/">
        <AddIcon
          sx={{
            fontSize: '0px',
            transition: 'all 0.8s',
          }}
        />
        READ MORE
      </AnimatedIconLink>
    </Box>
  );
};

export default MainArticleSection;

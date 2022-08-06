import styled from '@emotion/styled';

import { StyledRouterLinkSecoundary } from '../Components/StyledLinks';
import Box from '../Components/Box';

const Heading = styled.div`
  font-size: 1.5rem;
`;

const TagSection = () => {
  return (
    <Box direction="column" gap="20px">
      <Heading>Tags</Heading>
      <Box wrap="wrap">
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Architecture
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Art
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Decoration
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Design
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Furniture
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Kids
        </StyledRouterLinkSecoundary>{' '}
        /
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Living Room
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Luxury
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary to="/" color="#535454">
          MadeInNigeria
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary to="/" color="#535454">
          Productivity
        </StyledRouterLinkSecoundary>
      </Box>
    </Box>
  );
};

export default TagSection;

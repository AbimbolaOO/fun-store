import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { StyledRouterLinkSecoundary } from '../Components/StyledLinks';
import Box from '../Components/Box';

const Heading = styled.div`
  font-size: 1.5rem;
`;

const TagSection = () => {
  const theme = useTheme();
  return (
    <Box direction="column" gap="20px">
      <Heading>Tags</Heading>
      <Box wrap="wrap">
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Architecture
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Art
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Decoration
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Design
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Furniture
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Kids
        </StyledRouterLinkSecoundary>{' '}
        /
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Living Room
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Luxury
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          MadeInNigeria
        </StyledRouterLinkSecoundary>{' '}
        /{' '}
        <StyledRouterLinkSecoundary
          to="/"
          color={theme.palette.primaryTextColor}
        >
          Productivity
        </StyledRouterLinkSecoundary>
      </Box>
    </Box>
  );
};

export default TagSection;

import styled from '@emotion/styled';

import Box from '../Components/Box';
import { StyledRouterLink, StyledRouterLinkSecoundary } from '../Components/StyledLinks';
import SearchBar from './SearchBar';

interface IFilterBox {
  showFilterBox: boolean;
}

const FilterBoxWrapper = styled.div`
  grid-column: 1 / span 3;
  width: 100%;
  height: 0px;
  box-shadow: rgba(144, 144, 144, 0.24) 0px 4px 8px;
  background-color: ${({ theme }) => theme.palette.bgColor};
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  overflow-y: auto;
  transition: height 0.5s ease-in;

  &:hover {
    height: 320px;
  }

  &.show-filter-box {
    height: 320px;
  }
`;

const Fliterbox = styled.div`
  grid-column: 2 / 3;
  margin: 64px 0;
  display: grid;
  gap: 20px;
  row-gap: 60px;
  grid-template-columns: repeat(6, calc(100% / 6));
`;

const Header = styled.div`
  font-size: 1.5rem;
  margin-bottom: 18px;
`;

const BoxLink = styled.div`
  border: 1px solid #535454;
  width: fit-content;
  padding: 4px 4px 0px;
`;

const FilterBox: React.FC<IFilterBox> = ({ showFilterBox }) => {
  return (
    <FilterBoxWrapper className={showFilterBox ? 'show-filter-box' : ''}>
      <Fliterbox>
        <Box direction="column">
          <Header>Search</Header>
          <SearchBar />
        </Box>
        <Box direction="column" gap="4px">
          <Header>Categories</Header>
          <Box>
            <StyledRouterLink to="/">Bed (1)</StyledRouterLink>
          </Box>
          <Box>
            <StyledRouterLink to="/">Chair (4)</StyledRouterLink>
          </Box>
          <Box>
            <StyledRouterLink to="/">Coffee table (2)</StyledRouterLink>
          </Box>
          <Box>
            <StyledRouterLink to="/">Consoles (1)</StyledRouterLink>
          </Box>
          <Box>
            <StyledRouterLink to="/">
              Decor and accesories (26)
            </StyledRouterLink>
          </Box>
        </Box>
        <Box direction="column" gap="4px">
          <Header>Vendors</Header>
          <StyledRouterLinkSecoundary to="/">
            WhyteShops
          </StyledRouterLinkSecoundary>
          <StyledRouterLinkSecoundary to="/">
            WhyteShops-Nigeria
          </StyledRouterLinkSecoundary>
          <StyledRouterLinkSecoundary to="/">
            WhyteShops-online
          </StyledRouterLinkSecoundary>
        </Box>
        <Box direction="column" gap="4px">
          <Header>Types</Header>
          <StyledRouterLinkSecoundary to="/">
            bed and beddings
          </StyledRouterLinkSecoundary>
          <StyledRouterLinkSecoundary to="/">
            Coffee Tables
          </StyledRouterLinkSecoundary>
          <StyledRouterLinkSecoundary to="/">
            Consoles
          </StyledRouterLinkSecoundary>
          <StyledRouterLinkSecoundary to="/">
            Kitchen & Dining
          </StyledRouterLinkSecoundary>
          <StyledRouterLinkSecoundary to="/">
            Occasional Chairs
          </StyledRouterLinkSecoundary>
        </Box>
        <Box direction="column">
          <Header>Color</Header>
        </Box>
        <Box direction="column">
          <Header>Size</Header>
        </Box>
        <Box direction="column">
          <Header>Tags</Header>
          <Box wrap="wrap" width="min-content" gap="4px">
            <BoxLink>
              <StyledRouterLink to="/">africanfabrics</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">africanfurniture</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">africantextiles</StyledRouterLink>
            </BoxLink>

            <BoxLink>
              <StyledRouterLink to="/">amakisi</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">amakisi-sofa</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">ankara</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">Ath</StyledRouterLink>
            </BoxLink>

            <BoxLink>
              <StyledRouterLink to="/">blackfriday</StyledRouterLink>
            </BoxLink>

            <BoxLink>
              <StyledRouterLink to="/">dining</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">dining table</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">diy sofa</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">furniture</StyledRouterLink>
            </BoxLink>

            <BoxLink>
              <StyledRouterLink to="/">
                furnitureshowroomsinnigeria
              </StyledRouterLink>
            </BoxLink>

            <BoxLink>
              <StyledRouterLink to="/">HOT</StyledRouterLink>
            </BoxLink>
            <BoxLink>
              <StyledRouterLink to="/">interiordesign</StyledRouterLink>
            </BoxLink>
          </Box>
        </Box>
        <Box>
          <Header>Banner</Header>
        </Box>
      </Fliterbox>
    </FilterBoxWrapper>
  );
};

export default FilterBox;

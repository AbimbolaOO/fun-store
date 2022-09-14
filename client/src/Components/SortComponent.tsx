import styled from '@emotion/styled';
import AppsIcon from '@mui/icons-material/Apps';
import FilterListIcon from '@mui/icons-material/FilterList';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewListIcon from '@mui/icons-material/ViewList';

import Box from '../Components/Box';

const SortComponent: React.FC<ISortComponent> = ({
  showFilterBox,
  setShowFilterBox,
}) => {
  return (
    <SortBox>
      <Box gap="16px" cursor="pointer">
        <ResponsiveBox575>
          <ViewComfyIcon />
        </ResponsiveBox575>
        <AppsIcon />
        <GridViewIcon />
        <ResponsiveBox575>
          <ViewListIcon />
        </ResponsiveBox575>
      </Box>
      <Box gap="30px">
        <ResponsiveBox990>Showing 1 - 10 of 14 result</ResponsiveBox990>
        <ResponsiveBox770 gap="10px">
          <Box>Show</Box>
          <SelectNumber name="cars" id="show">
            {Array.from(Array(100).keys()).map((i: number) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </SelectNumber>
          <ResponsiveBox990>per page</ResponsiveBox990>
        </ResponsiveBox770>
        <ResponsiveBox575 gap="10px">
          <Box>Sort by:</Box>
          <Select name="cars" id="show">
            <option value="Featured">Featured</option>
            <option value="Best Selling">Best Selling</option>
            <option value="Alphabetically, A-Z">Alphabetically A-Z</option>
            <option value="Alphabetically, Z-A">Alphabetically Z-A</option>
            <option value="Price, low to high">Price, low to high</option>
            <option value="Price, high to low">Price, high to low</option>
            <option value="Date, new to old">Date, new to old</option>
            <option value="Date, old to new">Date, old to new</option>
          </Select>
        </ResponsiveBox575>
        <ResponsiveBox990
          cursor="pointer"
          gap="4px"
          onClick={() => setShowFilterBox(!showFilterBox)}
        >
          <FilterListIcon sx={{ width: '16px' }} />
          <Box cursor="pointer">Filters</Box>
        </ResponsiveBox990>
      </Box>
    </SortBox>
  );
};

export default SortComponent;

// === interfaces
interface ISortComponent {
  showFilterBox: boolean;
  setShowFilterBox: React.Dispatch<React.SetStateAction<boolean>>;
}

// === styles
const SortBox = styled.div`
  grid-column: 2 / 3;
  display: flex;
  height: 4rem;
  align-items: center;
  gap: 30px;
  justify-content: space-between;

  & div {
    align-items: center;
    color: ${({ theme }) => theme.palette.btnBgColor};
    font-size: 0.9rem;
  }

  @media screen and (max-width: 990px) {
    grid-column: 1 / 4;
  }
`;

const Select = styled.select`
  padding: 8px;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.palette.btnBgColor};
  border-radius: 4px;
  user-select: none;
  background-image: url('/static/img/dropdowntriangle.png');
  background-size: 8px;
  background-repeat: no-repeat;
  background-position: right 8px center;
  width: 170px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const SelectNumber = styled(Select)`
  width: 72px;
`;

const ResponsiveBox990 = styled(Box)`
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const ResponsiveBox770 = styled(Box)`
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const ResponsiveBox575 = styled(Box)`
  & * {
    cursor: pointer;
  }
  @media screen and (max-width: 575px) {
    display: none;
  }
`;

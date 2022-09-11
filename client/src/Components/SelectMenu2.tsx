import { useState } from 'react';

import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Box from './Box';

interface IOption {
  options: any;
}

const Select = styled.div`
  display: grid;
  border: 1px solid #e8e8e8;
  width: 400px;
  height: 42px;
  padding: 0 16px;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.palette.primaryTextColor};
  cursor: pointer;

  &:hover .options {
    display: grid;
    pointer-events: auto;
  }
`;

const OptionGroup = styled.div`
  position: absolute;
  bottom: calc(100%);
  background-color: white;
  width: inherit;
  padding: 16px;
  border: 1px solid #e8e8e8;
  display: none;
  pointer-events: none;
  max-height: 280px;
  grid-auto-flow: row;
  overflow-y: auto;
`;

const Option = styled.div`
  &:hover {
    color: ${({ theme }) => theme.palette.hoverColorSecondary};
  }
`;

const SelectMenu2: React.FC<IOption> = ({ options }) => {
  const [val, setVal] = useState(() => options[0]);

  return (
    <Select>
      <Box align="center" justify="space-between">
        {val} <KeyboardArrowDownIcon sx={{ fontSize: '16px' }} />
      </Box>
      <OptionGroup className="options">
        {options.map((val: string, index: number) => (
          <Option
            key={index}
            onClick={() => {
              setVal(val);
            }}
          >
            {val}
          </Option>
        ))}
      </OptionGroup>
    </Select>
  );
};

export default SelectMenu2;

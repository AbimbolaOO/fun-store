import React, { useState } from 'react';

import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Box from './Box';

interface IOption {
  key: string;
  value: string;
}

interface IClickDropDown {
  children: React.ReactNode;
  options: IOption[];
}

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primaryTextColor};

  &:hover > .dropBox {
    opacity: 1;
    transform: translateY(-30px);
    pointer-events: auto;
  }
`;

const DropBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 1px 1px 10px 2px rgba(218, 222, 223, 0.377);
  width: max-content;
  padding: 10px 50px 10px 10px;
  z-index: 5;
  background-color: white;
  top: calc(100% + 20px);
  transform: translateY(0);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
`;

const DropBoxItem = styled.div`
  display: flex;
  font-size: 0.9rem;
  line-height: 2rem;
  transform: translateX(0);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const SelectMenu: React.FC<IClickDropDown> = ({ options, children }) => {
  const [title, setTitle] = useState(children as string);
  const color = '#535454';

  return (
    <DropDownContainer>
      <Box align="center" justify="center">
        {title}{' '}
        <KeyboardArrowDownIcon sx={{ fontSize: '16px', color: color }} />
      </Box>
      <DropBox className="dropBox">
        {options.map((option: IOption) => (
          <DropBoxItem
            onClick={() => setTitle(`${option.key}`)}
            key={option.key}
          >
            {option.value}
          </DropBoxItem>
        ))}
      </DropBox>
    </DropDownContainer>
  );
};

export default SelectMenu;

import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import Box from './Box';
import { BasicLink } from '../Components/StyledLinks';

interface IOption {
  label: string;
  path: string;
}

interface IHamburgerMenu {
  children: React.ReactNode;
  options: IOption[];
}

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  color: #535454;
  /* border: 2px solid blue; */

  & > .active {
    opacity: 1;
    transform: translateY(-6.2vh);
    pointer-events: auto;
  }
`;

const DropBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 1px 1px 10px 2px rgba(218, 222, 223, 0.377);
  width: 80vw;
  right: 0;
  z-index: 5;
  background-color: #cacaca;
  gap: 1px;
  top: calc(100% + 10vh);
  transform: translateY(0);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease-in-out;
`;

const DropBoxItem = styled.div`
  display: flex;
  font-size: 1rem;
  padding: 16px;
  font-weight: 400;
  transition: transform 0.3s ease;
  background-color: white;
  width: 100%;

  &:hover {
    color: white;
    background-color: black;
  }
`;

const HamburgerMenu: React.FC<IHamburgerMenu> = ({ children, options }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const pageClickEvent = (e: Event) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target as Element)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  const onClick = () => setIsActive(!isActive);

  return (
    <DropDownContainer ref={dropdownRef} onClick={onClick}>
      <Box align="center" justify="center">
        {children}{' '}
      </Box>
      <DropBox className={isActive ? 'active' : ''}>
        {options.map((option: IOption) => (
          <BasicLink to={option.path} key={option.label}>
            <DropBoxItem>{option.label}</DropBoxItem>
          </BasicLink>
        ))}
      </DropBox>
    </DropDownContainer>
  );
};

export default HamburgerMenu;

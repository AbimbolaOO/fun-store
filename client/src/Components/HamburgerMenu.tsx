import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import WestIcon from '@mui/icons-material/West';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Box from './Box';
import { BasicLink } from '../Components/StyledLinks';

interface IOption {
  label: string;
  path: string;
}
interface IOptions {
  mainMenu: IOption[];
  shop: IOption[];
}

interface IHamburgerMenu {
  children: React.ReactNode;
  options: IOptions;
}

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  color: #535454;

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
interface IMenu {
  options: any;
  isActive: boolean;
}

export const Menu: React.FC<IMenu> = ({ options, isActive }) => {
  const [option, setOption] = useState(options[0]);
  const [subMenuHeader, setSubMenuHeader] = useState(false);

  useEffect(() => {
    if (Object.keys(option).length === 7) {
      setSubMenuHeader(true);
    } else {
      setSubMenuHeader(false);
    }
  }, [option]);

  useEffect(() => {
    if (!isActive) {
      setOption(options[0]);
    }
  }, [isActive, options]);

  return (
    <>
      {subMenuHeader ? (
        <Box
          direction="column"
          color="black"
          gap="1px"
          onClick={() => setOption(options[0])}
        >
          <BasicLink to="/collections">
            <DropBoxItem> Shop</DropBoxItem>
          </BasicLink>
          <DropBoxItem className="menu-change">
            <Box width="100%" justify="space-between" className="menu-change">
              <WestIcon className="menu-change" />
              <Box className="menu-change">Back</Box>
            </Box>
          </DropBoxItem>
        </Box>
      ) : (
        ''
      )}

      {option.map((option: IOption) => {
        return option.label === 'Shop' ? (
          <DropBoxItem
            key={option.label}
            onClick={() => setOption(options[1])}
            className="menu-change"
          >
            <Box width="100%" justify="space-between" className="menu-change">
              <Box className="menu-change">Shop</Box>
              <NavigateNextIcon className="menu-change" />
            </Box>
          </DropBoxItem>
        ) : (
          <BasicLink to={option.path} key={option.label}>
            <DropBoxItem>{option.label}</DropBoxItem>
          </BasicLink>
        );
      })}
    </>
  );
};

const HamburgerMenu: React.FC<IHamburgerMenu> = ({ children, options }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropBoxRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target as Element) &&
        !e.target.classList.contains('menu-change')
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

  const onClick = (e: any) => {
    if (!e.target.classList.contains('menu-change')) {
      setIsActive(!isActive);
    }
  };

  return (
    <DropDownContainer ref={dropdownRef} onClick={onClick}>
      <Box align="center" justify="center">
        {children}
      </Box>
      <DropBox ref={dropBoxRef} className={isActive ? 'active' : ''}>
        <Menu options={Object.values(options)} isActive={isActive} />
      </DropBox>
    </DropDownContainer>
  );
};

export default HamburgerMenu;

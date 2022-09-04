import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  display: none;
  width: 100%;
  height: 100%;

  &:checked + .hamburger .top-bun {
    transform: rotate(-45deg);
    margin-top: 25px;
  }
  &:checked + .hamburger .bottom-bun {
    opacity: 0;
    transform: rotate(45deg);
  }
  &:checked + .hamburger .meat {
    transform: rotate(45deg);
    margin-top: -7px;
  }

  &:checked + .hamburger + .nav {
    top: 0;
    transform: scale(1);
  }
`;

const Hamburger = styled.label`
  position: absolute;
  bottom: -10px;
  right: 0px;
  margin-left: -2em;
  margin-top: -45px;
  width: 2em;
  height: 45px;
  z-index: 5;

  & div {
    position: relative;
    width: 100%;
    height: 2px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.palette.bgColorTertiary};
    margin-top: 8px;
    transition: all 0.3s ease-in-out;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  position: relative;
  width: 40px;
  height: 32px;
`;

const AnimatingHambugerIcon = () => {
  return (
    <Div>
      <Input id="toggle" type="checkbox"></Input>
      <Hamburger htmlFor="toggle" className="hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
      </Hamburger>
    </Div>
  );
};

export default AnimatingHambugerIcon;

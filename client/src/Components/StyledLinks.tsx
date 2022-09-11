import { Link as RouterLink } from 'react-router-dom';

import styled from '@emotion/styled';

interface IImgInfoTitleAction {
  fontSize?: string;
}

interface IBasicBlueLink {
  color?: string;
}

export const StyledRouterLinkSecoundary = styled(RouterLink)`
  text-decoration: none;
  display: flex;
  position: relative;
  color: ${({ theme }) => theme.palette.primaryTextColor};

  &:hover {
    color: ${({ theme }) => theme.palette.linkTetiaryColor};
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
    text-decoration-color: ${({ theme }) => theme.palette.linkTetiaryColor};
  }
`;

export const BasicBlueLink = styled(RouterLink)<IBasicBlueLink>`
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: ${({ color }) => (color ? color : 'black')};

  &:link {
    color: ${({ theme }) => theme.palette.bgColorTertiary};
  }
  &:visited {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:hover {
    color: ${({ theme }) => theme.palette.hoverColorSecondary};
  }
  &:active {
    color: ${({ theme }) => theme.palette.bgColorTertiary};
  }
`;

export const AnimatedIconLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  width: max-content;

  &:link {
    color: ${({ theme }) => theme.palette.bgColorTertiary};
  }
  &:visited {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:hover {
    gap: 5px;
    color: ${({ theme }) => theme.palette.hoverColorTertiary};
  }
  &:active {
    color: ${({ theme }) => theme.palette.bgColorTertiary};
  }

  &:hover > svg {
    display: block;
    color: ${({ theme }) => theme.palette.hoverColorTertiary};
    font-size: 18px;
    transition: all 0.8s;
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.palette.primaryTextColor};
    transition: all 0.7s;
  }

  &:hover::after {
    content: '';
  }
`;

export const ImgInfoTitleAction = styled(RouterLink)<IImgInfoTitleAction>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
  display: flex;
  text-decoration: none;
  transition: color 0.7s;

  &:link {
    color: ${({ theme }) => theme.palette.linkTetiaryColor};
  }
  &:visited {
    color: ${({ theme }) => theme.palette.linkTetiaryColor};
  }
  &:hover {
    color: ${({ theme }) => theme.palette.hoverColorTertiary};
  }
  &:active {
    color: ${({ theme }) => theme.palette.linkTetiaryColor};
  }
`;

export const BasicLink = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.bgColorSecondary};
  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.palette.primaryTextColor};

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.palette.bgColorSecondary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:link {
    color: ${({ theme }) => theme.palette.primaryTextColor};
  }
  &:visited {
    color: ${({ theme }) => theme.palette.primaryTextColor};
  }
  &:hover {
    color: ${({ theme }) => theme.palette.linkTetiaryColor};
  }
  &:active {
    color: ${({ theme }) => theme.palette.primaryTextColor};
  }
`;

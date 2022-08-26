import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

interface IImgInfoTitleAction {
  fontSize?: string;
}

interface ILinkToArticle {
  color?: string;
}

export const StyledRouterLinkSecoundary = styled(RouterLink)`
  text-decoration: none;
  display: flex;
  position: relative;
  color: #535454;

  &:hover {
    color: #272626;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
    text-decoration-color: #272626;
  }
`;

export const LinkToArticle = styled(RouterLink)<ILinkToArticle>`
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: ${({ color }) => (color ? color : 'black')};

  &:link {
    color: black;
  }
  &:visited {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:hover {
    color: #034baf;
  }
  &:active {
    color: black;
  }
`;

export const AnimatedIconLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  width: max-content;

  &:link {
    color: black;
  }
  &:visited {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:hover {
    gap: 5px;
    color: #f0e504;
  }
  &:active {
    color: black;
  }

  &:hover > svg {
    display: block;
    color: #f0e504;
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
    background-color: #535454;
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
    color: #212121;
  }
  &:visited {
    color: #212121;
  }
  &:hover {
    color: #f0e504;
  }
  &:active {
    color: #212121;
  }
`;

export const BasicLink = styled(RouterLink)`
  text-decoration: none;
  color: black;

  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: #535454;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #424141;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:link {
    color: #535454;
  }
  &:visited {
    color: #535454;
  }
  &:hover {
    color: #272626;
  }
  &:active {
    color: #535454;
  }
`;

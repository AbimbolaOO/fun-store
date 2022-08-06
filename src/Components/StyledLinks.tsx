import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

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

interface LinkToArticleAble {
  color?: string;
}

export const LinkToArticle = styled(RouterLink)<LinkToArticleAble>`
  text-decoration: none;
  /* border: 2px solid rebeccapurple; */
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

import styled from '@emotion/styled';

interface IButton {
  width?: string;
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  textHoverColor?: string;
  border?: string;
  cursor?: string;
  padding?: string;
  fontSize?: string;
}

const Button = styled.button<IButton>`
  width: ${({ width }) => (width ? width : 'fit-content')};
  padding: ${({ padding }) => (padding ? padding : '10px 40px')};
  text-transform: uppercase;
  border-radius: 0;
  border: ${({ border }) => (border ? border : '1px solid black')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.palette.btnBgColor};
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.palette.bgColor};
  cursor: ${({ cursor }) => (cursor ? cursor : 'pointer')};
  transition: all 0.5s;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1px solid black')};

  & > * {
    color: ${({ textColor, theme }) =>
      textColor ? textColor : theme.palette.bgColor};
  }

  &:hover {
    color: ${({ textColor, theme }) =>
      textColor ? textColor : theme.palette.btnBgColor};
    background-color: ${({ bgHoverColor, theme }) =>
      bgHoverColor ? bgHoverColor : theme.palette.bgColor};
    border: ${({ border, bgHoverColor }) =>
      border ? `1px solid ${bgHoverColor}` : '1px solid black'};
  }

  &:hover > * {
    color: ${({ textHoverColor, theme }) =>
      textHoverColor ? textHoverColor : theme.palette.hoverColor};
  }

  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export default Button;

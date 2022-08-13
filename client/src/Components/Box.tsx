import styled from '@emotion/styled';

interface IBox {
  direction?: string;
  gap?: string;
  wrap?: string;
  justify?: string;
  align?: string;
  padding?: string;
  margin?: string;
  textAlign?: string;
  bgColor?: string;
  fontSize?: string;
  border?: string;
  width?: string;
}

const Box = styled.div<IBox>`
  display: flex;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  flex-direction: ${({ direction }) =>
    direction === 'column' ? 'column' : 'row'};
  gap: ${({ gap }) => (gap ? gap : '0px')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'nowrap')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  align-items: ${({ align }) => (align ? align : 'stretch')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'none')};
  border: ${({ border }) => (border ? border : 'none')};
  width: ${({ width }) => (width ? width : 'auto')};
`;

export default Box;

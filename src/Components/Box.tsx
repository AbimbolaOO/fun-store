import styled from '@emotion/styled';

interface Boxable {
  direction?: string;
  gap?: string;
  wrap?: string;
  justify?: string;
  align?: string;
  padding?: string;
  margin?: string;
  textAlign?: string;
  bgColor?: string;
}

const Box = styled.div<Boxable>`
  display: flex;
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
`;

export default Box;

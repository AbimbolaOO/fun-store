import styled from '@emotion/styled';

interface ITertiaryText {
  justify?: string;
  paddingTop?: string;
}

const TertiaryText = styled.div<ITertiaryText>`
  display: flex;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '10px')};
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  gap: 5px;
  color: #535454;
`;

export default TertiaryText;

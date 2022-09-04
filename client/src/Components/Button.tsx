import styled from '@emotion/styled';

const Button = styled.button`
  width: fit-content;
  padding: 10px 40px;
  text-transform: uppercase;
  border-radius: 0;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.palette.btnBgColor};
  color: ${({ theme }) => theme.palette.bgColor};
  cursor: pointer;
  transition: all 0.5s;

  & > * {
    color: ${({ theme }) => theme.palette.bgColor};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.hoverColor};
    background-color: ${({ theme }) => theme.palette.bgColor};
  }

  &:hover > * {
    color: ${({ theme }) => theme.palette.hoverColor};
  }

  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export default Button;

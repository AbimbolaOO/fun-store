import React from 'react';
import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledRouterLinkSecoundary } from './StyledLinks';

interface IHoverDropDown {
  children: React.ReactNode;
  options: any;
}

const DropDownContainer = styled.div`
  position: relative;
  cursor: pointer;
  &:hover > div.dropDownContent {
    opacity: 1;
    transform: translateY(-3rem);
    pointer-events: auto;
  }
`;

const DropDownLabel = styled.div`
  display: flex;
  align-items: center;
`;

const DropDownContentWrapper = styled.div`
  position: absolute;
  top: calc(100% + 3rem);
  opacity: 0;
  pointer-events: none;
  transform: translateY(0);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
`;

const DropDownListContent = styled.div`
  display: grid;
  width: 12rem;
  background-color: #fff;
  box-shadow: 1px 1px 10px 2px rgba(218, 222, 223, 0.377);
  padding: 20px 0px;
`;

const DropDownListRowElement = styled.div`
  display: flex;
  padding: 10px 30px;
`;

const HoverDropDownTemplate: React.FC<any> = ({ label, children, color }) => {
  return (
    <DropDownContainer>
      <DropDownLabel>
        {label}{' '}
        <KeyboardArrowDownIcon sx={{ fontSize: '16px', color: color }} />
      </DropDownLabel>
      <DropDownContentWrapper className="dropDownContent">
        {children}
      </DropDownContentWrapper>
    </DropDownContainer>
  );
};

export const HoverDropDown: React.FC<IHoverDropDown> = ({
  children,
  options,
}) => {
  return (
    <HoverDropDownTemplate label={children} color="#535454">
      <DropDownListContent>
        {options.map((option: { path: string; label: string }) => (
          <DropDownListRowElement key={option.label}>
            <StyledRouterLinkSecoundary to={option.path}>
              {option.label}
            </StyledRouterLinkSecoundary>
          </DropDownListRowElement>
        ))}
      </DropDownListContent>
    </HoverDropDownTemplate>
  );
};

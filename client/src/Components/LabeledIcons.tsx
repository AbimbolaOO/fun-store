import React from 'react';

import styled from '@emotion/styled';

interface ILabel {
  label: string;
}

interface ILabelIcons {
  children: any;
  label: string;
  bgColor?: string;
}

interface SurfaceIconsBox {
  bgColor?: string;
}

const Triangle = styled.div`
  width: 14px;
  height: 14px;
  border: 7px solid transparent;
  border-left: 7px solid black;
`;

const SurfaceIconsBox = styled.div<SurfaceIconsBox>`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.palette.surfaceColor};
  position: relative;
  flex-wrap: nowrap;

  &:hover > div.iconLabel {
    opacity: 1;
    transform: translateX(-2rem);
    transition: opacity 0.2s, transform 0.2s ease-in-out;
  }
`;
const SurfaceIconBoxLabelBox = styled.div`
  position: absolute;
  right: calc(100% - 2rem);
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.bgColor};
  min-width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: translateX(0);

  opacity: 0;
  transition: opacity 0.2s, transform 0.2s ease-in-out;
  pointer-events: none;
`;

const LabelBoxText = styled.div`
  background-color: ${({ theme }) => theme.palette.bgColorSecondary};
  padding: 2px 10px;
`;
const Label: React.FC<ILabel> = ({ label }) => {
  return (
    <SurfaceIconBoxLabelBox className="iconLabel">
      <LabelBoxText>{label}</LabelBoxText>
      <Triangle></Triangle>
    </SurfaceIconBoxLabelBox>
  );
};

const LabeledIcons: React.FC<ILabelIcons> = ({ label, bgColor, children }) => {
  return (
    <SurfaceIconsBox bgColor={bgColor}>
      {children}
      <Label label={label} />
    </SurfaceIconsBox>
  );
};

export default LabeledIcons;

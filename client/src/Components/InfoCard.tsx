import React from 'react';

import styled from '@emotion/styled';

const InfoCard: React.FC<IInfoCard> = ({ label, content }) => {
  return (
    <InfoCardWrapper>
      <Label>{label}</Label>
      <Content>{content}</Content>
    </InfoCardWrapper>
  );
};

export default InfoCard;

// === interfaces
interface IInfoCard {
  label: string;
  content: string;
}

// === styles
const Label = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
`;
const Content = styled.div`
  color: ${({ theme }) => theme.palette.primaryTextColor};
`;

const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

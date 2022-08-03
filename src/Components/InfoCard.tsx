import styled from '@emotion/styled';
import React from 'react';

interface InfoCardable {
  label: string;
  content: string;
}

const Label = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
`;
const Content = styled.div`
  color: #535454;
`;

const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoCard: React.FC<InfoCardable> = ({ label, content }) => {
  return (
    <InfoCardWrapper>
      <Label>{label}</Label>
      <Content>{content}</Content>
    </InfoCardWrapper>
  );
};

export default InfoCard;

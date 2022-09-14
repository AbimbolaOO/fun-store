import { useState } from 'react';

import styled from '@emotion/styled';

import FilterBox from '../Components/FilterBox';
import HorzontalLine from '../Components/HorzontalLine';
import ItemComponent from '../Components/ItemComponent';
import Page from '../Components/Page';
import SortComponent from '../Components/SortComponent';

const OnSale: React.FC = () => {
  const [showFilterBox, setShowFilterBox] = useState(false);

  return (
    <Page title="WhyteShops | On Sale">
      <Banner>
        <Label>
          <Title>On Sale</Title>
          <p>Home / On Sale</p>
        </Label>
      </Banner>
      <ContentsWrapper>
        <SortComponent
          setShowFilterBox={setShowFilterBox}
          showFilterBox={showFilterBox}
        />
      </ContentsWrapper>
      <HorzontalLineWrapper />
      <FilterBox showFilterBox={showFilterBox} />
      <ContentsWrapper>
        <ContentFill>
          <ItemComponent
            imgSrc="/static/img/dinma-3-seater-1.jpg"
            imgSrc2="/static/img/dinma-3-seater.jpg"
            title="dinma duo"
            action="+ Select Options"
            price="$169"
            oldPrice="$221"
          />
          <ItemComponent
            imgSrc="/static/img/dinma-3-seater-1.jpg"
            imgSrc2="/static/img/dinma-3-seater.jpg"
            title="dinma duo"
            action="+ Select Options"
            price="$169"
            oldPrice="$221"
          />
          <ItemComponent
            imgSrc="/static/img/dinma-3-seater-1.jpg"
            imgSrc2="/static/img/dinma-3-seater.jpg"
            title="dinma duo"
            action="+ Select Options"
            price="$169"
            oldPrice="$221"
          />
          <ItemComponent
            imgSrc="/static/img/dinma-3-seater-1.jpg"
            imgSrc2="/static/img/dinma-3-seater.jpg"
            title="dinma duo"
            action="+ Select Options"
            price="$169"
            oldPrice="$221"
          />
          <ItemComponent
            imgSrc="/static/img/dinma-3-seater-1.jpg"
            imgSrc2="/static/img/dinma-3-seater.jpg"
            title="dinma duo"
            action="+ Select Options"
            price="$169"
            oldPrice="$221"
          />
        </ContentFill>
      </ContentsWrapper>
    </Page>
  );
};

export default OnSale;

// === styles
const Banner = styled.div`
  grid-column: 1 / span 3;
  height: 15rem;
  display: grid;
  background: center / cover no-repeat url('/static/img/anniversary-2.jpg');
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const HorzontalLineWrapper = styled(HorzontalLine)`
  grid-column: 1 / span 3;
`;

const ContentsWrapper = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-template-columns: 1fr 12fr 1fr;

  @media screen and (max-width: 990px) {
    grid-column: 1 / 4;
    margin: 0 32px;
  }
`;

const ContentFill = styled.div`
  grid-column: 2 / 3;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 100px 0;

  @media screen and (max-width: 990px) {
    grid-column: 1 / 4;
  }
`;

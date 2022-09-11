import styled from '@emotion/styled';

import Heading from '../Components/Heading';
import HorzontalLine from '../Components/HorzontalLine';
import Page from '../Components/Page';
import Layout23 from '../Layouts/Layout23';
import BottomConfigurator from '../Sections/productViewer/BottomConfigurator';
import LeftConfigurator from '../Sections/productViewer/LeftConfigurator';
import RightConfigurator from '../Sections/productViewer/RightConfigurator';
import Slider from '../Sections/productViewer/Slider';

const ProductsViewWrapper = styled.div`
  display: grid;
  row-gap: 120px;
  grid-template-columns: 1fr 14fr 1fr;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Contents = styled.div`
  grid-column: 2 / 3;
  place-content: center;
  text-align: center;

  @media screen and (max-width: 1160px) {
    grid-column: 1/4;
  }
  @media screen and (max-width: 760px) {
    grid-column: 1;
  }
`;

const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  & > div {
    color: ${({ theme }) => theme.palette.primaryTextColor};
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 100px;
  }
`;

const dummyData = {
  imgSrc: '/static/img/dinma-3-seater-1.jpg',
  imgSrc2: '/static/img/dinma-3-seater.jpg',
  title: 'dinma duo',
  action: '+ Select Options',
  price: '$169',
  oldPrice: '$221',
};
const sliderData = Array.from({ length: 10 }).fill(dummyData);

const ProductsView = () => {
  return (
    <Page title="WhyteShops | product">
      <Layout23>
        <ProductsViewWrapper>
          <Contents>
            <ItemInfo>
              <LeftConfigurator src={'/static/img/dinma-3-seater-1.jpg'} />
              <RightConfigurator />
            </ItemInfo>
          </Contents>
          <Contents>
            <HorzontalLine className="track-line" />
          </Contents>
          <Contents>
            <Heading>Related Product</Heading>
            <Slider data={sliderData} />
          </Contents>
        </ProductsViewWrapper>
      </Layout23>
      <BottomConfigurator />
    </Page>
  );
};

export default ProductsView;

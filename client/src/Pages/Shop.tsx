import styled from 'styled-components';

import ShopData from '../__mocks__/ShopData';
import Page from '../Components/Page';
import Layout23 from '../Layouts/Layout23';
import ItemSection from '../Sections/ItemSection';

const ShopLayoutWrapper = styled.div`
  display: grid;
  gap: 60px;
  grid-template-columns: 1fr 10fr 1fr;

  & > div:last-child > div:last-child {
    visibility: hidden;
  }
`;

const Shop: React.FC = () => {
  return (
    <Page title="WhyteShops | Shop">
      <Layout23>
        <ShopLayoutWrapper>
          {ShopData.map((data) => (
            <ItemSection
              key={data.sectionTitle}
              sectionTitle={data.sectionTitle}
              sectionData={data.sectionData}
            />
          ))}
        </ShopLayoutWrapper>
      </Layout23>
    </Page>
  );
};

export default Shop;

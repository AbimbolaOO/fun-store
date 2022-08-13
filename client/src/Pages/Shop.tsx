import styled from 'styled-components';
import Layout23 from '../Layouts/Layout23';

import ItemSection from '../Sections/ItemSection';
import ShopData from '../__mocks__/ShopData';

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
    <Layout23>
      <ShopLayoutWrapper>
        {ShopData.map((data) => (
          <ItemSection
            sectionTitle={data.sectionTitle}
            sectionData={data.sectionData}
          />
        ))}
      </ShopLayoutWrapper>
    </Layout23>
  );
};

export default Shop;

import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import HorzontalLine from '../Components/HorzontalLine';
import FooterSection from '../Sections/FooterSection';
import NavigationSection from '../Sections/NavigationSection';
import TopFixedHeaderSection from '../Sections/TopFixedHeaderSection';

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 26fr 1fr;
  padding-bottom: 20px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 8fr 1fr;
  }
`;

const BodyLayoutContainer = styled.div`
  display: grid;
  grid-column: 1/4;
  grid-template-columns: 1fr 26fr 1fr;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 8fr 1fr;
  }
`;

const HorizontalLineWrapper = styled(HorzontalLine)`
  grid-column: 1/4;
`;

const AppLayout: React.FC = () => {
  return (
    <>
      <ContentLayout>
        <TopFixedHeaderSection />
        <HorizontalLineWrapper />
        <NavigationSection />
        <BodyLayoutContainer>
          <Outlet />
        </BodyLayoutContainer>
      </ContentLayout>
      <HorzontalLine />
      <FooterSection />
    </>
  );
};

export default AppLayout;

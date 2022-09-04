import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import HomeScreenData from '../__mocks__/HomeScreenData';
import FigureComponent from '../Components/FigureComponent';
import Page from '../Components/Page';
import Layout23 from '../Layouts/Layout23';

const HomePageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

const Home: React.FC = () => {
  const [smallDevice, setSmallDevice] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 991) {
        setSmallDevice(true);
      } else {
        setSmallDevice(false);
      }
    });
  });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 990px)');
    if (mq.matches) {
      setSmallDevice(true);
    }
  }, []);

  return (
    <Page title="WhyteShops | Home">
      <Layout23>
        <HomePageLayout>
          {HomeScreenData(smallDevice).map((data) => (
            <FigureComponent
              columnLineStart={data.columnLineStart}
              span={data.span}
              imgSrc={data.imgSrc}
              key={data.id}
              link={data.link}
              title={data.title}
              action={data.action}
            />
          ))}
        </HomePageLayout>
      </Layout23>
    </Page>
  );
};

export default Home;

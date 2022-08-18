import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

import Page from '../Components/Page';

const MainContainer = styled.main`
  grid-column: 1/4;
  display: grid;
  & > div {
    grid-column: 1;
    grid-row: 1;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 990px) {
    margin-left: -40vw;
  }
`;

const LargeText = styled.div`
  font-size: 5rem;
`;

const SmallText = styled.div`
  color: #535454;
  display: flex;
  padding-top: 2rem;
  font-size: 1rem;
  gap: 4px;
`;

const StyledRouterLinkSecoundaryWrapper = styled(RouterLink)`
  color: black;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  transition: color 0.5s;
  text-decoration-color: black;

  &:hover {
    color: #fbac1a;
    text-decoration-color: black;
  }
`;

const ImageBox = styled.div`
  grid-column: 2 / span 3;
  height: 100vh;
  /* padding-top: 20px; */
  background: center / cover no-repeat url('/static/img/notfoundImage.png');
`;

const NotFoundPage: React.FC = () => {
  return (
    <Page title="WhyteShops | 404">
      <MainContainer>
        <ImageBox></ImageBox>
        <TextContainer>
          <LargeText>Oops!</LargeText>
          <LargeText>Page not found!</LargeText>
          <SmallText>
            <div>PLEASE GO BACK TO</div>
            <StyledRouterLinkSecoundaryWrapper to="/">
              HOMEPAGE
            </StyledRouterLinkSecoundaryWrapper>
          </SmallText>
        </TextContainer>
      </MainContainer>
    </Page>
  );
};

export default NotFoundPage;

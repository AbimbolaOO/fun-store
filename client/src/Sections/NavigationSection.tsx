import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import { HoverDropDownList } from '../Components/HoverDropDown';

import {
  Search,
  Profile,
  Love,
  Cart,
  HamburgerMenu,
} from '../Components/MenuIcons';

const PageLinkContainer = styled.ul`
  display: flex;
  list-style: none;
  /* list-style-type: none; */
  gap: 20px;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const NavIconsGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const NavMenuSuperContainer = styled.div`
  display: flex;
  grid-column: 2/3;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  /* padding: 40px; */
  /* border: 2px solid firebrick; */
`;

const MenuListItem = styled.li`
  cursor: pointer;
  /* text-decoration: none; */
`;

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
  /* border: 2px solid rebeccapurple; */
  display: inline-block;
  position: relative;
  color: #535454;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #424141;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:link {
    color: #535454;
  }
  &:visited {
    color: #535454;
  }
  &:hover {
    color: #272626;
  }
  &:active {
    color: #535454;
  }
`;

const RightOptionalView = styled.div`
  @media screen and (min-width: 989px) {
    display: none;
  }
`;

const LeftOptionalView = styled.div`
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

const shopDropDownOptions = [
  { label: 'Bed', path: '/' },
  { label: 'Sofas', path: '/' },
  { label: 'Consoles', path: '/' },
  { label: 'Tables', path: '/' },
  { label: 'Soft Seating', path: '/' },
  { label: 'Coffee Tables', path: '/' },
  { label: 'Chairs', path: '/' },
];

const NavigationSection: React.FC = () => {
  return (
    <>
      <NavMenuSuperContainer>
        <LeftOptionalView>
          <HamburgerMenu />
        </LeftOptionalView>
        <RightOptionalView>
          <StyledRouterLink to="/">
            <em>WhyteShops</em>
          </StyledRouterLink>
        </RightOptionalView>
        <PageLinkContainer>
          <MenuListItem>
            <StyledRouterLink to="/collections/top-picks">
              On Sale
            </StyledRouterLink>
          </MenuListItem>
          <MenuListItem>
            {/* <StyledRouterLink to="/collections">Shop</StyledRouterLink> */}
            <HoverDropDownList options={shopDropDownOptions}>
              <StyledRouterLink to="/collections">Shop</StyledRouterLink>
            </HoverDropDownList>
          </MenuListItem>
          <MenuListItem>
            <StyledRouterLink to="/blogs/post">Blog</StyledRouterLink>
          </MenuListItem>
          <MenuListItem>
            <StyledRouterLink to="/">
              <em>WhyteShops</em>
            </StyledRouterLink>
          </MenuListItem>
          <MenuListItem>
            <StyledRouterLink to="/pages/about-us">About</StyledRouterLink>
          </MenuListItem>
          <MenuListItem>
            <StyledRouterLink to="/pages/faqs">FAQs</StyledRouterLink>
          </MenuListItem>
          <MenuListItem>
            <StyledRouterLink to="/pages/contact-us">Contacts</StyledRouterLink>
          </MenuListItem>
        </PageLinkContainer>
        <NavIconsGroup>
          <RouterLink to="/">
            <Search />
          </RouterLink>
          <RouterLink to="/account/login">
            <Profile />
          </RouterLink>
          <RouterLink to="/">
            <Love />
          </RouterLink>
          <RouterLink to="/">
            <Cart />
          </RouterLink>
          <RightOptionalView>
            <HamburgerMenu />
          </RightOptionalView>
        </NavIconsGroup>
      </NavMenuSuperContainer>
    </>
  );
};

export default NavigationSection;

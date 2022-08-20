import { useState } from 'react';
import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

import { HoverDropDown } from '../Components/HoverDropDown';
import HamburgerMenu from '../Components/HamburgerMenu';
import CartSection from '../Sections/CartSection';
import SearchSeaction from '../Sections/SearchSeaction';
// import AnimatingHambugerIcon from '../Components/AnimatingHambugerIcon';
import {
  Search,
  Profile,
  Cart,
  HamburgerMenuIcon,
} from '../Components/MenuIcons';

const PageLinkContainer = styled.ul`
  display: flex;
  list-style: none;
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
`;

const MenuListItem = styled.li`
  cursor: pointer;
`;

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
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

const IconWrapper = styled.div`
  cursor: pointer;
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

const menuOptions = [
  { label: 'On Sale', path: '/collections/top-picks' },
  { label: 'Shop', path: '/collections' },
  { label: 'Blog', path: '/blogs/post' },
  { label: 'About', path: '/pages/about-us' },
  { label: 'FAQs', path: '/pages/faqs' },
  { label: 'Contacts', path: '/pages/contact-us' },
];

const NavigationSection: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const onClick = () => {
    setShowCart(!showCart);
  };

  const onClickSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <NavMenuSuperContainer>
        <LeftOptionalView>
          <HamburgerMenuIcon />
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
            <HoverDropDown options={shopDropDownOptions}>
              <StyledRouterLink to="/collections">Shop</StyledRouterLink>
            </HoverDropDown>
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
          <IconWrapper onClick={onClickSearch}>
            <Search />
          </IconWrapper>
          <RouterLink to="/account/login">
            <Profile />
          </RouterLink>
          <IconWrapper onClick={onClick}>
            <Cart />
          </IconWrapper>
          <RightOptionalView>
            <HamburgerMenu options={menuOptions}>
              <HamburgerMenuIcon />
            </HamburgerMenu>
          </RightOptionalView>
        </NavIconsGroup>
      </NavMenuSuperContainer>
      <SearchSeaction showSearch={showSearch} setShowSearch={setShowSearch} />
      <CartSection showCart={showCart} setShowCart={setShowCart} />
    </>
  );
};

export default NavigationSection;

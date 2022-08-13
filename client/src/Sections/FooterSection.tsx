import styled from '@emotion/styled';

import {
  Discovery,
  Maestro,
  Master,
  Opay,
  Paypal,
  Visa,
} from '../Components/PaymentsVendorIcons';
import SocialIconsGroup from '../Components/SocialIconsGroup';
import { StyledRouterLinkSecoundary } from '../Components/StyledLinks';
import Box from '../Components/Box';

const FooterLinksGroup = styled.ul`
  display: flex;
  column-gap: 50px;
  padding: 0;
  justify-content: center;
  list-style: none;
  /* border: 2px solid red; */
  flex-wrap: wrap;
`;

const FooterLinksGroupItem = styled.li`
  cursor: pointer;
`;

const FooterSection: React.FC = () => {
  return (
    <>
      <Box direction="column" align="center" gap="40px" padding="100px">
        <FooterLinksGroup>
          <FooterLinksGroupItem>
            <StyledRouterLinkSecoundary to="pages/faqs">
              Terms of Service
            </StyledRouterLinkSecoundary>
          </FooterLinksGroupItem>
          <FooterLinksGroupItem>
            <StyledRouterLinkSecoundary to="pages/faqs">
              Refund policy
            </StyledRouterLinkSecoundary>
          </FooterLinksGroupItem>
          <FooterLinksGroupItem>
            <StyledRouterLinkSecoundary to="pages/faqs">
              FAQs
            </StyledRouterLinkSecoundary>
          </FooterLinksGroupItem>
        </FooterLinksGroup>
        <SocialIconsGroup noVerticalLine />
        <Box wrap="wrap" justify="center" textAlign="center">
          &copy; 2022 WhyteShops. All Rights Reserved | (+234) 8119995541 |
          abimbolaolayemiwhyte@gmail.com
        </Box>
        <Box justify="center" gap="6px">
          <Opay />
          <Discovery />
          <Maestro />
          <Master />
          <Visa />
          <Paypal />
        </Box>
      </Box>
    </>
  );
};

export default FooterSection;

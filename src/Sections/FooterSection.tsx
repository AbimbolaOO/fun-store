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
import StyledRouterLinkSecoundary from '../Components/RouterStyledLinkSecoundary';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 100px;
  /* border: 2px solid rebeccapurple; */
`;

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

const FooterTermsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

const PaymentVendorsIconGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
`;

const FooterSection: React.FC = () => {
  return (
    <>
      <FooterContainer>
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
        <FooterTermsSection>
          &copy; 2022 WhyteShops. All Rights Reserved | (+234) 8119995541 |
          abimbolaolayemiwhyte@gmail.com
        </FooterTermsSection>
        <PaymentVendorsIconGroup>
          <Opay />
          <Discovery />
          <Maestro />
          <Master />
          <Visa />
          <Paypal />
        </PaymentVendorsIconGroup>
      </FooterContainer>
    </>
  );
};

export default FooterSection;

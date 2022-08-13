import styled from '@emotion/styled';
import VerticalLine from '../Components/VerticalLine';
import SocialIconsGroup from '../Components/SocialIconsGroup';

const FixHeader = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  align-items: center;
  line-height: 50px;
  /* height: 100px; */
  /* border: 2px solid red; */
  @media screen and (max-width: 990px) {
    justify-content: center;
    width: 400px;
    margin: auto;
    padding: 20px 0;
  }

  @media screen and (max-width: 575px) {
    width: 150px;
    margin: auto;
  }
`;

const FixHeaderRightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContactsDeets = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 575px) {
    display: None;
  }
`;

const DecoratedBtag = styled.b`
  text-decoration: underline;
`;

const TopFixedHeaderSection: React.FC = () => {
  return (
    <FixHeader>
      <FixHeaderRightContent>
        {/* <HoverDropDown> */}
        NGN
        {/* </HoverDropDown> */}
        <VerticalLine />
        <ContactsDeets>
          <VerticalLine />
          Order Online Call Us <DecoratedBtag>(+234) 08119995541</DecoratedBtag>
        </ContactsDeets>
      </FixHeaderRightContent>
      <SocialIconsGroup />
    </FixHeader>
  );
};

export default TopFixedHeaderSection;

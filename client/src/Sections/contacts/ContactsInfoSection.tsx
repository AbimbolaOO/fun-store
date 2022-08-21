import styled from '@emotion/styled';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media screen and (max-width: 762px) {
    grid-template-columns: auto;
  }
`;

const ContactSectionHeader = styled.div`
  grid-column: 2 / span 1;
`;

const ContactSectionBody = styled.div`
  grid-column: 2 / span 1;
`;

const ContactSectionImg = styled.div`
  grid-column: 1 / span 1;
`;

const ContactTile = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: repeat(3, 40px);
  gap: 10px;
  @media screen and (max-width: 762px) {
    grid-template-rows: auto;
  }
`;

const ContactsInfoSection = () => {
  return (
    <ContactWrapper>
      <ContactTile>
        <ContactSectionHeader>ADDRESS</ContactSectionHeader>
        <ContactSectionImg>
          <LocationOnIcon />
        </ContactSectionImg>
        <ContactSectionBody>
          37, Olusoji Oladapo street, kudenyibu estate, Ijegun
        </ContactSectionBody>
      </ContactTile>
      <ContactTile>
        <ContactSectionHeader>CONTACT</ContactSectionHeader>
        <ContactSectionImg>
          <LocalPhoneIcon />
        </ContactSectionImg>
        <ContactSectionBody>Mobile: (+234) 8119995541</ContactSectionBody>
        <ContactSectionImg>
          <EmailIcon />
        </ContactSectionImg>
        <ContactSectionBody>
          Mail: abimbolaolayemiwhyte@gmail.com
        </ContactSectionBody>
      </ContactTile>
      <ContactTile>
        <ContactSectionHeader>HOUR OF OPERATION</ContactSectionHeader>
        <ContactSectionImg>
          <AccessTimeIcon />
        </ContactSectionImg>
        <ContactSectionBody>Monday ñ Friday : 09:00 ñ 20:00</ContactSectionBody>
        <ContactSectionBody>
          Sunday & Saturday: 10:30 ñ 22:00
        </ContactSectionBody>
      </ContactTile>
    </ContactWrapper>
  );
};

export default ContactsInfoSection;

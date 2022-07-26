import styled from '@emotion/styled';

import Box from '../Components/Box';
import Page from '../Components/Page';
import Layout23 from '../Layouts/Layout23';
import ContactsFormSection from '../Sections/contacts/ContactsFormSection';
import ContactsInfoSection from '../Sections/contacts/ContactsInfoSection';

const Contacts = () => {
  return (
    <Page title="WhyteShops | Contacts ">
      <Layout23>
        <ContactLayout
          direction="column"
          align="center"
          gap="10px"
          padding="100px 0 0 "
        >
          <Box>SIMPLY OR WHITE</Box>
          <Box fontSize="2rem" padding="0 0 40px 0">
            Clever & unique ideas
          </Box>
          <ContactsInfoSection />
          <Box fontSize="2rem" padding="80px 0 40px 0">
            Get in touch
          </Box>
          <ContactsFormSection />
        </ContactLayout>
      </Layout23>
    </Page>
  );
};

export default Contacts;

// === styles
const ContactLayout = styled(Box)`
  @media screen and (min-width: 1200px) {
    margin: 0 5vw;
  }
`;

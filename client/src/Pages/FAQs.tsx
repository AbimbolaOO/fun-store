import styled from '@emotion/styled';

import Page from '../Components/Page';
import Layout23 from '../Layouts/Layout23';

const FAQs: React.FC = () => {
  return (
    <Page title="WhyteShops | FAQs ">
      <Layout23>
        <ContentWrapper>
          <div>
            <div>What currency are the prices I see in the site?</div>
            <div>All prices are in NGN.</div>
          </div>
          <div>
            <div>I just placed an order, when will it be shipped?</div>
            <div>
              We try our best to ship items as fast as we can. Please allow 4-7
              days production time for your order to ship out, average shipping
              times are 3-4 weeks. Tracking numbers will be updated 3-5 days
              after your order has been SHIPPED. If you don't have a tracking
              number after 7 business please email us at hi@whyteshops.com.
            </div>
          </div>
          <div>
            <div>Can I customize some furniture pieces? </div>
            <div>
              Yes. Pieces are completely customizable. You can change fabrics
              colour and the overall finish and sizes respectively. However, the
              price might vary from the price you see on the website due to some
              advanced feature that might be added on the furniture.
            </div>
          </div>
          <div>
            <div>
              Can you change the fabric on my furniture set to a new one of my
              choice?
            </div>
            <div>
              Yes. We manufacture custom made pieces based on your choice.
            </div>
          </div>
          <div>
            <div>
              Can I place an order from other parts of Nigeria or the world?
            </div>
            <div>
              Yes, but that depends. We have local/international logistics
              partners that can ship your orders to you in any part of Nigeria.
              However, for international shipping, we only cater for South
              Africa, UK, and USA at the moment. Other considerations might be
              given to other locations depending on the inquiry.
            </div>
          </div>
          <div>Do you offer after sales services? Yes, we do.</div>
          <div>
            <div>Do you have any warranty on your products?</div>
            <div>
              Yes, we give 1 year warranty on every product bought from us.
            </div>
          </div>
          <div>
            <div>I am not in love with my order, can it be returned?</div>
            <div>
              What if there is an issue? We offer 100% money back guarantee, if
              the product is defective or damaged. We give you 30 days to send
              it back to us for a full refund. You must ship it back at your own
              expense, once we have received the product we will refund the full
              amount of your original purchase. Please Include a name and the
              order number on the returned parcels. NB: If you your package is
              on the way, you must wait for it to arrive and return it before
              receiving a refund.
            </div>
          </div>
          <div>
            <div>Can I cancel my order? </div>
            <div>
              You are able to cancel your order with no penalty! You must cancel
              your order before shipping commences. If the item is already sent,
              please use our easy return system to geta full refund.
            </div>
          </div>
          <div>
            <div>I have entered an incorrect address what do I do now?</div>
            <div>
              If you have miss spelled or auto filled in an incorrect address,
              simply reply to your order conformation email and confirm. Once
              you double check if the address given is wrong, kindly notify us
              via email; hi@whyteshops.com. If the given address is wrong we can
              change the address to the correct one within 24 hours. No refund
              will be given after the 24 hours of incorrect submission.
            </div>
          </div>
          <div>
            <div>
              How long does shipping take? Shipping times vary as we ship
              worldwide
            </div>
            from different fulfillment centers based on your location. The
            average shipping time is 3 - 4 weeks.
          </div>
          <div>
            <div>
              I have a question that wasn't answered, can you please help?
            </div>
            <div>
              Absolutely! We are here to help you make your home beautiful!
              Please send us an email to hi@whyteshops.com and we will be happy
              to assist you in any way we can. We do receive a large number of
              emails, If you wish to get a prompt response please attach your
              order number and address the problem clearly, thanks.
            </div>
          </div>
        </ContentWrapper>
      </Layout23>
    </Page>
  );
};

export default FAQs;

// === styles
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.primaryTextColor};
  padding: 10vh 0 5vh;

  & div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & > div {
    padding: 0 0 20px 0;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 5vw;
  }
`;

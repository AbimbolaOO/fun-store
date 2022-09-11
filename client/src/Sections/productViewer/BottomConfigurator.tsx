import { useEffect, useRef } from 'react';

import styled from '@emotion/styled';

import Box from '../../Components/Box';
import Button from '../../Components/Button';
import PlainImage from '../../Components/PlainImage';
import QuantitySetter from '../../Components/QuantitySetter';
import SelectMenu2 from '../../Components/SelectMenu2';

const ButtonConfiguratorWrapper = styled.div`
  position: fixed;
  display: none;
  pointer-events: none;
  grid-template-columns: 1fr 8.5fr 1fr;
  width: 100%;
  height: 70px;
  bottom: 0px;
  background-color: white;
  z-index: 3;
  box-shadow: rgba(144, 144, 144, 0.24) 0px -4px 8px;

  &.bottom-fixed {
    display: grid;
    pointer-events: auto;
  }
`;

const ButtonConfigurator = styled.div`
  display: grid;
  grid-column: 2/3;
`;

const options = [
  '4x6ft / Grey / Matte - ₦124,999.00',
  '4x6ft / Grey / Velvet - ₦124,999.00',
  '4x6ft / Black / Matte - ₦124,999.00',
  '4x6ft / Black / Velvet - ₦124,999.00',
  '6x6ft / Grey / Matte - ₦161,999.00',
  '6x6ft / Grey / Velvet - ₦161,999.00',
  '6x6ft / Black / Matte - ₦161,999.00',
  '6x6ft / Black / Velvet - ₦161,999.00',
];

const BottomConfigurator = () => {
  const bottomConfigRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topheader = document.querySelector('.track-line');
    const options = {
      rootMargin: '500px 0px -400px 0px',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        bottomConfigRef.current!.classList.toggle(
          'bottom-fixed',
          entry.isIntersecting
        );
      });
    }, options);
    observer.observe(topheader!);
  }, [bottomConfigRef]);

  return (
    <ButtonConfiguratorWrapper ref={bottomConfigRef}>
      <ButtonConfigurator>
        <Box justify="space-between" align="center">
          <Box gap="20px" align="center">
            <Box width="50px">
              <PlainImage src="/static/img/dinma-3-seater.jpg" />
            </Box>
            <Box>hassan</Box>
          </Box>
          <Box>
            <SelectMenu2 options={options} />
          </Box>
          <Box gap="20px">
            <QuantitySetter />
            <Button padding="0 20px" fontSize="0.8rem">
              Add to cart
            </Button>
          </Box>
        </Box>
      </ButtonConfigurator>
    </ButtonConfiguratorWrapper>
  );
};

export default BottomConfigurator;

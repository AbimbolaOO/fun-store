import { useState } from 'react';

import styled from '@emotion/styled';

import Box from '../Components/Box';

function QuantitySetter() {
  const [counter, setCounter] = useState(1);
  return (
    <Container gap="32px">
      <Box
        padding="4px"
        onClick={() => (counter !== 1 ? setCounter(counter - 1) : counter)}
      >
        -
      </Box>
      <Box> {counter} </Box>
      <Box padding="4px" onClick={() => setCounter(counter + 1)}>
        +
      </Box>
    </Container>
  );
}

export default QuantitySetter;

// === styles
const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primaryTextColor};
  padding: 8px 0px;
  font-size: 2rem;
`;

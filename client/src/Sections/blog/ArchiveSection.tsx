import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import ArchivePost from '../../__mocks__/ArchivePost';
import Box from '../../Components/Box';
import { BasicBlueLink } from '../../Components/StyledLinks';

const ArchiveSection = () => {
  const theme = useTheme();

  return (
    <Box direction="column" gap="20px">
      <Heading>Archive</Heading>
      {ArchivePost.map((data) => (
        <Box direction="column" key={data.sampleData}>
          <ArticleHeader>{data.date}</ArticleHeader>
          <BasicBlueLink to={data.link} color={theme.palette.primaryTextColor}>
            {data.sampleData}
          </BasicBlueLink>
        </Box>
      ))}
    </Box>
  );
};

export default ArchiveSection;

// === styles
const Heading = styled.div`
  font-size: 1.5rem;
`;

const ArticleHeader = styled.div`
  color: ${({ theme }) => theme.palette.primaryTextColor};
`;

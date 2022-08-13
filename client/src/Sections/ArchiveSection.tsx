import styled from '@emotion/styled';

import Box from '../Components/Box';

import ArchivePost from '../__mocks__/ArchivePost';
import { LinkToArticle } from '../Components/StyledLinks';

const Heading = styled.div`
  font-size: 1.5rem;
`;

const ArticleHeader = styled.div`
  color: #535454;
`;

const ArchiveSection = () => {
  return (
    <Box direction="column" gap="20px">
      <Heading>Archive</Heading>
      {ArchivePost.map((data) => (
        <Box direction="column" key={data.sampleData}>
          <ArticleHeader>{data.date}</ArticleHeader>
          <LinkToArticle to={data.link} color="#535454">
            {data.sampleData}
          </LinkToArticle>
        </Box>
      ))}
    </Box>
  );
};

export default ArchiveSection;

import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

import Box from '../Components/Box';

import ArchivePost from '../__mocks__/ArchivePost';

const Heading = styled.div`
  font-size: 1.5rem;
`;

const ArticleHeader = styled.div`
  color: #535454;
`;

interface LinkToArticleAble {
  color?: string;
}

const LinkToArticle = styled(RouterLink)<LinkToArticleAble>`
  text-decoration: none;
  /* border: 2px solid rebeccapurple; */
  display: inline-block;
  position: relative;
  color: ${({ color }) => (color ? color : 'black')};

  &:link {
    color: black;
  }
  &:visited {
    color: ${({ color }) => (color ? color : 'black')};
  }
  &:hover {
    color: #034baf;
  }
  &:active {
    color: black;
  }
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

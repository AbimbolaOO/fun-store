import { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import BlogPost, { IBlogPost } from '../__mocks__/BlogPost';
import Box from '../Components/Box';
import Heading from '../Components/Heading';
import Page from '../Components/Page';
import Pagination from '../Components/Pagination';
import SearchBar from '../Components/SearchBar';
import Layout23 from '../Layouts/Layout23';
import ArchiveSection from '../Sections/blog/ArchiveSection';
import MainArticleSection from '../Sections/blog/MainArticleSection';
import RecentsSection from '../Sections/blog/RecentsSection';
import TagSection from '../Sections/blog/TagSection';

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 9fr 1fr;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 3fr;
  }

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

const Aside = styled.aside`
  grid-column: 2 / span 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1200px) {
    grid-column: 1 / span 1;
  }

  @media screen and (max-width: 990px) {
    grid-column: 1 / span 1;
    grid-row: 2;
  }
`;

const MainContent = styled.main`
  grid-column: 3 / span 1;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 100px;

  @media screen and (max-width: 1200px) {
    grid-column: 2 / span 1;
  }

  @media screen and (max-width: 990px) {
    grid-column: 1 / span 1;
  }
`;

const Blog: React.FC = () => {
  const theme = useTheme();
  const [content, setContent] = useState<IBlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setContent(BlogPost);
    setTotalItems(BlogPost.length);
    if (currentPage > 1) {
      console.log(`skip to ${totalItems * (currentPage - 1)}`);
    } else {
      console.log(`skip to ${currentPage - 1}`);
    }
  }, [currentPage, totalItems]);

  return (
    <Page title="WhyteShops | Blog">
      <Layout23>
        <AboutLayout>
          <MainContent>
            {content.map((data) => (
              <MainArticleSection
                date={data.date}
                imgSrc={data.imgSrc}
                heading={data.heading}
                articleSample={data.articleSample}
                key={data.heading}
              />
            ))}
            <Pagination
              totalItems={totalItems}
              pageSize={2}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </MainContent>
          <Aside>
            <SearchBar />
            <RecentsSection />
            <ArchiveSection />
            <TagSection />
            <div>
              <Heading>Banner</Heading>
              <Box bgColor={theme.palette.bgColor}>
                <img alt="banner" src="/static/svg/bagBanner.svg" />
              </Box>
            </div>
          </Aside>
        </AboutLayout>
      </Layout23>
    </Page>
  );
};

export default Blog;

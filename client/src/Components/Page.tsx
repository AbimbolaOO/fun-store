import React from 'react';
import { Helmet } from 'react-helmet-async';

interface IPage {
  title: string;
  children: React.ReactNode;
}

const Page: React.FC<IPage> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Page;

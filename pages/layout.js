import Head from 'next/head';
import React from 'react';

const Layout = ({ children }) => {
    return (
      <>
        <Head>
          <title>Vidhi</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Vidhi App" />
        </Head>
        {children}
      </>
    );
  };
  
  export default Layout;
  
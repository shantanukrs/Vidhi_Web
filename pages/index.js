// import Home from "./home/home";
// import Vidhi_Terms_and_Conditions from '../public/Vidhi_Terms_and_Conditions.pdf';
// import dynamic from "next/dynamic";
// import Head from 'next/head';
// import { useEffect } from 'react';

// function App() {
  // useEffect(() => {
  //   (function ($) {
  //     window.fnames = new Array();
  //     window.ftypes = new Array();
  //     fnames[0] = "EMAIL";
  //     ftypes[0] = "email";
  //     fnames[1] = "FNAME";
  //     ftypes[1] = "text";
  //     fnames[2] = "LNAME";
  //     ftypes[2] = "text";
  //   })(jQuery);
  //   var $mcj = jQuery.noConflict(true);
  // }, []);
//   return (
//     <>
//       <Head>
//       <title>Vidhi</title>
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="theme-color" content="#000000" />
//     <meta
//       name="description"
//       content="Vidhi App"
//       />
//       </Head>
//       <Home pdf={Vidhi_Terms_and_Conditions} />
//     </>
//   )
// }
// export default dynamic (() => Promise.resolve(App), {ssr: false});

import React from 'react';
import Layout from './layout';
import Home from './home/home';
import dynamic from "next/dynamic";
import Vidhi_Terms_and_Conditions from '../public/Vidhi_Terms_and_Conditions.pdf';

function App() {
  return (
    <Layout>
      <Home pdf={Vidhi_Terms_and_Conditions} />
    </Layout>
  );
}

export default dynamic (() => Promise.resolve(App), {ssr: false});


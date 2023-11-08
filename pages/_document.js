import { useEffect } from 'react';
import Script from 'next/script';
import Document, { Html,Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from './utils/gtag';
import MyApp from './_app';
 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
 
    
    ctx.renderPage = () =>
      originalRenderPage({
        
        enhanceApp: (App) => App,
        
        enhanceComponent: (Component) => Component,
      });
 
    
    const initialProps = await Document.getInitialProps(ctx);
 
    return initialProps;
  }
 
  render() {
    return (
      <Html>
        <Head> 
        {/* <meta charSet="utf-8" /> */}

        <link rel="icon" href="/favicon.png" />
    

    {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Vidhi App"
      /> */}
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    {/* <title>Vidhi</title> */}

    <script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NMN4XJ7');`}}></script>

{typeof window !== 'undefined' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=UA-252483586-1`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-252483586-1', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}   
        </Head>
        <body>

        <Main />
          <NextScript />
          <script
      type="text/javascript"
      src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    ></script>
   
    <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMN4XJ7"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        </body>
      </Html>
    );
  }
}
 
export default MyDocument;
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { NextSeo } from 'next-seo';

import META from '../configs/meta';
import THEME from '../configs/theme';
import { BlocksSet, PresetSet } from '../blocks/types';

let keywords = META.keywords;

const generate = (key) => {
  return [
    `${key} css component`,
    `${key} component styles`,
    `${key} component styles`,
    `${key} component preset`,
    `${key} component`,
  ];
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    keywords = [...META.keywords];
    Object.values(BlocksSet).map((block) => {
      keywords.push(generate(block));
    });
    Object.values(PresetSet).map((preset) => {
      keywords.push(generate(preset));
    });
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='https://fonts.googleapis.com/css2?family=Work+Sans&display=swap' rel='stylesheet' />
          <link rel='icon' type='image/png' href='/logo-16.png' />
          <link rel='manifest' href='/manifest.json' />
          <script async={true} src='https://www.googletagmanager.com/gtag/js?id=UA-167921266-1' />
          <meta name='description' content={META.description} />
          <meta name='keywords' content={keywords.join(', ')} />
          <meta name='theme-color' content={THEME.colors.primary} />
          <meta name='author' content='Dhruv Jain, Harshit Mehrotra' />
          <meta content='index, follow' name='robots' />
          <meta content='1 days' name='revisit-after' />
          <meta content='all' name='robots' />
          <meta content='all' name='googlebot' />
          <meta name='google-site-verification' content='UrWHnXxCuDE04cIsbV5b6ICa-2HE6oMMvLYo4FEXYcQ' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-167921266-1');`,
            }}
          />
          <NextSeo
            title={META.title}
            description={META.description}
            openGraph={{
              url: 'https://smoothcss.xyz',
              title: META.title,
              description: META.description,
              site_name: META.name,
              images: [
                {
                  url: 'https://smoothcss.xyz/logo-32.png',
                  width: 32,
                  height: 32,
                  alt: `${META.name} logo`,
                },
                {
                  url: 'https://smoothcss.xyz/logo-64.png',
                  width: 64,
                  height: 64,
                  alt: `${META.name} logo`,
                },
                {
                  url: 'https://smoothcss.xyz/logo-128.png',
                  width: 128,
                  height: 128,
                  alt: `${META.name} logo`,
                },
                {
                  url: 'https://smoothcss.xyz/logo-256.png',
                  width: 256,
                  height: 256,
                  alt: `${META.name} logo`,
                },
              ],
            }}
            twitter={{
              handle: '@maddhruv',
              cardType: 'app',
              site: '@maddhruv',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

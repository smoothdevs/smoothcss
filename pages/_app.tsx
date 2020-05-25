import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0fbcf9',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>SmoothCSS</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

import Head from 'next/head';
import { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>SmoothCSS</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;

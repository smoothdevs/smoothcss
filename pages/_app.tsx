import Head from 'next/head';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>SmoothCSS</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

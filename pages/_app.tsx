import Head from 'next/head';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import Progress from 'nprogress';

import '../css/nprogress.css';

import theme from '../configs/theme';
import GlobalStyles from '../components/GlobalStyles';
import TitleBar from '../components/TitleBar';
import PlaygroundStore from '../stores/playground';

Router.events.on('routeChangeStart', () => Progress.start());
Router.events.on('routeChangeComplete', () => Progress.done());
Router.events.on('routeChangeError', () => Progress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <PlaygroundStore.Provider>
        <Head>
          <title>SmoothCSS</title>
        </Head>
        <GlobalStyles />
        <TitleBar />
        <Component {...pageProps} />
      </PlaygroundStore.Provider>
    </ThemeProvider>
  );
};

export default App;

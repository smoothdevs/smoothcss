import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../configs/theme';
import GlobalStyles from '../components/GlobalStyles';
import TitleBar from '../components/TitleBar';
import PlaygroundStore from '../stores/playground';

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

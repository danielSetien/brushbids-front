import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import { store } from "../store";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;

  return (
    <>
      <Head>
        <title key="title">Brushbids</title>
        <meta name="description" content="Bid on curated artwork" />
        <link rel="preconnect" href={apiUrl}></link>
      </Head>

      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;

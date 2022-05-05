import {CacheProvider, EmotionCache} from '@emotion/react';
import {CssBaseline, GlobalStyles, Stack} from '@mui/material';
import {AppProps} from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import DynamicThemeProvider from '../contextReact/DynamicThemeProvider';
import Footer from '../src/Navigation/Footer';
import Nav from '../src/Navigation/Navbar';
import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  React.useEffect(() => {
    const tar = document.getElementById('__next');
    tar.style.height = '100%';
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Accueil - Elizabeth BRICOUT</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DynamicThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyles
          styles={{html: {height: '100%'}, body: {height: '100%'}}}
        />
        <Stack minHeight="100vh" height={'100%'}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </Stack>
      </DynamicThemeProvider>
    </CacheProvider>
  );
}

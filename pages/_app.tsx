import { CacheProvider, EmotionCache } from '@emotion/react';
import { Box, CssBaseline, Stack } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
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
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Accueil - Elizabeth BRICOUT</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
			</Head>
			<DynamicThemeProvider>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Stack minHeight="100vh">
					<Nav />
					<Box sx={{ flex: 1 }}>
						<Component {...pageProps} />
					</Box>
					<Footer />
				</Stack>
			</DynamicThemeProvider>
		</CacheProvider>
	);
}

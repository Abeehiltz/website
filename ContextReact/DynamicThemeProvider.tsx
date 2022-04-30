import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import theme, {darkTheme} from '../styles/theme';
import Head from 'next/head';

// Manage dark mode
const ColorModeContext = React.createContext({
  mode: '',
  toggleColorMode: () => {},
});

export default function DynamicThemeProvider(props) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = {
    mode,
    toggleColorMode: () => {
      setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    },
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Head>
        <meta
          // To manage to theme color meta depending on the theme picked
          name="theme-color"
          content={
            mode === 'light'
              ? theme.palette.background.paper
              : darkTheme.palette.background.paper
          }
        />
      </Head>
      <ThemeProvider theme={mode === 'light' ? theme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export {ColorModeContext};

import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import theme, {darkTheme} from '../styles/theme';

// Manage dark mode
const ColorModeContext = React.createContext({toggleColorMode: () => {}});

export default function DynamicThemeProvider(props) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'light' ? theme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export {ColorModeContext};

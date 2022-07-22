import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#B16300',
		},
		secondary: {
			main: '#9c27b0',
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#000',
		},
	},
});

const darkTheme = createTheme({
	...theme,
	palette: {
		mode: 'dark',
		primary: {
			main: '#fbc02d',
		},
		secondary: {
			main: '#ba68c8',
		},
		error: {
			main: red.A400,
		},
	},
});

export { darkTheme };
export default theme;

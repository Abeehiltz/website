import {DarkMode, GitHub, LightMode, LinkedIn} from '@mui/icons-material';
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import {useContext} from 'react';
import {ColorModeContext} from '../../contextReact/DynamicThemeProvider';

function NamePart() {
  return (
    <Stack>
      <Typography color="primary" fontWeight={600} fontSize="1.3rem">
        Elizabeth BRICOUT
      </Typography>
    </Stack>
  );
}

function MenuPart() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={10}
      marginRight={10}
      flex={1}
    >
      <Link href="#" passHref>
        <Button aria-label="about myself button">About</Button>
      </Link>
      <Link href="#" passHref>
        <Button aria-label="my projects button">Projects</Button>
      </Link>
      <Link href="#" passHref>
        <Button aria-label="my experiences button">Experiences</Button>
      </Link>
      <Link href="#" passHref>
        <Button aria-label="contact me button">Contact</Button>
      </Link>
    </Stack>
  );
}

function ContactPart() {
  const colorMode = useContext(ColorModeContext);

  return (
    <Stack direction="row">
      <IconButton
        href="https://github.com/Abeehiltz"
        aria-label="github profile"
      >
        <GitHub />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/elizabeth-bricout"
        aria-label="linkedin profile"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        aria-label="switch theme button"
        onClick={() => {
          colorMode.toggleColorMode();
        }}
        sx={{
          border: theme => `1px solid ${theme.palette.primary.main}`,
          borderRadius: 2,
        }}
      >
        {colorMode.mode === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Stack>
  );
}

export default function Navbar() {
  return (
    <AppBar
      position="relative"
      component="nav"
      elevation={0}
      sx={{
        backgroundColor: theme => theme.palette.background.paper,
        color: theme => theme.palette.text.primary,
      }}
    >
      <Toolbar>
        <NamePart />
        <MenuPart />
        <ContactPart />
      </Toolbar>
    </AppBar>
  );
}

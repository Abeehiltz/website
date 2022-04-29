import {DarkMode, GitHub, LinkedIn} from '@mui/icons-material';
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
import {ColorModeContext} from '../../ContextReact/DynamicThemeProvider';

function NamePart() {
  return (
    <Stack>
      <Typography color="primary" fontWeight={600} fontSize="1.3rem">
        Elizabeth BRICOUT
      </Typography>
      <Typography>Full-Stack Developer</Typography>
    </Stack>
  );
}

function MenuPart() {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      flex={1}
    >
      <Link href="#" passHref>
        <Button>About</Button>
      </Link>
      <Link href="#" passHref>
        <Button>Projects</Button>
      </Link>
      <Link href="#" passHref>
        <Button>Experiences</Button>
      </Link>
      <Link href="#" passHref>
        <Button>Contact</Button>
      </Link>
    </Stack>
  );
}

function ContactPart() {
  const colorMode = useContext(ColorModeContext);

  return (
    <Stack direction="row">
      <IconButton href="https://github.com/Abeehiltz">
        <GitHub />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/elizabeth-bricout">
        <LinkedIn />
      </IconButton>
      <IconButton onClick={() => colorMode.toggleColorMode()}>
        <DarkMode />
      </IconButton>
    </Stack>
  );
}

export default function Navbar() {
  return (
    <AppBar
      position="relative"
      component="nav"
      color="background"
      elevation={0}
    >
      <Toolbar>
        <NamePart />
        <MenuPart />
        <ContactPart />
      </Toolbar>
    </AppBar>
  );
}

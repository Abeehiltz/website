import {GitHub, LinkedIn} from '@mui/icons-material';
import {Container, Divider, IconButton, Stack, Typography} from '@mui/material';
import {FC} from 'react';

function ContactPart() {
  return (
    <Stack direction="row">
      <IconButton href="https://github.com/Abeehiltz">
        <GitHub />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/elizabeth-bricout">
        <LinkedIn />
      </IconButton>
    </Stack>
  );
}

export default function Footer() {
  return (
    <Container component="footer" maxWidth="lg">
      <Divider />
      <Stack
        direction="row"
        paddingBottom={4}
        paddingTop={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>Copyright &#169; {new Date().getFullYear()}</Typography>
        <Typography>Developed by Elizabeth Bricout</Typography>
        <ContactPart />
      </Stack>
    </Container>
  );
}

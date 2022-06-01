import {Box, Typography, Stack, Link, Button, IconButton} from '@mui/material';
import BouncingArrow from '../../animatedElements/BouncingArrow';

export default function MainPart(props) {
  const {refScrollTarget} = props;
  return (
    <Box>
      <Box
        component="header"
        height="100vh"
        width={'50%'}
        marginLeft={10}
        marginRight={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="body1" component="div" color="primary">
          Hi 👋, my name is
        </Typography>
        <Typography variant="h3" component="h2" color="primary">
          Elizabeth BRICOUT
        </Typography>
        <Typography variant="h4" component="h3" color="secondary">
          web + mobile developer 👩‍💻
        </Typography>
        <Typography variant="h6" component="h4">
          I'm a web and mobile developer with skills in devops, sysadmin and
          cybersecurity. I'm currently based in France and working at{' '}
          <Link href="https://wideop.com">wideop</Link>
        </Typography>
        <Button
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          variant="outlined"
          sx={{width: 'max-content', marginTop: 4}}
        >
          Check out my resume!
        </Button>
      </Box>
      <Stack
        width={'max-content'}
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bottom={10}
        left="0"
        right="0"
        margin="0 auto"
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onClick={() =>
          refScrollTarget.current.scrollIntoView({behavior: 'smooth'})
        }
      >
        <BouncingArrow sx={{fontSize: 40}} color="primary" />
        <Typography variant="caption" color="primary">
          Scroll me!
        </Typography>
      </Stack>
    </Box>
  );
}

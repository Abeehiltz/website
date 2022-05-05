import {ArrowForwardIos} from '@mui/icons-material';
import {Box, Button, Container, Stack} from '@mui/material';
import Link from 'next/link';
import GithubCommits from '../../components/sections/homepage/GithubCommits';
import MainPart from '../../components/sections/homepage/MainPart';

export default function Homepage(props) {
  const {githubRepositories} = props;
  return (
    <Box height="100%">
      <Container maxWidth="lg" sx={{width: '80%'}}>
        <MainPart />
        <GithubCommits githubRepositories={githubRepositories} />
        <Stack margin={10} justifyContent="center" alignItems="center">
          <Link href="#" passHref>
            <Button
              variant="contained"
              sx={{borderRadius: 8}}
              endIcon={<ArrowForwardIos />}
            >
              About me
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

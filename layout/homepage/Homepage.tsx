import {ArrowForwardIos} from '@mui/icons-material';
import {Box, Button, Container, Stack} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import GithubCommits from '../../components/sections/homepage/GithubCommits';
import MainPart from '../../components/sections/homepage/MainPart';

export default function Homepage(props) {
  const {githubRepositories} = props;
  const refBlock = React.useRef();

  return (
    <Box height="100%">
      <MainPart refScrollTarget={refBlock} />
      <Container maxWidth="lg" sx={{width: '80%'}}>
        <GithubCommits
          githubRepositories={githubRepositories}
          refForScroll={refBlock}
        />
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

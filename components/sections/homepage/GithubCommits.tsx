import {Box, Stack, Typography} from '@mui/material';
import GithubRepoCard from '../../cards/GithubRepoCard';

export default function GithubCommits(props) {
  const {githubRepositories} = props;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Typography component="h2" variant="h3">
        Latest Code
      </Typography>
      <Stack direction="row" flexWrap="wrap" spacing={3} marginTop={2}>
        {githubRepositories &&
          githubRepositories.map((repo, index) => (
            <GithubRepoCard key={index} githubRepo={repo} />
          ))}
      </Stack>
    </Box>
  );
}

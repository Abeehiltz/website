import { Box, Stack, Typography } from '@mui/material';
import GithubRepoCard from '../../cards/GithubRepoCard';

export default function GithubCommits(props) {
	const { githubRepositories, refForScroll } = props;

	return (
		<Box marginTop={2} marginBottom={2} ref={refForScroll}>
			<Typography component="h2" variant="h3">
				Latest Code
			</Typography>
			<Stack direction="row" paddingTop={2} height="100%" flexWrap={'wrap'} sx={{ gap: 1 }}>
				{githubRepositories &&
					githubRepositories.map((repo, index) => (
						<GithubRepoCard key={index} githubRepo={repo} />
					))}
			</Stack>
		</Box>
	);
}

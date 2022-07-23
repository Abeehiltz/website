import { Box, Stack, Typography } from '@mui/material';
import GithubRepoCard from '../../cards/GithubRepoCard';

interface WrapperProps {
	githubRepositories: any;
	refForScroll: React.MutableRefObject<HTMLElement | undefined>;
}

export default function GithubCommits(props: WrapperProps) {
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

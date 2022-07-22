import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';

export default function GithubRepoCard(props) {
	const { githubRepo } = props;

	return (
		<Card sx={{ width: 350, display: 'flex', flexDirection: 'column' }}>
			<CardHeader title={githubRepo.name} />
			<CardContent sx={{ flex: 1 }}>
				<Typography component="h3" variant="body2">
					{githubRepo.description}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
				}}
			>
				<Button
					href={githubRepo.clone_url}
					endIcon={<ArrowForwardIos />}
					aria-label="view repository"
				>
					View repository
				</Button>
				<Typography component="div" variant="caption" color="text.secondary">
					Last commit: {new Date(githubRepo.pushed_at).toLocaleDateString()}
				</Typography>
			</CardActions>
		</Card>
	);
}

import { GitHub, LinkedIn } from '@mui/icons-material';
import { Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material';

function ContactPart() {
	return (
		<Stack direction="row">
			<IconButton href="https://github.com/Abeehiltz" aria-label="github profile">
				<GitHub />
			</IconButton>
			<IconButton
				href="https://www.linkedin.com/in/elizabeth-bricout"
				aria-label="linkedin profile"
			>
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
			<Stack textAlign="center">
				<Typography>Hero image credits: </Typography>
				<Link href="https://www.freepik.com/vectors/software-solutions">
					Software solutions vector created by fullvector - www.freepik.com
				</Link>
			</Stack>
		</Container>
	);
}

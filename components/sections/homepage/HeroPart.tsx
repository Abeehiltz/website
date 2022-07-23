import { Box, Button, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import BouncingArrow from '../../animatedElements/BouncingArrow';

interface WrapperProps {
	refScrollTarget: React.MutableRefObject<HTMLElement | undefined>;
}

export default function HeroPart(props: WrapperProps) {
	const { refScrollTarget } = props;
	return (
		<Box>
			<Stack
				component="header"
				height="100vh"
				width={'100%'}
				paddingLeft={10}
				paddingRight={10}
				direction="row"
			>
				<Box
					component="header"
					width={'50%'}
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
						cybersecurity.
					</Typography>
					<Typography variant="body1" component="h5" marginTop={1}>
						I'm currently based in Luxembourg and working at{' '}
						<Link href="https://www.wavestone.com">Wavestone</Link> as a cybersecurity
						consulting intern
					</Typography>
					<Button
						href="/resume.pdf"
						target="_blank"
						rel="noreferrer noopener"
						variant="outlined"
						sx={{ width: 'max-content', marginTop: 4 }}
					>
						Check out my resume!
					</Button>
				</Box>
				<Box position="relative" width="100%">
					<Image
						src="/laptop.webp"
						layout="fill"
						objectFit="contain"
						alt="laptop to represent coding with some coffee"
					/>
				</Box>
			</Stack>
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
				onClick={() => refScrollTarget?.current?.scrollIntoView({ behavior: 'smooth' })}
			>
				<BouncingArrow sx={{ fontSize: 40 }} color="primary" />
				<Typography variant="caption" color="primary">
					Scroll me!
				</Typography>
			</Stack>
		</Box>
	);
}

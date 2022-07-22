import Head from 'next/head';
import Homepage from '../layout/homepage/Homepage';

function Home(props) {
	const { githubRepositories } = props;
	const title = 'Elizabeth Bricout - Developer, writer, cybersecurity';
	const description =
		"Developer for a year and studying cybersecurity, I'm also a writer during my free time. Get in touch with me to know more!";
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta key="description" name="description" content={description} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta name="robots" content="index, follow" />
			</Head>

			<Homepage githubRepositories={githubRepositories} />
		</>
	);
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
	try {
		const res = await fetch(
			'https://api.github.com/search/repositories?q=user:Abeehiltz&sort=updated'
		);
		const githubRepositoriesJson = await res.json();

		return {
			props: { githubRepositories: githubRepositoriesJson.items.splice(0, 6) },
			// Next.js will attempt to re-generate the page:
			// - When a request comes in
			// - At most once every 3600 seconds
			revalidate: 3600, //In seconds
		};
	} catch (error) {
		console.error(error);
		return {
			props: { githubRepositories: null },
			revalidate: 3600,
		};
	}
}

export default Home;

import { NextPage } from 'next';
import Head from 'next/head';
import Canvas from '../components/canvas';
import { drawTitle } from '../helpers/drawingFunctions';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Star Wars Intro</title>
				<meta name="description" content="Star Wars Introduction done in React.js" />
				<link rel="icon" href="/darth_wader.png" />
			</Head>

			<Canvas draw={drawTitle} />

			{/* <main className={styles.main}>
				<h1 className={styles.title}>STAR WARS</h1>
			</main> */}
		</div>
	);
};

export default Home;

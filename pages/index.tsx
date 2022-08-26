import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/modules/Home.module.css'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Star Wars Intro</title>
				<meta name="description" content="Star Wars Introduction done in React.js" />
				<link rel="icon" href="/darth_wader.png" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					STAR WARS
				</h1>
			</main>
		</div>
	)
}

export default Home

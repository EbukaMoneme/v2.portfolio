import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Experience from '../src/components/Experience/Experience'
import Hero from '../src/components/Hero/Hero'
import Nav from '../src/components/Nav/Nav'
import Work from '../src/components/Work/Work'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EBUKA MONEME</title>
        <meta name="description" content="my portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
				<Nav/>
        <Hero/>
				<Experience/>
				<Work/>
      </main>
    </div>
  )
}

export default Home

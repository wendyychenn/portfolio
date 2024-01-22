import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wendy Chen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>

        <div className={`${styles.nav}`}>
          <a href='/'>Projects</a>
          <a>Works</a>
          <a>About</a>
        </div>

        <h1>Projects</h1>
        <div className={`${styles.layout}`}>
          <div>
            <img className={`${styles.image}`} src='/images/whitestone-cover.jpg'/>
          </div>
          <div>
            <h2>WhiteStone</h2>
            <p>WhiteStone is a machine learning dental scanning app for low income and colourblind people to help users evaluate their dental health to reduce the number of dental checkups. It takes pictures of people's mouths and provides data on the teeth scan results.</p>
            <button><a href='/whitestone'>Learn More</a></button>
          </div>
        </div>
      </main>
    </>
  )
}
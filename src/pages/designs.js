import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function Designs() {
    return (
        <>
            <Head>
                <title>Wendy Chen's Portfolio</title>
            </Head>
            <main className={`${styles.main}`}>

                <NavBar />

                <h1 className={`${styles.title}`}>Designs and Illustrations</h1>

                <div className={`${styles.layout3}`} style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>

                    <div className={`${styles.designs}`}>
                        <h2 className={`${styles.designTitle}`}>Motion Graphics</h2>
                        <a href='https://youtu.be/-1oNlJvEtDo' target="_blank"><img src='/designs/chocolate.png' style={{ width: '56vw', borderRadius: '1rem' }} /></a>
                        <video src='/designs/car-animation.mp4' autoPlay loop muted style={{ width: '56vw', borderRadius: '1rem' }} />
                    </div>

                    <div className={`${styles.designs}`}>
                        <h2 className={`${styles.designTitle}`}>Vector Drawings</h2>
                        <img src='/designs/cat-party.png' style={{ width: '56vw', borderRadius: '1rem' }} />
                        <img src='/designs/amplifier.png' style={{ width: '56vw', borderRadius: '1rem' }} />
                    </div>

                    <div className={`${styles.designs}`}>
                        <h2 className={`${styles.designTitle}`}>Photoshop Exercises</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw' }}>
                            <img src='/designs/berryade.png' style={{ width: '27vw', borderRadius: '1rem' }} />
                            <img src='/designs/poster.png' style={{ width: '27vw', borderRadius: '1rem' }} />
                        </div>
                    </div>

                    <div className={`${styles.designs}`}>
                        <h2 className={`${styles.designTitle}`}>Menu Layout Exercise</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw' }}>
                            <img src='designs/menu.png' style={{ width: '27vw', borderRadius: '1rem' }} />
                            <img src='designs/menu2.png' style={{ width: '27vw', borderRadius: '1rem' }} />
                        </div>
                    </div >
                </div>

                <Footer />

            </main >
        </>
    )
}
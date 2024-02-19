import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Designs() {
    return (
        <>

            <main className={`${styles.main}`}>

                <NavBar />

                <h1 className={`${styles.title}`}>Designs and Illustrations</h1>

                <div className={`${styles.layout3}`} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '3rem'}}>
                    <a href='https://youtu.be/-1oNlJvEtDo' target="_blank"><img src='/designs/chocolate.png' style={{width: '50vw', borderRadius: '1rem'}}/></a>
                    <img src='/designs/cat-party.png' style={{ width: '50vw', borderRadius: '1rem' }} />
                    <video src='/designs/car-animation.mp4' autoPlay loop muted style={{width: '50vw', borderRadius: '1rem'}}/>
                    <img src='/designs/amplifier.png' style={{ width: '50vw', borderRadius: '1rem' }} />
                   <img src='/designs/berryade.png' style={{ width: '50vw', borderRadius: '1rem' }} />
                   <img src='/designs/poster.png' style={{ width: '50vw', borderRadius: '1rem' }} />
                </div >

                <Footer />

            </main >
        </>
    )
}
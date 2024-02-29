import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>Wendy Chen's Portfolio</title>
            </Head>
            <main className={`${styles.main}`}>

                <NavBar />

                <h1 className={`${styles.title}`}>About Me</h1>

                <div className={`${styles.layout}`}>
                    <img src='/images/profile.png' style={{ width: '26vw', borderRadius: '50rem' }} />
                    <div>
                        <h2>Hi there! I'm Wendy</h2>
                        <p>I'm currently a student at BCIT (Britsh Columbia Institute of Technology) taking the Digital Design and Development program. I'm a designer with a passion for website design, product design, and character design. I also possess some coding skills in HTML, CSS and Javascript.</p>
                        <div className={`${styles.icon}`}>
                            <a href="mailto: wendy.chen312@gmail.com"><img className={`${styles.icons}`} src='images/email.png' /></a>
                            <a href='https://github.com/wendyychenn'><img className={`${styles.icons}`} src='images/github.png' /></a>
                            <a href='https://www.linkedin.com/in/wendy-chen-994a58295/'><img className={`${styles.icons}`} src='images/linkedin.png' /></a>
                            {/* <a href=''><img className={`${styles.icons}`} src='images/resume.png' /></a>
                            <a href=''><img className={`${styles.icons}`} src='images/letter.png' /></a> */}
                        </div>
                    </div >
                </div >

                <Footer />

            </main >
        </>
    )
}
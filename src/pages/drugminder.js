import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function DrugMinder() {
    return (
        <>
            <Head>
                <title>Wendy Chen's Portfolio</title>
            </Head>
            <main className={`${styles.main}`}>

                <NavBar />

                <h1 className={`${styles.title}`}>DrugMinder</h1>

                <div className={`${styles.layout}`}>
                    <div>
                        <img className={`${styles.image}`} src='/images/drugminder.png' />
                    </div>
                    <div>
                        <p>DrugMinder is a free mobile app that allows users to test for overdosing on cocaine, MDMA, and alcohol. It also provides information for users to learn more about the drugs, including recommended dosages, symptoms of overdosing, and precautions.</p>
                        <p>Role: UI/UX Designer / Frontend Coder</p>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <button className={`${styles.button}`}><a href='https://drugminder.vercel.app/'>Check it Out</a></button>
                            <button className={`${styles.button}`}><a href='https://github.com/IngridChou/MDIA-2109-Big-Project'>View Code</a></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={`${styles.layout}`}>
                        <div>
                            <h2>Prototype</h2>
                            <p>The prototype was worked on by all group members as fast as possible in order to conduct user testing sessions.</p>
                            <button className={`${styles.button}`}><a href='https://www.figma.com/proto/EAeTnvXWYDxrCjNRiYkExe/mockup-drugminder?type=design&node-id=3-2&t=SRvYBkNkJTUTaDy2-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2'>View Prototype</a></button>
                        </div>
                        <img style={{ borderRadius: "1rem", width: "50vw" }} src='/images/drugminder-proto.png' />
                    </div>
                </div>

                <div>
                    <div className={`${styles.layout}`}>
                        <div>
                            <h2>Style Guide</h2>
                            <p>The team created a website for the style guide according to the project requirements. I worked on the logo page, including details such as logo spacing and arrangements and logo don'ts.</p>
                            <button className={`${styles.button}`}><a href='https://bigproject-styleguide.vercel.app/logo.html'>Style Guide</a></button>
                        </div>
                        <img style={{ borderRadius: "1rem", width: "50vw" }} src='/images/drugminder-style.png' />
                    </div>
                </div>

                <div className={`${styles.shortText}`}>
                    <div>
                        <h2>Logo Variations</h2>
                        <p>A few variations of the logo was created and was tested against different colored backgrounds to ensure the brand was adaptable to different situations and stay accessible to users.</p>
                    </div>
                    <div>
                        <img style={{ borderRadius: "1rem", height: "35vw" }} src='/images/drugminder-logo.png' />
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}
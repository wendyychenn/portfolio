import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function Tinypaws() {
    return (
        <>
            <Head>
                <title>Wendy Chen's Portfolio</title>
            </Head>
            <main className={`${styles.main}`}>

                <NavBar />

                <h1 className={`${styles.title}`}>TinyPaws</h1>

                <div className={`${styles.layout}`}>
                    <div>
                        <img className={`${styles.image}`} src='/images/tinypaws.png' />
                    </div>
                    <div>
                        <p>Tinypaws is a cat adoption website that believes every cat deserves a loving home. It was designed to be used on WordPress and fulfill the client's style requirements.</p>
                        <p>Role: UI/UX Designer</p>
                        <button className={`${styles.button}`}><a href='https://www.figma.com/proto/RhxeuuIO366EJiKVQJbZMJ/tinypaws---purradise?node-id=265-5512&starting-point-node-id=265%3A5512&mode=design&t=eFA8iSL0cQOxjmGu-1'>Check it Out</a></button>
                    </div>
                </div>

                <div className={`${styles.layout}`}>
                    <div>
                        <h2>Prototype</h2>
                        <p>Everyone in the team worked together to plan out and design the prototype layout.</p>
                    </div>
                    <div>
                        <img style={{ borderRadius: "1rem", height: "35vw" }} src='/images/tinypaws-proto.png' />
                    </div>
                </div>

                <div className={`${styles.layout3}, ${styles.shortText}`}>
                    <div>
                        <h2>Logo Design</h2>
                        <p>The idea behind the logo was to show a fun and cute logo, yet still look professional enough for a cat adoption business. The heart represents TinyPaws's mission to provide loving homes for cats all over.</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                        <img style={{ borderRadius: "1rem", height: "25vw" }} src='/images/tinypaws-draft.png' />
                        <img style={{ borderRadius: "1rem", height: "25vw" }} src='/images/tinypaws.png' />
                    </div>
                </div>

                <div className={`${styles.shortText}`}>
                    <div>
                        <h2>Style Guide</h2>
                        <p>The style guide was put together with the goal of giving the client an idea of the what the final website would look like by incorporating design elements from the website into the style guide.</p>
                    </div>
                    <div>
                        <img style={{ borderRadius: "1rem", width: "50vw" }} src='/images/tinypaws-style.png' />
                    </div>
                </div>


                <Footer />
            </main>
        </>
    )
}
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'

export default function DrugMinder() {
    return (
        <>
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
                        <button className={`${styles.button}`}><a href='https://mdia-2109-big-project.vercel.app/'>Check it Out</a></button>
                    </div>
                </div>

                <div>
                    <h3>Prototype</h3>
                    <div className={`${styles.layout2}`}>
                        <img className={`${styles.image}`} src='/images/drugminder-proto.png' />
                    </div>
                </div>

                <div className={`${styles.layout}`}>
                    <div>
                        <h3>Style Guide</h3>
                        <p>Before coming up with ideas for the layouts of our app, we started off with a style guide to ensure that the overall visuals remain consistent throughout the project.</p>
                    </div>
                    <div>
                        <img style={{borderRadius: "1rem", height: "35vw"}} src='/images/drugminder-logo.png' />
                    </div>
                </div>

                
            </main>
        </>
    )
}
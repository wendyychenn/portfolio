import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'

export default function Whitestone() {
    return (
        <>
            <main className={`${styles.main}`}>

                <NavBar />

                <h1 className={`${styles.title}`}>WhiteStone</h1>

                <div className={`${styles.layout}`}>
                    <div>
                        <img className={`${styles.image}`} src='/images/whitestone-cover.jpg' />
                    </div>
                    <div>
                        <p>WhiteStone is a machine learning dental scanning app for low income and colourblind people to help users evaluate their dental health to reduce the number of dental checkups. It takes pictures of people's mouths and provides data on the teeth scan results.</p>
                        <p>Role: UI/UX Designer</p>
                        <button className={`${styles.button}`}><a href='https://www.whitestone-app.com/'>Check it Out</a></button>
                    </div>
                </div>

                <div>
                    <h3>Prototype</h3>
                    <div className={`${styles.layout2}`}>
                        <img className={`${styles.image}`} src='/images/prototype.PNG' />
                    </div>
                </div>

                <div className={`${styles.layout}`}>
                    <div>
                        <h3>Style Guide</h3>
                        <p>Before coming up with ideas for the layouts of our app, we started off with a style guide to ensure that the overall visuals remain consistent throughout the project.</p>
                    </div>
                    <div>
                        <img className={`${styles.image}`} src='/images/style-guide.png' />
                    </div>
                </div>

                <div className={`${styles.layout}`}>
                    <div>
                        <img className={`${styles.image}`} src='/images/components.PNG' />
                    </div>
                    <div>
                        <h3>Components</h3>
                        <p>Our team split different parts of the app design into components. Doing this allowed for us to create different variations of these components with different colors. If the client wished to see certain features in a different color, everything would be ready for them.</p>
                    </div>
                </div>

                <div>
                    <h3>Brochure</h3>
                    <div className={`${styles.layout2}`}>
                        <img className={`${styles.image}`} src='/images/brochure.PNG' />
                        <img className={`${styles.image}`} src='/images/brochure2.PNG' />
                    </div>
                </div>

                <div>
                    <h3>Business Card</h3>
                    <div className={`${styles.layout2}`}>
                        <img className={`${styles.image}`} src='/images/business-card.PNG' />
                        <img className={`${styles.image}`} src='/images/business-card2.PNG' />
                    </div>
                </div>

                <div className={`${styles.layout}`}>
                    <div>
                        <h3>Presentation Day</h3>
                        <p>On presentation day we set up a table containing brochures, business cards, 3D-printed keychains, and a demo of our app</p>
                    </div>
                    <div>
                        <img className={`${styles.image}`} src='/images/presentation.jpg' />
                    </div>
                </div>

            </main>
        </>
    )
}
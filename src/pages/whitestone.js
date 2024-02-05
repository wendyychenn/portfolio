import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'

export default function Whitestone() {
    return (
        <>
            <main className={`${styles.main2}`}>

                <NavBar />

                <h1 className={`${styles.title}`}>WhiteStone</h1>

                <div className={`${styles.layout}`}>
                    <div>
                        <img className={`${styles.image}`} src='/images/whitestone-cover.jpg' />
                    </div>
                    <div>
                        <p>WhiteStone is a machine learning dental scanning app for low income and colourblind people to help users evaluate their dental health to reduce the number of dental checkups. It takes pictures of people's mouths and provides data on the teeth scan results.</p>
                        <p>Role: UI/UX Designer</p>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <button className={`${styles.button}`}><a href='https://www.whitestone-app.com/scan'>Check it Out</a></button>
                            <button className={`${styles.button}`}><a href='https://www.figma.com/proto/WICpsIs0SVQjJQSog6Zguz/Mockup-for-Week-3?type=design&node-id=1048-4012&t=PCdMeVNDomPB1v2Y-0&scaling=scale-down&page-id=210%3A411&starting-point-node-id=1048%3A4012'>View Prototype</a></button>
                            <button className={`${styles.button}`}><a href='https://github.com/WhiteStoneDental/whitestone_IDSP/tree/main'>View Code</a></button>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ paddingRight: "20rem", display: "flex", flexDirection: "column", textAlign: "left" }}>
                        <h2>Background</h2>
                        <p>This was the final project for the second term of the Digital Design and Development program. The task was to work with students from the Full Stack Web Development program to create an app that utilises AI that would help a disadvantaged or underrepresented community. </p>
                        <h3>The Goal</h3>
                        <p>WhiteStone was aimed towards individuals that are struggling financially as well as those that have dentophobia or social anxiety. Being a fully free app, those who cannot afford to have regular checkups at a dental office are able to perform self checkups at the convenience of their own homes at no cost.</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>

                        </div>
                    </div>
                </div>

                <div style={{ paddingRight: "20rem", display: "flex", flexDirection: "column", textAlign: "left" }}>
                    <div>
                        <h2>Wireframe</h2>
                        <p>The very first wireframe of WhiteStone was highly inconsistent and underwhelming. Receiving feedback and improving from the critique was a highly valuable learning process for the team.</p>
                    </div>
                    <div>
                        <img style={{ width: "75vw", borderRadius: "1rem" }} src='/images/whitestone-wire.png' />
                    </div>
                </div>

                <div style={{ paddingRight: "20rem", display: "flex", flexDirection: "column", textAlign: "left" }}>
                    <div>
                        <h2>Style Guide</h2>
                        <p>Before coming up with ideas for the layouts of our app, a style guide was created to ensure that the overall visuals remain consistent throughout the project.</p>
                    </div>
                    <div>
                        <img style={{ height: "50vw", borderRadius: "1rem" }} src='/images/style-guide.png' />
                    </div>
                </div>

                <div className={`${styles.layout}`}>
                    <div>
                        <h2>Components</h2>
                        <p>Our team split different parts of the app design into components. Doing this allowed for us to create different variations of these components with different colors. If the client wished to see certain features in a different color, everything would be ready for them.</p>
                    </div>
                    <div>
                        <img style={{ borderRadius: "1rem", width: "55vw" }} src='/images/components.PNG' />
                    </div>
                </div>

                <div>
                    <div style={{ paddingRight: "20rem", display: "flex", flexDirection: "column", textAlign: "left" }}>
                        <h2>User Personas</h2>
                        <p>As part of the research on the target audience, primary and secondary user personas were created. This was to make sure there was a clear understanding of the people being targeted in order to design an app catered to their needs.</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                            <img style={{ height: "50vw", borderRadius: "1rem", marginTop: "1rem", marginBottom: "1rem" }} src='/images/Primary-Persona.png' />
                            <img style={{ height: "50vw", borderRadius: "1rem", marginTop: "1rem", marginBottom: "1rem" }} src='/images/Secondary-Persona.png' />
                        </div>
                    </div>
                </div>

                <div className={`${styles.layout}`}>
                    <div>
                        <h3>Presentation Day</h3>
                        <p>On presentation day a table was set up containing brochures, business cards, 3D-printed keychains, and a demo of our app. The WhiteStone team presented the app to an audience including teachers, students, alumni, industry professionals, the mayor of Burnaby, as well as other invited guests.</p>
                    </div>
                    <div>
                        <img className={`${styles.image}`} src='/images/presentation.jpg' />
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                    <h2>Promotional Material</h2>
                    <h3>Brochure Design</h3>
                    <p style={{ paddingRight: "20rem" }}>A brochure was designed to be made for print, they would be available for guests during the final presentation to take home as a souvenir. It would also provide information about WhiteStone and the team behind it.</p>
                    <div className={`${styles.layout2}`}>
                        <img style={{ width: "36.6vw", borderRadius: "1rem", marginTop: "1rem", marginBottom: "1rem" }} src='/images/brochure.PNG' />
                        <img style={{ width: "36.6vw", borderRadius: "1rem", marginTop: "1rem", marginBottom: "1rem" }} src='/images/brochure2.PNG' />
                    </div>
                    <h3>Business Card Design</h3>
                    <p style={{ paddingRight: "20rem" }}>The business card was also designed for print. Each member of the team had their own business card.</p>
                    <div className={`${styles.layout2}`}>
                        <img style={{ width: "36.5vw", borderRadius: "1rem", marginTop: "1rem" }} src='/images/business-card.png' />
                        <img style={{ width: "36.5vw", borderRadius: "1rem", marginTop: "1rem" }} src='/images/business-card2.png' />
                    </div>
                </div>


            </main>
        </>
    )
}
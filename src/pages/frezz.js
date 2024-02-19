import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Frezz() {

    const [currentImage, setCurrentImage] = useState('/images/apple.png');
    const [packaging, setPackaging] = useState('/images/apple-full.png')

    const changeImage = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    const changePackaging = (imageUrl) => {
        setPackaging(imageUrl);
    };

    return (
        <>
            <main className={`${styles.main}`}>

                <NavBar />

                <h1 className={`${styles.title}`}>Frezz</h1>

                <div className={`${styles.layout}`}>
                    <div>
                        <img className={`${styles.image}`} src='/images/soda.png' />
                    </div>
                    <div>
                        <p>Frezz is a faux soft drink brand created and designed by myself. It is currently available in the flavours green apple, peach, and grape. The package design and graphics are pastel in color, giving a light-hearted and bubbly feeling.</p>
                    </div>
                </div>

                <div className={`${styles.layout3}`}>
                    <h2>Soda Can Mockup and Packaging</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                            <img style={{ height: '400px', borderRadius: '1rem' }} src={packaging} alt="Packaging" className={styles.fade} />
                            <img style={{ height: '500px' }} src={currentImage} alt="Displayed" className={styles.fade} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '20px' }}>
                            <button className={styles.button} onClick={() => { changeImage('/images/apple.png'); changePackaging('/images/apple-full.png'); }}>Apple</button>
                            <button className={styles.button} onClick={() => { changeImage('/images/peach.png'); changePackaging('/images/peach-full.png'); }}>Peach</button>
                            <button className={styles.button} onClick={() => { changeImage('/images/grape.png'); changePackaging('/images/grape-full.png'); }}>Grape</button>
                        </div>
                    </div>
                </div>

                <div className={`${styles.shortText}`}>
                    <div>
                        <h2>Graphics</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', margin: '2rem 0rem' }}>
                        <img style={{ borderRadius: "1rem", width: "15vw" }} src='/images/cat-graphic.svg' />
                        <img style={{ borderRadius: "1rem", height: "13vw" }} src='/images/apple-graphic.svg' />
                        <img style={{ borderRadius: "1rem", height: "13vw" }} src='/images/peach-graphic.svg' />
                        <img style={{ borderRadius: "1rem", height: "13vw" }} src='/images/grape-graphic.svg' />
                    </div>
                </div>


                <Footer />
            </main>
        </>
    )
}













// <div style={{ display: 'flex', justifyContent: 'center' }}>
//                         <img style={{ height: '500px' }} src={currentImage} alt="Displayed" className="fade" />
//                     </div>
//                     <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '20px' }}>
//                         <button className={`${styles.button}`} onClick={() => changeImage('/images/apple.png')}>Apple</button>
//                         <button className={`${styles.button}`} onClick={() => changeImage('/images/peach.png')}>Peach</button>
//                         <button className={`${styles.button}`} onClick={() => changeImage('/images/grape.png')}>Grape</button>
//                     </div>

//                 </div>

//                 <div className={`${styles.layout3}`}>
//                     <h2>Packaging</h2>
//                     <div style={{ display: 'flex', justifyContent: 'center' }}>
//                         <img style={{ height: '500px', borderRadius:'1rem' }} src={packaging} alt="Displayed" className="fade" />
//                     </div>
//                     <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '20px' }}>
//                         <button className={`${styles.button}`} onClick={() => changePackaging('/images/apple-full.png')}>Apple</button>
//                         <button className={`${styles.button}`} onClick={() => changePackaging('/images/peach-full.png')}>Peach</button>
//                         <button className={`${styles.button}`} onClick={() => changePackaging('/images/grape-full.png')}>Grape</button>
//                     </div>
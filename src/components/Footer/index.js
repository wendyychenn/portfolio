import styles from '@/styles/Home.module.css'

export default function Footer() {
    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.icon}`}>
                <a href="mailto: wendy.chen312@gmail.com"><img className={`${styles.icons}`} src='images/email.png' /></a>
                <a href='https://github.com/wendyychenn'><img className={`${styles.icons}`} src='images/github.png' /></a>
                <a href='https://www.linkedin.com/in/wendy-chen-994a58295/'><img className={`${styles.icons}`} src='images/linkedin.png' /></a>
                {/* <a href=''><img className={`${styles.icons}`} src='images/resume.png' /></a>
                            <a href=''><img className={`${styles.icons}`} src='images/letter.png' /></a> */}
            </div>
            <div className={`${styles.navLinks}`}>
                <a href='/'>Projects</a>
                <a href='/designs'>Designs</a>
                <a href='/about'>About</a>
            </div>

        </div>

    )
}
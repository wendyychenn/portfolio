import styles from '@/styles/Home.module.css'

export default function NavBar() {
  return (
    <div className={`${styles.nav}`}>
      <div><a href='/'><img src='/images/logo.png' style={{width: 70}}/></a></div>
      <div className={`${styles.navLinks}`}>
        <a href='/'>Projects</a>
        <a href='/designs'>Designs</a>
        <a href='/about'>About</a>
      </div>
    </div>

  )
}
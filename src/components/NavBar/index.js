import styles from '@/styles/Home.module.css'

export default function NavBar() {
  return (
    <div className={`${styles.nav}`}>
      <div><h1>Wendy</h1></div>
      <div className={`${styles.navLinks}`}>
        <a href='/'>Projects</a>
        <a>Works</a>
        <a>About</a>
      </div>
    </div>

  )
}
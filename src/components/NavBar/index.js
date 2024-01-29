import styles from '@/styles/Home.module.css'

export default function NavBar() {
    return (
        <div className={`${styles.nav}`}>
          <a href='/'>Projects</a>
          <a>Works</a>
          <a>About</a>
        </div>
    )
}
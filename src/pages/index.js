import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Index Page</h1>
      <Link href="/notes" />
    </div>
  )
}

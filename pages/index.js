import Nav from 'components/Navigation'
import Header from 'components/Header'
import Reviews from 'components/Reviews'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Nav/>
    <Header/>
    <Reviews/>
    </div>
  )
}

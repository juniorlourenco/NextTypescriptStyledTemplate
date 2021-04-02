import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Renting from './src/components/Renting';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cavalca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Renting />
      </body>
    </div>
  )
}

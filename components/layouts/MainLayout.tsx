import Head from 'next/head'
import styles from './MainLayout.module.css'
import NavBar from '../NavBar'
import { FC, PropsWithChildren } from 'react'

const MainLayout : FC<PropsWithChildren>= ({children}) => {
    return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Fabian Cardenas</title>
        <meta name="description" content="Contact Page" />
        {/* <Link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <NavBar/>

      <main className={styles.main}>
        {children}
      </main>

    </div>
    )
}

export default MainLayout
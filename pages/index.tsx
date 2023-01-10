import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GoFashion Showroom</title>
        <meta name="description" content="Link card of GoFashion Showroom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.avatar_container}>
                <Image className={styles.avatar} width={100} height={100} src='/gofashion-logo.jpg' alt={'logo'} />
                <div className={styles.title}>Go Fashion Showroom</div>
            </div>
            <div className={styles.content_container}>
                <div className={styles.button}>
                    <div className={styles.text}>Content</div>
                </div>
                <div className={styles.button}>
                    <div className={styles.text}>Content</div>
                </div>                <div className={styles.button}>
                <div className={styles.text}>Content</div>
            </div>
                <div className={styles.button}>
                    <div className={styles.text}>Content</div>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

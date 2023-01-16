import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CallUsIcon from '../components/icons/CallUs';
import CloseIcon from '../components/icons/CloseIcon';
import { languages } from '../constants';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeLanguage, setActiveLanguage] = useState('hy');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleOpen = () => setIsLanguageOpen(true);
  const handleClose = () => setIsLanguageOpen(false);
  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
    handleClose();
  };

  return (
    <>
      <Head>
        <title>GoFashion Showroom</title>
        <meta name="description" content="Link card of GoFashion Showroom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <video muted playsInline autoPlay loop id="videoplayback" className={styles.video}>
          <source src="/fashion.mov" type="video/mp4" />
        </video>
        <div className={styles.container}>
          <div className={styles.header}>
            <Link href="tel:+37491100919">
              <CallUsIcon />
            </Link>
            <div className={styles.language_container}>
              <div className={styles.language_switcher} onClick={() => handleOpen()}>
                {languages[activeLanguage]}
              </div>
              <div className={`${styles.list} ${isLanguageOpen ? styles.visible : ''}`}>
                {Object.keys(languages)
                  .filter((language) => language !== activeLanguage)
                  .map((el) => {
                    return (
                      <div key={el} className={styles.language_switcher} onClick={() => handleLanguageChange(el)}>
                        {languages[el]}
                      </div>
                    );
                  })}
                <div onClick={handleClose} style={{ cursor: 'pointer' }}>
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.avatar_container}>
            <Image className={styles.avatar} width={100} height={100} src="/gofashion-logo.jpg" alt={'logo'} />
            <div className={styles.title}>Go Fashion Showroom</div>
          </div>
          <div className={styles.content_container}>
            <div className={styles.button}>
              <div className={styles.text}>Content</div>
            </div>
            <div className={styles.button}>
              <div className={styles.text}>Content</div>
            </div>
            <div className={styles.button}>
              <div className={styles.text}>Content</div>
            </div>
            <div className={styles.button}>
              <div className={styles.text}>Content</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

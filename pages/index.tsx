import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { event } from 'nextjs-google-analytics';
import { useState } from 'react';
import CallUsIcon from '../components/icons/CallUs';
import CloseIcon from '../components/icons/CloseIcon';
import { data, languages } from '../constants';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeLanguage, setActiveLanguage] = useState('hy');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleOpen = () => setIsLanguageOpen(true);
  const handleClose = () => setIsLanguageOpen(false);
  const handleLanguageChange = (language: string) => {
    event('active_language', {
      category: 'Active language',
      message: language,
    });
    setActiveLanguage(language);
    handleClose();
  };

  const handleTrackLinks = (title: string) => {
    event('link', {
      category: 'link',
      message: title,
    });
  };

  const getCurrentYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
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
            <Link href="tel:+37491100919" onClick={() => handleTrackLinks('call')}>
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
            <Image className={styles.avatar} width={150} height={150} src="/gofashion-logo.jpg" alt={'logo'} />
            <div className={styles.title}>Go Fashion Showroom</div>
          </div>
          <div className={styles.content_container}>
            {data?.[activeLanguage].map((el) => {
              return (
                <Link href={el.link} className={styles.button} target="_blank" key={el.title} onClick={() => handleTrackLinks(el.title)}>
                  <div className={styles.text}>{el.title}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <iframe
        title="maps"
        className={styles.maps}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1524.5372714338303!2d44.5044564!3d40.162894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd9428540b71%3A0x5db3f83c0475bf80!2sShopping%20City!5e0!3m2!1sen!2s!4v1675021015560!5m2!1sen!2s"
        width="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <footer>
        <div className={styles.footer_container}>
          <p className={styles.copyright}>&#169; {getCurrentYear()} GoFashion, Made with ❤️</p>
        </div>
      </footer>
    </>
  );
}

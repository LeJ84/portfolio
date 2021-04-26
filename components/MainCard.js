import React, { useState } from 'react';
import styles from '../styles/MainCard.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"


const MainCard = () => {

  const [opened,setOpened] = useState(false);

  const postVariants = {
    initial: {  scale: 0.96, opacity: 0 },
    enter: {  scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: {
      y: "-100vh",
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  return (
     <motion.div 
        initial="initial" animate="enter" exit="exit" variants={postVariants}>
        <div className={styles.card}>
          <Link href="/works" >
            <a aria-label="Access my professional page">
              <div className={`${styles.card__tab__work} ${styles.card__tab}`}></div>
            </a>
          </Link>
          <Link href="/education">
            <a aria-label="Access my education page">
              <div className={`${styles.card__tab__education} ${styles.card__tab}`}></div>
            </a>
          </Link>
          <Link href="https://github.com/LeJ84/">
            <a target="_blank" aria-label="Access my github profile">
              <div className={`${styles.card__tab__github} ${styles.card__tab}`}></div>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/ducomj/">
            <a target="_blank" aria-label="Access my linkedin profile">
              <div className={`${styles.card__tab__linkedin} ${styles.card__tab}`}></div>
            </a>
          </Link>
          <div className={styles.card__avatar} onClick={(e)=> {
            e.currentTarget.closest(`.${styles.card}`).classList.toggle(styles.card__clicked);
            setOpened(!opened);
          }}></div>
          <div className={styles.card__content}>
            <h1 className={styles.card__name}>Jérôme DUCOM</h1>
            <h2 className={styles.card__title}>DÉVELOPPEUR	FULLSTACK</h2>
            <h2 className={styles.card__title}>JAVASCRIPT</h2>
            <h3 className={styles.card__mobility}>
              <p>Marseille et périphérie</p>
              <p>ducom.jerome@gmail.com</p>
              <p>0619125989</p>
            </h3>
          </div>
        </div>
      </motion.div>
)};

export default MainCard;

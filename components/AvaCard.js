import React, { useState } from 'react';
import styles from '../styles/AvaCard.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"


const AvaCard = () => {

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
          <Link href="https://github.com/LeJ84/">
            <a target="_blank">
              <div className={`${styles.card__tab__github} ${styles.card__tab}`}></div>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/ducomj/">
            <a target="_blank">
              <div className={`${styles.card__tab__linkedin} ${styles.card__tab}`}></div>
            </a>
          </Link>
          <Link href="/cv">
            <a>
              <div className={`${styles.card__tab__work} ${styles.card__tab}`}></div>
            </a>
          </Link>
          <Link href="/education">
            <a>
              <div className={`${styles.card__tab__education} ${styles.card__tab}`}></div>
            </a>
          </Link>
          <div className={styles.card__avatar} onClick={(e)=> {
            e.currentTarget.closest(`.${styles.card}`).classList.toggle(styles.card__clicked);
            setOpened(!opened);
          }}></div>
          <div className={styles.card__content}>
            <div className={styles.card__name}>Jérôme DUCOM</div>
            <div className={styles.card__title}>DÉVELOPPEUR	FULLSTACK</div>
            <div className={styles.card__title}>JAVASCRIPT</div>
            <div className={styles.card__mobility}>
              <p>Marseille et périphérie</p>
              <p>ducom.jerome@gmail.com</p>
              <p>0619125989</p>
            </div>
          </div>
        </div>
      </motion.div>
)};

export default AvaCard;

import React, { useState } from 'react';
import styles from '../styles/AvaCard.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"


const AvaCard = () => {

  const postVariants = {
    initial: {  scale: 0.96, opacity: 0 },
    enter: {  scale: 1, opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } },
    exit: {
      y: "-100vh",
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
     <motion.div 
        initial="initial" animate="enter" exit="exit" variants={postVariants}>
        <div className={styles.card}>
          <a href="https://github.com/LeJ84/" target="_blank"><div className={styles.card__github}><span className={styles.logo}></span></div></a>
          <a href="https://www.linkedin.com/in/ducomj/" target="_blank"><div className={styles.card__linkedin}><span className={styles.logo}></span></div></a>
          <div className={styles.card__avatar} onClick={(e)=> {
            e.currentTarget.closest(`.${styles.card}`).classList.toggle(styles.card__clicked);}}></div>
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
        <Link href="/cv">
              <a>
                <div className={styles.card__next} >V</div>
              </a>
        </Link>
      </motion.div>
)};

export default AvaCard;

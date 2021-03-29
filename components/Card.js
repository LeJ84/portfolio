import React, { useState } from 'react';
import styles from '../styles/AvaCard.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"


const Card = () => {

  const postVariants = {
    initial: { y:"100vh"},
    enter: { y:0, transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      y: "-100vh",
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };

  return (
     <motion.div className={styles.card}
        initial="initial" animate="enter" exit="exit" variants={postVariants}>
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
          <Link href="/">
            <a>
              <div className={styles.card__next}>
              V
              </div>
            </a>
          </Link>
        </div>
      </motion.div>
)};

export default Card;

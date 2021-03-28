import React, { useState } from 'react';
import styles from '../styles/AvaCard.module.scss'


const AvaCard = () => {

  return (
  <div className={styles.card}>
    <div className={styles.card__avatar} onClick={(e)=> {
      console.dir(e.currentTarget.closest(`.${styles.card}`));
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
      <div className={styles.card__next}>
      V
      </div>
    </div>
  </div>
)};

export default AvaCard;

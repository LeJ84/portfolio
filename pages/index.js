import Head from 'next/head';
import styles from '../styles/Home.module.css';

import AvaCard from '../components/AvaCard.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <AvaCard />
    </div>
  )
}

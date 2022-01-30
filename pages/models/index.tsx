import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Models() {
 return (
  //   <>
  <div className={styles.grid}>
   <a href="/models/digit-recognizer" className={styles.card}>
    <h3>Try Digit Recognizer &rarr;</h3>
    <p>Find in-depth information about Next.js features and API.</p>
   </a>
  </div>
 );
}

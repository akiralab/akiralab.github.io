import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home = () => {
 return (
  <div className={styles.container}>
   <Head>
    <title>Welcome to this page!</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main>
    <h1 className={styles.title}>
     Read{' '}
     <Link href="/posts/first-post">
      <a>My First Page!</a>
     </Link>
    </h1>
    <div className={styles.grid}>
     <a href="/models" className={styles.card}>
      <h3>Try Models &rarr;</h3>
      <p>Find in-depth information about Next.js features and API.</p>
     </a>
    </div>
   </main>
   <div className={styles.grid}>
    <a href="/models" className={styles.card}>
     <h3>Try Models &rarr;</h3>
     <p>Find in-depth information about Next.js features and API.</p>
    </a>
   </div>
   <footer>
    <a
     href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
     target="_blank"
     rel="noopener noreferrer"
    >
     Powered by <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
    </a>
   </footer>
  </div>
 );
};

export default Home;

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';
const Home: NextPage = () => {
 return (
  <Layout>
   <div className={styles.grid}>
    <Link href="https://nextjs.org/docs">
     <div className={styles.card}>
      <h2>Documentation &rarr;</h2>
      <p>Find in-depth information about Next.js features and API.</p>
     </div>
    </Link>
    <Link href="https://nextjs.org/learn">
     <div className={styles.card}>
      <h2>Learn &rarr;</h2>
      Learn about Next.js in an interactive course with quizzes!
     </div>
    </Link>
    <Link href="https://github.com/vercel/next.js/tree/canary/examples">
     <div className={styles.card}>
      <h2>Examples &rarr;</h2>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
     </div>
    </Link>
   </div>
  </Layout>
 );
};

export default Home;

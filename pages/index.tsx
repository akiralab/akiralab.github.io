import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';
const Home: NextPage = () => {
 return (
  <Layout>
   <div className={styles.grid}>
    <Link href="/digit-recognizer">
     <div className={styles.card}>
      <h2>Digit Recognizer</h2>
      <p>コンテンツ準備中</p>
     </div>
    </Link>
    <Link href="/notion">
     <div className={styles.card}>
      <h2>Notion with Next.js</h2>
      <p>コンテンツ準備中</p>
     </div>
    </Link>
    <Link href="/blogs">
     <div className={styles.card}>
      <h2>ML blogs</h2>
      <p>コンテンツ準備中</p>
     </div>
    </Link>
    <Link href="/zenn">
     <div className={styles.card}>
      <h2>Zenn articles</h2>
      <p>コンテンツ準備中</p>
     </div>
    </Link>
   </div>
  </Layout>
 );
};

export default Home;

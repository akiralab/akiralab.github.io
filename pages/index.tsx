import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';
const Home: NextPage = () => {
 return (
  <Layout>
   <div className={styles.grid}>
    <Link href="/about">
     <div className={styles.card}>
      <h2>Preparing...</h2>
      <p>コンテンツ準備中</p>
     </div>
    </Link>
   </div>
  </Layout>
 );
};

export default Home;

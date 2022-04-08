// componenst/layout.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/layout.module.css';
import { ReactNode } from 'react';

interface Props {
 children: ReactNode;
}

const Layout = ({ children }: Props) => {
 return (
  <>
   <Head>
    <Link href="/">
     <title>akiralab</title>
    </Link>
    {/* <title href="/">akiralab</title> */}
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/g.ico" />
   </Head>
   <div className={styles.container}>
    <div>
     <div className={styles.header}>
      <div className={styles.sitetitle}>akiralab</div>
      <div className={styles.sns}>
       <Link href="https://github.com/akiralab">
        <div className={styles.logo}>
         <img src="/github.svg" alt="github" width="40" height="40" />
        </div>
       </Link>
       <Link href="https://twitter.com/Le0_Rosso">
        <div className={styles.logo}>
         <img src="/twitter.svg" alt="twitter" width="40" height="40" />
        </div>
       </Link>
       <Link href="https://www.kaggle.com/akirakawai">
        <div className={styles.logo}>
         <img src="/kaggle.svg" alt="kaggle" width="40" height="40" />
        </div>
       </Link>
       <Link href="https://note.com/kawaiakira">
        <div className={styles.logo}>
         <img src="/note.svg" alt="note" width="40" height="40" />
        </div>
       </Link>
      </div>
     </div>
    </div>

    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
     <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
     >
      Powered by{' '}
      <span className={styles.logo}>
       <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
     </a>
    </footer>
   </div>
  </>
 );
};

export default Layout;

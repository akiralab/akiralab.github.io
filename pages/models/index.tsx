import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Models() {
 return (
  <>
   <div className={styles.grid}>
    <div className={styles.card}>
     <Link href="/models/digit-recognizer">
      <h3>Try Digit Recognizer &rarr;</h3>
     </Link>
    </div>
    <p>Find in-depth information about Next.js features and API.</p>
   </div>
  </>
 );
}

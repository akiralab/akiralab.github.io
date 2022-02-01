import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import { NextPage } from 'next';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
 return (
  <>
   <div className="container">
    {/* <div style={containerstyle}> */}
    <Head>
     <title>Welcome to this page!</title>
     <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
     <h1 className="title">
      <Link href="/posts/first-post">
       <a>My First Page!</a>
      </Link>
     </h1>
     <div className="grid">
      <div className="card">
       <Link href="/models">
        <h3>Try Models &rarr;</h3>
       </Link>
       <p>Find in-depth information about Next.js features and API.</p>
      </div>
     </div>
    </main>
    <footer>
     Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
    </footer>
   </div>
  </>
 );
};

export default Home;

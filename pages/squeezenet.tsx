import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import ImageCanvas from '../components/ImageCanvas';

const Home: NextPage = () => {
 return (
  <Layout>
   <div>動物を当てるモデル</div>
   <ImageCanvas width={240} height={240} />
   <div id="result" className="mt-3"></div>
  </Layout>
 );
};

export default Home;

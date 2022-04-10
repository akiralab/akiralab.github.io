import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import DigitCanvas from '../components/DigitCanvas';
import { Container, Header } from 'semantic-ui-react';

const Home: NextPage = () => {
 return (
  <Layout>
   <div>数字認識</div>
   <DigitCanvas />
  </Layout>
 );
};

export default Home;

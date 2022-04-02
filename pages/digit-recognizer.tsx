import type { NextPage } from 'next';
// Create an instance of InferenceSession.
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

const ort = require('onnxruntime-node');

// use an async context to call onnxruntime functions.

const session = await ort.InferenceSession.create('./onnx/model.onnx');

// prepare inputs. a tensor need its corresponding TypedArray as data
const dataA = Float32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
const dataB = Float32Array.from([
 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120,
]);
const tensorA = new ort.Tensor('float32', dataA, [3, 4]);
const tensorB = new ort.Tensor('float32', dataB, [4, 3]);

// prepare feeds. use model input names as keys.
const feeds = { a: tensorA, b: tensorB };

// feed inputs and run
const results = await session.run(feeds);

// read from results
const dataC = results.c.data;
console.log(`data of result tensor 'c': ${dataC}`);

const Home: NextPage = () => {
 return (
  <Layout>
   <div>onnx test`${dataC}`</div>
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

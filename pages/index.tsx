import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.grid}>
        <Link href="/image-classifier" passHref>
          <div className={styles.card}>
            <h2>動物推測</h2>
            <p>コンテンツ公開中</p>
          </div>
        </Link>
        <Link href="/playground" passHref>
          <div className={styles.card}>
            <h2>React Playground</h2>
            <p>コンテンツ公開中</p>
          </div>
        </Link>
        <Link href="/jupyter-bok-python" passHref>
          <div className={styles.card}>
            <h2>機械学習のためのpython基礎知識</h2>
            <p>コンテンツ公開中</p>
          </div>
        </Link>{" "}
        <Link href="/digit-recognizer" passHref>
          <div className={styles.card}>
            <h2>Digit Recognizer</h2>
            <p>コンテンツ準備中</p>
          </div>
        </Link>
        <Link href="/simple-poker" passHref>
          <div className={styles.card}>
            <h2>原始ポーカー</h2>
            <p>コンテンツ準備中</p>
          </div>
        </Link>{" "}
        <Link href="/notion" passHref>
          <div className={styles.card}>
            <h2>Notion with Next.js</h2>
            <p>コンテンツ準備中</p>
          </div>
        </Link>
        <Link href="/blogs" passHref>
          <div className={styles.card}>
            <h2>ML blogs</h2>
            <p>コンテンツ準備中</p>
          </div>
        </Link>
        <Link href="/zenn" passHref>
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

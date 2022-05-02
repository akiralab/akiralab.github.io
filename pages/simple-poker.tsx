import type { NextPage } from "next";
import Layout from "../components/layout";
import ImageCanvas from "../components/ImageCanvas";
import { Container, Header } from "semantic-ui-react";

import PokerLogic from "../components/PokerLogic";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container text style={{ marginTop: "2em" }}>
        <Header as="h1">A, K, Qの3枚だけでポーカーをするゲーム</Header>
        <PokerLogic />
      </Container>
    </Layout>
  );
};

export default Home;

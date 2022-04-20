import type { NextPage } from "next";
import Layout from "../components/layout";
import ImageCanvas from "../components/ImageCanvas";
import { Container, Header } from "semantic-ui-react";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container text style={{ marginTop: "2em" }}>
        <Header as="h1">Squeezenetを用いてImageNetの画像を分類する</Header>
        <p></p>
        <p></p>
        <div>何が写っているか当てる</div>
      </Container>
      <ImageCanvas width={240} height={240} />
    </Layout>
  );
};

export default Home;

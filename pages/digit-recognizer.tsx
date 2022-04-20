import type { NextPage } from "next";
import Layout from "../components/layout";
import DigitCanvas from "../components/DigitCanvas";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>数字認識</div>
      <DigitCanvas
        width={300}
        height={300}
        lineWidth={10}
        lineColor={"rgb(100, 100, 100)"}
        lineCap={"round"}
      />
    </Layout>
  );
};

export default Home;

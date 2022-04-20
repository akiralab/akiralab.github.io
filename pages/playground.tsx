import type { NextPage } from "next";

import Layout from "../components/layout";
import CustomButton from "./playground/CustomButton";
import CustomTimer from "./playground/CustomTimer";
import CustomCanvas from "./playground/CustomCanvas";

const Home: NextPage = () => {
  return (
    <Layout>
      <h3 className="ui header">Reactの基本要素を勉強していく</h3>
      <h3 className="ui header">1. useState</h3>
      <div className="ui message">
        ReactのuseStateを使ってボタンを押すとカウントアップ、カウントダウン、カウントリセットするコンポーネントを作成する
      </div>
      <CustomButton />
      <h3 className="ui header">2. useEffect</h3>
      <div className="ui message">
        ReactのuseEffectを使ってタイマーの開始/停止/リセット制御するコンポーネントを作成する
      </div>
      <CustomTimer />
      <h3 className="ui header">3. useRef</h3>
      <div className="ui message">
        ReactのuseRefを使って手書き情報を受け取るコンポーネントを作成する
      </div>
      <CustomCanvas
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

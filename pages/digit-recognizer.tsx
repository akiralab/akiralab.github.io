import type { NextPage } from "next";
import Layout from "../components/layout";
import DigitCanvas from "../components/DigitCanvas";
import { useState, useEffect } from "react";
import { loadModel } from "../utils/predict";

const Home: NextPage = () => {
  const [result, setResult] = useState({ label: "", confidence: "", time: "" });

  useEffect(() => {
    loadModel();
  }, []);

  const handleInference = (inferenceResult: any, inferenceTime: string) => {
    const topResult = inferenceResult[0];
    setResult({
      label: topResult.name,
      confidence: `${topResult.probability.toFixed(3)}`,
      time: `${inferenceTime} 秒`,
    });
  };

  return (
    <Layout>
      <div>数字認識</div>
      <DigitCanvas width={300} height={300} lineWidth={10} lineColor={"rgb(100, 100, 100)"} lineCap={"round"} onInference={handleInference} />
      <div>
        <h3>推論結果</h3>
        <p>ラベル: {result.label}</p>
        <p>自信度: {result.confidence}</p>
        <p>推論時間: {result.time}</p>
      </div>
    </Layout>
  );
};

export default Home;

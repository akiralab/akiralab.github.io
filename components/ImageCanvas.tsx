import { useRef, useState } from "react";
import { IMAGE_URLS } from "../data/sample-image-urls";
import { inferenceSqueezenet } from "../utils/predict";
import { Label, Grid, Segment, Divider } from "semantic-ui-react";

interface Props {
  height: number;
  width: number;
}

const ImageCanvas: React.FC<Props> = ({ height, width }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [topResultLabel, setTopResultLabel] = useState("");
  const [topResultConfidence, setTopResultConfidence] = useState("");
  const [inferenceTime, setInferenceTime] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [segmentState, setSegmentState] = useState("");

  const getImage = () => {
    const sampleImageUrls = IMAGE_URLS;
    const randomIndex = Math.floor(Math.random() * sampleImageUrls.length);
    return sampleImageUrls[randomIndex];
  };

  const displayImageOnCanvas = (image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    image.onload = () => {
      ctx!.clearRect(0, 0, width, height); // 既存のキャンバス内容をクリア
      ctx!.drawImage(image, 0, 0, width, height);
    };
  };

  const RunInference = async () => {
    const image = new Image();
    image.src = imageURL;
    displayImageOnCanvas(image);

    setTopResultLabel("推論中...");
    setTopResultConfidence("");
    setInferenceTime("");
    setSegmentState("loading");

    const [inferenceResult, timeTaken] = await inferenceSqueezenet(image.src);
    const topResult = inferenceResult[0];

    setTopResultLabel(topResult.name.toUpperCase());
    setTopResultConfidence(`${topResult.probability.toFixed(3)}`);
    setInferenceTime(`${timeTaken} 秒`);
    setSegmentState("");
  };

  const displayDummyImage = () => {
    const sampleImage = getImage();
    const image = new Image();
    image.src = sampleImage.value;

    setImageURL(sampleImage.value);
    displayImageOnCanvas(image);

    setTopResultLabel("");
    setTopResultConfidence("");
    setInferenceTime("");
    setSegmentState("disabled");
  };

  return (
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <canvas ref={canvasRef} width={width} height={height} />
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <button className="ui positive button" onClick={displayDummyImage}>
              画像を表示
            </button>
          </Segment>
          <Segment>
            <button className="ui positive button" onClick={RunInference}>
              推論する
            </button>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className={segmentState}>
            <p>推論結果: {topResultLabel}</p>
          </Segment>
          <Segment className={segmentState}>
            <p>自信: {topResultConfidence}</p>
          </Segment>
          <Segment className={segmentState}>
            <p>推論時間: {inferenceTime}</p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ImageCanvas;

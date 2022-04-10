import { useRef, useState } from 'react';
import { IMAGE_URLS } from '../data/sample-image-urls';
import { inferenceSqueezenet } from '../utils/predict';
import { Label } from 'semantic-ui-react';
import React from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';

interface Props {
 height: number;
 width: number;
}

const ImageCanvas = (props: Props) => {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 var image: HTMLImageElement;
 const [topResultLabel, setLabel] = useState('');
 const [topResultConfidence, setConfidence] = useState('');
 const [inferenceTime, setInferenceTime] = useState('');
 const [imageURL, setImageURL] = useState('');
 const [segmentState, setsegmentState] = useState('');

 // Load the image from the IMAGE_URLS array
 const getImage = () => {
  var sampleImageUrls: Array<{ text: string; value: string }> = IMAGE_URLS;
  var random = Math.floor(Math.random() * (9 - 0 + 1) + 0);
  return sampleImageUrls[random];
 };

 // Draw image and other  UI elements then run inference
 const RunInference = () => {
  // Get the image
  image = new Image();
  var sampleImage = imageURL;
  image.src = sampleImage;

  // Clear out previous values.
  setLabel(`推論中...`);
  setConfidence('');
  setInferenceTime('');
  setsegmentState('loading');

  // Draw the image on the canvas
  const canvas = canvasRef.current;
  const ctx = canvas!.getContext('2d');
  image.onload = () => {
   ctx!.drawImage(image, 0, 0, props.width, props.height);
  };

  // Run the inference
  submitInference();
 };

 // Draw image and other  UI elements then run inference
 const displayDummyImage = () => {
  // Get the image
  image = new Image();
  var sampleImage = getImage();
  image.src = sampleImage.value;

  setImageURL(sampleImage.value);
  console.log(sampleImage.value);

  const canvas = canvasRef.current;
  const ctx = canvas!.getContext('2d');
  image.onload = () => {
   ctx!.drawImage(image, 0, 0, props.width, props.height);
  };
  setLabel('');
  setConfidence('');
  setInferenceTime(``);
  setsegmentState('disabled');
 };

 const submitInference = async () => {
  // Get the image data from the canvas and submit inference.
  console.log('[submitInference] getting result...');
  var [inferenceResult, inferenceTime] = await inferenceSqueezenet(image.src);

  console.log('[submitInference] got result...');
  // Get the highest confidence.
  var topResult = inferenceResult[0];

  // Update the label and confidence
  console.log('[submitInference] showing result...');
  setLabel(topResult.name.toUpperCase());
  setConfidence(`${topResult.probability.toFixed(3)}`);
  setInferenceTime(`${inferenceTime} 秒`);
  setsegmentState('');
 };

 return (
  <>
   <Grid columns={3} divided>
    <Grid.Row stretched>
     <Grid.Column>
      <canvas ref={canvasRef} width={props.width} height={props.height} />
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
  </>
 );
};

export default ImageCanvas;

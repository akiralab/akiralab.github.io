import { useRef, useState } from 'react';
import { IMAGE_URLS } from '../data/sample-image-urls';
import { inferenceSqueezenet } from '../utils/predict';
import styles from '../styles/Home.module.css';

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

 // Load the image from the IMAGE_URLS array
 const getImage = () => {
  var sampleImageUrls: Array<{ text: string; value: string }> = IMAGE_URLS;
  var random = Math.floor(Math.random() * (9 - 0 + 1) + 0);
  return sampleImageUrls[random];
 };

 // Draw image and other  UI elements then run inference
 const displayImageAndRunInference = () => {
  // Get the image
  image = new Image();
  var sampleImage = getImage();
  image.src = sampleImage.value;

  // Clear out previous values.
  setLabel(`推論中...`);
  setConfidence('');
  setInferenceTime('');

  // Draw the image on the canvas
  const canvas = canvasRef.current;
  const ctx = canvas!.getContext('2d');
  image.onload = () => {
   ctx!.drawImage(image, 0, 0, props.width, props.height);
  };

  // Run the inference
  submitInference();
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
  setConfidence(topResult.probability);
  setInferenceTime(`今回の推論時間: ${inferenceTime} 秒`);
 };

 return (
  <>
   <button className={styles.grid} onClick={displayImageAndRunInference}>
    推論する
   </button>
   <br />
   <canvas ref={canvasRef} width={props.width} height={props.height} />
   <span>
    {topResultLabel} {topResultConfidence}
   </span>
   <span>{inferenceTime}</span>
  </>
 );
};

export default ImageCanvas;

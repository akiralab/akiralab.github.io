import React, { useRef, useState } from "react";
import { inferenceMNIST } from "../utils/predict";

interface Props {
  width: number;
  height: number;
  lineWidth: number;
  lineColor: string;
  lineCap: string;
  onInference: (inferenceResult: any, inferenceTime: string) => void;
}

const DigitCanvas: React.FC<Props> = ({ width, height, lineWidth, lineColor, lineCap, onInference }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (event: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    ctx!.beginPath();
    ctx!.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (event: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    ctx!.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    ctx!.strokeStyle = lineColor;
    ctx!.lineWidth = lineWidth;
    ctx!.lineCap = lineCap;
    ctx!.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const runInference = async () => {
    const canvas = canvasRef.current;
    const imageSrc = canvas!.toDataURL();

    const [inferenceResult, timeTaken] = await inferenceMNIST(imageSrc);
    onInference(inferenceResult, timeTaken);
  };

  return (
    <>
      <canvas ref={canvasRef} width={width} height={height} onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} onMouseLeave={stopDrawing} style={{ border: "1px solid #000" }} />
      <button onClick={runInference}>推論する</button>
    </>
  );
};

export default DigitCanvas;

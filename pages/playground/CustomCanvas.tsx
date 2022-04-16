import React, { useState, useEffect, useRef } from 'react';

const canvasStyle = {
 border: '1px solid gray',
 backgroundColor: 'white',
};

export type CustomCanvasAttribute = {
 width: number;
 height: number;
 lineWidth: number;
 lineColor: string;
 lineCap: CanvasLineCap;
 clear?: boolean;
 onMouseDown?: (e: React.MouseEvent<HTMLInputElement>) => void;
 onUpdateCanvas?: (e: HTMLCanvasElement) => void;
};

const CustomCanvas: React.FC<CustomCanvasAttribute> = (props) => {
 const canvasRef = useRef({} as HTMLCanvasElement);
 const [drawing, setDrawing] = useState(false);
 const [clear, setClear] = useState(false);

 // 領域クリア用。親コンポーネントでclearの値を変更するとcanvasをクリアする(toggle時常にクリア)
 useEffect(() => {
  const ctx = canvasRef.current.getContext('2d');
  if (ctx) {
   ctx.clearRect(0, 0, props.width, props.height);
   if (props.onUpdateCanvas) props.onUpdateCanvas(canvasRef.current);
  }
 }, [clear]);

 // 描画に必要なcontextを取得し、線の色、幅をセットする
 const getContext = () => {
  const ctx = canvasRef.current.getContext('2d');
  if (ctx === null) return;
  ctx.lineWidth = props.lineWidth;
  ctx.lineCap = props.lineCap;
  ctx.strokeStyle = props.lineColor;
  return ctx;
 };

 // 線描画開始処理。beginPath()で新しいパスを開始する(開始しないと色や太さが変更できない)
 const mouseDown: React.MouseEventHandler = (e) => {
  const { offsetX: x, offsetY: y } = e.nativeEvent;
  setDrawing(true);
  const ctx = getContext();
  if (ctx === undefined) return;
  ctx.beginPath();
  ctx.moveTo(x, y);
 };

 const clearCanvas = () => {
  setClear(!clear);
 };

 // マウスの動きに合わせて線を描画する
 const mouseMove: React.MouseEventHandler = (e) => {
  if (!drawing) return;

  const { offsetX: x, offsetY: y } = e.nativeEvent;
  const ctx = getContext();
  if (ctx === undefined) return;
  ctx.lineTo(x, y);
  ctx.stroke();
 };

 // 線描画完了(canvas更新イベントコールバックを行う)
 const endDrawing = () => {
  setDrawing(false);
  if (props.onUpdateCanvas) props.onUpdateCanvas(canvasRef.current);
 };

 // canvas
 return (
  <>
   <div>
    <canvas
     ref={canvasRef}
     width={props.width}
     height={props.height}
     onMouseDown={mouseDown}
     onMouseMove={mouseMove}
     onMouseUp={endDrawing}
     onMouseLeave={endDrawing}
     style={canvasStyle}
    />
   </div>
   <button onClick={clearCanvas} className="ui button basic">
    <i className="redo icon"></i>
    Reset
   </button>
  </>
 );
};

// CustomCanvas.defaultProps = {
//  width: 300,
//  height: 300,
//  lineWidth: 10,
//  lineColor: 'rgb(100, 100, 100)',
//  lineCap: 'round',
// };

export default CustomCanvas;

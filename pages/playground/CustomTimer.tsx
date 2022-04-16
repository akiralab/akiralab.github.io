import React, { useEffect, useState } from 'react';

const INITIAL_COUNT = 0;

const CustomTimer = () => {
 const [count, setCount] = useState(INITIAL_COUNT);
 const [running, setRunning] = useState(false);

 const countReset = () => {
  setCount(INITIAL_COUNT);
 };

 const countStart = () => {
  setRunning(true);
 };

 const countStop = () => {
  setRunning(false);
 };

 const countIncrement = () => {
  setCount((prevCount) => prevCount + 1);
  console.log('[+]');
 };

 const callbackFunction = () => {
  if (running) {
   console.log('[timer start]callbackが呼ばれました.');
   const timer = setInterval(countIncrement, 1000);
   return () => {
    console.log('timerが削除されました.');
    clearInterval(timer);
   };
  } else {
   console.log('[timer stop]callbackが呼ばれました.');
  }
 };

 //  第二因数に[running]が渡されているので、初回レンダリング時もしくはrunning更新時のみ実行される
 useEffect(callbackFunction, [running]);

 return (
  <>
   <p>Current: {count}</p>
   <button onClick={countStart} className="ui button basic">
    <i className="play icon"></i>
    Start
   </button>
   <button onClick={countStop} className="ui button basic">
    <i className="stop icon"></i>
    Stop
   </button>
   <button onClick={countReset} className="ui button basic">
    <i className="redo icon"></i>
    Reset
   </button>
  </>
 );
};

export default CustomTimer;

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{5632:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/playground/CustomCanvas",function(){return t(2450)}])},2450:function(n,e,t){"use strict";t.r(e);var o=t(5893),a=t(7294),i={border:"1px solid gray",backgroundColor:"white"};e.default=function(n){var e=(0,a.useRef)({}),t=(0,a.useState)(!1),r=t[0],s=t[1],u=(0,a.useState)(!1),c=u[0],f=u[1];(0,a.useEffect)((function(){var t=e.current.getContext("2d");t&&(t.clearRect(0,0,n.width,n.height),n.onUpdateCanvas&&n.onUpdateCanvas(e.current))}),[c]);var v=function(){var t=e.current.getContext("2d");if(null!==t)return t.lineWidth=n.lineWidth,t.lineCap=n.lineCap,t.strokeStyle=n.lineColor,t},d=function(){s(!1),n.onUpdateCanvas&&n.onUpdateCanvas(e.current)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)("canvas",{ref:e,width:n.width,height:n.height,onMouseDown:function(n){var e=n.nativeEvent,t=e.offsetX,o=e.offsetY;s(!0);var a=v();void 0!==a&&(a.beginPath(),a.moveTo(t,o))},onMouseMove:function(n){if(r){var e=n.nativeEvent,t=e.offsetX,o=e.offsetY,a=v();void 0!==a&&(a.lineTo(t,o),a.stroke())}},onMouseUp:d,onMouseLeave:d,style:i})}),(0,o.jsxs)("button",{onClick:function(){f(!c)},className:"ui button basic",children:[(0,o.jsx)("i",{className:"redo icon"}),"Reset"]})]})}}},function(n){n.O(0,[774,888,179],(function(){return e=5632,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
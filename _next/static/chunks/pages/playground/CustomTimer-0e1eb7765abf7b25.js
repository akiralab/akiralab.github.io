(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{7218:function(n,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/playground/CustomTimer",function(){return s(7615)}])},7615:function(n,t,s){"use strict";s.r(t);var c=s(5893),e=s(7294),i=s(5108);t.default=function(){var n=(0,e.useState)(0),t=n[0],s=n[1],u=(0,e.useState)(!1),a=u[0],o=u[1],r=function(){s((function(n){return n+1})),i.log("[+]")};return(0,e.useEffect)((function(){if(a){i.log("[timer start]callback\u304c\u547c\u3070\u308c\u307e\u3057\u305f.");var n=setInterval(r,1e3);return function(){i.log("timer\u304c\u524a\u9664\u3055\u308c\u307e\u3057\u305f."),clearInterval(n)}}i.log("[timer stop]callback\u304c\u547c\u3070\u308c\u307e\u3057\u305f.")}),[a]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("p",{children:["Current: ",t]}),(0,c.jsxs)("button",{onClick:function(){o(!0)},className:"ui button basic",children:[(0,c.jsx)("i",{className:"play icon"}),"Start"]}),(0,c.jsxs)("button",{onClick:function(){o(!1)},className:"ui button basic",children:[(0,c.jsx)("i",{className:"stop icon"}),"Stop"]}),(0,c.jsxs)("button",{onClick:function(){s(0)},className:"ui button basic",children:[(0,c.jsx)("i",{className:"redo icon"}),"Reset"]})]})}}},function(n){n.O(0,[774,888,179],(function(){return t=7218,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
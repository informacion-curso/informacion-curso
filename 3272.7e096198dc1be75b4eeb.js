(self.webpackChunkinfo=self.webpackChunkinfo||[]).push([[3272],{3272:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createSwipeBackGesture:()=>s});var r=n(2377),a=n(9461);n(960);const s=(e,t,n,s,o)=>{const i=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:n,onMove:e=>{s(e.deltaX/i.innerWidth)},onEnd:e=>{const t=i.innerWidth,n=e.deltaX/t,a=e.velocityX,s=a>=0&&(a>.2||e.deltaX>t/2),c=(s?1-n:n)*t;let u=0;if(c>5){const e=c/Math.abs(a);u=Math.min(e,540)}o(s,n<=0?.01:(0,r.j)(0,n,.9999),u)}})}}}]);
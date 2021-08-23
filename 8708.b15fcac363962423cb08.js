(self.webpackChunkinfo=self.webpackChunkinfo||[]).push([[8708],{8708:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ion_nav:()=>d,ion_nav_link:()=>v});var s=i(3150),n=i(7585),r=i(7807),o=i(2377),a=i(4001),h=i(7330);class c{constructor(e,t){this.component=e,this.params=t,this.state=1}async init(e){if(this.state=2,!this.element){const t=this.component;this.element=await(0,h.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)}}_destroy(){(0,o.l)(3!==this.state,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}const l=(e,t,i)=>{if(!e)return!1;if(e.component!==t)return!1;const s=e.params;if(s===i)return!0;if(!s&&!i)return!0;if(!s||!i)return!1;const n=Object.keys(s),r=Object.keys(i);if(n.length!==r.length)return!1;for(const o of n)if(s[o]!==i[o])return!1;return!0},u=(e,t)=>e?e instanceof c?e:new c(e,t):null,d=class{constructor(e){(0,s.r)(this,e),this.ionNavWillLoad=(0,s.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,s.e)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,s.e)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=(0,n.b)(this);this.swipeGesture=n.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await i.e(3272).then(i.bind(i,3272))).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}disconnectedCallback(){for(const e of this.views)(0,a.l)(e.element,a.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,i,s){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:i},s)}insert(e,t,i,s,n){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:i}],opts:s},n)}insertPages(e,t,i,s){return this.queueTrns({insertStart:e,insertViews:t,opts:i},s)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,i){const s={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(s.removeView=e,s.removeStart=1):"number"==typeof e&&(s.removeStart=e+1),this.queueTrns(s,i)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,i,s){return this.queueTrns({removeStart:e,removeCount:t,opts:i},s)}setRoot(e,t,i,s){return this.setPages([{component:e,componentProps:t}],i,s)}setPages(e,t,i){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},i)}setRouteId(e,t,i,s){const n=this.getActiveSync();if(l(n,e,t))return Promise.resolve({changed:!1,element:n.element});let r;const o=new Promise(e=>r=e);let a;const h={updateURL:!1,viewIsReady:e=>{let t;const i=new Promise(e=>t=e);return r({changed:!0,element:e,markVisible:async()=>{t(),await a}}),i}};if("root"===i)a=this.setRoot(e,t,h);else{const n=this.views.find(i=>l(i,e,t));n?a=this.popTo(n,Object.assign(Object.assign({},h),{direction:"back",animationBuilder:s})):"forward"===i?a=this.push(e,t,Object.assign(Object.assign({},h),{animationBuilder:s})):"back"===i&&(a=this.setRoot(e,t,Object.assign(Object.assign({},h),{direction:"back",animated:!0,animationBuilder:s})))}return o}async getRouteId(){const e=this.getActiveSync();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,i=t.indexOf(e);return i>0?t[i-1]:void 0}async queueTrns(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const i=new Promise((t,i)=>{e.resolve=t,e.reject=i});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");if(t){const i=await t.canTransition();if(!1===i)return Promise.resolve(!1);if("string"==typeof i)return t.push(i,e.opts.direction||"back"),Promise.resolve(!1)}}return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),i}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");t&&t.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const t=this.getActiveSync(),i=this.getEnteringView(e,t);if(!t&&!i)throw new Error("no views in the stack to be removed");i&&1===i.state&&await i.init(this.el),this.postViewInit(i,t,e);const s=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==t;s&&e.opts&&t&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||i&&i.animationBuilder),t.animationBuilder=e.opts.animationBuilder);const n=s?await this.transition(i,t,e):{hasCompleted:!0,requiresTransition:!1};this.success(n,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){(0,o.l)(void 0!==e.removeStart,"removeView needs removeStart"),(0,o.l)(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const i=e.insertViews;if(!i)return;(0,o.l)(i.length>0,"length can not be zero");const s=i.map(e=>e instanceof c?e:"component"in e?u(e.component,null===e.componentProps?void 0:e.componentProps):u(e,void 0)).filter(e=>null!==e);if(0===s.length)throw new Error("invalid views to insert");for(const n of s){n.delegate=e.opts.delegate;const t=n.nav;if(t&&t!==this)throw new Error("inserted view was already inserted");if(3===n.state)throw new Error("inserted view was already destroyed")}e.insertViews=s}getEnteringView(e,t){const i=e.insertViews;if(void 0!==i)return i[i.length-1];const s=e.removeStart;if(void 0!==s){const i=this.views,n=s+e.removeCount;for(let e=i.length-1;e>=0;e--){const r=i[e];if((e<s||e>=n)&&r!==t)return r}}}postViewInit(e,t,i){(0,o.l)(t||e,"Both leavingView and enteringView are null"),(0,o.l)(i.resolve,"resolve must be valid"),(0,o.l)(i.reject,"reject must be valid");const s=i.opts,n=i.insertViews,r=i.removeStart,h=i.removeCount;let c;if(void 0!==r&&void 0!==h){(0,o.l)(r>=0,"removeStart can not be negative"),(0,o.l)(h>=0,"removeCount can not be negative"),c=[];for(let i=0;i<h;i++){const s=this.views[i+r];s&&s!==e&&s!==t&&c.push(s)}s.direction=s.direction||"back"}const l=this.views.length+(void 0!==n?n.length:0)-(void 0!==h?h:0);if((0,o.l)(l>=0,"final balance can not be negative"),0===l)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(n){let e=i.insertStart;for(const t of n)this.insertViewAt(t,e),e++;i.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(c&&c.length>0){for(const e of c)(0,a.l)(e.element,a.b),(0,a.l)(e.element,a.c),(0,a.l)(e.element,a.d);for(const e of c)this.destroyView(e)}}async transition(e,t,i){const s=i.opts,r=s.progressAnimation?e=>this.sbAni=e:void 0,o=(0,n.b)(this),h=e.element,c=t&&t.element,l=Object.assign(Object.assign({mode:o,showGoBack:this.canGoBackSync(e),baseEl:this.el,progressCallback:r,animated:this.animated&&n.c.getBoolean("animated",!0),enteringEl:h,leavingEl:c},s),{animationBuilder:s.animationBuilder||this.animation||n.c.get("navAnimation")}),{hasCompleted:u}=await(0,a.t)(l);return this.transitionFinish(u,e,t,s)}transitionFinish(e,t,i,s){const n=e?t:i;return n&&this.cleanup(n),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:i,direction:s.direction}}insertViewAt(e,t){const i=this.views,s=i.indexOf(e);s>-1?((0,o.l)(e.nav===this,"view is not part of the nav"),i.splice(t,0,i.splice(s,1)[0])):((0,o.l)(!e.nav,"nav is used"),e.nav=this,i.splice(t,0,e))}removeView(e){(0,o.l)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,i=t.indexOf(e);(0,o.l)(i>-1,"view must be part of the stack"),i>=0&&t.splice(i,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,i=t.indexOf(e);for(let s=t.length-1;s>=0;s--){const e=t[s],n=e.element;n&&(s>i?((0,a.l)(n,a.d),this.destroyView(e)):s<i&&(0,a.s)(n,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,i){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let s=e?-.001:.001;e?s+=(0,r.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=(0,r.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,s,i)}}render(){return(0,s.h)("slot",null)}get el(){return(0,s.i)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};d.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const v=class{constructor(e){(0,s.r)(this,e),this.routerDirection="forward",this.onClick=()=>((e,t,i,s,n)=>{const r=this.el.closest("ion-nav");if(r)if("forward"===t){if(void 0!==i)return r.push(i,s,{skipIfBusy:!0,animationBuilder:n})}else if("root"===t){if(void 0!==i)return r.setRoot(i,s,{skipIfBusy:!0,animationBuilder:n})}else if("back"===t)return r.pop({skipIfBusy:!0,animationBuilder:n});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation)}render(){return(0,s.h)(s.H,{onClick:this.onClick})}get el(){return(0,s.i)(this)}}}}]);
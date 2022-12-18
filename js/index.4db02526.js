(function(){"use strict";var e={8944:function(e,t,i){var n=i(144),o=i(998),r=i(6232),s=i(5550),a=i(9223),l=i(5808),c=i(4525),u=i(5200),d=i(3059),h=i(8515),p=i(8949),f=i(1023),g=i(7953),v=function(){var e=this,t=e._self._c;return t(o.Z,[t(h.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(l.Z,{attrs:{nav:""}},[t(c.Z,[t(u.km,[t(u.V9,{staticClass:"text-h6"},[e._v(" J🌰 Bicycle Bell ")])],1)],1),t(a.Z),t(c.Z,[t(p.Z,{staticClass:"ma-2",attrs:{items:void 0!=e.$refs.bell?e.$refs.bell.types:[],dense:"",outlined:"","hide-details":"","return-object":"",label:"Stimme"},on:{change:e.changeBellType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),t(c.Z,[t(f.Z,{attrs:{inset:"",label:"Autoplay"},on:{change:e.changeBellType},model:{value:e.auto,callback:function(t){e.auto=t},expression:"auto"}})],1),t(c.Z,[e._v(" Beta 6 ")])],1)],1),t(r.Z,{attrs:{app:""}},[t(s.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(g.qW,[e._v("J🌰 Bicycle Bell")])],1),t(d.Z,[t("MainBell",{ref:"bell"})],1),t("UpdateDialog",{ref:"updateDialog"})],1)},b=[],m=i(4562),y=i(4324),w=i(3305),Z=i(7423),k=function(){var e=this,t=e._self._c;return t("div",{ref:"bellDiv",staticClass:"bellDiv"},[t(Z.Z,{attrs:{height:"100vh"}},[e.offline||e.ignore?t("div",{staticClass:"w-100 text-center"},[t(m.Z,{style:e.bellStyle,attrs:{icon:"",disabled:!e.enabled&&!e.touching},on:{touchstart:e.touchstart,touchend:e.touchend}},[e.enabled?t(y.Z,{attrs:{size:e.bellSize}},[e._v("mdi-bell-ring-outline")]):t(w.Z,{attrs:{size:e.progSize,color:"primary",indeterminate:""}})],1)],1):t("div",{staticClass:"w-100 text-center text-h3 pa-3"},[e._v(" Please use airplane mode!"),t("br"),t(y.Z,{attrs:{size:e.bellSize}},[e._v("mdi-airplane-check")]),t("br"),t(m.Z,{attrs:{elevation:"2","x-large":""},on:{click:e.ign}},[e._v("Ignore")])],1)])],1)},_=[],x=i(5977),S=i.n(x),T=i(4117);const P={0:[0,2.7],1:[2.7,5.18],2:[5.2,6.8],3:[6.9,7.8],4:[7.8,9.4],5:[9.4,10.9],6:[10.9,13],7:[13.1,14.7],8:[14.7,15.6],9:[15.7,16],10:[16,16.8],11:[16.8,18.6],12:[18.6,19.2],13:[19.3,19.6]},B={sopran:new(S())({source:"/audio/sopran.mp3",sprite:P}),alt:new(S())({source:"/audio/alt.mp3",sprite:P}),bariton:new(S())({source:"/audio/bariton.mp3",sprite:P})};var M={data:()=>({iWidth:0,iHeight:0,iTop:0,offline:!1,ignore:!1,type:"sopran",types:["sopran","alt","bariton"],auto:!1,enabled:!0,touching:!1}),computed:{bellStyle(){return{width:this.iWidth+"px",height:this.iHeight+"px",top:this.iTop+"px"}},bellSize(){return(.5*this.iWidth).toString()+"px"},progSize(){return.5*this.iWidth}},methods:{ign(){this.ignore=!0},reenable(){this.enabled=!0,this.touching&this.auto&&this.ring()},ring(){this.enabled=!1;const e=B[this.type],t=Object.keys(e.sprite),i=t[Math.floor(Math.random()*t.length)];e[i]["play"](),setTimeout(this.reenable,700+Math.floor(500*Math.random()))},touchstart(){this.touching=!0,this.enabled&&this.ring()},touchend(){this.touching=!1},update_size(){if(this.$refs.bellDiv){let e=Math.min(this.$refs.bellDiv.clientHeight,this.$refs.bellDiv.clientWidth);this.iWidth=e-20,this.iHeight=this.iWidth,this.iTop=Math.max(0,this.$refs.bellDiv.clientHeight-this.$refs.bellDiv.clientWidth-30)}}},mounted(){window.addEventListener("resize",(()=>{this.update_size()})),setTimeout(this.update_size(),5e3),(0,T.Y)((e=>{this.offline=e}))}},O=M,$=i(1001),j=(0,$.Z)(O,k,_,!1,null,"45930606",null),z=j.exports,D=i(9582),W=i(4886),C=i(4061),E=i(8718),A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(C.Z,{attrs:{"max-width":"300px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t(D.Z,[t(W.EB,[e._v("Update")]),t(W.ZB,[t("p",[e._v("Eine neue Version is vorhanden.")]),t(m.Z,{attrs:{color:"primary",block:""},on:{click:function(t){return e.refreshApp()}}},[e._v(" Update ")])],1),t(a.Z),t(W.h7,[t(E.Z),t(m.Z,{attrs:{color:"secondary",text:""},on:{click:function(t){e.show=!1}}},[e._v(" Close ")])],1)],1)],1)],1)},I=[],N={data(){return{show:!1,worker:void 0}},methods:{refreshApp(){this.show=!1,this.worker?(this.worker.postMessage({type:"SKIP_WAITING"}),console.log("skipWaiting finished")):console.warn("No worker data found when trying to refresh!")}}},U=N,H=(0,$.Z)(U,A,I,!1,null,null,null),L=H.exports,J={name:"App",components:{MainBell:z,UpdateDialog:L},data:()=>({drawer:null,refreshing:!1,appTitle:"J🌰 Bicycle Bell",type:"bariton",subscribed:void 0,subscription:null,worker:null,auto:!1}),methods:{isMobile(){return navigator.userAgentData.mobile},isApple(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},refreshPossible(e){e.detail?(this.$refs.updateDialog.show=!0,this.$refs.updateDialog.worker=e.detail):console.warn("No worker data found!")},changeBellType(){this.$refs.bell.type=this.type,this.$refs.bell.auto=this.auto,localStorage.setItem("type",this.type),localStorage.setItem("auto",this.auto)}},created(){try{let e=localStorage.getItem("type");e&&(this.type=e)}catch{console.log("no old type config")}try{let e=localStorage.getItem("auto");e&&(this.auto=e)}catch{console.log("no old type config")}setTimeout((()=>{this.$refs.bell.type=this.type}),100),document.addEventListener("swRegistered",this.pushPossible),document.addEventListener("swUpdated",this.refreshPossible,{once:!0}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.refreshing||(this.refreshing=!0,console.log("controllerchange triggered, -> auto refresh!!"),window.location.reload())}))}},R=J,V=(0,$.Z)(R,v,b,!1,null,null,null),q=V.exports,F=i(5205);let G=null;(0,F.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.")},registered(e){console.log("Service worker has been registered."),G=e,setTimeout((()=>document.dispatchEvent(new CustomEvent("swRegistered",{detail:e}))),2e3),setInterval((()=>{e.update()}),6e4)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e.waiting}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var K=i(1705);n.ZP.use(K.Z);var Y=new K.Z({theme:{themes:{light:{primary:"#47a84b",secondary:"#d12424"},dark:{primary:"#47a84b",secondary:"#d12424"}}}});n.ZP.config.productionTip=!1;const Q=new n.ZP({vuetify:Y,render:e=>e(q)}).$mount("#app");Q.$vuetify.theme.dark=!0}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,r){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(a=!1,r<s&&(s=r));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={826:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],a=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var u=l(i)}for(t&&t(n);c<s.length;c++)r=s[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(u)},n=self["webpackChunkj_nuts_bicycle_bell"]=self["webpackChunkj_nuts_bicycle_bell"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(8944)}));n=i.O(n)})();
//# sourceMappingURL=index.4db02526.js.map
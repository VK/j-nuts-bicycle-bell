(function(){"use strict";var e={4775:function(e,t,n){var r=n(144),i=n(998),o=n(6232),s=n(5550),l=n(9223),a=n(5808),c=n(4525),u=n(5200),d=n(3059),p=n(5554),h=n(3615),f=n(7953),g=function(){var e=this,t=e._self._c;return t(i.Z,[t(p.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(a.Z,{attrs:{nav:""}},[t(c.Z,[t(u.km,[t(u.V9,{staticClass:"text-h6"},[e._v(" J🌰 Bicycle Bell ")])],1)],1),t(l.Z),t(c.Z,[t(h.Z,{staticClass:"ma-2",attrs:{items:void 0!=e.$refs.bell?e.$refs.bell.types:[],dense:"",outlined:"","hide-details":"","return-object":"",label:"Stimme"},on:{change:e.changeVoiceType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1)],1)],1),t(o.Z,{attrs:{app:""}},[t(s.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(f.qW,[e._v("J🌰 Bicycle Bell")])],1),t(d.Z,[t("MainBell",{ref:"bell"})],1),t("UpdateDialog",{ref:"updateDialog"})],1)},v=[],b=n(6190),w=n(4324),m=n(7423),y=function(){var e=this,t=e._self._c;return t("div",{ref:"bellDiv",staticClass:"bellDiv"},[t(m.Z,{attrs:{height:"100%"}},[t("div",{staticClass:"w-100 text-center"},[t(b.Z,{style:e.bellStyle,attrs:{icon:""},on:{click:e.ring}},[t(w.Z,{attrs:{size:e.bellSize}},[e._v("mdi-bell-ring-outline")])],1)],1)])],1)},k=[];const Z={sopran:new Audio(n(6770)),alt:new Audio(n(7637)),bariton:new Audio(n(3827))};var _={data:()=>({iWidth:0,iHeight:0,type:"sopran",types:["sopran","alt","bariton"]}),computed:{bellStyle(){return{width:this.iWidth+"px",height:this.iHeight+"px"}},bellSize(){return console.log((.5*this.iWidth).toString()+"px"),(.5*this.iWidth).toString()+"px"}},methods:{ring(){let e=Z[this.type];e.paused?e.play():e.currentTime=0},update_size(){let e=Math.min(this.$refs.bellDiv.clientHeight,this.$refs.bellDiv.clientWidth);console.log(e),this.iWidth=e-20,this.iHeight=this.iWidth}},mounted(){window.addEventListener("resize",(()=>{this.update_size()})),setTimeout(this.update_size(),5e3)}},x=_,S=n(1001),A=(0,S.Z)(x,y,k,!1,null,"f5c852c4",null),P=A.exports,O=n(9582),T=n(4886),j=n(4061),E=n(8718),W=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(j.Z,{attrs:{"max-width":"300px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t(O.Z,[t(T.EB,[e._v("Update")]),t(T.ZB,[t("p",[e._v("Eine neue Version is vorhanden.")]),t(b.Z,{attrs:{color:"primary",block:""},on:{click:function(t){return e.refreshApp()}}},[e._v(" Update ")])],1),t(l.Z),t(T.h7,[t(E.Z),t(b.Z,{attrs:{color:"secondary",text:""},on:{click:function(t){e.show=!1}}},[e._v(" Close ")])],1)],1)],1)],1)},C=[],D={data(){return{show:!1,worker:void 0}},methods:{refreshApp(){this.show=!1,this.worker?(this.worker.postMessage({type:"SKIP_WAITING"}),console.log("skipWaiting finished")):console.warn("No worker data found when trying to refresh!")}}},$=D,M=(0,S.Z)($,W,C,!1,null,null,null),z=M.exports,B={name:"App",components:{MainBell:P,UpdateDialog:z},data:()=>({drawer:null,refreshing:!1,appTitle:"J🌰 Kalender",type:"bariton",subscribed:void 0,subscription:null,worker:null}),methods:{isMobile(){return navigator.userAgentData.mobile},isApple(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},refreshPossible(e){e.detail?(this.$refs.updateDialog.show=!0,this.$refs.updateDialog.worker=e.detail):console.warn("No worker data found!")},changeVoiceType(){this.$refs.bell.type=this.type,localStorage.setItem("type",this.type)}},created(){try{let e=localStorage.getItem("type");e&&(this.type=e)}catch{console.log("no old type config")}setTimeout((()=>{this.$refs.bell.type=this.type}),100),document.addEventListener("swRegistered",this.pushPossible),document.addEventListener("swUpdated",this.refreshPossible,{once:!0}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.refreshing||(this.refreshing=!0,console.log("controllerchange triggered, -> auto refresh!!"),window.location.reload())}))}},I=B,N=(0,S.Z)(I,g,v,!1,null,null,null),U=N.exports,H=n(5205);let L=null;(0,H.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.")},registered(e){console.log("Service worker has been registered."),L=e,setTimeout((()=>document.dispatchEvent(new CustomEvent("swRegistered",{detail:e}))),2e3),setInterval((()=>{e.update()}),6e4)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e.waiting}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var V=n(1705);r.ZP.use(V.Z);var J=new V.Z({theme:{themes:{light:{primary:"#47a84b",secondary:"#d12424"},dark:{primary:"#47a84b",secondary:"#d12424"}}}});r.ZP.config.productionTip=!1;const K=new r.ZP({vuetify:J,render:e=>e(U)}).$mount("#app");K.$vuetify.theme.dark=!0},7637:function(e,t,n){e.exports=n.p+"media/A alt.f752472a.mp3"},3827:function(e,t,n){e.exports=n.p+"media/A bariton.00d8e015.mp3"},6770:function(e,t,n){e.exports=n.p+"media/A sopran.42ff4e83.mp3"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],o=e[u][2];for(var l=!0,a=0;a<r.length;a++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(l=!1,o<s&&(s=o));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,s=r[0],l=r[1],a=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(a)var u=a(n)}for(t&&t(r);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkj_nuts_bicycle_bell"]=self["webpackChunkj_nuts_bicycle_bell"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4775)}));r=n.O(r)})();
//# sourceMappingURL=index.00d66796.js.map
(function(){"use strict";var e={985:function(e,t,i){var r=i(144),n=i(998),o=i(6232),s=i(5550),l=i(9223),a=i(5808),c=i(4525),d=i(5200),u=i(3059),h=i(5554),p=i(3615),f=i(7953),v=function(){var e=this,t=e._self._c;return t(n.Z,[t(h.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(a.Z,{attrs:{nav:""}},[t(c.Z,[t(d.km,[t(d.V9,{staticClass:"text-h6"},[e._v(" J🌰 Bicycle Bell ")])],1)],1),t(l.Z),t(c.Z,[t(p.Z,{staticClass:"ma-2",attrs:{items:void 0!=e.$refs.bell?e.$refs.bell.types:[],dense:"",outlined:"","hide-details":"","return-object":"",label:"Stimme"},on:{change:e.changeVoiceType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),t(c.Z,[e._v(" Beta 1 ")])],1)],1),t(o.Z,{attrs:{app:""}},[t(s.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(f.qW,[e._v("J🌰 Bicycle Bell")])],1),t(u.Z,[t("MainBell",{ref:"bell"})],1),t("UpdateDialog",{ref:"updateDialog"})],1)},g=[],b=i(6190),w=i(4324),y=i(7423),m=function(){var e=this,t=e._self._c;return t("div",{ref:"bellDiv",staticClass:"bellDiv"},[t(y.Z,{attrs:{height:"100vh"}},[e.offline||e.ignore?t("div",{staticClass:"w-100 text-center"},[t(b.Z,{style:e.bellStyle,attrs:{icon:""},on:{click:e.ring}},[t(w.Z,{attrs:{size:e.bellSize}},[e._v("mdi-bell-ring-outline")])],1)],1):t("div",{staticClass:"w-100 text-center text-h3 pa-3"},[e._v(" Please use airplane mode!"),t("br"),t(w.Z,{attrs:{size:e.bellSize}},[e._v("mdi-airplane-check")]),t("br"),t(b.Z,{attrs:{elevation:"2","x-large":""},on:{click:e.ign}},[e._v("Ignore")])],1)])],1)},k=[],Z=i(5977),_=i.n(Z),x=i(4117);const S={0:[0,2.7],1:[2.7,5.18],2:[5.2,6.8],3:[6.9,7.8],4:[7.8,9.4],5:[9.4,10.9],6:[10.9,13],7:[13.1,14.7],8:[14.7,15.6],9:[15.7,16],10:[16,16.8],11:[16.8,18.6],12:[18.6,19.2],13:[19.3,19.6]},P={sopran:new(_())({source:"/audio/sopran.mp3",sprite:S}),alt:new(_())({source:"/audio/alt.mp3",sprite:S}),bariton:new(_())({source:"/audio/bariton.mp3",sprite:S})};var T={data:()=>({iWidth:0,iHeight:0,iTop:0,offline:!1,ignore:!1,type:"sopran",types:["sopran","alt","bariton"]}),computed:{bellStyle(){return{width:this.iWidth+"px",height:this.iHeight+"px",top:this.iTop+"px"}},bellSize(){return(.5*this.iWidth).toString()+"px"}},methods:{ign(){this.ignore=!0},ring(){const e=P[this.type],t=Object.keys(e.sprite),i=t[Math.floor(Math.random()*t.length)];e[i]["play"]()},update_size(){if(this.$refs.bellDiv){let e=Math.min(this.$refs.bellDiv.clientHeight,this.$refs.bellDiv.clientWidth);this.iWidth=e-20,this.iHeight=this.iWidth,this.iTop=Math.max(0,this.$refs.bellDiv.clientHeight-this.$refs.bellDiv.clientWidth-30)}}},mounted(){window.addEventListener("resize",(()=>{this.update_size()})),setTimeout(this.update_size(),5e3),(0,x.Y)((e=>{this.offline=e}))}},O=T,j=i(1001),D=(0,j.Z)(O,m,k,!1,null,"79ca54dc",null),$=D.exports,C=i(9582),E=i(4886),M=i(4061),W=i(8718),B=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(M.Z,{attrs:{"max-width":"300px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t(C.Z,[t(E.EB,[e._v("Update")]),t(E.ZB,[t("p",[e._v("Eine neue Version is vorhanden.")]),t(b.Z,{attrs:{color:"primary",block:""},on:{click:function(t){return e.refreshApp()}}},[e._v(" Update ")])],1),t(l.Z),t(E.h7,[t(W.Z),t(b.Z,{attrs:{color:"secondary",text:""},on:{click:function(t){e.show=!1}}},[e._v(" Close ")])],1)],1)],1)],1)},z=[],A={data(){return{show:!1,worker:void 0}},methods:{refreshApp(){this.show=!1,this.worker?(this.worker.postMessage({type:"SKIP_WAITING"}),console.log("skipWaiting finished")):console.warn("No worker data found when trying to refresh!")}}},I=A,N=(0,j.Z)(I,B,z,!1,null,null,null),U=N.exports,H={name:"App",components:{MainBell:$,UpdateDialog:U},data:()=>({drawer:null,refreshing:!1,appTitle:"J🌰 Bicycle Bell",type:"bariton",subscribed:void 0,subscription:null,worker:null}),methods:{isMobile(){return navigator.userAgentData.mobile},isApple(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},refreshPossible(e){e.detail?(this.$refs.updateDialog.show=!0,this.$refs.updateDialog.worker=e.detail):console.warn("No worker data found!")},changeVoiceType(){this.$refs.bell.type=this.type,localStorage.setItem("type",this.type)}},created(){try{let e=localStorage.getItem("type");e&&(this.type=e)}catch{console.log("no old type config")}setTimeout((()=>{this.$refs.bell.type=this.type}),100),document.addEventListener("swRegistered",this.pushPossible),document.addEventListener("swUpdated",this.refreshPossible,{once:!0}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.refreshing||(this.refreshing=!0,console.log("controllerchange triggered, -> auto refresh!!"),window.location.reload())}))}},L=H,V=(0,j.Z)(L,v,g,!1,null,null,null),J=V.exports,R=i(5205);let q=null;(0,R.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.")},registered(e){console.log("Service worker has been registered."),q=e,setTimeout((()=>document.dispatchEvent(new CustomEvent("swRegistered",{detail:e}))),2e3),setInterval((()=>{e.update()}),6e4)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e.waiting}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var F=i(1705);r.ZP.use(F.Z);var G=new F.Z({theme:{themes:{light:{primary:"#47a84b",secondary:"#d12424"},dark:{primary:"#47a84b",secondary:"#d12424"}}}});r.ZP.config.productionTip=!1;const K=new r.ZP({vuetify:G,render:e=>e(J)}).$mount("#app");K.$vuetify.theme.dark=!0}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,o){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var l=!0,a=0;a<r.length;a++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[a])}))?r.splice(a--,1):(l=!1,o<s&&(s=o));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={826:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],l=r[1],a=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(a)var d=a(i)}for(t&&t(r);c<s.length;c++)o=s[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},r=self["webpackChunkj_nuts_bicycle_bell"]=self["webpackChunkj_nuts_bicycle_bell"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(985)}));r=i.O(r)})();
//# sourceMappingURL=index.bb3803c4.js.map
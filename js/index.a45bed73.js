(function(){"use strict";var e={6550:function(e,t,i){var o=i(144),n=i(998),r=i(6232),s=i(5550),a=i(9223),l=i(5808),c=i(4525),u=i(5200),h=i(3059),d=i(8515),p=i(8949),f=i(1023),g=i(7953),b=function(){var e=this,t=e._self._c;return t(n.Z,[t(d.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(l.Z,{attrs:{nav:""}},[t(c.Z,[t(u.km,[t(u.V9,{staticClass:"text-h6"},[e._v(" J🌰 Bicycle Bell ")])],1)],1),t(a.Z),t(c.Z,[t(p.Z,{staticClass:"ma-2",attrs:{items:void 0!=e.$refs.bell?e.$refs.bell.types:[],dense:"",outlined:"","hide-details":"","return-object":"",label:"Stimme"},on:{change:e.changeBellType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),t(c.Z,[t(f.Z,{attrs:{inset:"",label:"Autoplay"},on:{change:e.changeBellType},model:{value:e.auto,callback:function(t){e.auto=t},expression:"auto"}})],1),t(c.Z,[e._v("1.0")])],1)],1),t(r.Z,{attrs:{app:""}},[t(s.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(g.qW,[e._v("J🌰 Bicycle Bell")])],1),t(h.Z,[t("MainBell",{ref:"bell"})],1),t("UpdateDialog",{ref:"updateDialog"})],1)},v=[],m=i(4562),y=i(4324),w=i(3305),k=i(7423),Z=function(){var e=this,t=e._self._c;return t("div",{ref:"bellDiv",staticClass:"bellDiv"},[t(k.Z,{attrs:{height:"100vh"}},[e.offline||e.ignore?t("div",{staticClass:"w-100 text-center"},[t(m.Z,{style:e.bellStyle,attrs:{icon:"",disabled:!e.enabled&&!e.touching},on:{touchstart:e.touchstart,touchend:e.touchend}},[e.enabled?t(y.Z,{attrs:{size:e.bellSize}},[e._v("mdi-bell-ring-outline")]):e.auto?t(w.Z,{attrs:{size:e.progSize,color:"primary",indeterminate:""}}):e._e()],1)],1):t("div",{staticClass:"w-100 text-center text-h3 pa-3"},[e._v(" Please use airplane mode!"),t("br"),t(y.Z,{attrs:{size:e.bellSize}},[e._v("mdi-airplane-check")]),t("br"),t(m.Z,{attrs:{elevation:"2","x-large":""},on:{click:e.ign}},[e._v("Ignore")])],1)])],1)},_=[],x=i(5977),S=i.n(x),T=i(4117);const B={0:[0,2.7],1:[2.7,5.18],2:[5.2,6.8],3:[6.9,7.8],4:[7.8,9.4],5:[9.4,10.9],6:[10.9,13],7:[13.1,14.7],8:[14.7,15.6],9:[15.7,16],10:[16,16.8],11:[16.8,18.6],12:[18.6,19.2],13:[19.3,19.6]},M={sopran:new(S())({source:"/audio/sopran.mp3",sprite:B}),alt:new(S())({source:"/audio/alt.mp3",sprite:B}),bariton:new(S())({source:"/audio/bariton.mp3",sprite:B})};var O={data:()=>({iWidth:0,iHeight:0,iTop:0,offline:!1,ignore:!1,type:"sopran",types:["sopran","alt","bariton"],auto:!1,enabled:!0,touching:!1}),computed:{bellStyle(){return{width:this.iWidth+"px",height:this.iHeight+"px",top:this.iTop+"px"}},bellSize(){return(.5*this.iWidth).toString()+"px"},progSize(){return.5*this.iWidth}},methods:{set_config(e,t){this.auto=e,this.type=t},ign(){this.ignore=!0},reenable(){this.enabled=!0,this.touching&this.auto&&this.ring()},ring(){this.enabled=!1;const e=M[this.type],t=Object.keys(e.sprite),i=t[Math.floor(Math.random()*t.length)];e[i]["play"](),this.auto?setTimeout(this.reenable,700+Math.floor(500*Math.random())):setTimeout(this.reenable,250)},touchstart(){this.touching=!0,this.enabled&&this.ring()},touchend(){this.touching=!1},update_size(){if(this.$refs.bellDiv){let e=Math.min(this.$refs.bellDiv.clientHeight,this.$refs.bellDiv.clientWidth);this.iWidth=e-20,this.iHeight=this.iWidth,this.iTop=Math.max(0,this.$refs.bellDiv.clientHeight-this.$refs.bellDiv.clientWidth-30)}}},mounted(){window.addEventListener("resize",(()=>{this.update_size()})),setTimeout(this.update_size(),5e3),(0,T.Y)((e=>{this.offline=e}))}},P=O,j=i(1001),D=(0,j.Z)(P,Z,_,!1,null,"474f3a88",null),$=D.exports,z=i(9582),C=i(4886),W=i(4061),E=i(8718),I=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(W.Z,{attrs:{"max-width":"300px"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t(z.Z,[t(C.EB,[e._v("Update")]),t(C.ZB,[t("p",[e._v("Eine neue Version is vorhanden.")]),t(m.Z,{attrs:{color:"primary",block:""},on:{click:function(t){return e.refreshApp()}}},[e._v(" Update ")])],1),t(a.Z),t(C.h7,[t(E.Z),t(m.Z,{attrs:{color:"secondary",text:""},on:{click:function(t){e.show=!1}}},[e._v(" Close ")])],1)],1)],1)],1)},A=[],N={data(){return{show:!1,worker:void 0}},methods:{refreshApp(){this.show=!1,this.worker?(this.worker.postMessage({type:"SKIP_WAITING"}),console.log("skipWaiting finished")):console.warn("No worker data found when trying to refresh!")}}},U=N,H=(0,j.Z)(U,I,A,!1,null,null,null),J=H.exports,L={name:"App",components:{MainBell:$,UpdateDialog:J},data:()=>({drawer:null,refreshing:!1,appTitle:"J🌰 Bicycle Bell",type:"bariton",subscribed:void 0,subscription:null,worker:null,auto:!1}),methods:{isMobile(){return navigator.userAgentData.mobile},isApple(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},refreshPossible(e){e.detail?(this.$refs.updateDialog.show=!0,this.$refs.updateDialog.worker=e.detail):console.warn("No worker data found!")},changeBellType(){this.$refs.bell.type=this.type,this.$refs.bell.auto=this.auto,localStorage.setItem("type",this.type),localStorage.setItem("auto",this.auto)},checkInstall(){window.matchMedia("(display-mode: standalone)").matches?console.log("uses app"):(console.log("you might want to use the app "),window.location="web+jnutsbell://",setTimeout((()=>{console.log("you might want to install the app :D")}),2e3));const e=decodeURIComponent(location.search);e.includes("sopran")?(this.type="sopran",this.changeBellType()):e.includes("alt")?(this.type="alt",this.changeBellType()):e.includes("bariton")&&(this.type="bariton",this.changeBellType())}},created(){try{let e=localStorage.getItem("type");e&&(this.type=e)}catch{console.log("no old type config")}try{let e=JSON.parse(localStorage.getItem("auto"));e&&(this.auto=e)}catch{console.log("no old type config")}setTimeout((()=>{this.$refs.bell.set_config(this.auto,this.type)}),200),setTimeout(this.checkInstall,2e3),document.addEventListener("swRegistered",this.pushPossible),document.addEventListener("swUpdated",this.refreshPossible,{once:!0}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.refreshing||(this.refreshing=!0,console.log("controllerchange triggered, -> auto refresh!!"),window.location.reload())}))}},R=L,V=(0,j.Z)(R,b,v,!1,null,null,null),q=V.exports,F=i(5205);let G=null;(0,F.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.")},registered(e){console.log("Service worker has been registered."),G=e,setTimeout((()=>document.dispatchEvent(new CustomEvent("swRegistered",{detail:e}))),2e3),setInterval((()=>{e.update()}),6e4)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e.waiting}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var K=i(1705);o.ZP.use(K.Z);var Y=new K.Z({theme:{themes:{light:{primary:"#47a84b",secondary:"#d12424"},dark:{primary:"#47a84b",secondary:"#d12424"}}}});o.ZP.config.productionTip=!1;const Q=new o.ZP({vuetify:Y,render:e=>e(q)}).$mount("#app");Q.$vuetify.theme.dark=!0}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,o,n,r){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],r=e[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(i.O).every((function(e){return i.O[e](o[l])}))?o.splice(l--,1):(a=!1,r<s&&(s=r));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,n,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={826:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,s=o[0],a=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(l)var u=l(i)}for(t&&t(o);c<s.length;c++)r=s[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(u)},o=self["webpackChunkj_nuts_bicycle_bell"]=self["webpackChunkj_nuts_bicycle_bell"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(6550)}));o=i.O(o)})();
//# sourceMappingURL=index.a45bed73.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5c600b2","chunk-f8fbc1dc"],{"09f7":function(t,e,i){"use strict";var n=i("3ce9"),r=i.n(n);r.a},1446:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"container"},[t.isLoading?i("section",{staticStyle:{margin:"50vh 0 0 25vw"}},[i("van-loading",{attrs:{size:"24px"}})],1):i("section",[i("van-sticky",[i("section",{staticClass:"header"},[i("section",{staticClass:"fictionInfo"},[i("div",{staticClass:"fictionName"},[t._v(t._s(t.bookTitle))]),i("div",{staticClass:"count"},[t._v("总章节数："+t._s(t.chapterLen))])]),i("section",{staticClass:"sort"},[i("van-icon",{attrs:{name:"bar-chart-o",size:"20px",color:"#fff"},on:{click:t.reverseBook}})],1)])]),i("van-list",{attrs:{finished:t.listDownFinished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.listDownLoading,callback:function(e){t.listDownLoading=e},expression:"listDownLoading"}},t._l(t.showingList,(function(e,n){return i("van-cell",{key:n,class:[t.curReadTitle==e.title?"highlight":""],attrs:{title:e.title},on:{click:function(i){return t.toExactChapter(e)}}})})),1),i("div")],1)])},r=[],o=(i("a4d3"),i("99af"),i("4de4"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("96cf"),i("1da1")),a=i("2909"),s=i("ade3"),c=i("a20f"),l=i("dafe"),u=i("4aa2");function h(t){return"[object String]"===Object.prototype.toString.call(t)}var d=Object(u["a"])((function(t){return h(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()})),g=d,p=i("2f62");function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var v={props:{jumpChapter:{type:Function,default:function(){console.log("should be called!")}},isSidebar:{type:Boolean,default:!1}},data:function(){return{chapterList:[],showingList:[],showFlag:"positive",isLoading:!1,listDownLoading:!1,listDownFinished:!1,curReadTitle:"",pageIndex:0,bookInfo:{}}},computed:b({},Object(p["c"])(["currentView","collectedFiction"]),{negativePagingChapter:function(){return Object(l["c"])(g(this.chapterList),50)},positivePagingChapter:function(){return Object(l["c"])(this.chapterList,50)},chapterLen:function(){return this.chapterList.length},bookTitle:function(){return this.$route.params.title},_chapterList:function(){var t=this.$route.params.chapterList||this.currentView.chapterList;return t}}),methods:{toExactChapter:function(t){this.curReadTitle=t.title,this.isSidebar?this.$emit("updateContent",t.href):this.$router.push({name:"fiction_content",query:{link:t.href}})},onLoad:function(){this.listDownLoading=!0;var t="positive"===this.showFlag?this.positivePagingChapter:this.negativePagingChapter;this.showingList=[].concat(Object(a["a"])(this.showingList),Object(a["a"])(t[this.pageIndex++])),this.listDownLoading=!1,this.pageIndex>t.length&&(this.listDownFinished=!0)},initShowing:function(){this.showingList=[],this.pageIndex=0,this.onLoad()},reverseBook:function(){this.showFlag="negative"===this.showFlag?"positive":"negative",this.initShowing()},getBookChapter:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isLoading=!0,t.t0=this._chapterList,t.t0){t.next=6;break}return t.next=5,Object(c["a"])(this.$route.query.chapterHref);case 5:t.t0=t.sent;case 6:e=t.t0,this.chapterList=e,this.isLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.getBookChapter()}},y=v,w=(i("f52c"),i("2877")),k=Object(w["a"])(y,n,r,!1,null,"665cd81c",null);e["default"]=k.exports},"3ce9":function(t,e,i){},"4f4d":function(t,e,i){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},"857a":function(t,e,i){var n=i("1d80"),r=/"/g;t.exports=function(t,e,i,o){var a=String(n(t)),s="<"+e;return""!==i&&(s+=" "+i+'="'+String(o).replace(r,"&quot;")+'"'),s+">"+a+"</"+e+">"}},"97a1":function(t,e,i){},9911:function(t,e,i){"use strict";var n=i("23e7"),r=i("857a"),o=i("eae9");n({target:"String",proto:!0,forced:o("link")},{link:function(t){return r(this,"a","href",t)}})},dd53:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{ref:"container",staticClass:"bookContainer",style:Object.assign({},t.activeStyle,{fontSize:t.activeStyle.fontSize+"px"})},[i("van-row",{class:["navguideContainer","slide-top",t.isHeaderActive?"active":""]},[i("van-nav-bar",{attrs:{title:t.bookTitle,"left-text":"返回","left-arrow":""},on:{"click-left":t.toHome}},[i("van-row",{attrs:{slot:"right",type:"flex",justify:"space-between"},slot:"right"},[i("van-col",{attrs:{span:"5 "}},[i("van-icon",{attrs:{name:"setting-o",size:"20"},on:{click:t.showControlBar}})],1),i("van-col",[i("van-icon",{attrs:{name:"label-o",span:"5",size:"20"},on:{click:t.showChapterList}})],1),i("van-col",{attrs:{span:"5"},on:{click:t.changeCollect}},[t.currentView.isCollected?i("van-icon",{attrs:{name:"star",size:"20"}}):i("van-icon",{attrs:{name:"star-o",size:"20"}})],1)],1)],1)],1),i("section",{staticClass:"calloutBox",on:{click:t.showHeader}}),t._l(t.boxList,(function(e,n){return i("section",{key:n},[i("section",{staticStyle:{height:"40px",overflow:"hidden",padding:"10px"}},[i("van-divider",{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px"}},[t._v(" "+t._s(t.currentView.recentRead.title)+" ")])],1),i("article",{domProps:{innerHTML:t._s(e)}})])})),i("van-popup",{style:{height:"30%"},attrs:{position:"bottom",round:""},model:{value:t.isControlBarActive,callback:function(e){t.isControlBarActive=e},expression:"isControlBarActive"}},[i("section",[i("van-row",{attrs:{type:"flex",justify:"space-between"}},[i("van-col",{attrs:{span:"8"}},[i("van-button",{staticStyle:{width:"100%"},on:{click:function(e){return t.changeFontSize("decrease")}}},[t._v("-")])],1),i("van-col",{staticStyle:{"align-self":"center","text-align":"center"}},[t._v("字体大小："+t._s(t.activeStyle.fontSize))]),i("van-col",{attrs:{span:"8"}},[i("van-button",{staticStyle:{width:"100%"},on:{click:function(e){return t.changeFontSize("add")}}},[t._v("+")])],1)],1),i("div",{staticClass:"confBlock"}),i("section",{staticStyle:{display:"flex","flex-wrap":"no-wrap",padding:"10px",overflow:"hidden"}},[i("div",{staticStyle:{"align-self":"center","text-align":"center"}},[t._v("背景：")]),i("div",{staticStyle:{display:"flex","flex-wrap":"no-wrap"}},t._l(t.styleControl.backgroundStyle,(function(e){return i("section",{key:e.backgroundColor,staticStyle:{padding:"0 10px"}},[i("div",{staticClass:"singleColor",style:{backgroundColor:e.backgroundColor},on:{click:function(i){return t.changeBgStyle(e.backgroundColor)}}})])})),0)]),i("div",{staticClass:"confBlock"}),i("section",{staticStyle:{"box-sizing":"border-box",padding:"10px"}},[i("van-row",[i("van-col",{staticStyle:{height:"30px"},attrs:{span:"4"}},[t._v("亮度：")]),i("van-col",{staticStyle:{"margin-top":"10px"},attrs:{span:"20"}},[i("van-slider",{attrs:{min:50,max:100},model:{value:t.styleControl.localbrightness,callback:function(e){t.$set(t.styleControl,"localbrightness",e)},expression:"styleControl.localbrightness"}})],1)],1)],1)],1)]),i("van-popup",{style:{width:"70%",height:"100%"},attrs:{position:"right"},model:{value:t.isChapterBarActive,callback:function(e){t.isChapterBarActive=e},expression:"isChapterBarActive"}},[i("ChapterList",{attrs:{isSidebar:!0},on:{updateContent:t.jumpChapter}})],1)],2)},r=[],o=(i("a4d3"),i("4de4"),i("e439"),i("dbb4"),i("b64b"),i("9911"),i("159b"),i("96cf"),i("1da1")),a=i("ade3"),s=i("a20f"),c=i("2f62"),l=(i("4f4d"),i("529a")),u=i("0278"),h=i("1446");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={components:{ChapterList:h["default"]},data:function(){return{boxHeight:"",isFetching:!1,boxList:[],startChapterIndex:0,isHeaderActive:!1,isControlBarActive:!1,isChapterBarActive:!1,isCollected:!1,styleControl:{backgroundStyle:[{backgroundColor:"#dff9fb ",color:"rgb(45, 52, 54)"},{backgroundColor:"rgb(199, 236, 238)",color:"rgb(45, 52, 54)"},{backgroundColor:"rgb(149, 175, 192)",color:"rgb(45, 52, 54)"},{backgroundColor:"rgb(30, 39, 46)",color:"rgb(209, 216, 224)"}],fontSize:16,localbrightness:75},activeStyle:{}}},computed:g({},Object(c["c"])(["currentView","pageControl"]),{bookTitle:function(){return this.$route.query.title}}),methods:g({},Object(c["b"])(["setCurrentView","updateCollected","deleteCollected","insertCollected","setPageControl"]),{listenScroll:function(){if(window.scrollY+window.screen.height>document.body.clientHeight-.7*window.screen.height&&!this.isFetching)try{this.getBookContent(this.$route.query.link)}catch(t){this.isFetching=!1}},showHeader:function(){this.isHeaderActive=!this.isHeaderActive},showControlBar:function(){this.isControlBarActive=!this.isControlBarActive},showChapterList:function(){this.isChapterBarActive=!this.isChapterBarActive},changeCollect:function(){this.setCurrentView(g({},this.currentView,{isCollected:!this.currentView.isCollected})),this.currentView.isCollected?this.insertCollected(this.currentView):this.deleteCollected(this.currentView.title)},toHome:function(){this.$router.push({name:"home"})},getBookContent:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isFetching=!0,t.next=3,Object(s["b"])(e);case 3:i=t.sent,this.isFetching=!1,this.setCurrentView(g({},this.currentView,{recentRead:{href:e,title:i.curTitle}})),this.currentView.isCollected&&this.updateCollected(this.currentView),this.boxList.push(i.text),this.$route.query.link=i.next,console.log(this.currentView);case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),changeFontSize:function(t){"add"==t?this.activeStyle.fontSize+=1:this.activeStyle.fontSize-=1,this.setPageControl(this.activeStyle)},changeBgStyle:function(t){var e=Object(l["a"])(Object(u["a"])("backgroundColor",t))(this.styleControl.backgroundStyle);this.activeStyle=g({},this.activeStyle,{},e),this.setPageControl(this.activeStyle)},jumpChapter:function(t){console.log(t),this.boxList=[],this.getBookContent(t)}}),mounted:function(){this.activeStyle=this.pageControl,document.addEventListener("scroll",this.listenScroll),this.$route.query.link=this.currentView.recentRead.href,this.getBookContent(this.$route.query.link)},beforeDestroy:function(){document.removeEventListener("scroll",this.listenScroll)}},f=p,b=(i("09f7"),i("2877")),v=Object(b["a"])(f,n,r,!1,null,"28eb079e",null);e["default"]=v.exports},eae9:function(t,e,i){var n=i("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},f52c:function(t,e,i){"use strict";var n=i("97a1"),r=i.n(n);r.a}}]);
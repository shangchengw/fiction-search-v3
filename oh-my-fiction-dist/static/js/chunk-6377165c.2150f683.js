(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6377165c"],{"0835":function(t,e,s){"use strict";var n=s("1740"),i=s.n(n);i.a},1740:function(t,e,s){},dd7b:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("Login",{attrs:{isLogin:t.isLogin,submitFn:t.submit,toggleSubmit:t.toggleSubmit},scopedSlots:t._u([{key:"input",fn:function(){return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"输入你的用户名"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"输入你的密码"},domProps:{value:t.passwd},on:{input:function(e){e.target.composing||(t.passwd=e.target.value)}}})]},proxy:!0}])})],1)},i=[],r=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("96cf"),s("1da1")),o=s("ade3"),a=s("c24f"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"wrapper"},[t._m(0),s("section",{staticClass:"formContainer box"},[s("section",{staticClass:"box form"},[s("div",{staticClass:"triangle"}),s("div",{staticClass:"photo"},[s("van-icon",{attrs:{name:"friends",size:"50",color:"#bdc3c7"}})],1),s("div",{staticClass:"content"},[s("div",{staticClass:"inputWrapper"},[t._t("input")],2)]),s("section",{staticClass:"formButton"},[s("van-button",{staticStyle:{width:"50vw"},attrs:{type:"primary",round:!0},on:{click:t.submitFn}},[t._v(t._s(t.isLogin?"登录":"注册"))]),s("div",{staticStyle:{"margin-top":"8vw","text-align":"center","font-weight":"bold",color:"#f9ca24","font-size":"12px"},on:{click:t.toggleSubmit}},[t._v(" 切换"+t._s(t.isLogin?"注册":"登录")+" ")])],1)])])])},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"logoContainer box"},[s("section",{staticClass:"logo"},[s("img",{attrs:{src:"https://i.loli.net/2020/01/11/IWHL9kMlYd6ZzfG.jpg",alt:""}})])])}],l={props:{isLogin:{type:Boolean,default:!0},submitFn:{},toggleSubmit:{type:Function}}},p=l,d=(s("0835"),s("2877")),m=Object(d["a"])(p,c,u,!1,null,"fed958b0",null),b=m.exports,g=s("2f62");function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var v={components:{Login:b},data:function(){return{userName:"shancw96",passwd:"123",isLogin:!0}},computed:h({},Object(g["c"])(["collectedFiction"])),methods:h({},Object(g["b"])(["setToken","resetCollected"]),{submit:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isLogin){t.next=6;break}return t.next=3,Object(a["b"])(this.userName,this.passwd);case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,Object(a["c"])(this.userName,this.passwd);case 8:t.t0=t.sent;case 9:e=t.t0,this.isLogin&&"success"===e.status?(this.setToken({token:e.token,userName:e.data.userName}),!this.collectedFiction.length&&this.resetCollected(e.data.books),this.$router.push({name:"home"})):(this.$toast(e.msg),this.isLogin=!0);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),toggleSubmit:function(){this.isLogin=!this.isLogin}})},w=v,O=Object(d["a"])(w,n,i,!1,null,null,null);e["default"]=O.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2103fe"],{b6a5:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("h1",[n._v("查看用户列表信息")]),e("button",{on:{click:n.getUserInfo}},[n._v("点击查看")]),n._l(this.userInfoList,(function(t,i){return e("section",{key:i},[e("p",[n._v("ip:"+n._s(t.ip))]),e("p",[n._v("时间："+n._s(t.ipInfo.time))]),e("p",[n._v("省："+n._s(t.ipInfo.ipInfo.region))]),e("p",[n._v("市："+n._s(t.ipInfo.ipInfo.city))])])}))],2)},o=[],s=e("c24f"),c={data:function(){return{userInfoList:[]}},methods:{getUserInfo:function(){var n=this;Object(s["b"])().then((function(t){n.userInfoList=t}))}}},f=c,u=e("2877"),r=Object(u["a"])(f,i,o,!1,null,null,null);t["default"]=r.exports}}]);
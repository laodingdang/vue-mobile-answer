(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Score"],{"0282":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"your_scores_container"},[i("header",{staticClass:"your_scores"},[i("span",{staticClass:"score_num"},[t._v(t._s(t.score))]),i("span",{staticClass:"fenshu"},[t._v("分!")])]),i("div",{staticClass:"result_tip"},[t._v(t._s(t.scoreTips))])]),i("div",{staticClass:"share_button",on:{click:t.showCover}}),t._m(0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showHide,expression:"showHide"}],staticClass:"share_cover",on:{click:t.showCover}},[i("img",{staticClass:"share_img",attrs:{src:e("38db"),alt:""}})])])},r=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"share_code"},[i("header",{staticClass:"share_header"},[t._v("关注葡萄之家，获取答案。")]),i("img",{staticClass:"code_img",attrs:{src:e("5d83"),alt:""}})])}],a=(e("ac6a"),e("2f62")),o={name:"score",data:function(){return{showHide:!1,score:0,scoreTips:"",scoreTipsArr:["你是不是把知识都还给小学老师了？","还不错但还需要继续努力哦!","不要得瑟还有进步的空间!","智商离报表只差一步了!","你也太聪明了，葡萄之家欢迎你!"]}},computed:Object(a["c"])(["answerid"]),created:function(){this.computedScore(),this.getScoreTip()},methods:{computedScore:function(){var t=this;this.answerid.forEach(function(s){1==s&&(t.score+=20)})},showCover:function(){this.showHide=!this.showHide},getScoreTip:function(){var t=Math.ceil(this.score/20);console.log(t),this.scoreTips=this.scoreTipsArr[t]}}},c=o,n=(e("3b39"),e("2877")),l=Object(n["a"])(c,i,r,!1,null,null,null);s["default"]=l.exports},"38db":function(t,s,e){t.exports=e.p+"img/5-2.2de14b27.png"},"3b39":function(t,s,e){"use strict";var i=e("42ca"),r=e.n(i);r.a},"42ca":function(t,s,e){},"5d83":function(t,s,e){t.exports=e.p+"img/4-4.8fd8320f.png"},ac6a:function(t,s,e){for(var i=e("cadf"),r=e("0d58"),a=e("2aba"),o=e("7726"),c=e("32e9"),n=e("84f2"),l=e("2b4c"),u=l("iterator"),d=l("toStringTag"),h=n.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(f),L=0;L<p.length;L++){var S,m=p[L],v=f[m],_=o[m],C=_&&_.prototype;if(C&&(C[u]||c(C,u,h),C[d]||c(C,d,m),n[m]=h,v))for(S in i)C[S]||a(C,S,i[S],!0)}}}]);
//# sourceMappingURL=Score.4b0e0d4c.js.map
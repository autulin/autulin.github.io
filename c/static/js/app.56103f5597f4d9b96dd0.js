webpackJsonp([1],{"+BTi":function(e,t){},GXEp:function(e,t){},I4nB:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("I4nB"),n("+BTi");var a=n("STLj"),l=n.n(a),i=(n("X+ky"),n("HJMx")),r=n.n(i),s=(n("cDSy"),n("e0Bm")),o=n.n(s),c=(n("GXEp"),n("mtrD")),u=n.n(c),p=n("7+uW"),f=(n("tvR6"),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),m={name:"ConvertPanel",data:function(){return{hint:'请输入内容\n\n使用说明：\n"-"表示低音\n"`"表示高音\n"a"表示升半音阶\n例：-1a1`1(F调) -> (4)#4[4](C调)',inputStr:"",resultStr:"",key:"",initRange:void 0,ranges:[{value:0,label:"低"},{value:1,label:"中"},{value:2,label:"高"}],keyTable:["C","bD","D","bE","E","F","bG","G","bA","A","bB","B"],cKeyNumTable:["1","#1","2","#2","3","4","#4","5","#5","6","#6","7"]}},methods:{convert:function(){var e=this.inputStr,t=this.keyTable.indexOf(this.key);if(-1!==t){var n=parseInt(this.initRange),a="",l=n,i=!1;for(var r in e){var s=e.charAt(r);if("-"!==s)if("`"!==s)if("a"!==s){var o=this.cKeyNumTable.indexOf(s);if(-1!==o){var c=t+o+(i?1:0);c>=12&&(c%=12,l+=1),a=a.concat(this.getScale(c,l)),i=!1,l=n}else a=a.concat(s)}else i=!0;else l=n+1;else l=n-1}this.resultStr=a}else this.resultStr="输入key错误"},getScale:function(e,t){switch(t){case 1:return this.cKeyNumTable[e];case 0:return"("+this.cKeyNumTable[e]+")";case 2:return"["+this.cKeyNumTable[e]+"]";case 3:return"[["+this.cKeyNumTable[e]+"]]";case-1:return"{"+this.cKeyNumTable[e]+"}"}return void 0===t?"undefined":f(t)}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[n("el-input",{staticClass:"ipt",attrs:{type:"textarea",autosize:{minRows:20},placeholder:e.hint},model:{value:e.inputStr,callback:function(t){e.inputStr=t},expression:"inputStr"}}),e._v(" "),n("div",{attrs:{id:"op"}},[n("el-select",{staticClass:"ops",staticStyle:{"max-width":"130px"},attrs:{clearable:"",placeholder:"选择主要音域",size:"small"},model:{value:e.initRange,callback:function(t){e.initRange=t},expression:"initRange"}},e._l(e.ranges,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),n("el-select",{staticClass:"ops",staticStyle:{"max-width":"130px"},attrs:{clearable:"",placeholder:"选择简谱原调",size:"small"},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}},e._l(e.keyTable,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),e._v(" "),n("el-button",{staticClass:"ops",attrs:{type:"primary",size:"small"},on:{click:e.convert}},[e._v("转换")])],1),e._v(" "),n("el-input",{staticClass:"opt",attrs:{type:"textarea",autosize:{minRows:20},placeholder:"转换结果将在这里显示"},model:{value:e.resultStr,callback:function(t){e.resultStr=t},expression:"resultStr"}})],1)},staticRenderFns:[]};var v={name:"app",components:{ConvertPanel:n("VU/8")(m,y,!1,function(e){n("kHu9")},null,null).exports}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("ConvertPanel")],1)},staticRenderFns:[]};var d=n("VU/8")(v,b,!1,function(e){n("SFII")},null,null).exports;p.default.config.productionTip=!1,p.default.component(u.a.name,u.a),p.default.component(o.a.name,o.a),p.default.component(r.a.name,r.a),p.default.component(l.a.name,l.a),new p.default({el:"#app",template:"<App/>",components:{App:d}})},SFII:function(e,t){},"X+ky":function(e,t){},cDSy:function(e,t){},kHu9:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.56103f5597f4d9b96dd0.js.map
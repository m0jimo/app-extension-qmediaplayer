(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"9a58":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"max-width":"800px",width:"100%"}},[o("q-select",{staticClass:"q-ma-sm",staticStyle:{"min-width":"150px"},attrs:{options:e.iconSetOptions,label:"Icon set",dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},model:{value:e.iconSet,callback:function(t){e.iconSet=t},expression:"iconSet"}}),o("q-media-player",{attrs:{type:"audio",sources:e.sources,"mobile-mode":""}})],1)},a=[],c=(o("7f7f"),{data:function(){return{sources:[{src:"https://raw.githubusercontent.com/quasarframework/quasar-ui-qmediaplayer/dev/demo/src/statics/media/Scott_Holmes_-_04_-_Upbeat_Party.mp3",type:"audio/mp3"}],iconSet:this.$q.iconSet.name,iconSetOptions:[{label:"Eva Icons",value:"eva-icons"},{label:"Fontawesome",value:"fontawesome-v5"},{label:"Ion Icons",value:"ionicons-v4"},{label:"Material Icons",value:"material-icons"},{label:"MDI",value:"mdi-v3"},{label:"Themify",value:"themify"}]}},watch:{iconSet:function(e){switch(e){case"eva-icons":this.changeIconSetToEvaIcons();break;case"fontawesome-v5":this.changeIconSetToFontAwesome();break;case"ionicons-v4":this.changeIconSetToIonIcons();break;case"material-icons":this.changeIconSetToMaterialIcons();break;case"mdi-v3":this.changeIconSetToMDI();break;case"themify":this.changeIconSetToThemify();break}}},methods:{changeIconSetToEvaIcons:function(){this.$q.iconSet=o("424a").default},changeIconSetToFontAwesome:function(){this.$q.iconSet=o("b3f7").default},changeIconSetToIonIcons:function(){this.$q.iconSet=o("8686").default},changeIconSetToMaterialIcons:function(){this.$q.iconSet=o("42d2").default},changeIconSetToMDI:function(){this.$q.iconSet=o("27fd").default},changeIconSetToThemify:function(){this.$q.iconSet=o("db37").default}}}),i=c,s=o("2877"),l=Object(s["a"])(i,n,a,!1,null,null,null);t["default"]=l.exports}}]);
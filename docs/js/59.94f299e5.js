(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{"32fd":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-layout-padding q-mx-auto q-gutter-sm",staticStyle:{"max-width":"1000px",width:"100%","min-height":"100vh"}},[e._m(0),s("div",{staticClass:"row flex-center"},[s("q-item",{staticClass:"q-my-sm bg-blue-grey-6 shadow-1",staticStyle:{"border-radius":"30px"},attrs:{tag:"label",dark:!e.darkbg}},[s("q-item-section",[s("q-item-label",[e._v("Dark background (audio)")])],1),s("q-item-section",{attrs:{side:""}},[s("q-toggle",{attrs:{color:"blue-grey-2",dark:e.darkbg},model:{value:e.darkbg,callback:function(t){e.darkbg=t},expression:"darkbg"}})],1)],1),s("q-card",{staticClass:"q-mx-auto",staticStyle:{"max-width":"90vw",width:"100%"}},[s("q-card-section",{staticClass:"text-center"},[s("div",{staticClass:"row flex-center q-gutter-sm"},[s("q-toggle",{attrs:{label:"Dense"},model:{value:e.dense,callback:function(t){e.dense=t},expression:"dense"}}),s("q-toggle",{attrs:{label:"Dark"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}}),s("q-toggle",{attrs:{label:"Radius"},model:{value:e.radius,callback:function(t){e.radius=t},expression:"radius"}}),s("q-toggle",{attrs:{label:"Muted"},model:{value:e.muted,callback:function(t){e.muted=t},expression:"muted"}}),s("q-toggle",{attrs:{label:"Plays Inline"},model:{value:e.playsinline,callback:function(t){e.playsinline=t},expression:"playsinline"}}),s("q-toggle",{attrs:{label:"Loop"},model:{value:e.loop,callback:function(t){e.loop=t},expression:"loop"}})],1),s("div",{staticClass:"row flex-center q-gutter-sm"},[s("q-toggle",{attrs:{label:"Big Play Button",disable:!e.videoType},model:{value:e.bigPlay,callback:function(t){e.bigPlay=t},expression:"bigPlay"}}),s("q-toggle",{attrs:{label:"Overlay",disable:!e.videoType},model:{value:e.overlay,callback:function(t){e.overlay=t},expression:"overlay"}}),s("q-toggle",{attrs:{label:"Mobile Mode",disable:!e.videoType},model:{value:e.mobileMode,callback:function(t){e.mobileMode=t},expression:"mobileMode"}})],1),s("div",{staticClass:"row flex-center q-gutter-sm"},[s("q-toggle",{attrs:{label:"Video"},model:{value:e.videoType,callback:function(t){e.videoType=t},expression:"videoType"}}),s("q-btn",{attrs:{label:"Next Video",disable:!e.videoType},on:{click:e.nextVideo}}),s("q-toggle",{attrs:{label:"Autoplay"},model:{value:e.autoplay,callback:function(t){e.autoplay=t},expression:"autoplay"}})],1)])],1)],1),s("div",{staticClass:"row flex-center",staticStyle:{"min-height":"2rem"}},[s("div",{staticStyle:{overflow:"hidden"}},[s("transition",{attrs:{name:"q-transition--scale"}},[s("q-media-player",{key:!0===e.videoType?"video":"audio",attrs:{type:!0===e.videoType?"video":"audio",dense:e.dense,dark:e.dark,"background-color":!0===e.darkbg?"black":"white","mobile-mode":e.mobileMode,muted:e.muted,playsinline:e.playsinline,loop:e.loop,radius:e.radius?"1rem":0,autoplay:e.autoplay,"show-big-play-button":e.bigPlay,sources:!0===e.videoType?e.video[e.videoIndex].sources:e.audio.sources,poster:!0===e.videoType?e.video[e.videoIndex].poster:"",tracks:!0===e.videoType?e.video[e.videoIndex].tracks:[],"track-language":"English"},on:{ended:e.onEnded},scopedSlots:e._u([e.overlay?{key:"overlay",fn:function(){return[s("div",[s("img",{staticStyle:{width:"30vw","max-width":"50px",opacity:"0.25"},attrs:{src:"statics/quasar-logo.png"}})])]},proxy:!0}:null],null,!0)})],1)],1)]),e._m(1)])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row flex-center"},[s("p",[e._v("This page is intended to test multiple scenarios of QMediaPlayer.")]),s("p",[e._v("Music courtesy of "),s("a",{attrs:{href:"https://freemusicarchive.org/music/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_Upbeat_Party",target:"blank"}},[e._v("Free Music Archive")])]),s("p",{staticStyle:{"text-align":"center"}},[e._v("Videos and subtitles courtesy of "),s("a",{attrs:{href:"https://mango.blender.org/download/",target:"blank"}},[e._v("Blender Organization")]),e._v(".")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("p",[e._v("QMediaPlayer "),s("a",{attrs:{href:"https://github.com/quasarframework/quasar-ui-qmediaplayer",target:"_blank"}},[e._v("home page")]),e._v(".")]),s("p",[e._v("Demo project's "),s("a",{attrs:{href:"https://github.com/quasarframework/quasar-ui-qmediaplayer/tree/master/demo",target:"_blank"}},[e._v("home page")]),e._v(".")])])}],l=s("4db1"),o=s.n(l),r={name:"PageIndex",data:function(){return{darkbg:!0,dark:!1,dense:!1,videoType:!0,mobileMode:!1,muted:!1,playsinline:!1,loop:!1,autoplay:!1,bigPlay:!0,radius:!1,overlay:!1,videoIndex:0,sources:[],audio:{sources:[{src:"https://raw.githubusercontent.com/quasarframework/quasar-ui-qmediaplayer/dev/demo/src/statics/media/Scott_Holmes_-_04_-_Upbeat_Party.mp3",type:"audio/mp3"}]},video:[{label:"Tears of Steel",poster:"statics/media/TearsOfSteel/TearsOfSteel.jpeg",sources:[{src:"http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4",type:"video/mp4"}],tracks:[{src:"statics/media/TearsOfSteel/TOS-en.vtt",kind:"subtitles",srclang:"en",label:"English"},{src:"statics/media/TearsOfSteel/TOS-de.vtt",kind:"subtitles",srclang:"de",label:"German"},{src:"statics/media/TearsOfSteel/TOS-es.vtt",kind:"subtitles",srclang:"es",label:"Spanish"},{src:"statics/media/TearsOfSteel/TOS-fr-Goofy.vtt",kind:"subtitles",srclang:"fr",label:"French"},{src:"statics/media/TearsOfSteel/TOS-it.vtt",kind:"subtitles",srclang:"it",label:"Italian"},{src:"statics/media/TearsOfSteel/TOS-nl.vtt",kind:"subtitles",srclang:"nl",label:"Dutch"}]},{label:"Sintel",poster:"statics/media/sintel/sintel-poster2.jpeg",sources:[{src:"http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4",type:"video/mp4"}],tracks:[{src:"statics/media/sintel/sintel-en.vtt",kind:"subtitles",srclang:"en",label:"English"},{src:"statics/media/sintel/sintel-de.vtt",kind:"subtitles",srclang:"de",label:"Deutsch"},{src:"statics/media/sintel/sintel-es.vtt",kind:"subtitles",srclang:"es",label:"Español"},{src:"statics/media/sintel/sintel-fr.vtt",kind:"subtitles",srclang:"fr",label:"Français"},{src:"statics/media/sintel/sintel-it.vtt",kind:"subtitles",srclang:"it",label:"Italiano"},{src:"statics/media/sintel/sintel-nl.vtt",kind:"subtitles",srclang:"nl",label:"Nederlands"},{src:"statics/media/sintel/sintel-pt.vtt",kind:"subtitles",srclang:"pt",label:"Português"},{src:"statics/media/sintel/sintel-pl.vtt",kind:"subtitles",srclang:"pl",label:"Polski"},{src:"statics/media/sintel/sintel-ru.vtt",kind:"subtitles",srclang:"ru",label:"Russian"}]}]}},created:function(){this.setSource()},mounted:function(){},computed:{},watch:{videoType:function(e){this.setSource()}},methods:{setSource:function(){this.videoType?this.sources=o()(this.video[this.videoIndex].sources):this.sources=o()(this.audio.sources)},onEnded:function(){this.videoType&&this.nextVideo()},nextVideo:function(){0===this.videoIndex?this.videoIndex=1:this.videoIndex=0,this.setSource()}}},n=r,d=s("2877"),c=Object(d["a"])(n,a,i,!1,null,null,null);t["default"]=c.exports}}]);
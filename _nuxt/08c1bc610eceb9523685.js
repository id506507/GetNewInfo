(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{238:function(t,e,n){"use strict";var r,o=(r=n(7))&&"object"==typeof r&&"default"in r?r.default:r,l={functional:!0,props:{network:{type:String,default:""}},render:function(t,e){var n=e.parent._data.baseNetworks[e.props.network];return n?t(e.parent.networkTag,{staticClass:e.data.staticClass||null,staticStyle:e.data.staticStyle||null,class:e.data.class||null,style:e.data.style||null,attrs:{id:e.data.attrs.id||null,tabindex:e.data.attrs.tabindex||0,"data-link":"popup"===n.type?"#share-"+e.props.network:e.parent.createSharingUrl(e.props.network),"data-action":"popup"===n.type?null:n.action},on:{click:"popup"===n.type?function(){e.parent.share(e.props.network)}:function(){e.parent.touch(e.props.network)}}},e.children):console.warn("Network "+e.props.network+" does not exist")}},c={email:{sharer:"mailto:?subject=@title&body=@url%0D%0A%0D%0A@description",type:"direct"},facebook:{sharer:"https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description&quote=@quote&hashtag=@hashtags",type:"popup"},googleplus:{sharer:"https://plus.google.com/share?url=@url",type:"popup"},line:{sharer:"http://line.me/R/msg/text/?@description%0D%0A@url",type:"popup"},linkedin:{sharer:"https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description",type:"popup"},odnoklassniki:{sharer:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@description",type:"popup"},pinterest:{sharer:"https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title",type:"popup"},reddit:{sharer:"https://www.reddit.com/submit?url=@url&title=@title",type:"popup"},skype:{sharer:"https://web.skype.com/share?url=@description%0D%0A@url",type:"popup"},telegram:{sharer:"https://t.me/share/url?url=@url&text=@description",type:"popup"},twitter:{sharer:"https://twitter.com/intent/tweet?text=@title&url=@url&hashtags=@hashtags@twitteruser",type:"popup"},viber:{sharer:"viber://forward?text=@url @description",type:"direct"},vk:{sharer:"https://vk.com/share.php?url=@url&title=@title&description=@description&image=@media&noparse=true",type:"popup"},weibo:{sharer:"http://service.weibo.com/share/share.php?url=@url&title=@title",type:"popup"},whatsapp:{sharer:"https://api.whatsapp.com/send?text=@description%0D%0A@url",type:"popup",action:"share/whatsapp/share"},sms:{sharer:"sms:?body=@url%20@description",type:"direct"},sms_ios:{sharer:"sms:;body=@url%20@description",type:"direct"}},h="undefined"!=typeof window,d=h?window:null,m={props:{url:{type:String,default:h?window.location.href:""},title:{type:String,default:""},description:{type:String,default:""},quote:{type:String,default:""},hashtags:{type:String,default:""},twitterUser:{type:String,default:""},withCounts:{type:[String,Boolean],default:!1},googleKey:{type:String,default:void 0},media:{type:String,default:""},networkTag:{type:String,default:"span"},networks:{type:Object,default:function(){return{}}}},data:function(){return{baseNetworks:c,popup:{status:!1,resizable:!0,toolbar:!1,menubar:!1,scrollbars:!1,location:!1,directories:!1,width:626,height:436,top:0,left:0,window:void 0,interval:null}}},methods:{createSharingUrl:function(t){var e=navigator.userAgent.toLowerCase();"sms"===t&&(e.indexOf("iphone")>-1||e.indexOf("ipad")>-1)&&(t+="_ios");var n=this.baseNetworks[t].sharer;return"twitter"===t&&0===this.hashtags.length&&(n=n.replace("&hashtags=@hashtags","")),n.replace(/@url/g,encodeURIComponent(this.url)).replace(/@title/g,encodeURIComponent(this.title)).replace(/@description/g,encodeURIComponent(this.description)).replace(/@quote/g,encodeURIComponent(this.quote)).replace(/@hashtags/g,this.generateHashtags(t,this.hashtags)).replace(/@media/g,this.media).replace(/@twitteruser/g,this.twitterUser?"&via="+this.twitterUser:"")},generateHashtags:function(t,e){return"facebook"===t&&e.length>0?"%23"+e.split(",")[0]:e},share:function(t){this.openSharer(t,this.createSharingUrl(t)),this.$root.$emit("social_shares_open",t,this.url),this.$emit("open",t,this.url)},touch:function(t){window.open(this.createSharingUrl(t),"_self"),this.$root.$emit("social_shares_open",t,this.url),this.$emit("open",t,this.url)},openSharer:function(t,e){var n=this,r=null;r&&this.popup.interval&&(clearInterval(this.popup.interval),r.close(),this.$root.$emit("social_shares_change",t,this.url),this.$emit("change",t,this.url)),(r=window.open(e,"sharer","status="+(this.popup.status?"yes":"no")+",height="+this.popup.height+",width="+this.popup.width+",resizable="+(this.popup.resizable?"yes":"no")+",left="+this.popup.left+",top="+this.popup.top+",screenX="+this.popup.left+",screenY="+this.popup.top+",toolbar="+(this.popup.toolbar?"yes":"no")+",menubar="+(this.popup.menubar?"yes":"no")+",scrollbars="+(this.popup.scrollbars?"yes":"no")+",location="+(this.popup.location?"yes":"no")+",directories="+(this.popup.directories?"yes":"no"))).focus(),this.popup.interval=setInterval(function(){r.closed&&(clearInterval(n.popup.interval),r=void 0,n.$root.$emit("social_shares_close",t,n.url),n.$emit("close",t,n.url))},500)}},beforeMount:function(){this.baseNetworks=o.util.extend(this.baseNetworks,this.networks)},mounted:function(){if(h){var t=void 0!==d.screenLeft?d.screenLeft:screen.left,e=void 0!==d.screenTop?d.screenTop:screen.top,n=d.innerWidth?d.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,r=d.innerHeight?d.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;this.popup.left=n/2-this.popup.width/2+t,this.popup.top=r/2-this.popup.height/2+e}},components:{network:l},version:"2.4.6",install:function(t){t.component("social-sharing",m)}};"undefined"!=typeof window&&(window.SocialSharing=m),t.exports=m},254:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("4e023b59",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";var r=n(254);n.n(r).a},290:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".h6{font-weight:700}.time{font-size:80%;margin-top:.5%}.subtitle{font-weight:700;font-size:101%;color:#02008b}.detailItem{margin-bottom:.5%}.title{font-weight:700;font-size:120%;color:#8b008b}.date{font-size:90%}",""])},300:function(t,e,n){"use strict";n.r(e);n(2),n(1),n(62);var r=n(52),o=(n(51),n(19)),l=n(11),c=n(12),h=n(47),d=n(31),m=n(48),_=n(26),v=n(61),f=n(105),w=n.n(f),y=n(238),k=n.n(y),$=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(_.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l};v.Vue.use(k.a);var R=function(t){function e(){return Object(l.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}var n;return Object(m.a)(e,t),Object(c.a)(e,[{key:"asyncData",value:(n=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,l,c,h,d,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=0,console.log("This is weather_detail asyncData."),t.next=5,Promise.all([w.a.get("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warningInfo&lang="+n.state.locale),w.a.get("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang="+n.state.locale),w.a.get("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang="+n.state.locale)]);case 5:return l=t.sent,c=Object(r.a)(l,3),h=c[0],d=c[1],m=c[2],t.abrupt("return",{Detail:h.data,Raining:d.data,Nine:m.data,Raining_counter:o});case 11:case"end":return t.stop()}},t)})),function(t){return n.apply(this,arguments)})}]),e}(v.Vue),T=R=$([Object(v.Component)({})],R),S=(n(289),n(16)),component=Object(S.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"detail"},[n("p",{staticClass:"title"},[t._v(t._s(t.$t("weather_detail")))]),t._v(" "),0!=Object.keys(t.Detail).length?n("div",t._l(t.Detail.details,function(e,r){return n("div",{key:r},[t._l(e.contents,function(e){return n("div",{key:e},[t._v("\n                        "+t._s(e)+"\n                    ")])}),t._v(" "),n("p",{staticClass:"time"},[t._v(t._s(t.$t("update_time"))+"："+t._s(t.$moment(e.updateTime).format("YYYY-MM-DD LTS")))])],2)}),0):n("div",[t._v(t._s(t.$t("none")))])]),t._v(" "),""!=t.Raining.tcmessage?n("div",[n("p",{staticClass:"title"},[t._v(t._s(t.$t("tc")))]),t._v(" "),t._l(t.Raining.tcmessage,function(e,r){return n("div",{key:r},[t._v("\n            "+t._s(e)+"\n        ")])})],2):t._e(),t._v(" "),n("br"),t._v(" "),n("div",[n("p",{staticClass:"title"},[t._v(t._s(t.$t("rainfall")))]),t._v(" "),n("div",[n("b-card-group",[n("div",t._l(t.Raining.rainfall.data,function(e,r){return 0!=e.max?n("b-card",{key:r,staticStyle:{width:"6rem"}},[n("b-card-sub-title",[t._v("\n                            "+t._s(e.place)+"\n                            ")]),t._v(" "),n("b-card-text",[t._v("\n                                "+t._s(e.max)+" "+t._s(e.unit)+"\n                            ")])],1):t._e()}),1)]),t._v(" "),n("p",{staticClass:"time"},[t._v(t._s(t.$t("update_time"))+"："+t._s(t.$moment(t.Raining.rainfall.startTime).format("YYYY-MM-DD LTS"))+" - "+t._s(t.$moment(t.Raining.rainfall.endTime).format("LTS")))]),t._v(" "),""!=t.Raining.rainfallFrom00To12||""!=t.Raining.rainfallLastMonth||""!=t.Raining.rainfallJanuaryToLastMonth?n("div",[n("p",{staticClass:"subtitle"},[t._v(t._s(t.$t("p_rainfall")))]),t._v(" "),n("p",[t._v(t._s(t.Raining.rainfallFrom00To12))]),t._v(" "),n("p",[t._v(t._s(t.Raining.rainfallLastMonth))]),t._v(" "),n("p",[t._v(t._s(t.Raining.rainfallJanuaryToLastMonth))])]):t._e()],1)]),t._v(" "),t.Raining.lightning?n("div",[n("p",{staticClass:"title"},[t._v(t._s(t.$t("thunderstorm")))]),t._v(" "),n("div",[n("b-card-group",t._l(t.Raining.lightning.data,function(e,r){return n("div",{key:r},[n("div",[n("b-card",{staticStyle:{width:"8rem"}},[n("b-card-sub-title",[t._v("\n                                "+t._s(e.place)+"\n                            ")])],1)],1)])}),0)],1),t._v(" "),n("p",{staticClass:"time"},[t._v(t._s(t.$t("valid_time"))+"："+t._s(t.$moment(t.Raining.lightning.startTime).format("YYYY-MM-DD LTS"))+" - "+t._s(t.$moment(t.Raining.lightning.endTime).format("LTS")))])]):t._e(),t._v(" "),""!=t.Raining.uvindex?n("div",[n("p",{staticClass:"title"},[t._v(t._s(t.$t("uvindex")))]),t._v(" "),n("div",[t._v(t._s(t.Raining.uvindex.data[0].place)+" "+t._s(t.Raining.uvindex.recordDesc)),n("br"),t._v(t._s(t.$t("uvindex"))+"："+t._s(t.Raining.uvindex.data[0].value)+"；"+t._s(t.$t("intensity"))+"："+t._s(t.Raining.uvindex.data[0].desc))]),t._v(" "),n("p",{staticClass:"time"},[t._v(t._s(t.$t("update_time"))+"："+t._s(t.$moment(t.Raining.updateTime).format("YYYY-MM-DD LTS")))])]):t._e(),t._v(" "),n("div",[n("p",{staticClass:"title"},[t._v(t._s(t.$t("sea_temp")))]),t._v(" "),n("div",[t._v(t._s(t.Nine.seaTemp.place)+"："+t._s(t.Nine.seaTemp.value)+"°"+t._s(t.Nine.seaTemp.unit))]),t._v(" "),n("p",{staticClass:"time"},[t._v(t._s(t.$t("update_time"))+"："+t._s(t.$moment(t.Nine.seaTemp.recordTime).format("YYYY-MM-DD LTS")))]),t._v(" "),n("p",{staticClass:"title"},[t._v(t._s(t.$t("soil_temp")))]),t._v(" "),t._l(t.Nine.soilTemp,function(e,r){return n("div",{key:r},[n("div",[t._v(t._s(e.place))]),t._v(" "),n("div",[t._v(t._s(t.$t("depth"))+"："+t._s(e.depth.value)+" m")]),t._v(" "),n("div",[t._v(t._s(t.$t("temperature"))+"："+t._s(e.value)+"°"+t._s(e.unit))]),t._v(" "),n("p",{staticClass:"time"},[t._v(t._s(t.$t("update_time"))+"："+t._s(t.$moment(e.recordTime).format("YYYY-MM-DD LTS")))])])})],2),t._v(" "),n("social-sharing",{attrs:{url:"https://id506507.github.io/GetNewInfo/weather_detail",title:"詳細天氣報告",description:"詳細天氣報告",quote:"詳細天氣報告",hashtags:"opendata","twitter-user":"id506507.github.io"},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("network",{attrs:{network:"facebook"}},[e("img",{attrs:{src:"https://img.icons8.com/ios-filled/20/000000/facebook-circled.png"}})]),this._v(" "),e("network",{attrs:{network:"line"}},[e("img",{attrs:{src:"https://img.icons8.com/ios-filled/20/000000/line-me.png"}})]),this._v(" "),e("network",{attrs:{network:"telegram"}},[e("img",{attrs:{src:"https://img.icons8.com/material-two-tone/24/000000/telegram-app.png"}})]),this._v(" "),e("network",{attrs:{network:"twitter"}},[e("img",{attrs:{src:"https://img.icons8.com/metro/20/000000/twitter.png"}})]),this._v(" "),e("network",{attrs:{network:"whatsapp"}},[e("img",{attrs:{src:"https://img.icons8.com/ios-filled/20/000000/whatsapp.png"}})])],1)},staticRenderFns:[]}})],1)},[],!1,null,null,null);e.default=component.exports}}]);
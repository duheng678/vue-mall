(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c92b49c"],{"15a4":function(t,e,n){"use strict";n("343a")},"343a":function(t,e,n){},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),s=n("e95a"),a=n("50c4"),c=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,d,f,h,m=o(t),p="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,y=void 0!==v,g=l(m),w=0;if(y&&(v=r(v,b>2?arguments[2]:void 0,2)),void 0==g||p==Array&&s(g))for(e=a(m.length),n=new p(e);e>w;w++)h=y?v(m[w],w):m[w],c(n,w,h);else for(d=g.call(m),f=d.next,n=new p;!(u=f.call(d)).done;w++)h=y?i(d,v,[u.value,w],!0):u.value,c(n,w,h);return n.length=w,n}},5820:function(t,e,n){},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"75ed":function(t,e,n){},"7fbb":function(t,e,n){"use strict";n("9c94")},"8aef":function(t,e,n){"use strict";n("5820")},"9bd0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,r){return n("div",{key:r,staticClass:"item-control",class:{active:r===t.currentIndex},on:{click:function(e){return t.controlClick(r)}}},[n("span",[t._v(t._s(e))])])})),0)},o=[],i={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{controlClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},s=i,a=(n("ef48"),n("2877")),c=Object(a["a"])(s,r,o,!1,null,"e9227a4a",null);e["a"]=c.exports},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(s){throw o(t),s}}},"9c94":function(t,e,n){},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:o})},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,s=i.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b14c:function(t,e,n){"use strict";n("c3d7")},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-navbar"},[n("div",{attrs:{slot:"middle"},slot:"middle"},[t._v("太好逛了吧！")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isShowTabControl,expression:"isShowTabControl"}],ref:"tabControl1",staticClass:"tab-control1",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("better-scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0,data:[t.showGoods,t.banners]},on:{pullingUp:t.loadMore,contentScroll:t.contentScroll}},[n("home-swiper",{staticClass:"home-swiper",attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),n("home-recommend",{attrs:{recommends:t.recommends}}),n("home-feature"),n("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("goods-list",{attrs:{goods:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.topClick.apply(null,arguments)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return s(t)||a(t)||c(t)||l()}var d=n("f1d4"),f=n("9bd0"),h=n("6d71"),m=n("43b3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",t._l(t.banners,(function(e,r){return n("swiper-item",{key:r},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""},on:{load:t.loadMore}})])])})),1)},b=[],v=n("dc2c"),y={name:"HomeSwiper",components:{Swiper:v["a"],SwiperItem:v["b"]},data:function(){return{isLoad:!1}},props:{banners:{type:Array,required:!0}},methods:{loadMore:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},g=y,w=n("2877"),C=Object(w["a"])(g,p,b,!1,null,null,null),x=C.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-recommend"},t._l(t.recommends,(function(e,r){return n("div",{key:r,staticClass:"recommend-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},I=[],T={name:"HomeRecommend",props:{recommends:{type:Array,required:!0}}},_=T,k=(n("8aef"),Object(w["a"])(_,S,I,!1,null,"7e5f6386",null)),$=k.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-feature"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:n("5cbe"),alt:""}})])])}],j={name:"HomeFeature"},E=j,H=(n("7fbb"),Object(w["a"])(E,A,L,!1,null,"aa7acc06",null)),O=H.exports,W=n("1bab");function M(){return Object(W["a"])({url:"/home/multidata"})}function G(t,e){return Object(W["a"])({url:"/home/data",params:{type:t,page:e}})}var N=n("eecb"),B={components:{NavBar:d["a"],TabControl:f["a"],GoodsList:h["a"],BetterScroll:m["a"],HomeSwiper:x,HomeRecommend:$,HomeFeature:O},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",offsetTop:0,isShowTabControl:!1,saveY:0}},mixins:[N["a"],N["b"]],created:function(){this.getHomeMultidata(),this.getHomeGoodsList("pop"),this.getHomeGoodsList("new"),this.getHomeGoodsList("sell")},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("goodsItemImageLoad",this.imageListener)},methods:{getHomeMultidata:function(){var t=this;M().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoodsList:function(t){var e=this,n=this.goods[t].page+1;G(t,n).then((function(n){var r;(r=e.goods[t].list).push.apply(r,u(n.data.list)),e.goods[t].page++,e.$refs.scroll.finishPullUp()}))},tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},loadMore:function(){this.getHomeGoodsList(this.currentType),this.$refs.scroll.refresh()},contentScroll:function(t){this.isShowBackTop=-t.y>1e3,this.isShowTabControl=-t.y>this.offsetTop},swiperImageLoad:function(){this.offsetTop=this.$refs.tabControl2.$el.offsetTop}},computed:{showGoods:function(){return this.goods[this.currentType].list}}},X=B,D=(n("d3aa"),Object(w["a"])(X,r,o,!1,null,"746d2960",null));e["default"]=D.exports},c3d7:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},d3aa:function(t,e,n){"use strict";n("e2c7")},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",(function(){return t._l(t.slideCount,(function(e,r){return n("div",{key:r,staticClass:"indi-item",class:{active:r===t.currentIndex-1}})}))})):t._e()],2)],2)},o=[],i=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),r=e[this.slideCount-1].cloneNode(!0);t.insertBefore(r,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),s=i,a=(n("15a4"),n("2877")),c=Object(a["a"])(s,r,o,!1,null,"69349c3b",null),l=c.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},d=[],f={name:"Slide"},h=f,m=(n("b14c"),Object(a["a"])(h,u,d,!1,null,"4935a4a7",null)),p=m.exports},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),s=n("5135"),a=n("861d"),c=n("9bf2").f,l=n("e893"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var h=f.prototype=u.prototype;h.constructor=f;var m=h.toString,p="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=m.call(t);if(s(d,t))return"";var n=p?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e2c7:function(t,e,n){},ef48:function(t,e,n){"use strict";n("75ed")},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),s=n("23cb"),a=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),f=d("slice"),h=u("species"),m=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,u,d=c(this),f=a(d.length),b=s(t,f),v=s(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,b,v);for(r=new(void 0===n?Array:n)(p(v-b,0)),u=0;b<v;b++,u++)b in d&&l(r,u,d[b]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-0c92b49c.85b91853.js.map
webpackJsonp([8],{147:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(157),a=i(172),s=i(52),o=s(r.a,a.a,!1,null,null,null);t.default=o.exports},157:function(e,t,i){"use strict";var r=i(29),a=i(53);t.a={components:{QInfiniteScroll:r.r,QChip:r.j,QSpinnerDots:r.F,QList:r.z,QListHeader:r.A,QItem:r.t,QItemSeparator:r.v,QItemSide:r.w,QItemMain:r.u,QItemTile:r.x,QSideLink:r.E,QFixedPosition:r.p,QFab:r.m,QFabAction:r.n,QTooltip:r.K,Toast:r.L,QBtn:r.b,QPopover:r.B,date:r.M},data:function(){return{years:[2019,2018,2017,2016,2015,2014,2013]}},methods:{refresher:function(e,t){this.isLastPage?this.$refs.infiniteScroll.stop():this.isLoading||this.error||this.$store.dispatch("getWeddings",{page:this.currentPage,year:this.selectedYear||(new Date).getFullYear()}),t()},showToast:function(e){var t=this;r.L.create("Filtro activo. Año: "+e),this.$store.dispatch("setYear",{year:e}).then(function(){t.$refs.infiniteScroll.reset(),t.$refs.infiniteScroll.resume(),t.$refs.infiniteScroll.loadMore()})},formatDate:function(e){var t=new Date(e);return r.M.formatDate(t,"dddd, DD  MMMM  YYYY",{dayNames:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Septiembre","Octubre","Noviembre","Diciembre"]})}},computed:Object(a.b)({weddings:"weddings",isLoading:"isLoading",currentPage:"currentPage",error:"error",selectedYear:"selectedYear",isLastPage:"isLastPage"})}},172:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout-padding row justify-center"},[i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[i("q-fixed-position",{staticStyle:{"z-index":"1000"},attrs:{corner:"top-right",offset:[16,16]}},[i("q-btn",{attrs:{push:"",color:"orange"}},[e._v("\n        "+e._s(e.selectedYear)+"\n        "),i("q-popover",{ref:"popover2"},[i("q-list",{staticStyle:{"min-width":"100px"},attrs:{link:""}},e._l(e.years,function(t){return i("q-item",{key:t,on:{click:function(i){e.showToast(t),e.$refs.popover2.close()}}},[i("q-item-main",{attrs:{label:t+""}})],1)}))],1)],1)],1),e._v(" "),i("q-infinite-scroll",{ref:"infiniteScroll",attrs:{handler:e.refresher}},[e._l(e.weddings,function(t){return i("q-item",{key:t.id},[i("q-side-link",{attrs:{item:"",to:"weddings/"+t.id,exact:""}},[i("q-item-main",{attrs:{label:t.name,sublabel:e.formatDate(t.date),"label-lines":"2"}})],1)],1)}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLastPage,expression:"!isLastPage"}],staticClass:"row justify-center",staticStyle:{"margin-bottom":"50px"}},[i("q-spinner-dots",{attrs:{slot:"message",size:40},slot:"message"})],1)],2),e._v(" "),i("q-fixed-position",{attrs:{corner:"bottom-right",offset:[16,16]}},[i("q-fab",{staticClass:"animate-pop",attrs:{color:"primary","active-icon":"alarm",direction:"up"}},[i("q-fab-action",{attrs:{color:"purple",icon:"mail"},on:{click:function(t){e.toast("mail")}}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right",offset:[20,0]}},[e._v("Mail")])],1),e._v(" "),i("q-fab-action",{attrs:{color:"secondary",icon:"alarm"},on:{click:function(t){e.toast("alarm")}}},[i("q-tooltip",{attrs:{anchor:"center left",self:"center right",offset:[20,0]}},[e._v("Alarm")])],1)],1)],1)],1)])},a=[],s={render:r,staticRenderFns:a};t.a=s}});
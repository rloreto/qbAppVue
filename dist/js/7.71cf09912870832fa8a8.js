webpackJsonp([7],{147:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(156),s=i(168),n=i(52),a=n(r.a,s.a,!1,null,null,null);t.default=a.exports},156:function(e,t,i){"use strict";var r=i(29),s=i(53),n=this;t.a={components:{QInfiniteScroll:r.s,QChip:r.k,QSpinnerDots:r.G,QList:r.A,QListHeader:r.B,QItem:r.u,QItemSeparator:r.w,QItemSide:r.x,QItemMain:r.v,QItemTile:r.y,QSideLink:r.F,QFixedPosition:r.q,QFab:r.n,QFabAction:r.o,QTooltip:r.L,Toast:r.M,QBtn:r.c,QPopover:r.C,date:r.N},data:function(){return{years:[2019,2018,2017,2016,2015,2014,2013]}},methods:{created:function(){},refresher:function(e,t){this.isLastPage?this.$refs.infiniteScroll.stop():this.isLoading||this.error||this.$store.dispatch("getWeddings",{page:this.currentPage,year:this.selectedYear||(new Date).getFullYear()}),t()},showToast:function(e){var t=this;r.M.create("Filtro activo. Año: "+e),this.$store.dispatch("setYear",{year:e}).then(function(){t.$refs.infiniteScroll.reset(),t.$refs.infiniteScroll.resume(),t.$refs.infiniteScroll.loadMore()})},formatDate:function(e){var t=new Date(e);return r.N.formatDate(t,"dddd, DD  MMM  YYYY",{dayNames:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]})},newWedding:function(){n.$router.push("/events/wedding")}},computed:Object(s.b)({weddings:"weddings",isLoading:"isLoading",currentPage:"currentPage",error:"error",selectedYear:"selectedYear",isLastPage:"isLastPage"})}},168:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout-padding row justify-center"},[i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[i("q-fixed-position",{staticStyle:{"z-index":"1000"},attrs:{corner:"top-right",offset:[16,16]}},[i("q-btn",{attrs:{push:"",color:"orange"}},[e._v("\n          "+e._s(e.selectedYear)+"\n          "),i("q-popover",{ref:"popover2"},[i("q-list",{staticStyle:{"min-width":"100px"},attrs:{link:""}},e._l(e.years,function(t){return i("q-item",{key:t,on:{click:function(i){e.showToast(t),e.$refs.popover2.close()}}},[i("q-item-main",{attrs:{label:t+""}})],1)}))],1)],1)],1),e._v(" "),i("q-infinite-scroll",{ref:"infiniteScroll",attrs:{handler:e.refresher}},[e._l(e.weddings,function(t){return i("q-item",{key:t.id},[i("q-side-link",{attrs:{item:"",to:"weddings/"+t.id,exact:""}},[i("q-item-main",{attrs:{label:t.name,sublabel:e.formatDate(t.date)+(t.place?" - "+t.place:""),"label-lines":"2"}})],1)],1)}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLastPage,expression:"!isLastPage"}],staticClass:"row justify-center",staticStyle:{"margin-bottom":"50px"}},[i("q-spinner-dots",{attrs:{slot:"message",size:40},slot:"message"})],1)],2),e._v(" "),i("router-link",{attrs:{to:{path:"wedding"}}},[i("q-fixed-position",{attrs:{corner:"bottom-right",offset:[18,18]}},[i("q-btn",{attrs:{round:"",color:"primary",icon:"add"}})],1)],1)],1)])},s=[],n={render:r,staticRenderFns:s};t.a=n}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c2065f2"],{"0309":function(e,t,s){"use strict";var n=s("5afc"),i=s.n(n);i.a},"5afc":function(e,t,s){},e2f3:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-row",{attrs:{align:"center"}},[s("v-col",{directives:[{name:"show",rawName:"v-show",value:e.showLevels,expression:"showLevels"}],staticClass:"text-center",attrs:{cols:"12"}},[s("h3",{staticClass:"title font-italic font-weight-light"},[e._v("Levels")]),e._l(e.series,(function(t,n){return s("v-btn",{key:t.id+Math.random(),staticClass:"ma-2 level_button",class:{success:t.isCompleted},attrs:{outlined:"",color:"indigo darken-4",to:"/normal-game/"+t.id+"?level="+n}},[e._v("Level "+e._s(n))])})),s("br"),e.loading?s("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):e._e()],2),s("router-view")],1)},i=[],r=(s("c975"),s("d81d"),s("b0c0"),s("5530")),o=s("2f62"),a={mounted:function(){this.setListLevels()},data:function(){return{series:[]}},computed:Object(r["a"])({showLevels:function(){return Boolean("Normal game"===this.$route.name&&this.series)}},Object(o["c"])({levelsCompleted:function(e){return e.user.normalGame.levelsCompleted},topSeries:function(e){return e.topSeries.series},loading:function(e){return e.topSeries.loading}})),watch:{$route:function(e,t){this.setListLevels()},topSeries:function(e){this.series=e}},methods:{setListLevels:function(){var e=this,t=this.topSeries.map((function(t){var s=parseInt(t.id);return e.levelsCompleted.indexOf(s)>-1?t.isCompleted=!0:t.isCompleted=!1,t}));this.series=t}}},l=a,c=(s("0309"),s("2877")),u=s("6544"),d=s.n(u),v=s("8336"),f=s("62ad"),m=s("490a"),p=s("0fd9"),h=Object(c["a"])(l,n,i,!1,null,"262b4a22",null);t["default"]=h.exports;d()(h,{VBtn:v["a"],VCol:f["a"],VProgressCircular:m["a"],VRow:p["a"]})}}]);
//# sourceMappingURL=chunk-6c2065f2.baec909d.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{431:function(t,e,o){var content=o(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("2e3fd2c0",content,!0,{sourceMap:!1})},486:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDUuNUMxNCAzLjg0MzMzIDEyLjYwMDcgMi41IDEwLjg3NDcgMi41QzkuNTg0NjcgMi41IDguNDc2NjcgMy4yNTA2NyA4IDQuMzIyQzcuNTIzMzMgMy4yNTA2NyA2LjQxNTMzIDIuNSA1LjEyNDY3IDIuNUMzLjQgMi41IDIgMy44NDMzMyAyIDUuNUMyIDEwLjMxMzMgOCAxMy41IDggMTMuNUM4IDEzLjUgMTQgMTAuMzEzMyAxNCA1LjVaIiBzdHJva2U9IiM5MTkxOTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},487:function(t,e,o){"use strict";o(431)},488:function(t,e,o){var n=o(53)(!1);n.push([t.i,".grey[data-v-47735bea]{color:#919191;margin-bottom:45px}p[data-v-47735bea]{text-align:justify}.divBox[data-v-47735bea]{border:1px solid #e1e1e1;margin-top:15px;padding:32px 24px;border-radius:3px}.divBox .editBox[data-v-47735bea]{display:flex;justify-content:space-between}.divBox h2[data-v-47735bea]{font-size:18px}.divBox p[data-v-47735bea]{margin-top:24px;color:#919191;text-align:justify}",""]),t.exports=n},508:function(t,e,o){"use strict";o.r(e);o(18);var n={data:function(){return{sponsors:[]}},created:function(){this.$store.state.account.address?this.getSponsorMetadata():this.$router.push("/")},methods:{getSponsorMetadata:function(){var t=this,data={};data.address=this.$store.state.account.address,this.$api.request.getSponsorMetadata(data,(function(e){e.data.list?t.sponsors=e.data.list:t.$toast.error("An Internal Error.")}),(function(e){t.$toast.error("Server is disconnected."),console.log(e)}))}}},r=(o(487),o(35)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),t._l(t.sponsors,(function(s,i){return t.sponsors.length>0?e("div",{key:i,staticClass:"divBox",on:{click:function(e){return t.$router.push("/sponsor/".concat(s._id))}}},[e("div",{staticClass:"editBox"},[e("h2",[t._v(t._s(s.data.name))]),t._v(" "),e("span",{staticStyle:{display:"flex","justify-content":"center","align-item":"center"}},[e("img",{staticStyle:{cursor:"pointer",width:"20px",height:"20px"},attrs:{src:o(486)}}),t._v(" "),e("span",[t._v(t._s(s.sponsors.length))])])]),t._v(" "),e("p",[t._v(t._s(s.data.overview))])]):t._e()}))],2)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-wrapper"},[e("h5",[t._v("Chameleon Sponsor")]),t._v(" "),e("p",{staticClass:"grey"},[t._v("Here is a list of chameleon sponsor-enabled data you contributed to the open data library. Click on each of the data to view the list of generous sponsors. Chameleon sponsor is powered by Polygon.")])])}],!1,null,"47735bea",null);e.default=component.exports}}]);
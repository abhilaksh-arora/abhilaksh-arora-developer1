(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{306:function(t,e,d){var content=d(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(67).default)("bbfc9984",content,!0,{sourceMap:!1})},308:function(t,e,d){"use strict";d(306)},309:function(t,e,d){var o=d(66)(!1);o.push([t.i,".modal-visible[data-v-f127583a]{z-index:1050;display:block;overflow:hidden;outline:0}.modal-grey-area[data-v-f127583a],.modal-visible[data-v-f127583a]{position:fixed;top:0;left:0;width:100%;height:100%}.modal-grey-area[data-v-f127583a]{z-index:500;background:#000;opacity:1%;right:0;bottom:0}.card img[data-v-f127583a]{height:150px}.modal-body[data-v-f127583a]{padding:0!important}@media (min-width:576px){.modal-dialog[data-v-f127583a]{min-width:800px!important}}",""]),t.exports=o},310:function(t,e,d){"use strict";d.r(e);var o={props:{isVisible:{type:Boolean,default:function(){}},data:{type:Object,default:function(){}}},methods:{closeModal:function(){this.$emit("close")}}},l=(d(308),d(65)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("div",{staticClass:"modal-grey-area"}),t._v(" "),d("div",{class:{"modal-visible":t.isVisible,modal:!t.isVisible}},[d("div",{staticClass:"modal-dialog modal-dialog-centered"},[d("div",{staticClass:"modal-content"},[d("div",{staticClass:"modal-body d-flex flex-column flex-lg-row"},[d("div",{staticClass:"modal-img"},[d("img",{attrs:{src:t.data.image.url,alt:"",width:"500px",height:"500px"}})]),t._v(" "),d("div",{staticClass:"modal-content-body"},[d("button",{staticClass:"close pr-3 pt-2",attrs:{type:"button"},on:{click:function(e){return t.closeModal()}}},[d("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),d("div",{staticClass:"text-center pt-5 p-1"},[d("h3",[t._v(t._s(t.$prismic.asText(t.data.heading)))]),t._v(" "),d("hr")]),t._v(" "),d("div",{staticClass:"modal-description"},[d("p",[t._v(t._s(t.$prismic.asText(t.data.description)))])])])])])])])])}),[],!1,null,"f127583a",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{325:function(e,t,n){"use strict";n.r(t);n(22);var o=n(94),r=n.n(o),c={data:function(){return{name:"",company:"",email:"",phone:"",subject:"",message:"",isVisible:!0}},methods:{preview:function(){this.isVisible=!this.isVisible},submitForm:function(){var e={name:this.name,email:this.email,phone:this.phone,company:this.company,subject:this.subject,message:this.message};r.a.post("/api/send",e).then((function(){console.log("Message Successfully Sent")})).catch((function(e){console.error(e.msg)}))}}},l=n(65),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"contact",attrs:{id:"contact"}},[n("div",{staticClass:"container"},[e._m(0),e._v(" "),n("div",{staticClass:"card-wrapper"},[n("div",{staticClass:"card"},[n("div",{staticClass:"svg-card"},[n("svg-phoneSVG")],1),e._v(" "),n("h2",[e._v("Call Us On")]),e._v(" "),n("h6",[e._v("+917409882374")])]),e._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"svg-card"},[n("svg-mailSVG")],1),e._v(" "),n("h2",[e._v("Email Us At")]),e._v(" "),n("h6",[e._v("arora.abhilaksh@gmail.com")])]),e._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"svg-card"},[n("svg-locationSVG")],1),e._v(" "),n("h2",[e._v("Visit Office")]),e._v(" "),n("h6",[e._v("89, Prabhat Nagar")])])]),e._v(" "),e.isVisible?n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"input-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.company,expression:"company"}],staticClass:"form-control",attrs:{id:"company",type:"text",name:"company",placeholder:"Company",required:""},domProps:{value:e.company},on:{input:function(t){t.target.composing||(e.company=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control",attrs:{id:"phone",type:"text",name:"phone",placeholder:"Phone No.",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"input-wrap-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],staticClass:"form-control",attrs:{id:"subject",type:"text",name:"subject",placeholder:"Subject",required:""},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",attrs:{name:"message",rows:"5",placeholder:"Message",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"btn-wrapper"},[n("button",{staticClass:"btn btn-color",on:{click:function(t){return e.preview()}}},[e._v("\n            Send Message\n          ")])])])]):n("div",{staticClass:"my-3 text-center"},[e._m(1)])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-title",attrs:{"data-aos":"fade-up"}},[n("h2",[e._v("Contact Us")]),e._v(" "),n("p",[e._v("Let's Create something Creative")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sent-message"},[n("h3",[e._v("Your message has been sent. Thank you!")])])}],!1,null,null,null);t.default=component.exports}}]);
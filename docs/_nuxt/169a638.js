(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(t,e,n){"use strict";e.a={data:function(){return{cardWidth:300,cardHeight:400,padding:30,textOffset:10}},methods:{getDataAreaBounds:function(){return{start:[this.padding+this.textOffset,this.padding+70],end:[this.cardWidth-this.padding-this.textOffset,this.cardHeight-this.padding-30],width:this.cardWidth-this.padding-this.textOffset-(this.padding+this.textOffset),height:this.cardHeight-this.padding-30-(this.padding+70)}},clone:function(object){return JSON.parse(JSON.stringify(object))}}}},357:function(t,e,n){"use strict";var r=n(328);e.a=r.a},396:function(t,e){},397:function(t,e){},406:function(t,e){},407:function(t,e){},426:function(t,e){},428:function(t,e){},431:function(t,e){},432:function(t,e){},437:function(t,e){},444:function(t,e){},467:function(t,e,n){var content=n(634);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("df8281fc",content,!0,{sourceMap:!1})},468:function(t,e,n){var content=n(638);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("0d236fce",content,!0,{sourceMap:!1})},471:function(t,e,n){"use strict";n.r(e);n(361),n(11),n(55),n(632),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389);var r=n(352),o=n(391),l=n.n(o),c=n(298),d=n.n(c),h=n(390),f={mixins:[r.a],data:function(){return{valid:!1,file:null,secret:"",rules:[function(t){return!t||"image/png"===t.type||"Error: the file should be a .png image."}],output:"",decoded:!1,isEncrypted:!1,wrongPassword:!1}},methods:{loadImage:function(){var t=this;this.$nextTick((function(){var e=t.file,n=new FileReader;n.onload=function(){var img=new Image;img.onload=function(){var e=t.$refs.card.getContext("2d");t.cardWidth=img.width,t.cardHeight=img.height,t.$nextTick((function(){e.clearRect(0,0,t.cardWidth,t.cardHeight),e.drawImage(img,0,0),t.decode(),t.decoded=!0}))},img.src=n.result},n.readAsDataURL(e)}))},decode:function(){var t=this;this.$nextTick((function(){for(var e=t.clone(t.getDataAreaBounds()),n=t.$refs.card.getContext("2d"),r=[],o=!1,c=e.start[1];c<e.end[1];c++){for(var f=e.start[0];f<e.end[0];f++){var v=n.getImageData(f,c,1,1).data;if(253===v[3]&&(t.isEncrypted=!0),254===v[3]||253===v[3]){o=!0;break}r.push(v[0]),r.push(v[1]),r.push(v[2])}if(!0===o)break}for(;0===r[r.length-1];)r.pop();var m=h.a.inflate(new Uint8Array(r),{to:"string"});if(t.isEncrypted){var y=l.a.decrypt(m,t.secret),_=null;try{_=y.toString(d.a.enc.Utf8)}catch(e){t.wrongPassword=!0}t.output=_}else t.output=m}))}},watch:{file:function(t){this.decoded=!1,this.output="",this.isEncrypted=!1,this.cardWidth=0,this.cardHeight=0,this.wrongPassword=!1}}},v=(n(633),n(44)),m=n(64),y=n.n(m),_=n(281),x=n(285),w=n(461),O=(n(15),n(151),n(42),n(41),n(33),n(74),n(90),n(204),n(34),n(49),n(54),n(303)),V=n(1),S=n(19),j=(n(635),n(357)),$=n(464),C=n(3),k=n(9),D=n(65);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(V.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E=j.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(C.z)(t).every((function(t){return null!=t&&"object"===Object(S.a)(t)}))}}},computed:{classes:function(){return z(z({},j.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(C.q)(e,1024===this.base))},internalArrayValue:function(){return Object(C.z)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var n=e.name,r=void 0===n?"":n,o=e.size,l=void 0===o?0:o,c=t.truncateText(r);return t.showSize?"".concat(c," (").concat(Object(C.q)(l,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(k.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(C.h)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement($.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=j.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(D.b)(t.data.style,{display:"none"})),t},genInput:function(){var input=j.a.options.methods.genInput.call(this);return delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:n,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=j.a.options.methods.genTextFieldSlot.call(this);return e.data.on=z(z({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(O.a)(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),B=(n(61),n(203),n(156),n(60),n(52),n(59)),I=n(149),T=n(153);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(V.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var U=Object(B.a)(I.a,Object(T.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:A({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),W=n(286),F=n(328),H=n(654),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("h2",{staticClass:"primary--text alt-font"},[t._v("Upload a card")]),t._v(" "),n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-file-input",{attrs:{"show-size":"",rules:t.rules,"prepend-icon":"mdi-card-bulleted-settings",label:"Stega card to decode",accept:"image/png",outlined:"",dense:"","truncate-length":44},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),n("v-text-field",{attrs:{dense:"",label:"Password (optional)",error:t.wrongPassword,outlined:"","prepend-icon":"mdi-key","persistent-hint":"",hint:"If the card is encrypted, enter it's password."},on:{input:function(e){t.decoded=!1,t.wrongPassword=!1}},model:{value:t.secret,callback:function(e){t.secret=e},expression:"secret"}}),t._v(" "),t.decoded?t._e():n("v-btn",{attrs:{color:"primary",block:"",disabled:!t.file||!t.valid},on:{click:function(e){return t.loadImage()}}},[t._v("Decode")]),t._v(" "),n("v-divider",{staticClass:"my-3"})],1),t._v(" "),n("div",{staticClass:"card-box"},[n("canvas",{directives:[{name:"show",rawName:"v-show",value:t.file,expression:"file"}],ref:"card",staticClass:"card",class:t.decoded?"animate__animated animate__headShake":"",attrs:{width:t.cardWidth,height:t.cardHeight}})])],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("h2",{staticClass:"primary--text alt-font"},[t._v("Decoded text")]),t._v(" "),t.isEncrypted&&t.decoded&&t.wrongPassword?n("h3",{staticClass:"error--text mt-4"},[t._v("\n        Uh oh! Wrong password."),n("br"),t._v("Try something else.\n      ")]):t._e(),t._v(" "),t.isEncrypted||!t.decoded||t.output?t._e():n("h3",{staticClass:"secondary--text mt-4"},[t._v("\n        This card is empty."),n("br"),t._v("Empty as the cyber void...\n      ")]),t._v(" "),t.file?t._e():n("h3",{staticClass:"secondary--text mt-4"},[t._v("\n        Upload a card to see it's content.\n      ")]),t._v(" "),t.file&&!t.decoded?n("h3",{staticClass:"secondary--text mt-4"},[t._v('\n        Press the "decode" button to decode.\n      ')]):t._e(),t._v(" "),t.output?n("v-textarea",{staticClass:"mt-5",attrs:{outlined:"",dense:"",label:"Decoded text",rows:10},model:{value:t.output,callback:function(e){t.output=e},expression:"output"}}):t._e()],1)],1)],1)}),[],!1,null,"1d85c322",null);e.default=component.exports;y()(component,{VBtn:_.a,VCol:x.a,VDivider:w.a,VFileInput:E,VForm:U,VRow:W.a,VTextField:F.a,VTextarea:H.a})},632:function(t,e,n){n(365)("Uint8",(function(t){return function(data,e,n){return t(this,data,e,n)}}))},633:function(t,e,n){"use strict";n(467)},634:function(t,e,n){(e=n(21)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Eczar:wght@400;700&family=Ubuntu+Mono:wght@400;700&display=swap);"]),e.push([t.i,".card-box[data-v-1d85c322]{overflow:auto;position:relative;text-align:center;margin:auto}",""]),t.exports=e},635:function(t,e,n){var content=n(636);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("83ff91dc",content,!0,{sourceMap:!1})},636:function(t,e,n){(e=n(21)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Eczar:wght@400;700&family=Ubuntu+Mono:wght@400;700&display=swap);"]),e.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=e},637:function(t,e,n){"use strict";n(468)},638:function(t,e,n){(e=n(21)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Eczar:wght@400;700&family=Ubuntu+Mono:wght@400;700&display=swap);"]),e.push([t.i,".main-col[data-v-6d32bbf3]{max-width:1500px}",""]),t.exports=e},659:function(t,e,n){"use strict";n.r(e);var r={components:{Decoder:n(471).default}},o=(n(637),n(44)),l=n(64),c=n.n(l),d=n(281),h=n(653),f=n(285),v=n(461),m=n(457),y=n(286),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"main-col text-center"},[n("v-card",{staticClass:"py-6 px-9 mt-3"},[n("h1",{staticClass:"main-title"},[t._v("Stega Carder")]),t._v(" "),n("v-divider",{staticClass:"py-3"}),t._v(" "),n("v-btn",{attrs:{color:"accent",fab:"",small:"",absolute:"",top:"",right:""},on:{click:function(e){return t.$router.push({path:"/"})}}},[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("Decoder")],1)],1)],1)}),[],!1,null,"6d32bbf3",null);e.default=component.exports;c()(component,{Decoder:n(471).default}),c()(component,{VBtn:d.a,VCard:h.a,VCol:f.a,VDivider:v.a,VIcon:m.a,VRow:y.a})}}]);
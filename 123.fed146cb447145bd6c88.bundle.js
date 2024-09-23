(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[123],{605:function(e,t){!function(e){"use strict";class t{measure(e){const t=performance.now();return e(),performance.now()-t}}class i{constructor(e){this.controller_=e}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}function s(e){return e}function r(e){return null===e||void 0===e}class n{constructor(){this.observers_={}}on(e,t){let i=this.observers_[e];return i||(i=this.observers_[e]=[]),i.push({handler:t}),this}off(e,t){const i=this.observers_[e];return i&&(this.observers_[e]=i.filter((e=>e.handler!==t))),this}emit(e,t){const i=this.observers_[e];i&&i.forEach((e=>{e.handler(t)}))}}const a="tp";function l(e){return(t,i)=>[a,"-",e,"v",t?`_${t}`:"",i?`-${i}`:""].join("")}function o(e,t){return i=>t(e(i))}function c(e){return e.rawValue}function h(e,t){e.emitter.on("change",o(c,t)),t(e.rawValue)}function d(e,t,i){h(e.value(t),i)}class u{constructor(e,t){var i;this.constraint_=null===t||void 0===t?void 0:t.constraint,this.equals_=null!==(i=null===t||void 0===t?void 0:t.equals)&&void 0!==i?i:(e,t)=>e===t,this.emitter=new n,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const i=null!==t&&void 0!==t?t:{forceEmit:!1,last:!0},s=this.constraint_?this.constraint_.constrain(e):e;(!this.equals_(this.rawValue_,s)||i.forceEmit)&&(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=s,this.emitter.emit("change",{options:i,rawValue:s,sender:this}))}}class _{constructor(e){this.emitter=new n,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const i=null!==t&&void 0!==t?t:{forceEmit:!1,last:!0};(this.value_!==e||i.forceEmit)&&(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:i,rawValue:this.value_,sender:this}))}}function p(e,t){const i=null===t||void 0===t?void 0:t.constraint,s=null===t||void 0===t?void 0:t.equals;return i||s?new u(e,t):new _(e)}class m{constructor(e){this.emitter=new n,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",(()=>{this.emitter.emit("change",{key:t,sender:this})}))}static createCore(e){return Object.keys(e).reduce(((t,i)=>Object.assign(t,{[i]:p(e[i])})),{})}static fromObject(e){const t=this.createCore(e);return new m(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function v(e,t){return s(Object.keys(t).reduce(((i,s)=>{if(void 0===i)return;const r=(0,t[s])(e[s]);return r.succeeded?Object.assign(Object.assign({},i),{[s]:r.value}):void 0}),{}))}function f(e,t){return e.reduce(((e,i)=>{if(void 0===e)return;const s=t(i);return s.succeeded&&void 0!==s.value?[...e,s.value]:void 0}),[])}function g(e){return null!==e&&"object"===typeof e}function w(e){return t=>i=>{if(!t&&void 0===i)return{succeeded:!1,value:void 0};if(t&&void 0===i)return{succeeded:!0,value:void 0};const s=e(i);return void 0!==s?{succeeded:!0,value:s}:{succeeded:!1,value:void 0}}}function b(e){return{custom:t=>w(t)(e),boolean:w((e=>"boolean"===typeof e?e:void 0))(e),number:w((e=>"number"===typeof e?e:void 0))(e),string:w((e=>"string"===typeof e?e:void 0))(e),function:w((e=>"function"===typeof e?e:void 0))(e),constant:t=>w((e=>e===t?t:void 0))(e),raw:w((e=>e))(e),object:t=>w((e=>{if(g(e))return v(e,t)}))(e),array:t=>w((e=>{if(Array.isArray(e))return f(e,t)}))(e)}}const y={optional:b(!0),required:b(!1)};function E(e,t){const i=y.required.object(t)(e);return i.succeeded?i.value:void 0}function C(e){return e&&e.parentElement&&e.parentElement.removeChild(e),null}function M(){return["veryfirst","first","last","verylast"]}const k=l(""),D={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class P{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",(()=>{M().forEach((e=>{t.classList.remove(k(void 0,D[e]))})),this.blade.get("positions").forEach((e=>{t.classList.add(k(void 0,D[e]))}))})),this.viewProps.handleDispose((()=>{C(t)}))}get parent(){return this.parent_}}function x(e){for(;e.childNodes.length>0;)e.removeChild(e.childNodes[0])}const S=l("lbl");function T(e,t){const i=e.createDocumentFragment();return t.split("\n").map((t=>e.createTextNode(t))).forEach(((t,s)=>{s>0&&i.appendChild(e.createElement("br")),i.appendChild(t)})),i}class V{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(S()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(S("l")),d(t.props,"label",(t=>{r(t)?this.element.classList.add(S(void 0,"nol")):(this.element.classList.remove(S(void 0,"nol")),x(i),i.appendChild(T(e,t)))})),this.element.appendChild(i),this.labelElement=i;const s=e.createElement("div");s.classList.add(S("v")),this.element.appendChild(s),this.valueElement=s}}class U extends P{constructor(e,t){const i=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new V(e,{props:t.props,viewProps:i}),viewProps:i})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class L{constructor(){this.disabled=!1,this.emitter=new n}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class B{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new n,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(null===this.timerId_)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}const F={monitor:{defaultInterval:200,defaultLineCount:3}};class j extends i{measure(e,t){this.controller_.valueController.measure(e,t)}get measureHandler(){return this.controller_.valueController.measureHandler}set measureHandler(e){this.controller_.valueController.measureHandler=e}}class R{constructor(){this.map=new Map,this.keySet=new Set}get(e){return this.map.get(e)}getOrCreate(e,t){this.keySet.has(e)||this.keySet.add(e);let i=this.map.get(e);return null==i&&(i=t(),this.map.set(e,i)),i}set(e,t){this.keySet.has(e)||this.keySet.add(e),this.map.set(e,t)}resetUsedSet(){this.keySet.clear()}vaporize(e){for(const[t,i]of this.map.entries())this.keySet.has(t)||(this.map.delete(t),null===e||void 0===e||e([t,i]))}}class I{constructor(e){this.__recalcForEach=0,this.__countUntilRecalc=0,this.__history=[],this.__index=0,this.__count=0,this.__cache=0,this.__length=e,this.__recalcForEach=e;for(let t=0;t<e;t++)this.__history[t]=0}get mean(){const e=Math.min(this.__count,this.__length);return 0===e?0:this.__cache/e}get recalcForEach(){return this.__recalcForEach}set recalcForEach(e){const t=e-this.__recalcForEach;this.__recalcForEach=e,this.__countUntilRecalc=Math.max(0,this.__countUntilRecalc+t)}reset(){this.__index=0,this.__count=0,this.__cache=0,this.__countUntilRecalc=0;for(let e=0;e<this.__length;e++)this.__history[e]=0}push(e){const t=this.__history[this.__index];this.__history[this.__index]=e,this.__count++,this.__index=(this.__index+1)%this.__length,0===this.__countUntilRecalc?this.recalc():(this.__countUntilRecalc--,this.__cache-=t,this.__cache+=e)}recalc(){this.__countUntilRecalc=this.__recalcForEach;const e=this.__history.slice(0,Math.min(this.__count,this.__length)).reduce(((e,t)=>e+t),0);this.__cache=e}}function O(e,t){if("function"!==typeof t)return O(e,(e=>e<t));const i=t;let s=0,r=e.length;for(;s<r;){const t=s+r>>1;i(e[t])?s=t+1:r=t}return s}class ${constructor(e){this.__history=[],this.__sorted=[],this.__index=0,this.__length=e}get median(){return this.percentile(50)}percentile(e){return 0===this.__history.length?0:this.__sorted[Math.round(.01*e*(this.__history.length-1))]}reset(){this.__index=0,this.__history=[],this.__sorted=[]}push(e){const t=this.__history[this.__index];if(this.__history[this.__index]=e,this.__index=(this.__index+1)%this.__length,this.__sorted.length===this.__length){const e=O(this.__sorted,t);this.__sorted.splice(e,1)}const i=O(this.__sorted,e);this.__sorted.splice(i,0,e)}}function N(e,t){let i=0;for(let s=0;s<e.length;s++)i+=e[s]*t[s];return i}function A(e){return Math.min(Math.max(e,0),1)}function H(e){return`rgb( ${e.map((e=>256*A(e))).join(", ")} )`}function z(e){const t=[.13572138,4.6153926,-42.66032258,132.13108234],i=[.09140261,2.19418839,4.84296658,-14.18503333],s=[.1066733,12.64194608,-60.58204836,110.36276771],r=[-152.94239396,59.28637943],n=[4.27729857,2.82956604],a=[-89.90310912,27.34824973],l=[1,e=A(e),e*e,e*e*e],o=[l[2],l[3]].map((e=>e*l[2]));return H([N(l,t)+N(o,r),N(l,i)+N(o,n),N(l,s)+N(o,a)])}const q=l("profiler");class Z{constructor(e,t){this.targetDelta=t.targetDelta,this.deltaUnit=t.deltaUnit,this.fractionDigits=t.fractionDigits,this.calcMode=t.calcMode,this.element=e.createElement("div"),this.element.classList.add(q()),t.viewProps.bindClassModifiers(this.element),this.svgRootElement_=e.createElementNS("http://www.w3.org/2000/svg","svg"),this.svgRootElement_.classList.add(q("root")),this.element.appendChild(this.svgRootElement_),this.entryContainerElement_=e.createElementNS("http://www.w3.org/2000/svg","g"),this.entryContainerElement_.classList.add(q("container")),this.entryContainerElement_.setAttribute("transform","translate( 1, 1 )"),this.svgRootElement_.appendChild(this.entryContainerElement_),this.tooltipElement_=e.createElement("div"),this.tooltipElement_.classList.add(q("tooltip")),this.tooltipElement_.style.display="none",this.element.appendChild(this.tooltipElement_),this.tooltipInsideElement_=e.createElement("div"),this.tooltipInsideElement_.classList.add(q("tooltipinside")),this.tooltipElement_.appendChild(this.tooltipInsideElement_),this.labelElement_=e.createElement("div"),this.labelElement_.classList.add(q("label")),this.labelElement_.textContent=this.deltaToDisplayDelta_(0),this.element.appendChild(this.labelElement_),this.entryElementCacheMap_=new R,this.hoveringEntry_=null}update(e){const t=this.entryToDelta_(e);this.labelElement_.textContent=this.deltaToDisplayDelta_(t),this.entryElementCacheMap_.resetUsedSet();const i=160/Math.max(this.targetDelta,t);let s=0;for(const r of e.children)this.addEntry_(r,"",this.entryContainerElement_,i).setAttribute("transform",`translate( ${s}, 0 )`),s+=this.entryToDelta_(r)*i;this.entryElementCacheMap_.vaporize((([e,t])=>{t.remove(),this.hoveringEntry_===e&&(this.hoveringEntry_=null)})),this.updateTooltip_()}updateTooltip_(){const e=this.hoveringEntry_;if(e){const t=this.entryElementCacheMap_.get(e),i=null===t||void 0===t?void 0:t.getAttribute("data-delta"),s=`${e}\n${this.deltaToDisplayDelta_(parseFloat(null!==i&&void 0!==i?i:"0.0"))}`;this.tooltipElement_.style.display="block",this.tooltipInsideElement_.textContent=s}else this.tooltipElement_.style.display="none"}addEntry_(e,t,i,s){const r=`${t}/${e.name}`,n=this.entryElementCacheMap_.getOrCreate(r,(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","g");e.classList.add(q("entry")),i.appendChild(e),this.entryElementCacheMap_.set(r,e);const t=document.createElementNS("http://www.w3.org/2000/svg","rect");return t.classList.add(q("entryrect")),e.appendChild(t),t.addEventListener("mouseenter",(()=>{this.hoveringEntry_=r,this.updateTooltip_()})),t.addEventListener("mouseleave",(()=>{this.hoveringEntry_=null,this.updateTooltip_()})),e})),a=this.entryToDelta_(e);n.setAttribute("data-delta",`${a}`);const l=n.childNodes[0];l.setAttribute("width",`${Math.max(.01,a*s-1)}px`),l.setAttribute("height","9px");const o=.15+.7*A(a/this.targetDelta);if(l.setAttribute("fill",z(o)),e.children.length>0){let t=0;e.children.forEach((e=>{this.addEntry_(e,r,n,s).setAttribute("transform",`translate( ${t}, 10 )`),t+=this.entryToDelta_(e)*s}))}return n}entryToDelta_(e){if("frame"===this.calcMode)return e.delta;if("mean"===this.calcMode)return e.deltaMean;if("median"===this.calcMode)return e.deltaMedian;throw new Error('Unreachable! calcMode must be one of "frame", "mean", or "median"')}deltaToDisplayDelta_(e){return`${e.toFixed(this.fractionDigits)} ${this.deltaUnit}`}}function G(e){e.splice(0,e.length)}function J(e){let t=0;return e.forEach((e=>t+=e)),t}class K{constructor(e,t){this.targetDelta=t.targetDelta,this.bufferSize=t.bufferSize,this.onTick_=this.onTick_.bind(this),this.ticker_=t.ticker,this.ticker_.emitter.on("tick",this.onTick_),this.viewProps=t.viewProps,this.view=new Z(e,{targetDelta:this.targetDelta,deltaUnit:t.deltaUnit,fractionDigits:t.fractionDigits,calcMode:t.calcMode,viewProps:this.viewProps}),this.viewProps.handleDispose((()=>{this.ticker_.dispose()})),this.measureHandler=t.measureHandler,this.rootCalcCacheStack_=[this.createNewEntryCalcCache_()]}async measure(e,t){const i=this.rootCalcCacheStack_[this.rootCalcCacheStack_.length-1],s=i.childrenCacheMap.getOrCreate(e,(()=>this.createNewEntryCalcCache_()));s.childrenCacheMap.resetUsedSet(),G(s.childrenPromiseDelta),this.rootCalcCacheStack_.push(s);const r=Promise.resolve(this.measureHandler.measure(t));i.childrenPromiseDelta.push(r),this.rootCalcCacheStack_.pop(),s.childrenCacheMap.vaporize();const n=J(await Promise.all(s.childrenPromiseDelta)),a=await r-n;s.meanCalc.push(a),s.medianCalc.push(a),s.latest=a}renderEntry(){return this.renderEntryFromCalcCache_("",this.rootCalcCacheStack_[0])}renderEntryFromCalcCache_(e,t){const i=[];for(const a of t.childrenCacheMap.keySet){const e=t.childrenCacheMap.get(a);i.push(this.renderEntryFromCalcCache_(a,e))}const s=t.latest,r=t.meanCalc.mean,n=t.medianCalc.median;return{name:e,delta:s+J(i.map((e=>e.delta))),deltaMean:r+J(i.map((e=>e.deltaMean))),deltaMedian:n+J(i.map((e=>e.deltaMedian))),selfDelta:s,selfDeltaMean:r,selfDeltaMedian:n,children:i}}onTick_(){this.view.update(this.renderEntry())}createNewEntryCalcCache_(){return{meanCalc:new I(this.bufferSize),medianCalc:new $(this.bufferSize),latest:0,childrenCacheMap:new R,childrenPromiseDelta:[]}}}function Q(e,t){return 0===t?new L:new B(e,null!==t&&void 0!==t?t:F.monitor.defaultInterval)}function W(e){switch(e){case"frame":case"mean":case"median":return e;default:return}}const X={id:"profiler",type:"blade",css:".tp-profilerv{position:relative}.tp-profilerv_root{background-color:var(--mo-bg);width:100%;height:calc( 2.0 * var(--bld-us))}.tp-profilerv_entryrect{rx:var(--elm-br);ry:var(--elm-br);stroke:transparent;stroke-width:1px;filter:saturate(0.5)}.tp-profilerv_entryrect:hover{filter:saturate(1)}.tp-profilerv_tooltip{position:absolute;right:100%;top:0;overflow:hidden;background:var(--bs-bg)}.tp-profilerv_tooltipinside{padding:0 4px;overflow:visible;white-space:pre;text-align:right;background:var(--mo-bg);color:var(--in-fg)}.tp-profilerv_label{color:var(--mo-fg);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",accept(e){const t=y,i=E(e,{view:t.required.constant("profiler"),targetDelta:t.optional.number,bufferSize:t.optional.number,deltaUnit:t.optional.string,fractionDigits:t.optional.number,calcMode:t.optional.custom(W),label:t.optional.string,interval:t.optional.number,measureHandler:t.optional.raw});return i?{params:i}:null},controller(e){var i,s,r,n,a,l,o;const c=null!==(i=e.params.interval)&&void 0!==i?i:500,h=null!==(s=e.params.targetDelta)&&void 0!==s?s:16.67,d=null!==(r=e.params.bufferSize)&&void 0!==r?r:30,u=null!==(n=e.params.deltaUnit)&&void 0!==n?n:"ms",_=null!==(a=e.params.fractionDigits)&&void 0!==a?a:2,p=null!==(l=e.params.calcMode)&&void 0!==l?l:"mean",v=null!==(o=e.params.measureHandler)&&void 0!==o?o:new t;return new U(e.document,{blade:e.blade,props:m.fromObject({label:e.params.label}),valueController:new K(e.document,{ticker:Q(e.document,c),targetDelta:h,bufferSize:d,deltaUnit:u,fractionDigits:_,calcMode:p,viewProps:e.viewProps,measureHandler:v})})},api:e=>e.controller instanceof U&&e.controller.valueController instanceof K?new j(e.controller):null};e.ProfilerBladeDefaultMeasureHandler=t,e.ProfilerBladePlugin=X,e.plugin=X,Object.defineProperty(e,"__esModule",{value:!0})}(t)},593:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var s=i(75),r=i(45),n=i(46),a=i.n(n),l=i(77),o=i.n(l),c=i(604),h=i(605),d=function(e,t){this.pane=void 0,this.name=void 0,this.blade=void 0,this.pane=t,this.name=e,this.blade=t.addBlade({view:"profiler",label:e})},u=function(e){function t(){for(var t,i,s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(i=e.call.apply(e,o()(t=[this]).call(t,r))||this).pane=void 0,i.element=void 0,i.profilerBlades=void 0,i}(0,r.Z)(t,e);var i=t.prototype;return i.configure=function(){var e=(0,s.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.pane=new c.Pane({title:"Profiler"}),this.profilerBlades={},this.element=this.pane.element,this.pane.registerPlugin(h);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.measureCode=function(e){console.info("\ud83d\ude80 > measureCode",e);var t=e.name,i=e.folder,s=e.callback,r=e.parentName;if(GameCore.Utils.Valid.isFunction(s)){if(r){var n=this.profilerBlades[r];return console.info("\ud83d\ude80 > parent",n),void(n&&this.measure(r,t,s))}if(!this.profilerBlades[t]){if(!i)return;this.createProfileBlade(t,i)}this.measure(t,t,s)}},i.measure=function(e,t,i){console.info("\ud83d\ude80 > profile",e),console.info("\ud83d\ude80 > name",t);var s=this.profilerBlades[e];s&&(console.info("\ud83d\ude80 > profiler",s),s.blade.measure(t,i))},i.createProfileBlade=function(e,t){console.info("\ud83d\ude80 > createProfileBlade",e);var i=new d(t,this.pane);this.profilerBlades[e]=i},i.removeFolder=function(e){if(this.profilerBlades[e]){var t=this.profilerBlades[e];this.pane.remove(t.blade),this.profilerBlades[e]=null}},t}(Phaser.Plugins.BasePlugin),_=u}}]);
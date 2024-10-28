"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[530],{598:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var i=n(37),o=n(31),r=n(26),s=n.n(r),a=n(80),c=n.n(a),p=n(203),u=n.n(p),l=n(611),d=n(123),h=n.n(d),f=n(122),g=n.n(f),m=n(616),v=n.n(m),y=function(){function t(){this.spector=void 0}var e=t.prototype;return e.init=function(t){var e=v()?v().Spector:m.Spector;this.spector=new e,this.show(t),this.spector.spyCanvas()},e.show=function(t){this.spector.displayUI(),this.showTweakpane(t)},e.showTweakpane=function(t){var e=this;this.hide();var n=h()(document.getElementsByTagName("canvas")),i=t.addBlade({view:"list",label:"canvas",options:g()(n).call(n,(function(t,e){return{text:t.id+" "+t.width+" x "+t.height,value:e}})),value:0});t.addButton({title:"Start Capture"}).on("click",(function(){e.startCapture(n[i.value])}))},e.hide=function(){var t=document.createElement("style");t.innerText="\n      .captureMenuComponent {\n        display: none !important\n      }\n\n      .captureMenuLogComponent {\n        display: none !important\n      }\n    ",document.head.appendChild(t)},e.getFps=function(){return this.spector.getFps()},e.captureNextFrame=function(t,e){return this.spector.captureNextFrame(t,e)},e.startCapture=function(t,e,n){return this.spector.startCapture(t,e,n)},e.stopCapture=function(){return this.spector.stopCapture()},e.setMarker=function(t){return this.spector.setMarker(t)},e.clearMarker=function(){return this.spector.clearMarker()},e.getSPECTOR=function(){return this.spector},t}(),b=function(t){function e(){for(var e,n,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=t.call.apply(t,c()(e=[this]).call(e,o))||this).pane=void 0,n.element=void 0,n.configFolder=void 0,n.defaultRoot=void 0,n.spectorJs=void 0,n.spectorJsFolder=void 0,n.inspector=void 0,n.inspectorRoot=void 0,n.isEnable=void 0,n}(0,o.Z)(e,t);var r=e.prototype;return r.configure=function(){var t=(0,i.Z)(s().mark((function t(e){var n,i,o,r,a,c,p,u,d,h,f,g,m,v;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=(n=e||{}).ShowInspector,o=void 0===i||i,r=n.ShowMonitoring,a=void 0===r||r,c=n.Expanded,p=void 0!==c&&c,u=n.AutoRefresh,d=void 0===u||u,h=n.InspectorAutoUpdate,f=void 0===h||h,g=n.Opacity,m=void 0===g?.8:g,this.isEnable=!0,this.pane=new l.Pane({title:"Debugger",expanded:p}),this.pane.addButton({title:"Hide Panel"}).on("click",this.hide.bind(this)),this.addToggleButton(),this.element=this.pane.element,this.initConfigDebugger(m),v=this.pane.addTab({pages:[{title:"Default"},{title:"Inspector"}]}),this.defaultRoot=v.pages[0],this.inspectorRoot=v.pages[1],!a){t.next=13;break}return t.next=13,this.createSpectorJs();case 13:if(!o||this.isOnMobile()){t.next=16;break}return t.next=16,this.createInspector(f);case 16:d&&this.update(),this.isOnMobile()&&(this.pane.expanded=!1);case 18:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),r.initConfigDebugger=function(t){var e=this;this.configFolder=this.pane.addFolder({title:"Debugger config",expanded:!1});var n={opacity:t,x:-8,y:-8,width:256};this.element.parentElement&&(this.element.parentElement.style.top=-n.y+"px",this.element.parentElement.style.right=-n.x+"px"),this.element.style.opacity=""+n.opacity,this.configFolder.addInput(n,"opacity",{min:0,max:1,step:.1}).on("change",(function(t){e.element.style.opacity=""+t.value})),this.configFolder.addInput(n,"x",{step:1}).on("change",(function(t){e.element.parentElement&&(e.element.parentElement.style.right=-t.value+"px")})),this.configFolder.addInput(n,"y",{step:1}).on("change",(function(t){e.element.parentElement&&(e.element.parentElement.style.top=-t.value+"px")})),this.configFolder.addInput(n,"width",{min:200,max:500,step:1}).on("change",(function(t){e.element.parentElement&&(e.element.parentElement.style.width=t.value+"px")})),this.element.onwheel=function(t){var i=t.deltaY;n.y<=-8&&i<0||n.y>=e.element.clientHeight-document.body.clientHeight-8&&i>0||(n.y+=i/2)}.bind(this)},r.createSpectorJs=function(){var t=(0,i.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.spectorJsFolder=this.defaultRoot.addFolder({title:"SpectorJs",expanded:!0}),this.spectorJs=new y,this.spectorJs.init(this.spectorJsFolder);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),r.createInspector=function(){var t=(0,i.Z)(s().mark((function t(e){var i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(961).then(n.bind(n,622));case 2:i=t.sent.default,this.inspector=new i,this.inspector.init(this.game,this.inspectorRoot,e);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),r.hide=function(){this.setEnable(!1)},r.show=function(){this.setEnable(!0)},r.toggleEnable=function(){this.setEnable(!this.isEnable)},r.setEnable=function(t){var e;void 0===t&&(t=!0),this.isEnable=t,this.pane.hidden=!t,null==(e=this.inspector)||e.setEnable(t)},r.update=function(){this.pane.refresh(),requestAnimationFrame(this.update.bind(this))},r.isOnMobile=function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},r.getFolder=function(){return this.defaultRoot},r.debug=function(t,e){for(var n=this.defaultRoot.addFolder({title:e||"Object"}),i=0,o=u()(t);i<o.length;i++){var r=o[i],s=r[0],a=r[1];"number"==typeof a||"boolean"==typeof a||"string"==typeof a?n.addInput(t,s):"function"==typeof a&&n.addButton({title:s}).on("click",t[s])}return n},r.addToggleButton=function(){var t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.right="0",t.style.width="50px",t.style.height="50px",t.style.zIndex="100",t.addEventListener("click",this.toggleEnable.bind(this)),document.body.appendChild(t)},e}(Phaser.Plugins.BasePlugin),x=b}}]);
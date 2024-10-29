"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach((function(e){_defineProperty(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _defineProperty(t,e,n){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var SAMPLE_ERROR=["INVALID_PARAM","SAME_CONTEXT","NETWORK_FAILURE","PENDING_REQUEST","CLIENT_UNSUPPORTED_OPERATION"];function getRandomError(){return SAMPLE_ERROR[Math.floor(SAMPLE_ERROR.length*Math.random())]}var playersData=[],useLog=!1,maxPlayers=playersData.length,pName="Default Name",pId="1",pASID="1",pPhoto="",pSignature="1",FBUtils={log:function(){var t;if(useLog){var e=[];e.push("[FBInstantMock Mock]:");for(var n=0;n<arguments.length;n++)e.push(arguments[n]);(t=console).log.apply(t,e)}},getQueryString:function(){var t={};return location.search&&location.search.substr(1).split("&").forEach((function(e){var n=e.split("="),o=n[0],r=n[1]&&decodeURIComponent(n[1]);(t[o]=t[o]||[]).push(r)})),t},returnAndLog:function(t){return FBUtils.log(t),t},returnUserData:function(t){return FBInstantMock.__mockState.initialized?FBUtils.returnAndLog(t):(FBUtils.log("User Data is not available until startGameAsync has resolved"),null)},getFromLocalStorage:function(t,e){return new Promise((function(n){var o=localStorage.getItem(t),r={};o&&(o=JSON.parse(o),e.forEach((function(t){"undefined"!==o[t]&&(r[t]=o[t])}))),FBUtils.log(r),n(r)}))},writeToLocalStorage:function(t,e){return new Promise((function(n){var o=_objectSpread(_objectSpread({},JSON.parse(localStorage.getItem(t))),e);FBUtils.log(JSON.stringify(o)),localStorage.setItem(t,JSON.stringify(o)),n()}))}},FBInstantMock={__mockState:{initialized:!1},leaderboard:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t+1;return e&&(n=15),{getRank:function(){return n},getScore:function(){return Math.floor(1e3/n)},getExtraData:function(){return JSON.stringify({})},getPlayer:function(){return FBInstantMock.leader(t,e)}}},leader:function(t,e){var n=Math.floor(Math.random()*Math.floor(200)),o=e?playersData[0]:{};return{getID:function(){return o.playerId||n},getName:function(){return o.name||"Bot ".concat(n)},getPhoto:function(){return o.photo||"https://api.adorable.io/avatars/285/".concat(n,"@adorable.png")}}},player:{getName:function(){return FBUtils.returnUserData(pName)},getPhoto:function(){return FBUtils.returnUserData(pPhoto)},getID:function(){return FBUtils.returnUserData(pId)},getASIDAsync:function(){return FBUtils.returnUserData(pASID)},getDataAsync:function(t){return FBUtils.log("player.getDataAsync"),FBUtils.getFromLocalStorage("fbPlayerData",t)},setDataAsync:function(t){return FBUtils.log("player.setDataAsync"),FBUtils.writeToLocalStorage("fbPlayerData",t)},flushDataAsync:function(){return new Promise((function(t){FBUtils.log("player.flushDataAsync"),FBUtils.writeToLocalStorage("fbPlayerData",{}).finally((function(){t()}))}))},getConnectedPlayersAsync:function(){return new Promise((function(t){var e=[];if(FBInstantMock.__mockState.initialized)for(var n=0;n<maxPlayers;n++){var o=playersData[n],r=o.playerId,i=o.name,a=o.photo;e.push({id:r,name:i,photo:a,getID:function(){return this.id},getName:function(){return this.name},getPhoto:function(){return this.photo}})}else FBUtils.log("getConnectedPlayersAsync","Connected players data is not available before startGameAsync resolves");FBUtils.log("getConnectedPlayersAsync","players: ",e),t(e)}))},getSignedPlayerInfoAsync:function(){return new Promise((function(t){t({getSignature:function(){return pSignature},getPlayerID:function(){return pId}})}))}},context:{id:FBUtils.getQueryString().context_source_id||"",type:FBUtils.getQueryString().context_type||"SOLO",getID:function(){return FBInstantMock.context.id},chooseAsync:function(){return new Promise((function(t,e){var n=createElementFromHTML('<div style="z-index: 1000000000; display: flex; align-items: center; height: 100%; width: 56vh;max-width:100vh; background-color: rgba(31, 120, 136, 0.48); position: absolute;margin:auto;left:0;right:0"></div'),o=(playersData.filter((function(t){return t.playerId!=pId})).map((function(e){var o=createElementFromHTML('<div style="cursor: pointer;width: 100%;height: 100px;background-color: rgb(255, 255, 255);color:black;display: flex;justify-content: space-evenly;align-items: center;z-index: inherit;"><div style="width: 85px;height: 85px;overflow: hidden;border-radius: 50%;"><img style="height:100%"src="'.concat(e.photo,'"/></div><p>').concat(e.name,'</p><button style="width:100px;height:70%;pointer-events:none">Play</button></div>\n                        '));return o.onclick=function(e){e.stopPropagation(),e.preventDefault(),FBUtils.log("context.chooseAsync"),FBInstantMock.context.id="123456789",FBInstantMock.context.type="THREAD",t(FBInstantMock.context.id),n.remove()},n.appendChild(o),o})),createElementFromHTML('<button style="width:100px;height:70px;cursor:pointer;position:absolute;right: 10px;top:10px">Close</button>'));o.onclick=function(t){t.stopPropagation(),t.preventDefault(),e({code:"USER_INPUT",message:"User close popup!"}),n.remove()},n.appendChild(o),FBUtils.log("context.chooseAsync"),FBInstantMock.context.id="123456789",FBInstantMock.context.type="THREAD",setTimeout((function(){100*Math.random()<window.GameCore.Configs.MatchMockFailRate?e({code:getRandomError(),message:"Random error"}):document.body.append(n)}),500)}))},switchAsync:function(t){return new Promise((function(e){FBUtils.log("context.switchAsync"),FBInstantMock.context.id=t,FBInstantMock.context.type="THREAD",e(t)}))},createAsync:function(){return new Promise((function(t,e){var n=playersData.filter((function(t){return t.playerId!=pId}))[0],o=createElementFromHTML('<div style="height: 40vh;width: 53vh;max-width: 95vw;position:absolute;background-color: rgba(31, 120, 136, 0.48);border-radius: 2vh;margin: auto;right: 0;left: 0;top: 0;bottom: 0;display: flex;flex-direction:column;justify-content:space-evenly;"><div style="display:flex; justify-content:center; width: 100%"><div style="width: 100px;height: 100px;overflow: hidden;border-radius: 50%;"><img style="height:100%"src="'.concat(pPhoto,'"/></div><div style="width: 100px;height: 100px;overflow: hidden;border-radius: 50%;"><img style="height:100%"src="').concat(n.photo,'"/></div></div><p style="color: white;font-size: 21px;text-align: center;margin: 10px 40px 10px 40px;">Send an invitation to play Game<br>through Messenger.</p></div>')),r=createElementFromHTML('<button style="border: none;background-color: #1877f2;color: #fff;width: 90%;height: 50px;border-radius: 15px;margin-left: auto;margin-right: auto;font-size: 20px;cursor: pointer;">Play</button>');r.onclick=function(e){e.stopPropagation(),e.preventDefault(),FBUtils.log("context.chooseAsync"),FBInstantMock.context.id="123456789",FBInstantMock.context.type="THREAD",t(FBInstantMock.context.id),o.remove()};var i=createElementFromHTML('<button style="border: none;background-color: #1877f2;color: #fff;width: 80px;height: 50px;font-size: 20px;cursor: pointer;position:absolute;top:10px;right:10px;border-radius: 10px;">Close</button>');i.onclick=function(t){t.stopPropagation(),t.preventDefault(),e({code:"USER_INPUT",message:"User close popup!"}),o.remove()},o.append(r),o.append(i),setTimeout((function(){100*Math.random()<window.GameCore.Configs.MatchMockFailRate?e({code:getRandomError(),message:"Random error"}):document.body.append(o)}),500)}))},getType:function(){return FBUtils.returnAndLog(FBInstantMock.context.type)},isSizeBetween:function(){return FBUtils.returnAndLog(!1)},getPlayersAsync:function(){return new Promise((function(t){var e=playersData.map((function(t){return{getID:function(){return t.playerId},getName:function(){return t.name},getPhoto:function(){return t.photo}}}));FBUtils.log("context.getPlayersAsync","players: ",e),t(e)}))}},getLocale:function(){return new URL(document.location).searchParams.get("lang")||"vi_VN"},initializeAsync:function(){var t,e,n,o,r=(null===(t=window.GameCore)||void 0===t||null===(e=t.Configs)||void 0===e?void 0:e.PlayerMock)||{},i=(null===(n=window.GameCore)||void 0===n||null===(o=n.Configs)||void 0===o?void 0:o.OpponentMock)||{};playersData=[{name:r.name||"Mock1",photo:r.photo||"https://reqres.in/img/faces/2-image.jpg",playerId:r.id||"1",signature:r.signature||"1"},{name:i.name||"Mock2",photo:i.photo||"https://reqres.in/img/faces/3-image.jpg",playerId:i.id||"2",signature:i.signature||"2"}];var a=FBUtils.getQueryString(),c=0;return a.playerId&&a.playerId[0]===playersData[1].playerId&&(c=1),maxPlayers=playersData.length,pName=playersData[c].name,pId=playersData[c].playerId,pPhoto=playersData[c].photo,pSignature=playersData[c].signature,new Promise((function(t){FBUtils.log("initializeAsync"),FBInstantMock.__mockState.initialized=!0,t()}))},setLoadingProgress:function(){},startGameAsync:function(){return new Promise((function(t){FBUtils.log("startGameAsync","Showing game start dialog"),FBInstantMock.__mockState.initialized=!0,t()}))},quit:function(){FBUtils.log("QUIT was called. At this point the game will exit")},updateAsync:function(t){return logMessage(t.data||{}),new Promise((function(e,n){FBUtils.log("updateAsync"),t.image?e():n()}))},getEntryPointData:function(){var t=FBUtils.getQueryString();return FBUtils.log("getEntryPointData","query string: ",t,"entry point data: ",t.entryPointData),t.entryPointData?JSON.parse(decodeURIComponent(t.entryPointData[0])):null},getEntryPointAsync:function(){return new Promise((function(t){t("admin_message")}))},setSessionData:function(t){FBUtils.log("setSessionData","Object to be persisted",t,"(Please note, while using the mock SDK, setSessionData will have no effect.)")},getPlatform:function(){var t="undefined"==typeof window?"":window.navigator.userAgent.toLowerCase(),e=function(e){return-1!==t.indexOf(e)},n={windows:function(){return e("windows")},blackberry:function(){return e("blackberry")||e("bb10")||e("rim")},fxos:function(){return(e("(mobile")||e("(tablet"))&&e(" rv:")},androidPhone:function(){return n.android()&&e("mobile")},androidTablet:function(){return n.android()&&!e("mobile")},blackberryPhone:function(){return n.blackberry()&&!e("tablet")},blackberryTablet:function(){return n.blackberry()&&e("tablet")},fxosPhone:function(){return n.fxos()&&e("mobile")},fxosTablet:function(){return n.fxos()&&e("tablet")},iphone:function(){return!n.windows()&&e("iphone")},ipad:function(){return e("ipad")},ipod:function(){return e("ipod")},meego:function(){return e("meego")},windowsPhone:function(){return n.windows()&&e("phone")},windowsTablet:function(){return n.windows()&&e("touch")&&!n.windowsPhone()},android:function(){return!n.windows()&&e("android")},ios:function(){return n.iphone()||n.ipod()||n.ipad()},mobile:function(){return n.androidPhone()||n.iphone()||n.ipod()||n.windowsPhone()||n.blackberryPhone()||n.fxosPhone()||n.meego()},tablet:function(){return n.ipad()||n.androidTablet()||n.blackberryTablet()||n.windowsTablet()||n.fxosTablet()}};if(n.ios())return"IOS";if(n.android())return"ANDROID";var o=n.mobile(),r=n.tablet();return o||r?"MOBILE_WEB":"WEB"},getSDKVersion:function(){return"6.3"},getSupportedAPIs:function(){var t=[];for(var e in FBInstantMock)t.push(e);for(var n in FBInstantMock.player)t.push("player.".concat(n));for(var o in FBInstantMock.context)t.push("context.".concat(o));return t},shareAsync:function(){return!0},switchGameAsync:function(){return Promise.reject(new Error("FBInstantMock.switchAsync is not available in the Mocked SDK."))},logEvent:function(){return null},onPause:function(t){window.onblur=function(){FBUtils.log("onPause","Interruption event triggered"),t()}},getLeaderboardAsync:function(){return Promise.resolve({getEntriesAsync:function(t,e){for(var n=[],o=0;o++;o<t)n.push(FBInstantMock.leaderboard(o+e));return Promise.resolve(n)},getConnectedPlayerEntriesAsync:function(t,e){for(var n=[],o=0;o++;o<t)n.push(FBInstantMock.leaderboard(o+e));return Promise.resolve(n)},getPlayerEntryAsync:function(){return Promise.resolve(FBInstantMock.leaderboard(0,!0))},setScoreAsync:function(){return Promise.resolve(FBInstantMock.leaderboard(0,!0))}})},postSessionScoreAsync:function(){return Promise.resolve()},loadBannerAdAsync:function(){return Promise.resolve},hideBannerAdAsync:function(){return Promise.resolve}};window.FBInstant=FBInstantMock;var decode=function(t){var e={};return t.split("&").each((function(t){var n=t.split("="),o=n[0],r=unescape(n[1]);if(/\[\w+\]/.test(o)){var i=/\[(\w+)\]/g,a=/^([^\\[]+)/.exec(o)[0],c=i.exec(o);e[a]||(e[a]={});!function t(e){if(null!=c){var n=c[1];c=i.exec(o),e[n]||(e[n]=c?{}:r),t(e[n])}}(e[a])}else/\[\]$/.test(o)?(o=/(^\w+)/.exec(o)[0],e[o]||(e[o]=[]),e[o].push(r)):e[o]=r})),e},encode=function(t){return encodeURIComponent(JSON.stringify(t))},logMessage=function(t){var e=playersData[0].playerId===pId?playersData[1].playerId:playersData[0].playerId;console.log("Link to receive message: \n".concat(document.location.origin+document.location.pathname,"?playerId=").concat(e,"&context_source_id=123456789&context_type=THREAD&entryPointData=").concat(encode(t),"}"))};function createElementFromHTML(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild}
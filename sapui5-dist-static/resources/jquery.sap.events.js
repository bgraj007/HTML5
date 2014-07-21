/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("jquery.sap.events",false);jQuery.sap.require("jquery.sap.keycodes");(function(){jQuery.sap._touchToMouseEvent=true;var o,a,b,c,d,m,I=false;if(!!sap.ui.Device.browser.webkit&&/Mobile/.test(navigator.userAgent)&&"ontouchend"in document){I=true;var s=(function(){var e=window.document,H=false,t=null,j=false,n,p,i=0;m=["mousedown","mouseover","mouseup","mouseout","click"];var q=function(T,E){if(!H){return}var M=E.type=="touchend"?E.changedTouches[0]:E.touches[0];var u=e.createEvent('MouseEvent');u.initMouseEvent(T,true,true,window,E.detail,M.screenX,M.screenY,M.clientX,M.clientY,E.ctrlKey,E.shiftKey,E.altKey,E.metaKey,E.button,E.relatedTarget);u.isSynthetic=true;window.setTimeout(function(){t.dispatchEvent(u)},0)};var r=function(E){return E.target.tagName.match(/input|textarea|select/i)};d=function(E){if(!E.isSynthetic&&!r(E)){E.stopPropagation();E.preventDefault()}};o=function(E){var T=E.touches,u;H=(T.length==1&&!r(E));if(H){j=false;u=T[0];t=u.target;if(t.nodeType==3){t=t.parentNode}n=u.clientX;p=u.clientY;q("mousedown",E)}};a=function(E){var T;if(H){T=E.touches[0];if(Math.abs(T.clientX-n)>10||Math.abs(T.clientY-p)>10){j=true}if(j){q("mousemove",E)}}};b=function(E){q("mouseup",E);if(!j){q("click",E)}};c=function(E){q("mouseup",E)};for(;i<m.length;i++){e.addEventListener(m[i],d,true)}e.addEventListener('touchstart',o,true);e.addEventListener('touchmove',a,true);e.addEventListener('touchend',b,true);e.addEventListener('touchcancel',c,true)}())}jQuery.sap.disableTouchToMouseHandling=function(){var i=0;if(!I){return}document.removeEventListener('touchstart',o,true);document.removeEventListener('touchmove',a,true);document.removeEventListener('touchend',b,true);document.removeEventListener('touchcancel',c,true);for(;i<m.length;i++){document.removeEventListener(m[i],d,true)}};jQuery.sap.ControlEvents=["click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseout","mouseover","mouseup","select","selectstart","dragstart","dragenter","dragover","dragleave","dragend","drop","paste","cut"];jQuery.sap.PseudoEvents={sapdown:{sName:"sapdown",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN&&!k(e)}},sapdownmodifiers:{sName:"sapdownmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN&&k(e)}},sapshow:{sName:"sapshow",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==jQuery.sap.KeyCodes.F4&&!k(e))||(e.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN&&h(e,false,true,false))}},sapup:{sName:"sapup",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_UP&&!k(e)}},sapupmodifiers:{sName:"sapupmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_UP&&k(e)}},saphide:{sName:"saphide",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_UP&&h(e,false,true,false)}},sapleft:{sName:"sapleft",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_LEFT&&!k(e)}},sapleftmodifiers:{sName:"sapleftmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_LEFT&&k(e)}},sapright:{sName:"sapright",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_RIGHT&&!k(e)}},saprightmodifiers:{sName:"saprightmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ARROW_RIGHT&&k(e)}},saphome:{sName:"saphome",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.HOME&&!k(e)}},saphomemodifiers:{sName:"saphomemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.HOME&&k(e)}},saptop:{sName:"saptop",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.HOME&&h(e,true,false,false)}},sapend:{sName:"sapend",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.END&&!k(e)}},sapendmodifiers:{sName:"sapendmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.END&&k(e)}},sapbottom:{sName:"sapbottom",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.END&&h(e,true,false,false)}},sappageup:{sName:"sappageup",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.PAGE_UP&&!k(e)}},sappageupmodifiers:{sName:"sappageupmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.PAGE_UP&&k(e)}},sappagedown:{sName:"sappagedown",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.PAGE_DOWN&&!k(e)}},sappagedownmodifiers:{sName:"sappagedownmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.PAGE_DOWN&&k(e)}},sapselect:{sName:"sapselect",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==jQuery.sap.KeyCodes.ENTER||e.keyCode==jQuery.sap.KeyCodes.SPACE)&&!k(e)}},sapselectmodifiers:{sName:"sapselectmodifiers",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==jQuery.sap.KeyCodes.ENTER||e.keyCode==jQuery.sap.KeyCodes.SPACE)&&k(e)}},sapspace:{sName:"sapspace",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.SPACE&&!k(e)}},sapspacemodifiers:{sName:"sapspacemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.SPACE&&k(e)}},sapenter:{sName:"sapenter",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ENTER&&!k(e)}},sapentermodifiers:{sName:"sapentermodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ENTER&&k(e)}},sapbackspace:{sName:"sapbackspace",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.BACKSPACE&&!k(e)}},sapbackspacemodifiers:{sName:"sapbackspacemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.BACKSPACE&&k(e)}},sapdelete:{sName:"sapdelete",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.DELETE&&!k(e)}},sapdeletemodifiers:{sName:"sapdeletemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.DELETE&&k(e)}},sapexpand:{sName:"sapexpand",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.NUMPAD_PLUS&&!k(e)}},sapexpandmodifiers:{sName:"sapexpandmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.NUMPAD_PLUS&&k(e)}},sapcollapse:{sName:"sapcollapse",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.NUMPAD_MINUS&&!k(e)}},sapcollapsemodifiers:{sName:"sapcollapsemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.NUMPAD_MINUS&&k(e)}},sapcollapseall:{sName:"sapcollapseall",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.NUMPAD_ASTERISK&&!k(e)}},sapescape:{sName:"sapescape",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.ESCAPE&&!k(e)}},saptabnext:{sName:"saptabnext",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.TAB&&!k(e)}},saptabprevious:{sName:"saptabprevious",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.TAB&&h(e,false,false,true)}},sapskipforward:{sName:"sapskipforward",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.F6&&!k(e)}},sapskipback:{sName:"sapskipback",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==jQuery.sap.KeyCodes.F6&&h(e,false,false,true)}},sapdecrease:{sName:"sapdecrease",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?jQuery.sap.KeyCodes.ARROW_RIGHT:jQuery.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==p||e.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN)&&!k(e)}},sapdecreasemodifiers:{sName:"sapdecreasemodifiers",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?jQuery.sap.KeyCodes.ARROW_RIGHT:jQuery.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==p||e.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN)&&k(e)}},sapincrease:{sName:"sapincrease",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var n=r?jQuery.sap.KeyCodes.ARROW_LEFT:jQuery.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==n||e.keyCode==jQuery.sap.KeyCodes.ARROW_UP)&&!k(e)}},sapincreasemodifiers:{sName:"sapincreasemodifiers",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var n=r?jQuery.sap.KeyCodes.ARROW_LEFT:jQuery.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==n||e.keyCode==jQuery.sap.KeyCodes.ARROW_UP)&&k(e)}},sapprevious:{sName:"sapprevious",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?jQuery.sap.KeyCodes.ARROW_RIGHT:jQuery.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==p||e.keyCode==jQuery.sap.KeyCodes.ARROW_UP)&&!k(e)}},sappreviousmodifiers:{sName:"sappreviousmodifiers",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?jQuery.sap.KeyCodes.ARROW_RIGHT:jQuery.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==p||e.keyCode==jQuery.sap.KeyCodes.ARROW_UP)&&k(e)}},sapnext:{sName:"sapnext",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var n=r?jQuery.sap.KeyCodes.ARROW_LEFT:jQuery.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==n||e.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN)&&!k(e)}},sapnextmodifiers:{sName:"sapnextmodifiers",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var n=r?jQuery.sap.KeyCodes.ARROW_LEFT:jQuery.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==n||e.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN)&&k(e)}},sapdelayeddoubleclick:{sName:"sapdelayeddoubleclick",aTypes:["click"],fnCheck:function(e){var i=jQuery(e.target);var j=e.timeStamp;var n=i.data("sapdelayeddoubleclick_lastClickTimestamp");var p=n||0;i.data("sapdelayeddoubleclick_lastClickTimestamp",j);var q=j-p;return(q>=300&&q<=1300)}}};var P=["sapdown","sapdownmodifiers","sapshow","sapup","sapupmodifiers","saphide","sapleft","sapleftmodifiers","sapright","saprightmodifiers","saphome","saphomemodifiers","saptop","sapend","sapendmodifiers","sapbottom","sappageup","sappageupmodifiers","sappagedown","sappagedownmodifiers","sapselect","sapselectmodifiers","sapspace","sapspacemodifiers","sapenter","sapentermodifiers","sapexpand","sapbackspace","sapbackspacemodifiers","sapdelete","sapdeletemodifiers","sapexpandmodifiers","sapcollapse","sapcollapsemodifiers","sapcollapseall","sapescape","saptabnext","saptabprevious","sapskipforward","sapskipback","sapprevious","sappreviousmodifiers","sapnext","sapnextmodifiers","sapdecrease","sapdecreasemodifiers","sapincrease","sapincreasemodifiers","sapdelayeddoubleclick"];(function initTouchEventSupport(){function e(){var C="xx-test-mobile";var p=window["sap-ui-config"];var q=document.location.search.indexOf("sap-ui-"+C)>-1||(p&&p[C]);q=q||(document.location.search.indexOf("sap-ui-xx-fakeOS")>-1||!!jQuery.sap.byId("sap-ui-bootstrap").attr("data-sap-ui-xx-fakeOS"));var L=jQuery.sap.byId("sap-ui-bootstrap").attr("data-sap-ui-libs");q=q||(L&&L.match(/sap.m\b/));return q}jQuery.sap.touchEventMode="OFF";var A=[];var j=[];if(sap.ui.Device.support.touch){jQuery.sap.touchEventMode="ON";jQuery.event.props.push("touches","targetTouches","changedTouches");A.push("touchstart","touchend","touchmove","touchcancel")}else if(e()){jQuery.sap.touchEventMode="SIM";jQuery.sap.log.warning("MOBILE TOUCH EVENT TEST MODE ACTIVE","","jQuery.sap.events");var n=function(N,O){var H="__"+N+"Handler";var p="sap"+N;A.push(p);j.push({sName:N,aTypes:[p],fnCheck:function(E){return true}});jQuery.event.special[p]={add:function(q){var t=this,$=jQuery(this);var r=function(E){if(!(E.type!="mouseout"||(E.type==="mouseout"&&jQuery.sap.checkMouseEnterOrLeave(E,t)))){var u=true;var C=$.data("__touchstart_control");if(C){var v=jQuery.sap.domById(C);if(v&&jQuery.sap.checkMouseEnterOrLeave(E,v)){u=false}}if(u){return}}var w=jQuery.event.fix(E.originalEvent);w.type=p;if(w.originalEvent._sapui_firstUIArea){w.originalEvent._sapui_handledByUIArea=false}var T=[{identifier:1,pageX:w.pageX,pageY:w.pageY,clientX:w.clientX,clientY:w.clientY,screenX:w.screenX,screenY:w.screenY,target:w.target,radiusX:1,radiusY:1,rotationAngle:0}];switch(N){case"touchstart":case"touchmove":w.touches=w.changedTouches=w.targetTouches=T;break;case"touchend":w.changedTouches=T;w.touches=w.targetTouches=[];break}if(N==="touchstart"||$.data("__touch_in_progress")){$.data("__touch_in_progress","X");var x=jQuery.fn.control?jQuery(E.target).control(0):null;if(x){$.data("__touchstart_control",x.getId())}q.handler.call(t,w);if(N==="touchend"){$.removeData("__touch_in_progress");$.removeData("__touchstart_control")}}};$.data(H+q.guid,r);for(var i=0;i<O.length;i++){$.bind(O[i],r)}},remove:function(q){var $=jQuery(this);var r=$.data(H+q.guid);$.removeData(H+q.guid);for(var i=0;i<O.length;i++){jQuery.event.remove(this,O[i],r)}}}};n("touchstart",["mousedown"]);n("touchend",["mouseup","mouseout"]);n("touchmove",["mousemove"])}if(jQuery.sap.touchEventMode!="OFF"){jQuery.sap.require("sap.ui.thirdparty.jquery-mobile-custom");A.push("swipe","tap","swipeleft","swiperight","scrollstart","scrollstop");j.push({sName:"swipebegin",aTypes:["swipeleft","swiperight"],fnCheck:function(E){var r=sap.ui.getCore().getConfiguration().getRTL();return(r&&E.type==="swiperight")||(!r&&E.type==="swipeleft")}});j.push({sName:"swipeend",aTypes:["swipeleft","swiperight"],fnCheck:function(E){var r=sap.ui.getCore().getConfiguration().getRTL();return(!r&&E.type==="swiperight")||(r&&E.type==="swipeleft")}});jQuery.sap.ControlEvents=jQuery.sap.ControlEvents.concat(A);for(var i=0;i<j.length;i++){jQuery.sap.PseudoEvents[j[i].sName]=j[i];P.push(j[i].sName)}}}());function f(){var e=jQuery.sap.PseudoEvents;var r=[];for(var n in e){if(e[n].aTypes){for(var j=0,i=e[n].aTypes.length;j<i;j++){var t=e[n].aTypes[j];if(jQuery.inArray(t,r)==-1){r.push(t)}}}}return r}var g=f();function h(e,C,A,i){return e.shiftKey==i&&e.altKey==A&&l(e)==C}function k(e){return e.shiftKey||e.altKey||l(e)}function l(e){return!!(e.metaKey||e.ctrlKey)}jQuery.Event.prototype.getPseudoTypes=function(){var p=[];if(jQuery.inArray(this.type,g)!=-1){var e=P;var j=e.length;var n=null;for(var i=0;i<j;i++){n=jQuery.sap.PseudoEvents[e[i]];if(n.aTypes&&jQuery.inArray(this.type,n.aTypes)>-1&&n.fnCheck&&n.fnCheck(this)){p.push(n.sName)}}}this.getPseudoTypes=function(){return p.slice()};return p.slice()};jQuery.Event.prototype.isPseudoType=function(t){var p=this.getPseudoTypes();if(t){return jQuery.inArray(t,p)>-1}else{return p.length>0}};var _=jQuery.Event.prototype.preventDefault;jQuery.Event.prototype.preventDefault=function(){_.apply(this,arguments);var e=this.originalEvent;if(!e){return}if(e.keyCode!=0){try{if(!!!sap.ui.Device.browser.firefox){e.keyCode=0}}catch(i){}}};jQuery.sap.bindAnyEvent=function bindAnyEvent(C){if(C){jQuery(document).bind(jQuery.sap.ControlEvents.join(" "),C)}};jQuery.sap.unbindAnyEvent=function unbindAnyEvent(C){if(C){jQuery(document).unbind(jQuery.sap.ControlEvents.join(" "),C)}};jQuery.sap.checkMouseEnterOrLeave=function checkMouseEnterOrLeave(E,D){if(E.type!="mouseover"&&E.type!="mouseout"){return false}var i=false;var j=D;var p=E.relatedTarget;try{while(p&&p!==j){p=p.parentNode}if(p!==j){i=true}}catch(e){}return i};jQuery.Event.prototype.getOffsetX=function(){if(this.type=='click'){if(this.offsetX){return this.offsetX}if(this.layerX){return this.layerX}if(this.originalEvent.layerX){return this.originalEvent.layerX}}return 0};jQuery.Event.prototype.getOffsetY=function(){if(this.type=='click'){if(this.offsetY){return this.offsetY}if(this.layerY){return this.layerY}if(this.originalEvent.layerY){return this.originalEvent.layerY}}return 0};var S=jQuery.Event.prototype.stopImmediatePropagation;jQuery.Event.prototype.stopImmediatePropagation=function(e){S.apply(this,arguments);if(e){this._bIsStopHandlers=true}};jQuery.Event.prototype.isImmediateHandlerPropagationStopped=function(){return!!this._bIsStopHandlers}}());
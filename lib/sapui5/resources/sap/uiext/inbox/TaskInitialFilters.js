/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.TaskInitialFilters");jQuery.sap.require("sap.uiext.inbox.InboxUtils");sap.ui.base.Object.extend("sap.uiext.inbox.TaskInitialFilters",{constructor:function(s,p,d,t,D){sap.ui.base.Object.apply(this);this.aStatusFilters=s?s:[];this.aPriorityFilters=p?p:[];this.sDateTimeFilter=d;this.aTaskTypeFilters=t?t:[];this.sDueDateTimeFilter=D;this.aFiltersTobeApplied=[];this.sProviderHost="";this.inboxUtils=sap.uiext.inbox.InboxUtils}});
sap.uiext.inbox.TaskInitialFilters.prototype.getFiltersTobeApplied=function(){var f=sap.uiext.inbox.TaskInitialFilters.FILTERSTOAPPLYMAP;var I={};var F=[];for(var i=0;i<this.aStatusFilters.length;i++){var a=f.filters.filterStatus;if(a[this.aStatusFilters[i]]!==undefined){var s=this.inboxUtils._getStatusFilters(this.aStatusFilters[i],this.getProviderHost());I[a[this.aStatusFilters[i]]]=s;F.push(s)}}for(var i=0;i<this.aPriorityFilters.length;i++){var b=f.filters.filterPriority;if(b[this.aPriorityFilters[i]]){var p=this.inboxUtils._getPriorityFilters(this.aPriorityFilters[i],this.getProviderHost());I[b[this.aPriorityFilters[i]]]=p;F.push(p)}}if(this.sDateTimeFilter!==null&&this.sDateTimeFilter!==undefined){var c=f.filters.filterDateTime;if(c[this.sDateTimeFilter]){var d=this.inboxUtils._getDateTimeFilters(this.sDateTimeFilter,this.getProviderHost());I[c[this.sDateTimeFilter]]=d;F.push(d)}}for(var i=0;i<this.aTaskTypeFilters.length;i++){var t=new sap.ui.model.Filter("TaskName",sap.ui.model.FilterOperator.EQ,this.aTaskTypeFilters[i]);I[this.aTaskTypeFilters[i]]=t;F.push(t)}if(this.sDueDateTimeFilter!==null&&this.sDueDateTimeFilter!==undefined){var e=f.filters.filterDueDateTime;if(e[this.sDueDateTimeFilter]){var g=this.inboxUtils._getDueDateFilters(this.sDueDateTimeFilter,this.getProviderHost());I[e[this.sDueDateTimeFilter]]=g;F.push(g)}}var T=[];for(var i=0;i<F.length;i++){var h=F[i];if(jQuery.isArray(h)){T=T.concat(h)}else T.push(h)}return{filterOperatorArray:T,filtersAppliedMap:I}};
sap.uiext.inbox.TaskInitialFilters.prototype.getAttributesTobeSelected=function(){var f=sap.uiext.inbox.TaskInitialFilters.FILTERMAP;var s=[];var p=[];var d=[];var t=[];var D=[];for(var i=0;i<this.aStatusFilters.length;i++){var a=f.filters.filterStatus;if(a[this.aStatusFilters[i]])s.push(a[this.aStatusFilters[i]])}for(var i=0;i<this.aPriorityFilters.length;i++){var b=f.filters.filterPriority;if(b[this.aPriorityFilters[i]])p.push(b[this.aPriorityFilters[i]])}if(this.sDateTimeFilter!==null&&this.sDateTimeFilter!==undefined){var c=f.filters.filterDateTime;if(c[this.sDateTimeFilter])d.push(c[this.sDateTimeFilter])}for(var i=0;i<this.aTaskTypeFilters.length;i++){var e=this.aTaskTypeFilters[i];if(e){e=e.replace(/-/g,"--");e=e.replace(/\s+/g,"-");if(!(/^([A-Za-z_][-A-Za-z0-9_.:]*)$/.test(e))){if(/^[^A-Za-z_]/.test(e)){e=e.replace(/^[^A-Za-z_]/,"_")}e.replace(/[^-\w_.:]/g,"_")}t.push(e)}}if(this.sDueDateTimeFilter!==null&&this.sDueDateTimeFilter!==undefined){var g=f.filters.filterDueDateTime;if(g[this.sDueDateTimeFilter])D.push(g[this.sDueDateTimeFilter])}return{statusAtts:s,prioAtts:p,dateAtts:d,taskTypeAtts:t,dueDateAtts:D}};
sap.uiext.inbox.TaskInitialFilters.FILTERMAP={filters:{filterStatus:{READY:"INBOX_FILTER_STATUS_READY",RESERVED:"INBOX_FILTER_STATUS_RESERVED",IN_PROGRESS:"INBOX_FILTER_STATUS_IN_PROGRESS"},filterPriority:{LOW:"INBOX_FILTER_PRIORITY_LOW",MEDIUM:"INBOX_FILTER_PRIORITY_MEDIUM",HIGH:"INBOX_FILTER_PRIORITY_HIGH",VERY_HIGH:"INBOX_FILTER_PRIORITY_VERY_HIGH"},filterDateTime:{Today:"INBOX_FILTER_DATETIME_TODAY",Last_7_days:"INBOX_FILTER_DATETIME_WEEK",Last_15_days:"INBOX_FILTER_DATETIME_15DAYS",Last_30_days:"INBOX_FILTER_DATETIME_MONTH"},filterDueDateTime:{Today:"INBOX_FILTER_DUE_DATETIME_TODAY",Next_7_days:"INBOX_FILTER_DUE_DATETIME_WEEK",Next_15_days:"INBOX_FILTER_DUE_DATETIME_15DAYS",Next_30_days:"INBOX_FILTER_DUE_DATETIME_MONTH"}}};
sap.uiext.inbox.TaskInitialFilters.prototype.setProviderHost=function(p){this.sProviderHost=p};
sap.uiext.inbox.TaskInitialFilters.prototype.getProviderHost=function(){return this.sProviderHost};
sap.uiext.inbox.TaskInitialFilters.FILTERSTOAPPLYMAP={filters:{filterStatus:{READY:"readyStat",RESERVED:"resStat",IN_PROGRESS:"InProStat"},filterPriority:{LOW:"lowPrio",MEDIUM:"medPrio",HIGH:"hiPrio",VERY_HIGH:"veryhiPrio"},filterDateTime:{Today:"today",Last_7_days:"last7",Last_15_days:"last15",Last_30_days:"last30"},filterDueDateTime:{Today:"dueDateToday",Next_7_days:"dueDatenext7",Next_15_days:"dueDatenext15",Next_30_days:"dueDatenext30"}}};
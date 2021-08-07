if (self.CavalryLogger) { CavalryLogger.start_js(["AfgCrKO"]); }

__d("CometVideoHomeFeedRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4127233840647899",metadata:{},name:"CometVideoHomeFeedRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGranularTimestamp.react",["fbt","CometTimestamp.react","formatDate","react","useServerTime"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=1e3*60*60,k=j*24;function l(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}function a(a){var b=a.date;a=a.granularity;a=a===void 0?"none":a;var d=c("useServerTime")();if(a==="none"||a==="min")return i.jsx(c("CometTimestamp.react"),{date:b});if(a==="hour"){var e=b.valueOf()%j;e=new Date(b.valueOf()-e);return i.jsx(c("CometTimestamp.react"),{date:e})}if(a==="year")return c("formatDate")(b,"Y");if(a==="month")return d.getFullYear()===b.getFullYear()?c("formatDate")(b,"F"):c("formatDate")(b,"F Y");if(l(b,d))return h._("Today");e=new Date(d.valueOf()-k);if(l(b,e))return h._("Yesterday");a=new Date(d.valueOf()+k);if(l(b,a))return h._("Tomorrow");return d.getFullYear()!==b.getFullYear()?c("formatDate")(b,"F j, Y"):c("formatDate")(b,"F j")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoHomeCommonEntryPointVariables",["WebPixelRatio","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";a={UFI2CommentsProvider_commentsKey:null,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"VIDEO_HOME_FEED",feedbackSource:60,focusCommentID:null,isComet:c("gkx")("708253"),isCommunityViewEntryPointEnabled:!!c("qex")._("1571809"),privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_home",scale:d("WebPixelRatio").get(),useCommentsEntryPoint:c("gkx")("1679116"),useDashPrefetch:!1,useDefaultActor:!1};g["default"]=a}),98);
__d("CometVideoHomeFeedEntryPointVariables",["CometVideoHomeCommonEntryPointVariables"],(function(a,b,c,d,e,f,g){"use strict";a=babelHelpers["extends"]({},c("CometVideoHomeCommonEntryPointVariables"),{UFI2CommentsProvider_commentsKey:"CometVideoHomeFeedRootQuery",triggerData:{injected_video_id:null}});g["default"]=a}),98);
__d("CometVideoHomeFeedRoot.entrypoint",["CometVideoHomeFeedEntryPointVariables","CometVideoHomeFeedRootQuery$Parameters","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint","cr:1714516"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1714516");a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef("CometVideoHomeFeedRoot.entrypoint"),function(a){return{queries:{feedRootQueryReference:{options:{fetchPolicy:"network-only"},parameters:b("CometVideoHomeFeedRootQuery$Parameters"),variables:c("CometVideoHomeFeedEntryPointVariables")}}}});g["default"]=a}),98);
__d("CometVideoHomeFeedRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";c("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef("CometVideoHomeFeedRootBEOneAhead");a=null;g["default"]=a}),98);
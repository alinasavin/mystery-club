if (self.CavalryLogger) { CavalryLogger.start_js(["yYpAhdO"]); }

__d("CometFeedStoryIdentityBadgeStrategy_identityBadge$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometFeedStoryIdentityBadgeStrategy_identityBadge$normalization",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"IdentityBadge",kind:"LinkedField",name:"identity_badges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"badge_asset",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"identity_badge_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"information_title",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometFeedStoryIdentityBadgeStrategy_identityBadge.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryIdentityBadgeStrategy_identityBadge",selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"IdentityBadge",kind:"LinkedField",name:"identity_badges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"badge_asset",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"identity_badge_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"information_title",storageKey:null}],storageKey:null}],storageKey:null}],type:"CometStoryIdentityBadgeStrategy",abstractKey:null};e.exports=a}),null);
__d("CometTopChartsCitiesGridQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3508449332592513",metadata:{},name:"CometTopChartsCitiesGridQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometFeedStoryIdentityBadgeStrategy.react",["CometFeedStoryIdentityBadgeStrategy_identityBadge.graphql","CometImage.react","CometRelay","TetraText.react","react","unrecoverableViolation","useCometFeedStoryMatchDebugger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={badge:{marginBottom:"mkjtxrlb",paddingEnd:"ph5uu5jm"}};function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedStoryIdentityBadgeStrategy_identityBadge.graphql"),a.identityBadge);c("useCometFeedStoryMatchDebugger")(a);a=(a=a.story)==null?void 0:a.identity_badges;a=a&&a.find(function(a){return a.identity_badge_type==="favorite"});if(!a)throw c("unrecoverableViolation")("Favorites badge was expected","comet_feed");return i.jsxs(i.Fragment,{children:[i.jsx(c("CometImage.react"),{height:12,src:a.badge_asset||"",width:12,xstyle:j.badge}),i.jsx(c("TetraText.react"),{type:"meta1",children:a.information_title})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
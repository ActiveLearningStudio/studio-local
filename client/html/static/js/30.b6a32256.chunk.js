(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[30],{383:function(t,e,n){"use strict";var o=n(7),r=n(3),i=n.n(r),c=n(17),a=n.n(c);e.a=function(t){return i.a.forwardRef((function(e,n){return i.a.createElement("div",Object(o.a)({},e,{ref:n,className:a()(e.className,t)}))}))}},388:function(t,e,n){"use strict";var o=n(7),r=n(10),i=n(9),c=n.n(i),a=n(3),s=n.n(a),u=n(17),l=n.n(u),d=["label","onClick","className"],f={label:c.a.string.isRequired,onClick:c.a.func},p=s.a.forwardRef((function(t,e){var n=t.label,i=t.onClick,c=t.className,a=Object(r.a)(t,d);return s.a.createElement("button",Object(o.a)({ref:e,type:"button",className:l()("close",c),onClick:i},a),s.a.createElement("span",{"aria-hidden":"true"},"\xd7"),s.a.createElement("span",{className:"sr-only"},n))}));p.displayName="CloseButton",p.propTypes=f,p.defaultProps={label:"Close"},e.a=p},392:function(t,e,n){"use strict";n.d(e,"h",(function(){return I})),n.d(e,"b",(function(){return k})),n.d(e,"f",(function(){return S})),n.d(e,"g",(function(){return C})),n.d(e,"k",(function(){return E})),n.d(e,"j",(function(){return N})),n.d(e,"c",(function(){return T})),n.d(e,"i",(function(){return _})),n.d(e,"d",(function(){return P})),n.d(e,"l",(function(){return L})),n.d(e,"e",(function(){return M})),n.d(e,"a",(function(){return U}));var o=n(0),r=n(4),i=n.n(r),c=n(6),a=n(8),s=n.n(a),u=n(59),l=n(44),d=n.n(l),f=n(25),p=n(5),m=f.a.apiVersion,h="https://classroom.googleapis.com/v1",g=function(t){return d()({method:"get",url:"".concat(h,"/userProfiles/me"),headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){return t}))},v=function(t){return d()({method:"get",url:"".concat(h,"/courses"),params:{courseStates:"ACTIVE"},headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){return t}))},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return p.a.get("/".concat(m,"/google-classroom/activities/").concat(t,"/h5p-resource-settings"),{},{gcuid:e,submissionid:n}).then((function(t){return t.data})).catch((function(t){Promise.reject(t.response.data),s.a.fire({title:"Error",icon:"error",html:t.message||"Something went wrong! We are unable to load activity."})}))},y=function(t,e,n){return p.a.post("/".concat(m,"/google-classroom/classwork/").concat(t,"/submission"),{course_id:e,access_token:n}).then((function(t){return t.data})).catch((function(t){return Promise.reject(t.response.data)}))},j=function(t,e,n){return p.a.post("/".concat(m,"/google-classroom/turnin/").concat(t),{course_id:e,access_token:n}).then((function(t){return t.data})).catch((function(t){return Promise.reject(t.response.data)}))},w=function(t,e,n,o){return p.a.post("/".concat(m,"/google-classroom/validate-summary-access"),{course_id:e,access_token:t,gc_classwork_id:n,gc_submission_id:o}).then((function(t){return t.data})).catch((function(t){return t.response.data}))},O=function(t,e){return p.a.post("/".concat(m,"/outcome/summary"),{actor:t,activity:e}).then((function(t){return t.data})).catch((function(t){return t&&t.response&&t.response.data&&t.response.data.errors?t.response.data:(console.log("Unexpected error in summary endpoint:"),console.log(t),null)}))},x=n(1),I=function(t){return{type:x.rc,value:t}},k=function(){},S=function(t){return function(){var e=Object(c.a)(i.a.mark((function e(n){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(I(!0)),e.prev=1,e.next=4,u.a.googleShareToken(JSON.stringify(t.tokenObj));case 4:return e.next=6,u.a.getCourses();case 6:o=e.sent,n({type:x.z,payload:o.courses}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},A=function(t){return{type:x.qc,id:t}},C=function(t){return function(){var e=Object(c.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(I("close")),n((o=t,{type:x.pc,id:o}));try{s.a.fire({confirmButtonColor:"#5952c6",icon:"error",text:t.error.replace(/_/g," ")}),n(A(t))}catch(r){console.log(r)}case 3:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(t){return function(){var e=Object(c.a)(i.a.mark((function e(n){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.accessToken);case 2:o=e.sent,n({type:x.Ce,studentData:{auth:t,profile:o}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(t){return function(){var e=Object(c.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:x.De,newToken:Object(o.a)({},t)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(t){return function(){var e=Object(c.a)(i.a.mark((function e(n){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:o=e.sent,n({type:x.bc,coursesResponse:o});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(){var o=Object(c.a)(i.a.mark((function o(r){var c;return i.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,b(t,e,n);case 2:c=o.sent,r({type:x.Rb,h5pSettings:c});case 4:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}()},P=function(t,e,n){return function(){var o=Object(c.a)(i.a.mark((function o(r){var c;return i.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,y(t,e,JSON.stringify(n.tokenObj)).catch((function(t){return t}));case 2:c=o.sent,r({type:x.cc,submission:c});case 4:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}()},L=function(t,e,n){return function(){var o=Object(c.a)(i.a.mark((function o(r){var c;return i.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,j(t,e,JSON.stringify(n.tokenObj));case 2:c=o.sent,r({type:x.ef,turnedIn:c});case 4:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}()},M=function(t,e,n,o){return function(){var r=Object(c.a)(i.a.mark((function r(c){var a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w(JSON.stringify(t.tokenObj),e,n,o);case 2:a=r.sent,c({type:x.dc,summaryAuth:a});case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},U=function(t,e){return function(){var n=Object(c.a)(i.a.mark((function n(o){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(t,e);case 2:r=n.sent,o({type:x.Xb,outcomeSummary:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}},411:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c}));var o=n(0);function r(t){return["/gclass/launch/:userId/:courseId/:activityId/:classworkId","/lti-tools/activity/:activityId","/activity/:activityId/shared","/genericlms/:lmsName/lmsurl/:lmsUrl/client/:lmsClientId/lmscourse/:lmsCourseId/lmsunit/:lmsUnitId/activity/:activityId"].includes(t)}function i(t,e,n){var r,i,c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=n.path,s=n.activityId,u=n.submissionId,l=n.attemptId,d=n.studentId,f=n.courseId,p=n.homepage,m=n.toolPlatform,h=n.activeCourse,g=n.customCourseName,v=n.customApiDomainUrl,b=n.customCourseCode,y=[{"/project/:projectId/playlist/:playlistId/activity/:activityId/preview":"CurrikiStudio"},{"/activity/:activityId/shared":"CurrikiStudio"},{"/gclass/launch/:userId/:courseId/:activityId/:classworkId":"Google Classroom"},{"/lti-tools/activity/:activityId":"LTI client"},{"/genericlms/:lmsName/lmsurl/:lmsUrl/client/:lmsClientId/lmscourse/:lmsCourseId/lmsunit/:lmsUnitId/activity/:activityId":"GenericLMS"}].find((function(t){return t[a]}));if(void 0!==y){var j,w,O=Object(o.a)({},e),x=[{objectType:"Activity",id:"".concat(window.location.origin,"/activity/").concat(s,"/submission/").concat(u,"/").concat(l)},{objectType:"Activity",id:"".concat(window.location.origin,"/activity/").concat(s,"/submission/").concat(u)}];"Google Classroom"===y[a]&&(x.push({objectType:"Activity",id:"".concat(window.location.origin,"/gclass/").concat(f)}),O.object&&O.object.definition&&O.object.definition.extensions&&(O.object.definition.extensions["http://currikistudio.org/x-api/gclass-alternate-course-id"]=h.alternateLink,O.object.definition.extensions["http://currikistudio.org/x-api/course-name"]=h.name)),y[a],x.push({objectType:"Activity",id:"".concat(window.location.origin,"/lti/").concat(f)}),(null===O||void 0===O||null===(j=O.object)||void 0===j||null===(w=j.definition)||void 0===w?void 0:w.extensions)&&(O.object.definition.extensions["http://currikistudio.org/x-api/lms-course-name"]=g,O.object.definition.extensions["http://currikistudio.org/x-api/lms-domain-url"]=v,O.object.definition.extensions["http://currikistudio.org/x-api/lms-course-code"]=b);var I={objectType:"Agent",account:{homePage:p||"https://classroom.google.com",name:d}};O.context&&("LTI client"===y[a]?O.context.platform=m:O.context.platform=y[a],O.context.contextActivities.other=x),O.actor=I,c&&(O.verb={id:"http://adlnet.gov/expapi/verbs/skipped",display:{"en-US":"skipped"}},O.result&&O.result.score&&O.result.score.min===O.result.score.max&&(O.result.score.max+=1)),O.object&&"compound"===O.object.definition.interactionType&&(O.object.definition.interactionType="choice");for(var k=t;k&&"H5P.InteractiveBook"!==(null===(S=k)||void 0===S||null===(A=S.libraryInfo)||void 0===A?void 0:A.machineName);){var S,A;k=k.parent}if("H5P.InteractiveBook"===(null===(r=k)||void 0===r||null===(i=r.libraryInfo)||void 0===i?void 0:i.machineName)){var C=k.getActiveChapter();O.object.definition.extensions["http://currikistudio.org/x-api/h5p-chapter-name"]=k.chapters[C].title}return O}}function c(t,e,n){var r,i=n.path,c=n.activityId,a=Object(o.a)({},e),s=Math.floor(1e5*Math.random()).toString(),u=Math.floor(1e5*Math.random()).toString(),l=Math.floor(1e5*Math.random()).toString(),d=[{objectType:"Activity",id:"".concat(window.location.origin,"/activity/").concat(c,"/submission/").concat(s,"/").concat(u)},{objectType:"Activity",id:"".concat(window.location.origin,"/activity/").concat(c,"/submission/").concat(s)},{objectType:"Activity",id:"".concat(window.location.origin,"/gclass/").concat(l)}],f=[{"/project/:projectId/playlist/:playlistId/activity/:activityId/preview":"CurrikiStudio"},{"/activity/:activityId/shared":"CurrikiStudio"},{"/gclass/launch/:userId/:courseId/:activityId/:classworkId":"Google Classroom"},{"/lti-tools/activity/:activityId":"LTI client"},{"/genericlms/:lmsName/lmsurl/:lmsUrl/client/:lmsClientId/lmscourse/:lmsCourseId/lmsunit/:lmsUnitId/activity/:activityId":"GenericLMS"}].find((function(t){return t[i]}));if(void 0!==f)return(null===a||void 0===a||null===(r=a.context)||void 0===r?void 0:r.contextActivities)&&(a.context.platform=f[i],a.context.contextActivities.other=d),a.object.definition.extensions["http://id.tincanapi.com/extension/referrer"]=document.referrer?document.referrer:window.location.origin,a}},419:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){return o={},e.m=n=[function(e){e.exports=t},function(t,e,n){t.exports=n(2)()},function(t,e,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,r,c){if(c!==i){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){null!=e&&e<=t.length||(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){null!=e&&e<=t.length||(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){null!=e&&e<=t.length||(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){null!=e&&e<=t.length||(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function d(t,e,n,o,r,i){var c=t.getElementsByTagName(e)[0],a=c,s=c;(s=t.createElement(e)).id=n,s.src=o,a&&a.parentNode?a.parentNode.insertBefore(s,a):t.head.appendChild(s),s.onerror=i,s.onload=r}function f(t,e){var n=t.getElementById(e);n&&n.parentNode.removeChild(n)}function p(t){return v.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:t.icon?0:10,paddingTop:10,paddingBottom:10}},t.children)}function m(t){return v.a.createElement("div",{style:{marginRight:10,background:t.active?"#eee":"#fff",padding:10,borderRadius:2}},v.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},v.a.createElement("g",{fill:"#000",fillRule:"evenodd"},v.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),v.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),v.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),v.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),v.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function h(t){var e=i(Object(g.useState)(!1),2),n=e[0],o=e[1],r=i(Object(g.useState)(!1),2),c=r[0],a=r[1],s=t.tag,u=t.type,l=t.className,d=t.disabledStyle,f=t.buttonText,h=t.children,y=t.render,j=t.theme,w=t.icon,O=t.disabled,x=b({onSuccess:t.onSuccess,onAutoLoadFinished:t.onAutoLoadFinished,onRequest:t.onRequest,onFailure:t.onFailure,onScriptLoadFailure:t.onScriptLoadFailure,clientId:t.clientId,cookiePolicy:t.cookiePolicy,loginHint:t.loginHint,hostedDomain:t.hostedDomain,autoLoad:t.autoLoad,isSignedIn:t.isSignedIn,fetchBasicProfile:t.fetchBasicProfile,redirectUri:t.redirectUri,discoveryDocs:t.discoveryDocs,uxMode:t.uxMode,scope:t.scope,accessType:t.accessType,responseType:t.responseType,jsSrc:t.jsSrc,prompt:t.prompt}),I=x.signIn,k=O||!x.loaded;if(y)return y({onClick:I,disabled:k});var S={backgroundColor:"dark"===j?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===j?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},A={cursor:"pointer",backgroundColor:"dark"===j?"#3367D6":"#eee",color:"dark"===j?"#fff":"rgba(0, 0, 0, .54)",opacity:1},C=k?Object.assign({},S,d):c?Object.assign({},S,A):n?Object.assign({},S,{cursor:"pointer",opacity:.9}):S;return v.a.createElement(s,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:I,style:C,type:u,disabled:k,className:l},[w&&v.a.createElement(m,{key:1,active:c}),v.a.createElement(p,{icon:w,key:2},h||f)])}n.r(e),n.d(e,"default",(function(){return j})),n.d(e,"GoogleLogin",(function(){return j})),n.d(e,"GoogleLogout",(function(){return O})),n.d(e,"useGoogleLogin",(function(){return b})),n.d(e,"useGoogleLogout",(function(){return w}));var g=n(0),v=n.n(g),b=(n(1),function(t){function e(t){var e=t.getBasicProfile(),n=t.getAuthResponse(!0);t.googleId=e.getId(),t.tokenObj=n,t.tokenId=n.id_token,t.accessToken=n.access_token,t.profileObj={googleId:e.getId(),imageUrl:e.getImageUrl(),email:e.getEmail(),name:e.getName(),givenName:e.getGivenName(),familyName:e.getFamilyName()},i(t)}function n(t){if(t&&t.preventDefault(),P){var n=window.gapi.auth2.getAuthInstance(),o={prompt:T};p(),"code"===C?n.grantOfflineAccess(o).then((function(t){return i(t)}),(function(t){return u(t)})):n.signIn(o).then((function(t){return e(t)}),(function(t){return u(t)}))}}var r=t.onSuccess,i=void 0===r?function(){}:r,c=t.onAutoLoadFinished,a=void 0===c?function(){}:c,s=t.onFailure,u=void 0===s?function(){}:s,l=t.onRequest,p=void 0===l?function(){}:l,m=t.onScriptLoadFailure,h=t.clientId,v=t.cookiePolicy,b=t.loginHint,y=t.hostedDomain,j=t.autoLoad,w=t.isSignedIn,O=t.fetchBasicProfile,x=t.redirectUri,I=t.discoveryDocs,k=t.uxMode,S=t.scope,A=t.accessType,C=t.responseType,E=t.jsSrc,N=void 0===E?"https://apis.google.com/js/api.js":E,T=t.prompt,_=o(Object(g.useState)(!1),2),P=_[0],L=_[1];return Object(g.useEffect)((function(){var t=!1,n=m||u;return d(document,"script","google-login",N,(function(){var o={client_id:h,cookie_policy:v,login_hint:b,hosted_domain:y,fetch_basic_profile:O,discoveryDocs:I,ux_mode:k,redirect_uri:x,scope:S,access_type:A};"code"===C&&(o.access_type="offline"),window.gapi.load("auth2",(function(){var r=window.gapi.auth2.getAuthInstance();r?r.then((function(){t||(w&&r.isSignedIn.get()?(L(!0),a(!0),e(r.currentUser.get())):(L(!0),a(!1)))}),(function(t){u(t)})):window.gapi.auth2.init(o).then((function(n){if(!t){L(!0);var o=w&&n.isSignedIn.get();a(o),o&&e(n.currentUser.get())}}),(function(t){L(!0),a(!1),n(t)}))}))}),(function(t){n(t)})),function(){t=!0,f(document,"google-login")}}),[]),Object(g.useEffect)((function(){j&&n()}),[P]),{signIn:n,loaded:P}});function y(t){var e=u(Object(g.useState)(!1),2),n=e[0],o=e[1],r=u(Object(g.useState)(!1),2),i=r[0],c=r[1],a=t.tag,s=t.type,l=t.className,d=t.disabledStyle,f=t.buttonText,h=t.children,b=t.render,y=t.theme,j=t.icon,O=t.disabled,x=w({jsSrc:t.jsSrc,onFailure:t.onFailure,onScriptLoadFailure:t.onScriptLoadFailure,clientId:t.clientId,cookiePolicy:t.cookiePolicy,loginHint:t.loginHint,hostedDomain:t.hostedDomain,fetchBasicProfile:t.fetchBasicProfile,discoveryDocs:t.discoveryDocs,uxMode:t.uxMode,redirectUri:t.redirectUri,scope:t.scope,accessType:t.accessType,onLogoutSuccess:t.onLogoutSuccess}),I=x.signOut,k=O||!x.loaded;if(b)return b({onClick:I,disabled:k});var S={backgroundColor:"dark"===y?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===y?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},A={cursor:"pointer",backgroundColor:"dark"===y?"#3367D6":"#eee",color:"dark"===y?"#fff":"rgba(0, 0, 0, .54)",opacity:1},C=k?Object.assign({},S,d):i?Object.assign({},S,A):n?Object.assign({},S,{cursor:"pointer",opacity:.9}):S;return v.a.createElement(a,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:I,style:C,type:s,disabled:k,className:l},[j&&v.a.createElement(m,{key:1,active:i}),v.a.createElement(p,{icon:j,key:2},h||f)])}h.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var j=h,w=function(t){var e=t.jsSrc,n=void 0===e?"https://apis.google.com/js/api.js":e,o=t.onFailure,r=t.onScriptLoadFailure,i=t.clientId,c=t.cookiePolicy,s=t.loginHint,u=t.hostedDomain,l=t.fetchBasicProfile,p=t.discoveryDocs,m=t.uxMode,h=t.redirectUri,v=t.scope,b=t.accessType,y=t.onLogoutSuccess,j=a(Object(g.useState)(!1),2),w=j[0],O=j[1],x=Object(g.useCallback)((function(){if(window.gapi){var t=window.gapi.auth2.getAuthInstance();null!=t&&t.then((function(){t.signOut().then((function(){t.disconnect(),y()}))}),(function(t){return o(t)}))}}),[y]);return Object(g.useEffect)((function(){var t=r||o;return d(document,"script","google-login",n,(function(){var e={client_id:i,cookie_policy:c,login_hint:s,hosted_domain:u,fetch_basic_profile:l,discoveryDocs:p,ux_mode:m,redirect_uri:h,scope:v,access_type:b};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?O(!0):window.gapi.auth2.init(e).then((function(){return O(!0)}),(function(e){return t(e)}))}))}),(function(e){t(e)})),function(){f(document,"google-login")}}),[]),{signOut:x,loaded:w}};y.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var O=y}],e.c=o,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4);function e(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n,o}(n(3))},424:function(t,e,n){"use strict";var o=n(7),r=n(10),i=n(17),c=n.n(i),a=n(3),s=n.n(a),u=n(43),l=n(32),d=n(20),f=n(140),p=n(388),m=n(383),h=n(81),g=n(63),v=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],b=Object(m.a)("h4");b.displayName="DivStyledAsH4";var y=Object(h.a)("alert-heading",{Component:b}),j=Object(h.a)("alert-link",{Component:g.a}),w={show:!0,transition:f.a,closeLabel:"Close alert"},O=s.a.forwardRef((function(t,e){var n=Object(u.useUncontrolled)(t,{show:"onClose"}),i=n.bsPrefix,a=n.show,m=n.closeLabel,h=n.className,g=n.children,b=n.variant,y=n.onClose,j=n.dismissible,w=n.transition,O=Object(r.a)(n,v),x=Object(d.a)(i,"alert"),I=Object(l.a)((function(t){y&&y(!1,t)})),k=!0===w?f.a:w,S=s.a.createElement("div",Object(o.a)({role:"alert"},k?void 0:O,{ref:e,className:c()(h,x,b&&x+"-"+b,j&&x+"-dismissible")}),j&&s.a.createElement(p.a,{onClick:I,label:m}),g);return k?s.a.createElement(k,Object(o.a)({unmountOnExit:!0},O,{ref:void 0,in:a}),S):a?S:null}));O.displayName="Alert",O.defaultProps=w,O.Link=j,O.Heading=y,e.a=O},586:function(t,e,n){"use strict";e.a=n.p+"static/media/logo.e4118a3b.svg"},657:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n(4),r=n.n(o),i=n(6),c=n(697),a=n.n(c),s=n(44),u=n.n(s),l=function(t,e){return u.a.post("https://api.v10.learnsafe.com/accounts/".concat(t,"/integrators/auth/token"),null,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t.data})).catch((function(t){return t.response.data}))},d=function(t,e,n,o,r,i,c,a,s){return u.a.post("https://api.v10.learnsafe.com/accounts/".concat(e,"/integrators/content/check"),{userName:a,workstationName:s,reportedAt:c,applicationName:o,ipAddress:"0.0.0.0",unitPath:n,image:r,content:i},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){return t.data})).catch((function(t){return t.response.data}))},f=function(t,e,n,o){return function(){var c=Object(i.a)(r.a.mark((function i(c){var s,u,f,p,m,h,g,v,b,y,j,w;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!((null===(h=JSON.parse(e))||void 0===h||null===(s=h.result)||void 0===s?void 0:s.response)&&"interacted"===(null===h||void 0===h||null===(u=h.verb)||void 0===u?void 0:u.display["en-US"])&&"http://h5p.org/libraries/H5P.OpenEndedQuestion-1.0"===(null===h||void 0===h||null===(f=h.context)||void 0===f||null===(p=f.contextActivities)||void 0===p||null===(m=p.category[0])||void 0===m?void 0:m.id)&&t.account_id&&t.api_key&&t.unit_path&&t.name)){r.next=10;break}return r.next=4,l(t.account_id,t.api_key);case 4:j=r.sent,(w=document.createElement("div")).setAttribute("id","specfic-detail-safe-learn"),w.innerHTML="\n      <div>\n        <h3>".concat(null===h||void 0===h||null===(g=h.object)||void 0===g||null===(v=g.definition)||void 0===v||null===(b=v.description)||void 0===b?void 0:b["en-US"],"</h3>\n        <hr />\n        <h4>").concat(null===h||void 0===h||null===(y=h.result)||void 0===y?void 0:y.response,"</h4>\n      </div>"),document.body.prepend(w),a()(w,{scrollY:-window.scrollY}).then((function(e){var r;null===(r=document.getElementById("specfic-detail-safe-learn"))||void 0===r||r.remove();var i=e.toDataURL("image/png");if(j.data){var c,a=new Date;d(j.data.token,t.account_id,t.unit_path,t.name,i,null===h||void 0===h||null===(c=h.result)||void 0===c?void 0:c.response,a.getTime(),o,n)}})).catch((function(t){return console.log(t)}));case 10:c({type:"SAFELEARN_ACTION"});case 11:case"end":return r.stop()}}),i)})));return function(t){return c.apply(this,arguments)}}()}},952:function(t,e,n){"use strict";var o=n(27),r=n(3),i=n(12),c=n(24),a=n(8),s=n.n(a),u=n(134),l=n(411),d=n(72),f=n(392),p=n(657),m=(n(953),n(2));e.a=Object(c.h)(Object(i.b)((function(t){return{student:t.gapi.student,submission:t.gapi.submission,h5pSettings:t.gapi.h5pSettings}}),(function(t){return{loadH5pSettings:function(e,n,o){return t(Object(f.i)(e,n,o))},getSubmission:function(e,n,o){return t(Object(f.d)(e,n,o))},sendStatement:function(e){return t(Object(d.t)(e))},turnIn:function(e,n,o){return t(Object(f.l)(e,n,o))},sendScreenshot:function(e,n,o,r){return t(Object(p.a)(e,n,o,r))}}}))((function(t){var e=t.activityId,n=t.activeCourse,i=t.match,c=t.history,a=t.student,d=t.submission,f=t.h5pSettings,p=t.loadH5pSettings,h=t.getSubmission,g=t.sendStatement,v=t.turnIn,b=t.sendScreenshot,y=Object(r.useState)(!1),j=Object(o.a)(y,2),w=j[0],O=j[1],x=Object(r.useState)(null),I=Object(o.a)(x,2),k=I[0],S=I[1],A=Object(r.useState)(!1),C=Object(o.a)(A,2),E=C[0],N=C[1];return Object(r.useEffect)((function(){window.scrollTo(0,0),h(i.params.classworkId,i.params.courseId,a.auth)}),[e,a.auth]),Object(r.useEffect)((function(){null!==d&&p(e,a.auth.googleId,d.id)}),[d]),Object(r.useEffect)((function(){if(null!==f&&null!==d){window.H5PIntegration=f.h5p.settings,document.getElementById("curriki-h5p-wrapper").innerHTML=f.h5p.embed_code.trim();var t=f.h5p.settings.core.styles.concat(f.h5p.settings.loadedCss);Promise.all(t.map((function(t){var e=document.createElement("link");return e.href=t,e.type="text/css",e.rel="stylesheet",document.head.appendChild(e),!0}))),f.h5p.settings.core.scripts.concat(f.h5p.settings.loadedJs).forEach((function(t){var e=document.createElement("script");e.src=t,e.async=!1,document.body.appendChild(e)}));var e=setInterval((function(){if(w)console.log("Loaded hit, returning");else{var t=document.getElementsByClassName("h5p-iframe")[0].contentWindow;t.H5P&&t.H5P.externalDispatcher&&(console.log("AE H5P ready"),clearInterval(e),S(null),O(!0))}}));S(e)}}),[f,d]),Object(r.useEffect)((function(){if(console.log("AE entered hook"),w&&d&&!E){var t=document.getElementsByClassName("h5p-iframe")[0].contentWindow;t.H5P.externalDispatcher&&!1!==l.c(i.path)?(console.log("AE found dispatcher, trying to hook"),t.H5P.externalDispatcher.on("xAPI",(function(t){var o=this;console.log("AE running listener");var r,c={path:i.path,activityId:e,activeCourse:n,submissionId:d.id,attemptId:d.attemptId,studentId:a.profile.data.id,classworkId:i.params.classworkId,courseId:i.params.courseId,auth:a.auth},u=JSON.stringify(l.b(this,t.data.statement,c));"submitted-curriki"===t.data.statement.verb.display["en-US"]?(void 0===this.parent&&this.interactions&&this.interactions.forEach((function(t){if(!t.getLastXAPIVerb()){var e=t.getXAPIData();if(e){var n=JSON.stringify(l.b(o,e.statement,c,!0));g(n)}}}),this),g(u),s.a.fire({title:"Do you want to turn in your work to Google Classroom?",showCancelButton:!0,confirmButtonText:"Turn In"}).then((function(t){t.isConfirmed&&(v(c.classworkId,c.courseId,c.auth),s.a.fire("Saved!","","success"))}))):(g(u),(null===f||void 0===f||null===(r=f.organization)||void 0===r?void 0:r.api_key)&&b(f.organization,u,f.activity.title,a.profile.data.name.fullName))})),console.log("? AE hooked"),N(!0)):console.log("missing dispatcher")}}),[w,e,a,d]),Object(r.useEffect)((function(){d&&"TURNED_IN"===d.state&&(clearInterval(k),c.push("/studio/gclass/summary/".concat(i.params.userId,"/").concat(i.params.courseId,"/").concat(i.params.activityId,"/").concat(d.coursework_id,"/").concat(d.id)))}),[d]),Object(m.jsx)("div",{id:"curriki-h5p-wrapper",children:Object(m.jsx)("div",{className:"loader_gif",children:Object(m.jsx)("img",{style:{width:"50px"},src:u.a,alt:""})})})})))},953:function(t,e,n){},954:function(t,e,n){},991:function(t,e,n){"use strict";n.r(e),function(t){var o=n(27),r=n(3),i=n(12),c=n(149),a=n(419),s=n(424),u=n(586),l=n(392),d=n(952),f=(n(954),n(2));e.default=Object(i.b)((function(t){return{courses:t.gapi.courses,student:t.gapi.student,submissionError:t.gapi.submissionError,orientation:t.ui.orientation}}),(function(t){return{setStudentAuth:function(e){return t(Object(l.k)(e))},refreshStudentAuthToken:function(e){return t(Object(l.j)(e))},getStudentCourses:function(e){return t(Object(l.c)(e))}}}))((function(e){var n=e.match,i=e.student,l=e.courses,p=e.setStudentAuth,m=e.refreshStudentAuthToken,h=e.getStudentCourses,g=e.submissionError,v=n.params,b=v.activityId,y=v.courseId,j=Object(r.useState)(null),w=Object(o.a)(j,2),O=w[0],x=w[1],I=Object(r.useState)(null),k=Object(o.a)(I,2),S=k[0],A=k[1],C=Object(r.useState)(null),E=Object(o.a)(C,2),N=E[0],T=E[1];Object(r.useEffect)((function(){null!==i&&h(i.auth.accessToken)}),[i]),Object(r.useEffect)((function(){if(null!==l){var t=!1,e=!1;for(var n in l)l[n].id===y&&(t=!0,T(l[n]),l[n].ownerId===i.auth.googleId&&(e=!0));x(t&&!e&&!g),A(e)}}),[l,y,g]);var _=function(t){t&&(p(t),setInterval((function(){t.reloadAuthResponse().then((function(t){m(t)}))}),9e5))};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"gclass-activity-container",children:Object(f.jsxs)("section",{className:"main-page-content preview iframe-height-resource-shared defaultcontainer",children:[Object(f.jsx)(c.a,{children:Object(f.jsx)("script",{src:"https://dev.currikistudio.org/api/storage/h5p/h5p-core/js/h5p-resizer.js",charset:"UTF-8"})}),Object(f.jsx)("div",{className:"flex-container previews",children:Object(f.jsx)("div",{className:"activity-bg left-vdo",children:Object(f.jsx)("div",{className:"main-item-wrapper desktop-view",children:Object(f.jsxs)("div",{className:"item-container",children:[O&&Object(f.jsx)(d.a,{activityId:b,activeCourse:N}),!O&&Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col text-center",children:Object(f.jsx)("img",{className:"curriki-logo",src:u.a,alt:""})})}),!1===O&&Object(f.jsx)("div",{className:"row m-4",children:Object(f.jsx)("div",{className:"col text-center",children:Object(f.jsx)(s.a,{variant:"warning",children:"You don't seem to be authorized to take this activity."})})}),!0===S&&Object(f.jsx)("div",{className:"row m-4",children:Object(f.jsx)("div",{className:"col text-center",children:Object(f.jsx)(s.a,{variant:"warning",children:"You are the teacher for this activity. Please login as a student to take the activity."})})}),g&&Object(f.jsx)("div",{className:"row m-4",children:Object(f.jsx)("div",{className:"col text-center",children:Object(f.jsx)(s.a,{variant:"warning",children:g})})}),Object(f.jsx)("div",{className:"row m-4",children:Object(f.jsxs)("div",{className:"col text-center",children:[Object(f.jsx)("h2",{children:"Please log in to take this activity."}),Object(f.jsx)(a.GoogleLogin,{clientId:t.config.gapiClientId,buttonText:"Login",onSuccess:_,onFailure:_,isSignedIn:!0,scope:" https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.topics https://www.googleapis.com/auth/classroom.coursework.me https://www.googleapis.com/auth/classroom.coursework.students https://www.googleapis.com/auth/classroom.rosters.readonly ",cookiePolicy:"single_host_origin"})]})})]})]})})})})]})})})}))}.call(this,n(36))}}]);
//# sourceMappingURL=30.b6a32256.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{423:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"a",(function(){return m}));var c=n(4),i=n.n(c),a=n(6),r=n(25),o=n(5),s=r.a.apiVersion,l=function(t,e){return o.a.post("/".concat(s,"/go/").concat(t,"/login"),e).then((function(t){return t.data})).catch((function(t){return t.response.data}))},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o.a.get("/".concat(s,"/google-classroom/activities/").concat(t,"/h5p-resource-settings"),{},{gcuid:e}).then((function(t){return t.data})).catch((function(t){Promise.reject(t.response.data)}))},d=function(t,e,n,c){return o.a.post("/".concat(s,"/go/safarimontage/projects/").concat(t,"/playlists/").concat(e,"/activities/").concat(n,"/publish"),{setting_id:c,count:1}).then((function(t){return t.data})).catch((function(t){return t.response.data}))},j=n(53),f=function(t){return function(){var e=Object(a.a)(i.a.mark((function e(n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t.lmsName,t);case 2:(c=e.sent).errors?n({type:j.e,results:c}):n({type:j.d,results:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(t){return function(){var e=Object(a.a)(i.a.mark((function e(n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:(c=e.sent).errors?n({type:j.c,results:c}):n({type:j.b,results:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(t,e,n,c){return function(){var r=Object(a.a)(i.a.mark((function a(r){var o;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,d(t,e,n,c);case 2:(o=i.sent).errors?r({type:j.g,results:o}):r({type:j.f,results:o});case 4:case"end":return i.stop()}}),a)})));return function(t){return r.apply(this,arguments)}}()},m=function(){return function(){var t=Object(a.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:j.a});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},424:function(t,e,n){"use strict";var c=n(7),i=n(10),a=n(17),r=n.n(a),o=n(3),s=n.n(o),l=n(43),u=n(32),d=n(20),j=n(140),f=n(388),p=n(383),b=n(81),m=n(63),v=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],h=Object(p.a)("h4");h.displayName="DivStyledAsH4";var O=Object(b.a)("alert-heading",{Component:h}),y=Object(b.a)("alert-link",{Component:m.a}),g={show:!0,transition:j.a,closeLabel:"Close alert"},x=s.a.forwardRef((function(t,e){var n=Object(l.useUncontrolled)(t,{show:"onClose"}),a=n.bsPrefix,o=n.show,p=n.closeLabel,b=n.className,m=n.children,h=n.variant,O=n.onClose,y=n.dismissible,g=n.transition,x=Object(i.a)(n,v),w=Object(d.a)(a,"alert"),k=Object(u.a)((function(t){O&&O(!1,t)})),C=!0===g?j.a:g,N=s.a.createElement("div",Object(c.a)({role:"alert"},C?void 0:x,{ref:e,className:r()(b,w,h&&w+"-"+h,y&&w+"-dismissible")}),y&&s.a.createElement(f.a,{onClick:k,label:p}),m);return C?s.a.createElement(C,Object(c.a)({unmountOnExit:!0},x,{ref:void 0,in:o}),N):o?N:null}));x.displayName="Alert",x.defaultProps=g,x.Link=y,x.Heading=O,e.a=x},459:function(t,e,n){},508:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var c=n(4),i=n.n(c),a=n(6),r=n(25),o=n(5),s=r.a.apiVersion,l=function(){return o.a.get("/".concat(s,"/user-lms-settings")).then((function(t){return t.data})).catch((function(t){return Promise.reject(t.response.data)}))},u=n(1),d=function(){return function(){var t=Object(a.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:n=t.sent,e({type:u.ic,lmsSettings:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},515:function(t,e,n){"use strict";n(3);var c=n(21),i=n(24),a=n(12),r=n(153),o=n(133),s=n(2);function l(t){var e=t.text,n=t.showButton,i=t.loadHP;return Object(s.jsx)("div",{className:"whole-authorized",children:Object(s.jsxs)("div",{className:"box-unauthorized",children:[Object(s.jsx)("img",{src:r.a,alt:""}),Object(s.jsx)("h3",{children:e}),n?Object(s.jsxs)(c.b,{to:"/studio",onClick:function(){i("Loading...")},children:[" ","Go Back to Projects"]}):Object(s.jsxs)(c.b,{to:"/studio",onClick:function(){i("Loading...")},children:[" ","Go Back"]})]})})}l.defaultProps={showButton:!1};e.a=Object(i.h)(Object(a.b)(null,(function(t){return{loadHP:function(e){return t(Object(o.a)(e))}}}))(l))},566:function(t,e,n){"use strict";var c=n(27),i=n(3),a=n(12),r=n(21),o=n(24),s=n(8),l=n.n(s),u=n(144),d=n(30),j=n(39),f=n(997),p=n(25),b=n(72),m=n(82),v=n(508),h=n(423),O=(n(459),n(2));e.a=Object(o.h)(Object(a.b)((function(t){return{lmsSettings:t.account.userLmsSettings,lmsSettingsLoaded:t.account.userLmsSettingsLoaded,safariMontagePublishTool:t.genericLMS.safariMontagePublishTool}}),(function(t){return{deleteResource:function(e,n){return t(Object(b.g)(e,n))},getLmsSettings:function(){return t(Object(v.a)())},loadSafariMontagePublishTool:function(e,n,c,i){return t(Object(h.d)(e,n,c,i))},closeSafariMontageTool:function(){return t(Object(h.a)())}}}))((function(t){var e,n,o,s,v,h,y,g,x,w,k,C,N,P,S=t.lmsSettings,I=t.lmsSettingsLoaded,A=t.getLmsSettings,L=t.resource,T=t.playlist,B=t.deleteResource,_=t.loadSafariMontagePublishTool,M=t.closeSafariMontageTool,z=t.safariMontagePublishTool,E=t.match,D=t.teamPermission,H=t.previewPage,U=Object(a.d)((function(t){return t.organization})),R=U.permission,V=Object(i.useState)(null),G=Object(c.a)(V,2),J=G[0],Y=G[1];Object(i.useEffect)((function(){Y(encodeURI(z))}),[z]),Object(i.useEffect)((function(){I||A()}),[E]);return Object(O.jsxs)(j.a,{className:"pull-right resource-dropdown check",children:[Object(O.jsx)(j.a.Toggle,{className:"resource-dropdown-btn",children:Object(O.jsx)(d.a,{icon:"ellipsis-v"})}),Object(O.jsxs)(j.a.Menu,{children:[(Object.keys(D).length?null===D||void 0===D||null===(e=D.Team)||void 0===e?void 0:e.includes("team:view-activity"):null===R||void 0===R||null===(n=R.Activity)||void 0===n?void 0:n.includes("activity:view"))&&Object(O.jsxs)(j.a.Item,{as:r.b,to:"/studio/org/".concat(null===(o=U.currentOrganization)||void 0===o?void 0:o.domain,"/project/").concat(E.params.projectId,"/playlist/").concat(T.id,"/activity/").concat(L.id,"/preview"),onClick:function(){"projectPreview"===H?localStorage.setItem("projectPreview",!0):localStorage.setItem("projectPreview",!1)},children:[Object(O.jsx)(d.a,{icon:"eye",className:"mr-2"}),"Preview"]}),(Object.keys(D).length?null===D||void 0===D||null===(s=D.Team)||void 0===s?void 0:s.includes("team:edit-activity"):null===R||void 0===R||null===(v=R.Activity)||void 0===v?void 0:v.includes("activity:edit"))&&Object(O.jsxs)(j.a.Item,{as:r.b,to:"/studio/org/".concat(null===(h=U.currentOrganization)||void 0===h?void 0:h.domain,"/project/").concat(E.params.projectId,"/playlist/").concat(T.id,"/activity/").concat(L.id,"/edit"),children:[Object(O.jsx)(d.a,{icon:"pen",className:"mr-2"}),"Edit"]}),(null===R||void 0===R||null===(y=R.Activity)||void 0===y?void 0:y.includes("activity:duplicate"))&&Object(O.jsxs)(j.a.Item,{to:"#",onClick:function(){l.a.showLoading(),Object(m.b)(T.id,L.id)},children:[Object(O.jsx)(d.a,{icon:"clone",className:"mr-2"}),"Duplicate"]}),(Object.keys(D).length?null===D||void 0===D||null===(g=D.Team)||void 0===g?void 0:g.includes("team:publish-activity"):null===R||void 0===R||null===(x=R.Activity)||void 0===x?void 0:x.includes("activity:share"))&&0!==S.length&&Object(O.jsxs)("li",{className:"dropdown-submenu send",children:[Object(O.jsxs)("a",{tabIndex:"-1",className:"dropdown-item",children:[Object(O.jsx)(d.a,{icon:"newspaper",className:"mr-2"}),"Publish"]}),Object(O.jsx)("ul",{className:"dropdown-menu check",children:S.map((function(t){return"safarimontage"===t.lms_name&&Object(O.jsxs)("li",{children:[Object(O.jsx)("a",{onClick:function(){_(T.project.id,T.id,L.id,t.id)},children:t.site_name}),Object(O.jsxs)(f.a,{dialogClassName:"safari-modal",show:z,onHide:function(){return M()},"aria-labelledby":"example-modal-sizes-title-lg",children:[Object(O.jsx)(f.a.Header,{closeButton:!0,children:Object(O.jsx)(f.a.Title,{id:"example-modal-sizes-title-lg",children:"Safari Montage"})}),Object(O.jsx)(f.a.Body,{children:Object(O.jsx)("iframe",{title:"Safari Montage",src:"data:text/html;charset=utf-8,".concat(J)})})]})]})}))})]}),(Object.keys(D).length?null===D||void 0===D||null===(w=D.Team)||void 0===w?void 0:w.includes("team:share-activity"):null===R||void 0===R||null===(k=R.Activity)||void 0===k?void 0:k.includes("activity:share"))&&Object(O.jsxs)(j.a.Item,{onClick:function(){Object(b.H)(L.id);var t="".concat(window.location.href.split("/")[0],"//");Object(u.confirmAlert)({customUI:function(e){var n=e.onClose;return Object(O.jsxs)("div",{className:"share-project-preview-url project-share-check",children:[Object(O.jsx)("br",{}),Object(O.jsxs)("h3",{children:["You can now share Activity"," ",Object(O.jsx)("strong",{children:L.title}),Object(O.jsx)("br",{}),"Anyone with the link below can access your activity:"]}),Object(O.jsx)("a",{target:"_blank",href:"/studio/activity/".concat(L.id,"/shared"),rel:"noopener noreferrer",children:Object(O.jsx)("input",{id:"urllink_clip",value:"".concat(t+window.location.host,"/studio/activity/").concat(L.id,"/shared")})}),Object(O.jsx)("span",{title:"copy to clipboard","aria-hidden":"true",onClick:function(){var t=document.getElementById("urllink_clip");t.focus(),t.select(),document.execCommand("copy"),l.a.fire({title:"Link Copied",showCancelButton:!1,showConfirmButton:!1,timer:1500,allowOutsideClick:!1})},children:Object(O.jsx)(d.a,{icon:"clipboard"})}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"close-btn",children:Object(O.jsx)("button",{type:"button",onClick:n,children:"Ok"})})]})}})},children:[Object(O.jsx)(d.a,{icon:"share",className:"mr-2"}),"Share"]}),(null===R||void 0===R||null===(C=R.Activity)||void 0===C?void 0:C.includes("activity:share"))&&Object(O.jsxs)(j.a.Item,{href:"".concat("http://localhost:3000/api/api","/").concat(p.a.apiVersion,"/go/getxapifile/").concat(L.id),onClick:function(){return Object(b.H)(L.id)},children:[Object(O.jsx)(d.a,{icon:"download",className:"mr-2"}),"xAPI Download"]}),(Object.keys(D).length?null===D||void 0===D||null===(N=D.Team)||void 0===N?void 0:N.includes("team:delete-activity"):null===R||void 0===R||null===(P=R.Activity)||void 0===P?void 0:P.includes("activity:delete"))&&Object(O.jsxs)(j.a.Item,{onClick:function(t){t.preventDefault(),l.a.fire({title:"Are you sure you want to delete this activity?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Yes",denyButtonText:"No"}).then((function(t){t.isConfirmed&&B(L.id,T.id)}))},children:[Object(O.jsx)(d.a,{icon:"times-circle",className:"mr-2"}),"Delete"]})]})]})})))},570:function(t,e,n){"use strict";(function(t){n(3);var c=n(21),i=n(566),a=(n(584),n(12)),r=n(2),o=function(e){var n,o=e.activity,s=e.projectId,l=e.playlistId,u=e.lti,d=e.sampleID,j=e.setModalShow,f=e.setCurrentActivity,p=e.playlist,b=e.teamPermission,m=Object(a.d)((function(t){return t.organization}));return Object(r.jsx)("li",{children:d?Object(r.jsxs)("a",{onClick:function(){f(o.id),j(!0)},children:[Object(r.jsx)("div",{className:"playimg",style:{backgroundImage:o.thumb_url&&o.thumb_url.includes("pexels.com")?"url(".concat(o.thumb_url,")"):"url(".concat(t.config.resourceUrl).concat(o.thumb_url,")")}}),Object(r.jsx)("div",{className:"plydet",children:o.metadata?o.metadata.title:o.title})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(c.b,{to:u?"/studio/playlist/".concat(l,"/activity/").concat(o.id,"/preview/lti"):"/org/".concat(null===(n=m.currentOrganization)||void 0===n?void 0:n.domain,"/project/").concat(s,"/playlist/").concat(l,"/activity/").concat(o.id,"/preview"),onClick:function(){return localStorage.setItem("projectPreview",!0)},children:[Object(r.jsx)("div",{className:"playimg",style:{backgroundImage:o.thumb_url&&o.thumb_url.includes("pexels.com")?"url(".concat(o.thumb_url,")"):"url(".concat(t.config.resourceUrl).concat(o.thumb_url,")")}}),Object(r.jsx)("div",{className:"plydet",children:o.metadata?o.metadata.title:o.title})]}),!u&&Object(r.jsx)("div",{className:"activity-options-wrapper check",children:Object(r.jsx)(i.a,{playlist:p,resource:o,teamPermission:b||{},previewPage:"projectPreview"})})]})})};o.defaultProps={lti:!1,sampleID:null,setModalShow:function(){},setCurrentActivity:function(){}},e.a=o}).call(this,n(36))},571:function(t,e,n){},584:function(t,e,n){},608:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return b}));var c=n(4),i=n.n(c),a=n(6),r=n(25),o=n(5),s=r.a.apiVersion,l=function(t){return o.a.get("/".concat(s,"/activities/").concat(t,"/log-view"))},u=function(t){return o.a.get("/".concat(s,"/playlists/").concat(t,"/log-view"))},d=function(t){return o.a.get("/".concat(s,"/projects/").concat(t,"/log-view"))},j=n(1),f=function(t){return function(){var e=Object(a.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(t),n({type:j.d});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(t){return function(){var e=Object(a.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(t),n({type:j.wd});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(t){return function(){var e=Object(a.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(t),n({type:j.Bd});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},696:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(3),i=function(t){return document.body.classList.add(t)},a=function(t){return document.body.classList.remove(t)};function r(t){Object(c.useEffect)((function(){return t instanceof Array?t.map(i):i(t),function(){t instanceof Array?t.map(a):a(t)}}),[t])}}}]);
//# sourceMappingURL=7.1b809333.chunk.js.map
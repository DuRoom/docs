"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[836],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?o.createElement(h,a(a({ref:t},f),{},{components:r})):o.createElement(h,a({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],u={},s="FAQ",l={unversionedId:"faq",id:"faq",title:"FAQ",description:"Is DuRoom Stable?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/vi/faq",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Reporting Bugs",permalink:"/docs/vi/bugs"},next:{title:"Help Build DuRoom",permalink:"/docs/vi/contributing"}},f={},c=[{value:"Is DuRoom Stable?",id:"is-duroom-stable",level:3},{value:"Will DuRoom have insert feature here? When? Why not?",id:"will-duroom-have-insert-feature-here-when-why-not",level:3},{value:"Why haven\u2019t you fixed insert issue here yet?",id:"why-havent-you-fixed-insert-issue-here-yet",level:3},{value:"Will I be able to migrate my forum to DuRoom?",id:"will-i-be-able-to-migrate-my-forum-to-duroom",level:3},{value:"How do I join the DuRoom team?",id:"how-do-i-join-the-duroom-team",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"is-duroom-stable"},"Is DuRoom Stable?"),(0,i.kt)("p",null,"Yes! After 6 years of development, DuRoom 1.0.0 was finally released in 2021. You can find more information about the most up-to-date versions of DuRoom in the ",(0,i.kt)("a",{parentName:"p",href:"https://discuss-duroom.js.org/t/meta"},"community"),"."),(0,i.kt)("h3",{id:"will-duroom-have-insert-feature-here-when-why-not"},"Will DuRoom have ","[insert feature here]","? When? Why not?"),(0,i.kt)("p",null,"We would love to build countless features and extensions for DuRoom, but first things first: Our focus is on the essentials and stability."),(0,i.kt)("h3",{id:"why-havent-you-fixed-insert-issue-here-yet"},"Why haven\u2019t you fixed ","[insert issue here]"," yet?"),(0,i.kt)("p",null,"Here again, the answer is \u201cfirst things first\u201d. If we haven\u2019t fixed an issue (or assigned it a milestone) yet, it\u2019s because we\u2019re working on something else that\u2019s just as important. Please be patient; we\u2019ll try to get it done before release. Or if you\u2019re in a hurry, feel free to fix it yourself and ",(0,i.kt)("a",{parentName:"p",href:"/docs/vi/contributing"},"contribute to the project"),"!"),(0,i.kt)("h3",{id:"will-i-be-able-to-migrate-my-forum-to-duroom"},"Will I be able to migrate my forum to DuRoom?"),(0,i.kt)("p",null,"We don't currently provide official migrators, but there are many community solutions out there. Relatively soon, we\u2019ll start building tools to import data from other forum software like esoTalk, FluxBB, phpBB, Discourse, and others."),(0,i.kt)("h3",{id:"how-do-i-join-the-duroom-team"},"How do I join the DuRoom team?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"Through an arcane and arduous ordeal, involving mystic rituals, life threatening peril, and adventures to far off lands where many go and few return." ~ khanhduy1407')),(0,i.kt)("p",null,"The real answer is that we generally keep an eye on our community for stand-out members who would make good staff. Honestly, for most of our current staff, what they did before becoming staff wasn't much different from what they do now."),(0,i.kt)("p",null,"Find a passion and contribute however you feel is best. Then let it take its course. You don't have to have a badge to be respected here."))}d.isMDXComponent=!0}}]);
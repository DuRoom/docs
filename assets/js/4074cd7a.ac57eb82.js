"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[2802],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5976:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Extensibility",d={unversionedId:"extend/extensibility",id:"extend/extensibility",title:"Extensibility",description:"In some cases, you might want other extensions to extend your extension.",source:"@site/docs/extend/extensibility.md",sourceDirName:"extend",slug:"/extend/extensibility",permalink:"/extend/extensibility",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/extensibility.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Extending Extensions",permalink:"/extend/extending-extensions"},next:{title:"Filesystem",permalink:"/extend/filesystem"}},c={},u=[{value:"Backend",id:"backend",level:2},{value:"Custom Events",id:"custom-events",level:3},{value:"Custom Extenders",id:"custom-extenders",level:3},{value:"Frontend",id:"frontend",level:2}],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extensibility"},"Extensibility"),(0,a.kt)("p",null,"In some cases, you might want other extensions to ",(0,a.kt)("a",{parentName:"p",href:"/extend/extending-extensions"},"extend your extension"),"."),(0,a.kt)("h2",{id:"backend"},"Backend"),(0,a.kt)("p",null,"Extensions extend DuRoom Core's backend via two mechanisms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extend/start#extenders"},"The extender API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extend/backend-events"},"Listening to Events"))),(0,a.kt)("p",null,"Unsurprisingly, you can make your extension extensible via the same mechanisms."),(0,a.kt)("h3",{id:"custom-events"},"Custom Events"),(0,a.kt)("p",null,"To learn about dispatching events and defining new ones, see the ",(0,a.kt)("a",{parentName:"p",href:"/extend/backend-events"},"relevant documentation"),"."),(0,a.kt)("h3",{id:"custom-extenders"},"Custom Extenders"),(0,a.kt)("p",null,"Lets say you've developed an extension that adds an alternative search driver to DuRoom, but you want to allow other extensions to add support for custom filters / sorts.\nA custom extender could be a good way to accomplish this."),(0,a.kt)("p",null,"The implementation of extenders is actually quite simple. There are 3 main steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Various methods (and the constructor) allow client code to specify options. For example:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Which model / API controller / validator should be extended?"),(0,a.kt)("li",{parentName:"ul"},"What modifications should be made?")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"extend")," method takes the input from step 1, and applies it by modifying various ",(0,a.kt)("a",{parentName:"li",href:"/extend/service-provider"},"container bindings"),' and global static variables to achieve the desired effect. This is the "implementation" of the composer. The ',(0,a.kt)("inlineCode",{parentName:"li"},"extend")," methods for all enabled extensions are run as part of DuRoom's boot process."),(0,a.kt)("li",{parentName:"ol"},"Optionally, extenders implementing ",(0,a.kt)("inlineCode",{parentName:"li"},"DuRoom\\Extend\\LifecycleInterface")," can have ",(0,a.kt)("inlineCode",{parentName:"li"},"onEnable")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"onDisable")," methods, which are run when extensions that use the extender are enabled/disabled, and are useful for tasks like clearing various caches.")),(0,a.kt)("p",null,"Accordingly, to create a custom extender, all you need to do is:"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},"Define a class that implements ",(0,a.kt)("inlineCode",{parentName:"li"},"DuRoom\\Extend\\ExtenderInterface"),"."),(0,a.kt)("li",{parentName:"ol"},'Accept arguments in the constructor, and various methods. Those methods should represent concrete "modifications".'),(0,a.kt)("li",{parentName:"ol"},"Implement an ",(0,a.kt)("inlineCode",{parentName:"li"},"extend")," method that modifies your extension (or DuRoom), typically via extending/modifying container bindings."),(0,a.kt)("li",{parentName:"ol"},"Optionally, implement ",(0,a.kt)("inlineCode",{parentName:"li"},"DuRoom\\Extend\\LifecycleInterface")," if cleanup is needed on enable/disable.")),(0,a.kt)("p",null,"Before designing your own extenders, we HIGHLY recommend looking through the implementations of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/tree/main/framework/core/src/Extend"},"core's extenders"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Custom extenders introduced by your extension should be considered public API.\nYou can add automated tests for them via our ",(0,a.kt)("a",{parentName:"p",href:"/extend/testing"},"backend testing package"),"."))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Custom extenders should NOT be used to run arbitrary logic during the DuRoom boot process. That's a job for ",(0,a.kt)("a",{parentName:"p",href:"/extend/service-provider"},"Service Providers"),".\nAn easy way to check: if you're using extenders that you have defined in your own extension, you're probably doing something wrong."))),(0,a.kt)("h2",{id:"frontend"},"Frontend"),(0,a.kt)("p",null,"If you want other extensions to be able to use classes or functions defined in your extension (whether to reuse or modify via the ",(0,a.kt)("a",{parentName:"p",href:"/extend/frontend"},"extend/override utils"),"), you'll need to export them in your extension's ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," (typically the same place where your extension's ",(0,a.kt)("a",{parentName:"p",href:"/extend/frontend"},"initializer")," is located)."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.initializers.add('your-extension-id', () => {\n  // Your Extension Code Here\n})\n\nexport {\n  // Put all the stuff you want to export here.\n}\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[8322],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return n?o.createElement(f,i(i({ref:t},m),{},{components:n})):o.createElement(f,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Theming",c={unversionedId:"themes",id:"themes",title:"Theming",description:"While we've worked hard to make DuRoom as beautiful as we can, each community will probably want to make some tweaks/modifications to fit their desired style.",source:"@site/docs/themes.md",sourceDirName:".",slug:"/themes",permalink:"/docs/themes",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/themes.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Languages",permalink:"/docs/languages"},next:{title:"Email Configuration",permalink:"/docs/mail"}},m={},u=[{value:"Admin Dashboard",id:"admin-dashboard",level:2},{value:"CSS Theming",id:"css-theming",level:2},{value:"Extensions",id:"extensions",level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"theming"},"Theming"),(0,r.kt)("p",null,"While we've worked hard to make DuRoom as beautiful as we can, each community will probably want to make some tweaks/modifications to fit their desired style."),(0,r.kt)("h2",{id:"admin-dashboard"},"Admin Dashboard"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/admin"},"admin dashboard"),"'s Appearance page is a great first place to start customizing your forum. Here, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select theme colors"),(0,r.kt)("li",{parentName:"ul"},"Toggle dark mode and a colored header"),(0,r.kt)("li",{parentName:"ul"},"Upload a logo and favicon (icon shown in browser tabs)"),(0,r.kt)("li",{parentName:"ul"},"Add HTML for custom headers and footers"),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"#css-theming"},"custom LESS/CSS")," to change how elements are displayed")),(0,r.kt)("h2",{id:"css-theming"},"CSS Theming"),(0,r.kt)("p",null,"CSS is a style sheet language that tells browsers how to display elements of a webpage.\nIt allows us to modify everything from colors to fonts to element size and positioning to animations.\nAdding custom CSS can be a great way to modify your DuRoom installation to match a theme."),(0,r.kt)("p",null,"A CSS tutorial is beyond the scope of this documentation, but there are plenty of great online resources to learn the basics of CSS."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"DuRoom actually uses LESS, which makes it easier to write CSS by allowing for variables, conditionals, and functions."))),(0,r.kt)("h2",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,"DuRoom's flexible ",(0,r.kt)("a",{parentName:"p",href:"/docs/extensions"},"extension system")," allows you to add, remove, or modify practically any part of DuRoom.\nIf you want to make substantial theming modifications beyond changing colors/sizes/styles, a custom extension is definitely the way to go.\nTo learn how to make an extension, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/extend"},"extension documentation"),"!"))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[5394],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(u,".").concat(p)]||d[p]||g[p]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return g}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},u="Languages",s={unversionedId:"languages",id:"languages",title:"Languages",description:"It\u2019s easy to add a new language to your basic DuRoom installation. Just follow the instructions below to download and install the language pack of your choice.",source:"@site/docs/languages.md",sourceDirName:".",slug:"/languages",permalink:"/docs/languages",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/languages.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Extensions",permalink:"/docs/extensions"},next:{title:"Theming",permalink:"/docs/themes"}},c={},g=[{value:"Language Pack Installation",id:"language-pack-installation",level:2},{value:"Setting the Default Language",id:"setting-the-default-language",level:2},{value:"Disabling a Language Pack",id:"disabling-a-language-pack",level:2},{value:"Community Extensions",id:"community-extensions",level:2}],d={toc:g};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"languages"},"Languages"),(0,r.kt)("p",null,"It\u2019s easy to add a new language to your basic DuRoom installation. Just follow the instructions below to download and install the language pack of your choice."),(0,r.kt)("p",null,"Once you have added a language pack, you can ",(0,r.kt)("a",{parentName:"p",href:"#setting-the-default-language"},"set it as the default language")," for your forum. And if you ever find you don\u2019t need one of your installed language packs, you can always ",(0,r.kt)("a",{parentName:"p",href:"#disabling-a-language-pack"},"disable it"),".\nIf you\u2019re using any third-party extensions, be sure to ",(0,r.kt)("a",{parentName:"p",href:"#third-party-extensions"},"read this")," before you start."),(0,r.kt)("h2",{id:"language-pack-installation"},"Language Pack Installation"),(0,r.kt)("p",null,"To begin, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://discuss-duroom.js.org/t/languages"},"Extensions > Languages")," tag at the DuRoom Community site and find a language pack that you want to install."),(0,r.kt)("p",null,"Language packs are installed the same way as ",(0,r.kt)("a",{parentName:"p",href:"/docs/extensions"},"extensions"),". The language will appear in the ",(0,r.kt)("strong",{parentName:"p"},"Extensions")," page of the admin interface and you can enable it there."),(0,r.kt)("p",null,"That\u2019s all there is to it! You should now be able to use the language selector in your site\u2019s header to switch your forum\u2019s display to the new language."),(0,r.kt)("h2",{id:"setting-the-default-language"},"Setting the Default Language"),(0,r.kt)("p",null,"Once you have installed a language pack and made sure it\u2019s working, you may want to set it as the default language for new users and guests. You can do that on the ",(0,r.kt)("strong",{parentName:"p"},"Basics")," page of the admin interface."),(0,r.kt)("h2",{id:"disabling-a-language-pack"},"Disabling a Language Pack"),(0,r.kt)("p",null,"If you decide you don\u2019t need to support a certain language, after all, you can turn it off. Simply locate the language pack in the ",(0,r.kt)("strong",{parentName:"p"},"Extensions")," page of the admin interface and disable it."),(0,r.kt)("p",null,"Disabling a language can be useful if you\u2019re running a monolingual site and don\u2019t want the language selector to appear in the site header. The language selector is hidden when only one language is enabled."),(0,r.kt)("h2",{id:"community-extensions"},"Community Extensions"),(0,r.kt)("p",null,"While language packs downloaded from the DuRoom Community site will generally include translations for all the extensions that come bundled with DuRoom, they ",(0,r.kt)("em",{parentName:"p"},"will not")," as a rule cover any community extensions you may have installed. It is up to developers to provide and maintain translations for their extensions."),(0,r.kt)("p",null,"So before you install a community extension, you should check to make sure it includes translations for each language pack you have installed. If you find that an extension doesn\u2019t support a language you need, please contact the developer directly and arrange to have the necessary translations added."))}p.isMDXComponent=!0}}]);
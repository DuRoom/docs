"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[8588],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return c}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),c=n,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9958:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={},u="Updating",l={unversionedId:"update",id:"update",title:"Updating",description:"To update DuRoom, you'll need to use Composer. If you're not familiar with it (although you should be, because you need it to install DuRoom), read our guide for information on what it is and how to set it up.",source:"@site/docs/update.md",sourceDirName:".",slug:"/update",permalink:"/docs/update",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/update.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Installation",permalink:"/docs/install"},next:{title:"Troubleshooting",permalink:"/docs/troubleshoot"}},p={},d=[{value:"General Steps",id:"general-steps",level:2},{value:"Major Version Update Guides",id:"major-version-update-guides",level:2},{value:"Updating from Beta (&lt;=0.1.0) to Stable v1 (^1.0.0)",id:"updating-from-beta-010-to-stable-v1-100",level:3},{value:"Troubleshooting Issues",id:"troubleshooting-issues",level:2},{value:"Errors While Updating",id:"errors-while-updating",level:3},{value:"Errors After Updating",id:"errors-after-updating",level:3}],m={toc:d};function c(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating"},"Updating"),(0,i.kt)("p",null,"To update DuRoom, you'll need to use ",(0,i.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"Composer"),". If you're not familiar with it (although you should be, because you need it to install DuRoom), read ",(0,i.kt)("a",{parentName:"p",href:"/docs/composer"},"our guide")," for information on what it is and how to set it up."),(0,i.kt)("p",null,'If updating across major versions (e.g. <=0.1.0 to 1.x.x, 1.x.x to 2.x.x, ...), make sure to read the appropriate "major version update guide" before running the general upgrade steps.'),(0,i.kt)("h2",{id:"general-steps"},"General Steps"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Make sure all your extensions have versions compatible with the DuRoom version you're trying to install. This is only needed across major versions (e.g. you probably don't need to check this if upgrading from v1.0.0 to v1.1.0, assuming your extensions follow recommended versioning). You can check this by looking at the extension's ",(0,i.kt)("a",{parentName:"p",href:"https://discuss-duroom.js.org/t/extensions"},"Discuss thread"),", searching for it on ",(0,i.kt)("a",{parentName:"p",href:"http://packagist.org/"},"Packagist"),", or checking databases like ",(0,i.kt)("a",{parentName:"p",href:"https://extiverse.com"},"Extiverse"),". You'll need to remove (not just disable) any incompatible extensions before updating. Please be patient with extension developers!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Take a look at your ",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json")," file. Unless you have a reason to require specific versions of extensions or libraries, you should set the version string of everything except ",(0,i.kt)("inlineCode",{parentName:"p"},"duroom/core")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," (including ",(0,i.kt)("inlineCode",{parentName:"p"},"duroom/tags"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"duroom/mentions"),", and other bundled extensions). Make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"duroom/core")," is NOT set to ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),". If you're targeting a specific version of DuRoom, set ",(0,i.kt)("inlineCode",{parentName:"p"},"duroom/core")," to that (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'"duroom/core": "v0.1.0-beta.16'),"). If you just want the most recent version, use ",(0,i.kt)("inlineCode",{parentName:"p"},'"duroom/core": "^1.0"'),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," If your local install uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/extenders"},"local extenders"),", make sure they are up to date with changes in DuRoom."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," We recommend disabling third-party extensions in the admin dashboard before updating. This isn't strictly required, but will make debugging easier if you run into issues."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:")," Make sure your PHP version is supported by the version of DuRoom you are trying to upgrade to, and that you are using Composer 2 (",(0,i.kt)("inlineCode",{parentName:"p"},"composer --version)"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6:")," Finally, to update, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"composer update --prefer-dist --no-plugins --no-dev -a --with-all-dependencies\nphp duroom migrate\nphp duroom cache:clear\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 7:")," If applicable, restart your PHP process and opcache."),(0,i.kt)("h2",{id:"major-version-update-guides"},"Major Version Update Guides"),(0,i.kt)("h3",{id:"updating-from-beta-010-to-stable-v1-100"},"Updating from Beta (<=0.1.0) to Stable v1 (^1.0.0)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Do steps 1-5 above."),(0,i.kt)("li",{parentName:"ol"},"Change the version strings of all bundled extensions (",(0,i.kt)("inlineCode",{parentName:"li"},"duroom/tags"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"duroom/mentions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"duroom/likes"),", etc) in ",(0,i.kt)("inlineCode",{parentName:"li"},"composer.json")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"^0.1.0")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),"."),(0,i.kt)("li",{parentName:"ol"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"duroom/core"),"'s version string in ",(0,i.kt)("inlineCode",{parentName:"li"},"composer.json")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"^0.1.0")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"^1.0"),"."),(0,i.kt)("li",{parentName:"ol"},"Remove the ",(0,i.kt)("inlineCode",{parentName:"li"},'"minimum-stability": "beta",')," line from your ",(0,i.kt)("inlineCode",{parentName:"li"},"composer.json")),(0,i.kt)("li",{parentName:"ol"},"Do steps 6 and 7 above.")),(0,i.kt)("h2",{id:"troubleshooting-issues"},"Troubleshooting Issues"),(0,i.kt)("p",null,"There are 2 main places where you might run into errors when updating DuRoom: while running the update command itself, or when accessing the forum after updating."),(0,i.kt)("h3",{id:"errors-while-updating"},"Errors While Updating"),(0,i.kt)("p",null,"Here we'll go through several common types of issues while trying to update DuRoom."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"If the output is short and contains:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Nothing to modify in lock file\n")),(0,i.kt)("p",null,"Or does not list ",(0,i.kt)("inlineCode",{parentName:"p"},"duroom/core")," as an updated package, and you are not on the latest duroom version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Revisit step 2 above, make sure that all third party extensions have an asterisk for their version string."),(0,i.kt)("li",{parentName:"ul"},"Make sure your ",(0,i.kt)("inlineCode",{parentName:"li"},"duroom/core")," version requirement isn't locked to a specific minor version (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.1.0-beta.16")," is locked, ",(0,i.kt)("inlineCode",{parentName:"li"},"^1.0.0")," isn't). If you're trying to update across major versions of DuRoom, follow the related major version update guide above.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"For other errors, try running ",(0,i.kt)("inlineCode",{parentName:"p"},"composer why-not duroom/core VERSION_YOU_WANT_TO_UPGRADE_TO")),(0,i.kt)("p",null,"If the output looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"duroom/duroom                     -               requires          duroom/core (v0.1.0-beta.15)\nduroom/moderator-notes            0.4.4           requires          duroom/core (>=0.1.0-beta.15 <0.1.0-beta.16)\nduroom/duroom-ext-summaries       0.3.2           requires          duroom/core (>=0.1.0-beta.14 <0.1.0-beta.16)\nduroom/core                       v0.1.0-beta.16  requires          dflydev/fig-cookies (^3.0.0)\nduroom/duroom                     -               does not require  dflydev/fig-cookies (but v2.0.3 is installed)\nduroom/core                       v0.1.0-beta.16  requires          franzl/whoops-middleware (^2.0.0)\nduroom/duroom                     -               does not require  franzl/whoops-middleware (but 0.4.1 is installed)\nduroom/core                       v0.1.0-beta.16  requires          illuminate/bus (^8.0)\nduroom/duroom                     -               does not require  illuminate/bus (but v6.20.19 is installed)\nduroom/core                       v0.1.0-beta.16  requires          illuminate/cache (^8.0)\nduroom/duroom                     -               does not require  illuminate/cache (but v6.20.19 is installed)\nduroom/core                       v0.1.0-beta.16  requires          illuminate/config (^8.0)\nduroom/duroom                     -               does not require  illuminate/config (but v6.20.19 is installed)\nduroom/core                       v0.1.0-beta.16  requires          illuminate/container (^8.0)\nduroom/duroom                     -               does not require  illuminate/container (but v6.20.19 is installed)\nduroom/core                       v0.1.0-beta.16  requires          illuminate/contracts (^8.0)\nduroom/duroom                     -               does not require  illuminate/contracts (but v6.20.19 is installed)\nduroom/core                       v0.1.0-beta.16  requires          illuminate/database (^8.0)\nduroom/duroom                     -               does not require  illuminate/database (but v6.20.19 is installed)\nduroom/core                       v0.1.0-beta.16  requires          illuminate/events (^8.0)\nduroom/duroom                     -               does not require  illuminate/events (but v6.20.19 is installed)\n... (this'll go on for a bit)\n")),(0,i.kt)("p",null,"It is very likely that some of your extensions have not yet been updated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Revisit step 1 again, make sure all your extensions have versions compatible with the core version you want to upgrade to. Remove any that don't."),(0,i.kt)("li",{parentName:"ul"},"Make sure you're running ",(0,i.kt)("inlineCode",{parentName:"li"},"composer update")," with all the flags specified in the update step.")),(0,i.kt)("p",null,"If none of this fixes your issue, feel free to reach out on our ",(0,i.kt)("a",{parentName:"p",href:"https://discuss-duroom.js.org/t/support"},"Support forum"),". Make sure to include the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"php duroom info")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"composer why-not duroom/core VERSION_YOU_WANT_TO_UPGRADE_TO"),"."),(0,i.kt)("h3",{id:"errors-after-updating"},"Errors After Updating"),(0,i.kt)("p",null,"If you are unable to access your forum after updating, follow our ",(0,i.kt)("a",{parentName:"p",href:"/docs/troubleshoot"},"troubleshooting instructions"),"."))}c.isMDXComponent=!0}}]);
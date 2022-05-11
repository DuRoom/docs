"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[6675],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1035:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={},u="Distribution",l={unversionedId:"extend/distribution",id:"extend/distribution",title:"Distribution",description:"You've written a great extension \u2014\xa0and now you want the whole world to be able to use it. This document will take you through the process of distribution, from setting up a Git repository for your extension, to publishing it on Packagist.",source:"@site/docs/extend/distribution.md",sourceDirName:"extend",slug:"/extend/distribution",permalink:"/docs/vi/extend/distribution",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/distribution.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"API and Data Flow",permalink:"/docs/vi/extend/api"},next:{title:"DuRoom CLI",permalink:"/docs/vi/extend/cli"}},p={},c=[{value:"Setting Up Git",id:"setting-up-git",level:2},{value:"Tagging a Release",id:"tagging-a-release",level:2},{value:"Publishing on Packagist",id:"publishing-on-packagist",level:2},{value:"Future Releases",id:"future-releases",level:3},{value:"Promoting Your Extension",id:"promoting-your-extension",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"distribution"},"Distribution"),(0,i.kt)("p",null,"You've written a great extension \u2014\xa0and now you want the whole world to be able to use it. This document will take you through the process of distribution, from setting up a Git repository for your extension, to publishing it on Packagist."),(0,i.kt)("h2",{id:"setting-up-git"},"Setting Up Git"),(0,i.kt)("p",null,"The first thing you'll need to do is set up a version control system (VCS).\nThe most popular VCS is ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),". In this guide we'll be using Git, so make sure you have it ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"installed")," before continuing. If you don't have much Git knowledge, you may want to check out ",(0,i.kt)("a",{parentName:"p",href:"https://try.github.io/"},"these learning resources"),"."),(0,i.kt)("p",null,"After you have installed Git, you'll need to initialize your repository. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"git init")," on the command line if you're comfortable, or use a GUI tool like ",(0,i.kt)("a",{parentName:"p",href:"https://www.sourcetreeapp.com/"},"SourceTree")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/"},"GitKraken"),"."),(0,i.kt)("p",null,"Then, you'll need an account in a Git hosting server, the most popular being ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," and ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab"),'. These will instruct you on how to hook up your local repository with the online "remote" repository.'),(0,i.kt)("h2",{id:"tagging-a-release"},"Tagging a Release"),(0,i.kt)("p",null,"As you are going to be publishing this extension, you'll want to make sure that the information is up to date. Take a minute to revisit ",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json")," and make sure package name, description, and DuRoom extension information are all correct. It is recommended to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," file in your repository to explain what the extension is, so create one if you haven't already."),(0,i.kt)("p",null,"When you're ready to release, commit your extension's files to the repo and tag your first version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git tag v0.1.0\ngit push && git push --tags\n")),(0,i.kt)("h2",{id:"publishing-on-packagist"},"Publishing on Packagist"),(0,i.kt)("p",null,"Composer packages are published to a Composer repository, usually ",(0,i.kt)("a",{parentName:"p",href:"https://packagist.org/"},"Packagist"),". You will need an account to proceed."),(0,i.kt)("p",null,"If this is the first release you are publishing of your extension, you will need to ",(0,i.kt)("a",{parentName:"p",href:"https://packagist.org/packages/submit"},"submit your package")," using its public repository URL. If your extension is located on GitHub, this URL will look something like ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/AUTHOR/NAME.git"),"."),(0,i.kt)("h3",{id:"future-releases"},"Future Releases"),(0,i.kt)("p",null,"You can set up Packagist to ",(0,i.kt)("a",{parentName:"p",href:"https://packagist.org/about#how-to-update-packages"},"auto-update packages"),". Then for future releases, all you will need to do with Git is commit, tag, and push it to the remote server."),(0,i.kt)("h2",{id:"promoting-your-extension"},"Promoting Your Extension"),(0,i.kt)("p",null,"You will most likely want to create a discussion on the DuRoom Community in the ",(0,i.kt)("a",{parentName:"p",href:"https://discuss-duroom.js.org/t/extensions"},"Extensions tag"),". Other people can install your extension using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"composer require vendor/package\n")))}m.isMDXComponent=!0}}]);
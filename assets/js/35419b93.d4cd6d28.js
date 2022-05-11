"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[8240],{3905:function(e,o,t){t.d(o,{Zo:function(){return p},kt:function(){return c}});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),m=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},p=function(e){var o=m(e.components);return n.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(t),c=a,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return t?n.createElement(h,s(s({ref:o},p),{},{components:t})):n.createElement(h,s({ref:o},p))}));function c(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<r;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1129:function(e,o,t){t.r(o),t.d(o,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var n=t(7462),a=t(3366),r=(t(7294),t(3905)),s=["components"],i={},l="Composer",m={unversionedId:"composer",id:"composer",title:"Composer",description:"DuRoom uses a program called Composer to manage its dependencies and extensions.",source:"@site/docs/composer.md",sourceDirName:".",slug:"/composer",permalink:"/composer",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/composer.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Docs and Translation",permalink:"/contributing-docs-translations"},next:{title:"Installation",permalink:"/install"}},p={},u=[{value:"What is Composer?",id:"what-is-composer",level:2},{value:"DuRoom and Composer",id:"duroom-and-composer",level:2},{value:"The <code>composer.json</code> File",id:"the-composerjson-file",level:3},{value:"How to install Composer?",id:"how-to-install-composer",level:2},{value:"Dedicated Web Server",id:"dedicated-web-server",level:3},{value:"Managed / Shared hosting",id:"managed--shared-hosting",level:3},{value:"How do I use Composer?",id:"how-do-i-use-composer",level:2}],d={toc:u};function c(e){var o=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"composer"},"Composer"),(0,r.kt)("p",null,"DuRoom uses a program called ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"Composer")," to manage its dependencies and extensions.\nYou'll need to use composer if you want to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install or update DuRoom"),(0,r.kt)("li",{parentName:"ul"},"Install, update, or remove DuRoom extensions ")),(0,r.kt)("p",null,"This guide is provided as a brief explanation of Composer. We highly recommend consulting the ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org/doc/00-intro.md"},"official documentation")," for more information."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Composer v2")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Historically, Composer has caused issues on shared hosting due to huge memory use. In 2020, ",(0,r.kt)("a",{parentName:"p",href:"https://blog.packagist.com/composer-2-0-is-now-available/"},"Composer v2 was released")," with massive performance and memory usage improvements that eliminate these problems. Make sure your server is using Composer v2!"))),(0,r.kt)("h2",{id:"what-is-composer"},"What is Composer?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. \u2014 ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org/doc/00-intro.md"},"Composer Introduction"))),(0,r.kt)("p",null,"Each DuRoom installation consists primarily of DuRoom core and a set of ",(0,r.kt)("a",{parentName:"p",href:"/extensions"},"extensions"),". Each of these has its own dependencies and releases."),(0,r.kt)("p",null,"Back in the day, forum frameworks would manage extensions by having users upload zip files with the extension code. That seems simple enough, but issues quickly become evident:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uploading random zip files from the internet tends to be a bad idea. Requiring that extensions be downloaded from a central source like ",(0,r.kt)("a",{parentName:"li",href:"https://packagist.org/"},"Packagist")," makes it somewhat more tedious to spam malicious code, and ensures that source code is available on GitHub for free/public extensions."),(0,r.kt)("li",{parentName:"ul"},"Let's say Extension A requires v4 of some library, and Extension B requires v5 of that same library. With a zip-based solution, either one of the two dependencies could override the other, causing all sorts of inconsistent problems. Or both would attempt to run at once, which would cause PHP to crash (you can't declare the same class twice)."),(0,r.kt)("li",{parentName:"ul"},"Zip files can cause a lot of headache if trying to automate deployments, run automated tests, or scale to multiple server nodes."),(0,r.kt)("li",{parentName:"ul"},"There is no good way to ensure conflicting extension versions can't be installed, or that system PHP version and extension requirements are met."),(0,r.kt)("li",{parentName:"ul"},"Sure, we can upgrade extensions by replacing the zip file. But what about upgrading DuRoom core? And how can we ensure that extensions can declare which versions of core they're compatible with?")),(0,r.kt)("p",null,"Composer takes care of all these issues, and more!"),(0,r.kt)("h2",{id:"duroom-and-composer"},"DuRoom and Composer"),(0,r.kt)("p",null,"When you go to ",(0,r.kt)("a",{parentName:"p",href:"/install#installing"},"install DuRoom"),", you're actually doing 2 things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Downloading a boilerplate "skeleton" for DuRoom. This includes an ',(0,r.kt)("inlineCode",{parentName:"li"},"index.php")," file that handles web requests, a ",(0,r.kt)("inlineCode",{parentName:"li"},"duroom")," file that provides a CLI, and a bunch of web server config and folder setup. This is taken from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/DuRoom/duroom"},(0,r.kt)("inlineCode",{parentName:"a"},"DuRoom/duroom")," github repository"),", and doesn't actually contain any of the code necessary for DuRoom to run."),(0,r.kt)("li",{parentName:"ol"},"Installing ",(0,r.kt)("inlineCode",{parentName:"li"},"composer")," packages necessary for DuRoom, namely DuRoom core, and several bundled extensions. These are called by the ",(0,r.kt)("inlineCode",{parentName:"li"},"index.php")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"duroom")," files from step 1, and are the implementation of DuRoom. These are specified in a ",(0,r.kt)("inlineCode",{parentName:"li"},"composer.json")," file included in the skeleton.")),(0,r.kt)("p",null,"When you want to update DuRoom or add/update/remove extensions, you'll do so by running ",(0,r.kt)("inlineCode",{parentName:"p"},"composer")," commands. Each command is different, but all commands follow the same general process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update the ",(0,r.kt)("inlineCode",{parentName:"li"},"composer.json")," file to add/remove/update the package."),(0,r.kt)("li",{parentName:"ol"},"Do a bunch of math to get the latest compatible versions of everything if possible, or figure out why the requested arrangement is impossible."),(0,r.kt)("li",{parentName:"ol"},"If everything works, download new versions of everything that needs to be updated. If not, revert the ",(0,r.kt)("inlineCode",{parentName:"li"},"composer.json")," changes")),(0,r.kt)("p",null,"When running ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," commands, make sure to pay attention to the output. If there's an error, it'll probably tell you if it's because of extension incompatibilities, an unsupported PHP version, missing PHP extensions, or something else."),(0,r.kt)("h3",{id:"the-composerjson-file"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"composer.json")," File"),(0,r.kt)("p",null,"As mentioned above, the entire composer configuration for your DuRoom site is contained inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," file. You can consult the ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org/doc/04-schema.md"},"composer documentation")," for a specific schema, but for now, let's go over an annotated ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"DuRoom/duroom"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // This following section is mostly just metadata about the package.\n    // For forum admins, this doesn\'t really matter.\n    "name": "duroom/duroom",\n    "description": "Delightfully simple forum software.",\n    "type": "project",\n    "keywords": [\n        "forum",\n        "discussion"\n    ],\n    "homepage": "https://duroom.js.org/",\n    "license": "MIT",\n    "authors": [\n        {\n            "name": "NKDuy",\n            "email": "kn145660@gmail.com"\n        }\n    ],\n    "support": {\n        "issues": "https://github.com/DuRoom/core/issues",\n        "source": "https://github.com/DuRoom/duroom",\n        "docs": "https://duroom.js.org/docs/"\n    },\n    // End of metadata\n\n    // This next section is the one we care about the most.\n    // It\'s a list of packages we want, and the versions for each.\n    // We\'ll discuss this shortly.\n    "require": {\n        "duroom/core": "^1.0",\n        "duroom/approval": "*",\n        "duroom/bbcode": "*",\n        "duroom/emoji": "*",\n        "duroom/lang-english": "*",\n        "duroom/flags": "*",\n        "duroom/likes": "*",\n        "duroom/lock": "*",\n        "duroom/markdown": "*",\n        "duroom/mentions": "*",\n        "duroom/nicknames": "*",\n        "duroom/pusher": "*",\n        "duroom/statistics": "*",\n        "duroom/sticky": "*",\n        "duroom/subscriptions": "*",\n        "duroom/suspend": "*",\n        "duroom/tags": "*"\n    },\n\n    // Various composer config. The ones here are sensible defaults.\n    // See https://getcomposer.org/doc/06-config.md for a list of options.\n    "config": {\n        "preferred-install": "dist",\n        "sort-packages": true\n    },\n\n    // If composer can find a stable (not dev, alpha, or beta) version\n    // of a package, it should use that. Generally speaking, production\n    // sites shouldn\'t run beta software unless you know what you\'re doing.\n    "prefer-stable": true\n}\n')),(0,r.kt)("p",null,"Let's focus on that ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," section. Each entry is the name of a composer package, and a version string.\nTo read more about version strings, see the relevant ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"composer documentation"),"."),(0,r.kt)("p",null,"For DuRoom projects, there's several types of entries you'll see in the ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," section of your root install's ",(0,r.kt)("inlineCode",{parentName:"p"},"duroom/core"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You MUST have a ",(0,r.kt)("inlineCode",{parentName:"li"},"duroom/core")," entry. This should have an explicit version string corresponding to the major release you want to install. For DuRoom 1.x versions, this would be ",(0,r.kt)("inlineCode",{parentName:"li"},"^1.0"),"."),(0,r.kt)("li",{parentName:"ul"},"You should have an entry for each extension you've installed. Some bundled extensions are included by default (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"duroom/tags"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"duroom/suspend"),", etc), ",(0,r.kt)("a",{parentName:"li",href:"/extensions"},"others you'll add via composer commands"),". Unless you have a reason to do otherwise (e.g. you're testing a beta version of a package), we recommend using an asterisk as the version string for extensions (",(0,r.kt)("inlineCode",{parentName:"li"},"*"),'). This means "install the latest version compatible with my duroom/core".'),(0,r.kt)("li",{parentName:"ul"},"Some extensions / features might require PHP packages that aren't DuRoom extensions. For example, you need the guzzle library to use the ",(0,r.kt)("a",{parentName:"li",href:"/mail"},"Mailgun mail driver"),". In these cases, the instructions for the extension/feature in question should explain which version string to use.")),(0,r.kt)("h2",{id:"how-to-install-composer"},"How to install Composer?"),(0,r.kt)("p",null,"As with any other software, Composer must first be ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org/download/"},"installed")," on the server where DuRoom is running. There are several options depending on the type of web hosting you have."),(0,r.kt)("h3",{id:"dedicated-web-server"},"Dedicated Web Server"),(0,r.kt)("p",null,"In this case you can install composer as recommended in the Composer ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org/doc/00-intro.md#system-requirements"},"guide")," "),(0,r.kt)("h3",{id:"managed--shared-hosting"},"Managed / Shared hosting"),(0,r.kt)("p",null,"If Composer is not preinstalled (you can check this by running ",(0,r.kt)("inlineCode",{parentName:"p"},"composer --version"),"), you can use a ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org/composer-stable.phar"},"manual installation"),". Just upload the composer.phar to your folder and run ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/your/php7 composer.phar COMMAND")," for any command documented as ",(0,r.kt)("inlineCode",{parentName:"p"},"composer COMMAND"),"."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some articles on the internet will mention that you can use tools like a PHP shell. If you are not sure what you are doing or what they are talking about - be careful! An unprotected web shell is ",(0,r.kt)("strong",{parentName:"p"},"extremely")," dangerous."))),(0,r.kt)("h2",{id:"how-do-i-use-composer"},"How do I use Composer?"),(0,r.kt)("p",null,"You'll need to use Composer over the  ",(0,r.kt)("strong",{parentName:"p"},"C"),"ommand-",(0,r.kt)("strong",{parentName:"p"},"l"),"ine ",(0,r.kt)("strong",{parentName:"p"},"i"),"nterface (CLI). Be sure you can access your server over ",(0,r.kt)("strong",{parentName:"p"},"S"),"ecure ",(0,r.kt)("strong",{parentName:"p"},"Sh"),"ell (SSH)."),(0,r.kt)("p",null,"Once you have Composer installed, you should be able to run Composer commands in your SSH terminal via ",(0,r.kt)("inlineCode",{parentName:"p"},"composer COMMAND"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Optimizations")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After most commands, you'll want to run ",(0,r.kt)("inlineCode",{parentName:"p"},"composer dump-autoload -a"),". Essentially, this caches PHP files so they run faster."))))}c.isMDXComponent=!0}}]);
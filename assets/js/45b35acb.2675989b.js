"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[8617],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(t),p=r,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||a;return t?o.createElement(f,s(s({ref:n},d),{},{components:t})):o.createElement(f,s({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<a;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4979:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],c={},l="Console",i={unversionedId:"extend/console",id:"extend/console",title:"Console",description:"DuRoom allows extension developers to add custom console commands in addition to the default ones provided by duroom core.",source:"@site/docs/extend/console.md",sourceDirName:"extend",slug:"/extend/console",permalink:"/docs/extend/console",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/console.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Extension Assets",permalink:"/docs/extend/assets"},next:{title:"Extending Extensions",permalink:"/docs/extend/extending-extensions"}},d={},m=[{value:"Registering Console Commands",id:"registering-console-commands",level:2},{value:"Scheduled Commands",id:"scheduled-commands",level:2}],u={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"console"},"Console"),(0,a.kt)("p",null,"DuRoom allows extension developers to add custom console commands in addition to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/console"},"default ones")," provided by duroom core."),(0,a.kt)("p",null,"All console command development is done in the backend using PHP. To create a custom console command, you'll need to create a class that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"\\DuRoom\\Console\\AbstractCommand"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Console\\AbstractCommand;\nuse Psr\\Http\\Message\\ServerRequestInterface;\nuse Psr\\Http\\Server\\MiddlewareInterface;\nuse Psr\\Http\\Server\\RequestHandlerInterface;\n\nclass YourCommand extends AbstractCommand {\n  protected function configure()\n  {\n      $this\n          ->setName('YOUR COMMAND NAME')\n          ->setDescription('YOUR COMMAND DESCRIPTION');\n  }\n  protected function fire()\n  {\n    // Your logic here!\n  }\n}\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,a.kt)("a",{parentName:"h5",href:"https://github.com/DuRoom/cli"},"DuRoom CLI"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can use the CLI to automatically generate and register a console command:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ duroom-cli make backend command\n")))),(0,a.kt)("h2",{id:"registering-console-commands"},"Registering Console Commands"),(0,a.kt)("p",null,"To register console commands, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"DuRoom\\Extend\\Console")," extender in your extension's ",(0,a.kt)("inlineCode",{parentName:"p"},"extend.php")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\nuse YourNamespace\\Console\\CustomCommand;\n\nreturn [\n  // Other extenders\n  (new Extend\\Console())->command(CustomCommand::class)\n  // Other extenders\n];\n")),(0,a.kt)("h2",{id:"scheduled-commands"},"Scheduled Commands"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DuRoom\\Extend\\Console"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule")," method allows extension developers to create scheduled commands that run on an interval:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\nuse YourNamespace\\Console\\CustomCommand;\nuse Illuminate\\Console\\Scheduling\\Event;\n\nreturn [\n    // Other extenders\n    (new Extend\\Console())->schedule('cache:clear', function (Event $event) {\n        $event->everyMinute();\n    }, ['Arg1', '--option1', '--option2']),\n    // Other extenders\n];\n")),(0,a.kt)("p",null,"In the callback provided as the second argument, you can call methods on the ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/api/8.x/Illuminate/Console/Scheduling/Event.html"},"$event object")," to schedule on a variety of frequencies (or apply other options, such as only running on one server). See the ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/scheduling#scheduling-artisan-commands"},"Laravel documentation")," for more information."))}p.isMDXComponent=!0}}]);
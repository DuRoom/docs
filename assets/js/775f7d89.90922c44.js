"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[577],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Email Configuration",u={unversionedId:"mail",id:"mail",title:"Email Configuration",description:"Any community needs to send emails to allow for email verification, password resets, notifications, and other communication to users. Configuring your forum to send emails should be one of your first steps as an admin: an incorrect configuration will cause errors when users try to register.",source:"@site/docs/mail.md",sourceDirName:".",slug:"/mail",permalink:"/docs/mail",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/mail.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Theming",permalink:"/docs/themes"},next:{title:"Console",permalink:"/docs/console"}},c={},m=[{value:"Available Drivers",id:"available-drivers",level:2},{value:"SMTP",id:"smtp",level:3},{value:"Mail",id:"mail",level:3},{value:"Mailgun",id:"mailgun",level:3},{value:"Log",id:"log",level:3},{value:"Testing Email",id:"testing-email",level:2}],d={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"email-configuration"},"Email Configuration"),(0,i.kt)("p",null,"Any community needs to send emails to allow for email verification, password resets, notifications, and other communication to users. Configuring your forum to send emails should be one of your first steps as an admin: an incorrect configuration will cause errors when users try to register."),(0,i.kt)("h2",{id:"available-drivers"},"Available Drivers"),(0,i.kt)("p",null,"DuRoom provides several drivers by default, they are listed and explained below. Developers can also add ",(0,i.kt)("a",{parentName:"p",href:"/docs/extend/mail"},"custom mail drivers through extensions"),"."),(0,i.kt)("h3",{id:"smtp"},"SMTP"),(0,i.kt)("p",null,"This is probably the most commonly used email driver, allowing you to configure a host, port/encryption, username, and password for an external SMTP service. Please note that the encryption field expects either ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"tls"),"."),(0,i.kt)("h3",{id:"mail"},"Mail"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mail")," driver will try to use the sendmail / postfix email system included in many hosting servers. You must properly install and configure sendmail on your server for this to work."),(0,i.kt)("h3",{id:"mailgun"},"Mailgun"),(0,i.kt)("p",null,"This driver uses your ",(0,i.kt)("a",{parentName:"p",href:"https://www.mailgun.com/"},"Mailgun")," account to send emails. You'll need a secret key, as well as the domain and region from your mailgun configuration."),(0,i.kt)("p",null,"To use the mailgun driver, you'll need to install the Guzzle composer package (a PHP HTTP client). You can do this by running ",(0,i.kt)("inlineCode",{parentName:"p"},"composer require guzzlehttp/guzzle:^6.0|^7.0")," in your DuRoom install's root directory."),(0,i.kt)("h3",{id:"log"},"Log"),(0,i.kt)("p",null,"The log mail driver DOES NOT SEND MAIL, and is primarily used by developers. It writes the content of any emails to the log file in ",(0,i.kt)("inlineCode",{parentName:"p"},"DUROOM_ROOT_DIRECTORY/storage/logs"),"."),(0,i.kt)("h2",{id:"testing-email"},"Testing Email"),(0,i.kt)("p",null,"Once you've saved an email configuration, you can click the \"Send Test Mail\" button on the Mail page of the admin dashboard to make sure your configuration works. If you see an error, or do not receive an email, adjust the configuration and try again. Make sure to check your spam if there's no error, but nothing shows up in your inbox."))}p.isMDXComponent=!0}}]);
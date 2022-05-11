"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[4446],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5142:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Configuration File",c={unversionedId:"config",id:"config",title:"Configuration File",description:"There is only one place where DuRoom configuration cannot be modified through the DuRoom admin dashboard (excluding the database), and that is the config.php file located in the root of your DuRoom installation.",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/config",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/config.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Admin Dashboard",permalink:"/admin"},next:{title:"Extensions",permalink:"/extensions"}},u={},f=[],d={toc:f};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-file"},"Configuration File"),(0,a.kt)("p",null,"There is only one place where DuRoom configuration cannot be modified through the DuRoom admin dashboard (excluding the database), and that is the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.php")," file located in the root of your DuRoom installation."),(0,a.kt)("p",null,"This file, though small, contains details that are crucial for your DuRoom installation to work."),(0,a.kt)("p",null,"If the file exists, it tells DuRoom that it has already been installed.\nIt also provides DuRoom with database info and more."),(0,a.kt)("p",null,"Here's a quick overview of what everything means with an example file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php return array (\n  'debug' => false, // enables or disables debug mode, used to troubleshoot issues\n  'offline' => false, // enables or disables site maintenance mode. This makes your site inaccessible to all users (including admins).\n  'database' =>\n  array (\n    'driver' => 'mysql', // the database driver, i.e. MySQL, MariaDB...\n    'host' => 'localhost', // the host of the connection, localhost in most cases unless using an external service\n    'database' => 'duroom', // the name of the database in the instance\n    'username' => 'root', // database username\n    'password' => '', // database password\n    'charset' => 'utf8mb4',\n    'collation' => 'utf8mb4_unicode_ci',\n    'prefix' => '', // the prefix for the tables, useful if you are sharing the same database with another service\n    'port' => '3306', // the port of the connection, defaults to 3306 with MySQL\n    'strict' => false,\n  ),\n  'url' => 'https://duroom.localhost', // the URL installation, you will want to change this if you change domains\n  'paths' =>\n  array (\n    'api' => 'api', // /api goes to the API\n    'admin' => 'admin', // /admin goes to the admin\n  ),\n);\n")))}p.isMDXComponent=!0}}]);
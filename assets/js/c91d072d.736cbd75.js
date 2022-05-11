"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[4159],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6421:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Views and Blade",p={unversionedId:"extend/views",id:"extend/views",title:"Views and Blade",description:"Although the DuRoom UI you know and love is powered by our Mithril frontend,",source:"@site/docs/extend/views.md",sourceDirName:"extend",slug:"/extend/views",permalink:"/docs/extend/views",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/views.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Themes",permalink:"/docs/extend/theme"},next:{title:"API Throttling",permalink:"/docs/extend/api-throttling"}},d={},u=[{value:"Adding Views",id:"adding-views",level:2},{value:"Blade Templates",id:"blade-templates",level:2},{value:"Overriding Views",id:"overriding-views",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"views-and-blade"},"Views and Blade"),(0,i.kt)("p",null,"Although the DuRoom UI you know and love is powered by our ",(0,i.kt)("a",{parentName:"p",href:"frontend"},"Mithril frontend"),",\nserver-side generated templates are still used throughout DuRoom. Most notably, the HTML skeleton of the forum, which includes various SEO meta tags, as well as the no-js view of the forum, is implemented through the Views and Blade systems."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/blade"},"Blade")," is Laravel's templating engine, which allows you to conveniently generate HTML (or other static content) from PHP.\nIt's the same idea as ",(0,i.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.0.x/"},"Jinja")," or ",(0,i.kt)("a",{parentName:"p",href:"https://ejs.co/"},"EJS"),".\n",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/views"},"Views")," are Laravel's system for organizing/registering Blade templates, and also includes utilities for rendering them and providing them with variables."),(0,i.kt)("p",null,"For our purposes, views are directories containing ",(0,i.kt)("inlineCode",{parentName:"p"},".blade.php")," template files (possibly contained in subdirectories)."),(0,i.kt)("h2",{id:"adding-views"},"Adding Views"),(0,i.kt)("p",null,"You will need to tell the view factory where it can find your extension's view files by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," extender to ",(0,i.kt)("inlineCode",{parentName:"p"},"extend.php"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\nuse Illuminate\\Contracts\\View\\Factory;\n\nreturn [\n    (new Extend\\View)\n        ->namespace('acme.hello-world', __DIR__.'/views'),\n];\n")),(0,i.kt)("h2",{id:"blade-templates"},"Blade Templates"),(0,i.kt)("p",null,"To learn about the syntax for Blade templates, read ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/blade"},"Laravel's documentation"),"."),(0,i.kt)("p",null,"Once you've set up your views, you can render them to strings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Here, $view is of type `Illuminate\\Contracts\\View\\Factory`\n$renderedString = $view->make('acme.hello-world::greeting')->render();\n\n// You can also pass variables to the view:\n$renderedString = $view->make('acme.hello-world::greeting', ['varName' => true])->render();\n")),(0,i.kt)("p",null,"You can obtain the view factory instance through dependency injection."),(0,i.kt)("p",null,"The format is ",(0,i.kt)("inlineCode",{parentName:"p"},'"VIEW_NAMESPACE::VIEW_NAME"'),". If the view folder is organized as subdirectories, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," with ",(0,i.kt)("inlineCode",{parentName:"p"},".")," in the pack.\nSo if you have a file at ",(0,i.kt)("inlineCode",{parentName:"p"},'"forum/error.blade.php"')," in a namespace called ",(0,i.kt)("inlineCode",{parentName:"p"},'"custom-views"'),", you would use ",(0,i.kt)("inlineCode",{parentName:"p"},'"custom-views::forum.error"'),"."),(0,i.kt)("p",null,"Note that all Blade templates rendered this way automatically have access to the following variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$url"),": a ",(0,i.kt)("a",{parentName:"li",href:"routes#generating-urls"},"URL generator")," instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$translator"),": a ",(0,i.kt)("a",{parentName:"li",href:"i18n#server-side-translation"},"Translator")," instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$settings"),": a ",(0,i.kt)("a",{parentName:"li",href:"settings"},"SettingsInterface")," instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$slugManager"),": a ",(0,i.kt)("a",{parentName:"li",href:"slugging"},"SlugManager")," instance.")),(0,i.kt)("p",null,"Additionally, templates used by ",(0,i.kt)("a",{parentName:"p",href:"routes#content"},"content logic")," have access to ",(0,i.kt)("inlineCode",{parentName:"p"},"$forum"),", which represents the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/Api/Serializer/ForumSerializer.php#L19"},"Forum API Document's attributes"),"."),(0,i.kt)("h2",{id:"overriding-views"},"Overriding Views"),(0,i.kt)("p",null,"If you want to override templates added by core or extensions, set up a view folder structure matching the one you are trying to override, containing just the files you are trying to override. Then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," extender's ",(0,i.kt)("inlineCode",{parentName:"p"},"extendNamespace")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\nuse Illuminate\\Contracts\\View\\Factory;\n\nreturn [\n    (new Extend\\View)\n        ->extendNamespace('acme.hello-world', __DIR__.'/override_views');\n];\n")))}m.isMDXComponent=!0}}]);
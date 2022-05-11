"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[92],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(v,a(a({ref:n},l),{},{components:t})):r.createElement(v,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4806:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={},c="Service Provider",d={unversionedId:"extend/service-provider",id:"extend/service-provider",title:"Service Provider",description:"As noted throughout this documentation, DuRoom uses Laravel's service container (or IoC container) for dependency injection.",source:"@site/docs/extend/service-provider.md",sourceDirName:"extend",slug:"/extend/service-provider",permalink:"/extend/service-provider",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/service-provider.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Searching and Filtering",permalink:"/extend/search"}},l={},p=[{value:"DuRoom Boot Process",id:"duroom-boot-process",level:2},{value:"Custom Service Providers",id:"custom-service-providers",level:2}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-provider"},"Service Provider"),(0,i.kt)("p",null,"As noted throughout this documentation, DuRoom uses ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/container"},"Laravel's service container")," (or IoC container) for dependency injection.\n",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/providers"},"Service Providers")," allow low-level configuration and modification of the DuRoom backend.\nThe most common use case for service providers is to create, modify, or replace container bindings.\nThat being said, service providers allow you full access to run whatever logic you need during application boot with access to the container."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Advanced Use Only!!!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Unlike with other extenders, the Service Provider layer is NOT use-case driven, and is NOT considered public API. It is subject to change at any time, without notice or deprecation. This should only be used if you know what you're doing, and the other extenders don't satisfy your use case."))),(0,i.kt)("h2",{id:"duroom-boot-process"},"DuRoom Boot Process"),(0,i.kt)("p",null,"To understand service providers, you must first understand the order in which DuRoom boots. Most of this happens in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/Foundation/InstalledSite.php"},"DuRoom\\Foundation\\InstalledSite")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The container and application are initialized, and essential bindings (config, environment, logger) are registered"),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"register")," methods of all core service providers are run."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"extend")," methods of all extenders used by all enabled extensions are run."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"extend")," methods of all extenders used in the DuRoom site's local ",(0,i.kt)("inlineCode",{parentName:"li"},"extend.php")," are run."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"boot")," methods of all core service providers are run.")),(0,i.kt)("h2",{id:"custom-service-providers"},"Custom Service Providers"),(0,i.kt)("p",null,"A custom service provider should extend ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Foundation\\AbstractServiceProvider"),", and can have a ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," method. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse DuRoom\\Foundation\\AbstractServiceProvider;\nuse Illuminate\\Contracts\\Container\\Container;\n\nclass CustomServiceProvider extends AbstractServiceProvider\n{\n    public function register()\n    {\n        // custom logic here, for example:\n        $this->container->resolving(SomeClass::class, function ($container) {\n            return new SomeClass($container->make('some.binding'));\n        })\n    }\n\n    public function boot(Container $container)\n    {\n        // custom logic here\n    }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," method will run during step (3) above, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," method will run during step (5) above. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," method, the container is available via ",(0,i.kt)("inlineCode",{parentName:"p"},"$this->container"),". In the ",(0,i.kt)("inlineCode",{parentName:"p"},"boot")," method, the container (or any other arguments), should be injected via typehinted method arguments."),(0,i.kt)("p",null,"DuRoom does not currently support Laravel Octane, but some ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/octane#dependency-injection-and-octane"},"best practices"),", like using the ",(0,i.kt)("inlineCode",{parentName:"p"},"$container")," argument inside ",(0,i.kt)("inlineCode",{parentName:"p"},"bind"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"singleton"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"resolving")," callbacks instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"$this->container")," should be used. See the ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/octane#dependency-injection-and-octane"},"Octane documentation")," for more information."),(0,i.kt)("p",null,"To actually register your custom service provider, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceProvider")," extender in ",(0,i.kt)("inlineCode",{parentName:"p"},"extend.php"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse DuRoom\\Extend;\n\nreturn [\n    // Other extenders\n    (new Extend\\ServiceProvider())\n        ->register(CustomServiceProvider::class),\n    // Other extenders\n];\n")))}m.isMDXComponent=!0}}]);
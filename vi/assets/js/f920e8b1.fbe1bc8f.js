"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[9842],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={},l="Settings",u={unversionedId:"extend/settings",id:"extend/settings",title:"Settings",description:"At some point while making an extension, you might want to read some of the forum's settings or store certain settings specific to your extension. Thankfully, DuRoom makes this very easy.",source:"@site/docs/extend/settings.md",sourceDirName:"extend",slug:"/extend/settings",permalink:"/vi/extend/settings",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/settings.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Groups and Permissions",permalink:"/vi/extend/permissions"},next:{title:"Testing",permalink:"/vi/extend/testing"}},p={},c=[{value:"The Settings Repository",id:"the-settings-repository",level:2},{value:"Reading Settings",id:"reading-settings",level:3},{value:"Storing Settings",id:"storing-settings",level:3},{value:"Other Functions",id:"other-functions",level:3},{value:"Settings in the Frontend",id:"settings-in-the-frontend",level:2},{value:"Editing Settings",id:"editing-settings",level:3},{value:"Accessing Settings",id:"accessing-settings",level:3}],d={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"settings"},"Settings"),(0,r.kt)("p",null,"At some point while making an extension, you might want to read some of the forum's settings or store certain settings specific to your extension. Thankfully, DuRoom makes this very easy."),(0,r.kt)("h2",{id:"the-settings-repository"},"The Settings Repository"),(0,r.kt)("p",null,"Reading or changing settings can be done using an implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsRepositoryInterface"),".\nBecause DuRoom uses ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/container"},"Laravel's service container")," (or IoC container) for dependency injection, you don't need to worry about where to obtain such a repository, or how to instantiate one.\nInstead, you can rely on the container to instantiate your class and inject the correct dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace acme\\HelloWorld\\ExampleDir;\n\nuse DuRoom\\Settings\\SettingsRepositoryInterface;\n\nclass ClassInterfacesWithSettings\n{\n    /**\n     * @var SettingsRepositoryInterface\n     */\n    protected $settings;\n\n    public function __construct(SettingsRepositoryInterface $settings)\n    {\n        $this->settings = $settings;\n    }\n}\n")),(0,r.kt)("p",null,"Great! Now the ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsRepositoryInterface")," is available through ",(0,r.kt)("inlineCode",{parentName:"p"},"$this->settings")," to our class."),(0,r.kt)("h3",{id:"reading-settings"},"Reading Settings"),(0,r.kt)("p",null,"To read settings, all we have to do is use the repository's ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$this->settings->get('forum_title')")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," function accepts two arguments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The name of the setting you are trying to read."),(0,r.kt)("li",{parentName:"ol"},"(Optional) A default value if no value has been stored for such a setting. By default, this will be ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,r.kt)("h3",{id:"storing-settings"},"Storing Settings"),(0,r.kt)("p",null,"Storing settings ist just as easy, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"set()")," function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$this->settings->set('forum_title', 'Super Awesome Forum')")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," function also accepts two arguments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The name of the setting you are trying to change."),(0,r.kt)("li",{parentName:"ol"},"The value you want to store for this setting.")),(0,r.kt)("h3",{id:"other-functions"},"Other Functions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"all()")," function returns an array of all known settings."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delete($name)")," function lets you remove a named setting."),(0,r.kt)("h2",{id:"settings-in-the-frontend"},"Settings in the Frontend"),(0,r.kt)("h3",{id:"editing-settings"},"Editing Settings"),(0,r.kt)("p",null,"To learn more about adding settings through the admin dashboard, see the ",(0,r.kt)("a",{parentName:"p",href:"/vi/admin"},"relevant documentation"),"."),(0,r.kt)("h3",{id:"accessing-settings"},"Accessing Settings"),(0,r.kt)("p",null,"All settings are available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," frontend via the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.data.settings")," global.\nHowever, this is not done in the ",(0,r.kt)("inlineCode",{parentName:"p"},"forum")," frontend, as anyone can access it, and you wouldn't want to leak all your settings! (Seriously, that could be a very problematic data breach)."),(0,r.kt)("p",null,"Instead, if we want to use settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"forum")," frontend, we'll need to serialize them and send them alongside the initial forum data payload."),(0,r.kt)("p",null,"This can be done via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," extender. For example:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"extend.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\n\nreturn [\n   (new Extend\\Settings)\n      ->serializeToForum('myCoolSetting', 'my.cool.setting.key')\n      ->serializeToForum('myCoolSettingModified', 'my.cool.setting.key', function ($retrievedValue) {\n        // This third argument is optional, and allows us to pass the retrieved setting through some custom logic.\n        // In this example, we'll append a string to it.\n\n        return \"My Cool Setting: $retrievedValue\";\n      }, \"default value!\"),\n]\n")),(0,r.kt)("p",null,"Now, the ",(0,r.kt)("inlineCode",{parentName:"p"},"my.cool.setting.key")," setting will be accessible in the frontend as ",(0,r.kt)("inlineCode",{parentName:"p"},'app.forum.attribute("myCoolSetting")'),", and our modified value will be accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},'app.forum.attribute("myCoolSettingModified")'),"."))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[3735],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,x=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(x,s(s({ref:n},c),{},{components:t})):o.createElement(x,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<r;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5602:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),s=["components"],a={},l="Extending Extensions",p={unversionedId:"extend/extending-extensions",id:"extend/extending-extensions",title:"Extending Extensions",description:"DuRoom extensions aren't just for adding features to core: extensions can extend other extensions!",source:"@site/docs/extend/extending-extensions.md",sourceDirName:"extend",slug:"/extend/extending-extensions",permalink:"/extend/extending-extensions",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/extending-extensions.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Console",permalink:"/extend/console"},next:{title:"Extensibility",permalink:"/extend/extensibility"}},c={},d=[{value:"Dependencies",id:"dependencies",level:2},{value:"Optional Dependencies",id:"optional-dependencies",level:2},{value:"Importing from Extensions",id:"importing-from-extensions",level:2},{value:"webpack.config.js",id:"webpackconfigjs",level:4}],u={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extending-extensions"},"Extending Extensions"),(0,r.kt)("p",null,"DuRoom extensions aren't just for adding features to core: extensions can extend other extensions!"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To learn how to make your extension extensible, see the ",(0,r.kt)("a",{parentName:"p",href:"/extend/extensibility"},"relevant documentation")))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"If your extension relies on another extension, you'll want to ensure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The other extension is installed and enabled before yours can be."),(0,r.kt)("li",{parentName:"ul"},"The other extension can't be disabled while yours is enabled."),(0,r.kt)("li",{parentName:"ul"},"The other extension is booted before your extension.")),(0,r.kt)("p",null,"DuRoom makes this very easy: just add the other extension to your extension's ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," section."),(0,r.kt)("p",null,"For example, if you were building a new theme for the DuRoom Tags extension, your ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "require": {\n    "duroom/core": "^0.1.0-beta.15",  // Since all extensions need to require core.\n    "duroom/tags": "^0.1.0-beta.15"  // This tells DuRoom to treat tags as a dependency of your extension.\n  },\n  // ...\n}\n')),(0,r.kt)("h2",{id:"optional-dependencies"},"Optional Dependencies"),(0,r.kt)("p",null,'Sometimes, extension A might want to extend extension B only if extension B is enabled.\nIn this case, we call B an "Optional Dependency" of A.\nFor instance, a drafts extension might want to add support for saving private discussion drafts, but only if the private discussion extension is enabled.'),(0,r.kt)("p",null,"The first step here is detecting whether extension B is enabled. In the frontend, this is easy: if extension B does anything in the frontend, its extension ID will appear as a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"duroom.extensions")," global object. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if ('some-extension-id' in duroom.extensions) {\n    // do something\n}\n")),(0,r.kt)("p",null,"In the backend, you'll need to inject an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"DuRoom\\Extension\\ExtensionManager"),", and use its ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled()")," method. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse DuRoom\\Extension\\ExtensionManager;\n\nclass SomeClass {\n    public function __construct(ExtensionManager $extensions)\n    {\n        $this->extensions = $extensions;\n    }\n\n    public function someMethod()\n    {\n        if ($this->extensions->isEnabled('some-extension-id')) {\n            // do something.\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Generally, if your extension has optional dependencies, you'll want it to be booted after said optional dependencies.\nYou can also do this by specifying composer package names (NOT duroom extension IDs) in an array for the ",(0,r.kt)("inlineCode",{parentName:"p"},"extra.duroom-extension.optional-dependencies")," key of your composer.json."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "extra": {\n    "duroom-extension": {\n      "optional-dependencies": [\n        "duroom/tags"\n      ]\n    }\n  },\n  // ...\n}\n')),(0,r.kt)("h2",{id:"importing-from-extensions"},"Importing from Extensions"),(0,r.kt)("p",null,"In the backend, you can import the classes you need via regular PHP ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," statements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse DuRoom\\Tags\\Tag;\n\nclass SomeClass\n{\n    public function someMethod()\n    {\n        return new Tag();  // This is not the correct way to instantiate models, it's just here for example of importing.\n    }\n}\n")),(0,r.kt)("p",null,"Note that if you're importing from an optional dependency which might not be installed, you'll need to check that the class in question exists via the ",(0,r.kt)("inlineCode",{parentName:"p"},"class_exists")," function."),(0,r.kt)("p",null,"In the frontend, you can only import things that have been explicitly exported. However, first you'll need to configure your extension's webpack to allow these imports:"),(0,r.kt)("h4",{id:"webpackconfigjs"},"webpack.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = require('duroom-webpack-config')({\n    // Provide the extension IDs of all extensions from which your extension will be importing.\n    // Do this for both full and optional dependencies.\n    useExtensions: ['duroom-tags']\n});\n")),(0,r.kt)("p",null,"Once this is done, you can import with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const allThingsExportedBySomeExtension = require('@duroom-tags');\n")))}m.isMDXComponent=!0}}]);
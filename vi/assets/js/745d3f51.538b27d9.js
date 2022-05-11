"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[6031],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7595:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Interactive Components",p={unversionedId:"extend/interactive-components",id:"extend/interactive-components",title:"Interactive Components",description:"Often, you'll want to trigger interactive components in addition to whatever content/animations you have on a given page.",source:"@site/docs/extend/interactive-components.md",sourceDirName:"extend",slug:"/extend/interactive-components",permalink:"/vi/extend/interactive-components",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/interactive-components.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Frontend Pages and Resolvers",permalink:"/vi/extend/frontend-pages"},next:{title:"Internationalization",permalink:"/vi/extend/i18n"}},m={},c=[{value:"Alerts",id:"alerts",level:2},{value:"Modals",id:"modals",level:2},{value:"Composer",id:"composer",level:2},{value:"Composer Editor",id:"composer-editor",level:3}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interactive-components"},"Interactive Components"),(0,r.kt)("p",null,"Often, you'll want to trigger interactive components in addition to whatever content/animations you have on a given page.\nDepending on the nature of your extension, you may want to define custom interactive elements or reuse or extend existing ones."),(0,r.kt)("p",null,"Remember that all ",(0,r.kt)("a",{parentName:"p",href:"/vi/extend/frontend#components"},"components")," used in DuRoom core are exported and made available for extensions to reuse. A full list is available in our ",(0,r.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/js/master/identifiers.html"},"API documentation"),"."),(0,r.kt)("h2",{id:"alerts"},"Alerts"),(0,r.kt)("p",null,"Alerts are managed by a global instance of ",(0,r.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/js/master/class/src/common/states/alertmanagerstate.ts~alertmanagerstate"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertManagerState")),", which is accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"app.alerts")," on both the ",(0,r.kt)("inlineCode",{parentName:"p"},"forum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," frontends. It has 3 publicly accessible methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.alerts.show")," will add a new alert, and return a key which can later be used to dismiss that alert. It has 3 overloads:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.alerts.show(children)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.alerts.show(attrs, children)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.alerts.show(componentClass, attrs, children)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.alerts.dismiss(key)")," will dismiss an active alert with the given key, if one exists."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.alerts.clear()")," will dismiss all alerts.")),(0,r.kt)("p",null,"Typically, you won't need a custom component for alerts; however, if you could like, you can provide one. You'll probably want it to inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"duroom/common/components/Alert"),"."),(0,r.kt)("p",null,"The following attrs are useful to keep in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," attr will apply the ",(0,r.kt)("inlineCode",{parentName:"li"},"Alert--{type}")," css class. ",(0,r.kt)("inlineCode",{parentName:"li"},"success")," will yield a green alert, ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," a red alert, and an empty ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," a yellow alert."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"dismissible")," attr will dictate whether a dismiss button will be shown."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ondismiss")," attr can be used to provide a callback which will run when the alert is dismissed."),(0,r.kt)("li",{parentName:"ul"},"Components provided in the ",(0,r.kt)("inlineCode",{parentName:"li"},"controls")," attr will be shown after alert children.")),(0,r.kt)("h2",{id:"modals"},"Modals"),(0,r.kt)("p",null,"Modals are managed by a global instance of ",(0,r.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/js/master/class/src/common/states/modalmanagerstate.js~modalmanagerstate"},(0,r.kt)("inlineCode",{parentName:"a"},"ModalManagerState")),", which is accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"app.modal")," on both the ",(0,r.kt)("inlineCode",{parentName:"p"},"forum")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," frontends. It has 2 publicly accessible methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.modal.show(componentClass, attrs)")," will show a modal using the given component class and attrs. If called while a modal is already open, it will replace the currently open modal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.modal.close()")," will close the modal if one is currently active.")),(0,r.kt)("p",null,"As opposed to alerts, most modals will use a custom class, inheriting ",(0,r.kt)("inlineCode",{parentName:"p"},"duroom/common/components/Modal"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import Modal from 'duroom/common/components/Modal';\n\nexport default class CustomModal extends Modal {\n  // True by default, dictates whether the modal can be dismissed by clicking on the background or in the top right corner.\n  static isDismissible = true;\n\n  className() {\n    // Custom CSS classes to apply to the modal\n    return 'custom-modal-class';\n  }\n\n  title() {\n    // Content to show in the modal's title bar\n    return <p>Custom Modal</p>;\n  }\n\n  content() {\n    // Content to show in the modal's body\n    return <p>Hello World!</p>;\n  }\n\n  onsubmit() {\n    // If your modal contains a form, you can add form processing logic here.\n  }\n}\n")),(0,r.kt)("p",null,"More information about methods available to override is available in our ",(0,r.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/js/master/class/src/common/components/modal.js~modal"},"API documentation"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,r.kt)("a",{parentName:"h5",href:"https://github.com/DuRoom/cli"},"DuRoom CLI"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use the CLI to automatically generate a modal:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ duroom-cli make frontend modal\n")))),(0,r.kt)("h2",{id:"composer"},"Composer"),(0,r.kt)("p",null,"Since DuRoom is a forum, we need tools for users to be able to create and edit posts and discussions. DuRoom accomplishes this through the floating composer component."),(0,r.kt)("p",null,"The composer is managed by a global instance of ",(0,r.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/js/master/class/src/common/states/modalmanagerstate.js~modalmanagerstate"},(0,r.kt)("inlineCode",{parentName:"a"},"ComposerState")),", which is accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"app.composer")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"forum")," frontend. Its most important public methods are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.composer.load(componentClass, attrs)")," will load in a new composer type. If a composer is already active, it will be replaced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.composer.show()")," will show the composer if it is currently hidden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.composer.close()")," will close and reset the composer after confirming with the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.composer.hide()")," will close and reset the composer without confirming with the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.composer.bodyMatches(componentClass, attrs)")," will check if the currently active composer is of a certain type, and whether its atts match optionally provided attrs.")),(0,r.kt)("p",null,"The full list of public methods is documented in the API docs linked above."),(0,r.kt)("p",null,"Because the composer can be used for various different actions (starting a discussion, editing a post, replying to a discussion, etc.), its fields may vary depending as usage.\nThis is done by splitting code for each usage into a subclass of ",(0,r.kt)("inlineCode",{parentName:"p"},"duroom/forum/components/ComposerBody"),". This component class must be provided when loading a composer."),(0,r.kt)("h3",{id:"composer-editor"},"Composer Editor"),(0,r.kt)("p",null,"The actual editor is yet another component, ",(0,r.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/js/master/class/src/common/components/texteditor.js~texteditor"},(0,r.kt)("inlineCode",{parentName:"a"},"duroom/common/components/TextEditor")),'.\nIts state can be programatically accessed via an "editor driver", which implements ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/js/src/common/utils/EditorDriverInterface.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"EditorDriverInterface")),".\nThis is globally available for the current composer via ",(0,r.kt)("inlineCode",{parentName:"p"},"app.composer.editor"),", and allows extensions to programatically read, insert, and modify the current contents, selections, and cursor position of the active composer's text editor."))}u.isMDXComponent=!0}}]);
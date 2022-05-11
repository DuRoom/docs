"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[6271],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(v,r(r({ref:n},u),{},{components:t})):a.createElement(v,r({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1462:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=t(7462),o=t(3366),s=(t(7294),t(3905)),r=["components"],i={},c="Backend Events",l={unversionedId:"extend/backend-events",id:"extend/backend-events",title:"Backend Events",description:"Often, an extension will want to react to some events occuring elsewhere in DuRoom. For instance, we might want to increment a counter when a new discussion is posted, send a welcome email when a user logs in for the first time, or add tags to a discussion before saving it to the database. These events are known as domain events, and are broadcasted across the framework through Laravel's event system.",source:"@site/docs/extend/backend-events.md",sourceDirName:"extend",slug:"/extend/backend-events",permalink:"/extend/backend-events",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/backend-events.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Admin Dashboard",permalink:"/extend/admin"},next:{title:"Authorization",permalink:"/extend/authorization"}},u={},p=[{value:"Listening to Events",id:"listening-to-events",level:2},{value:"Dispatching Events",id:"dispatching-events",level:2},{value:"Custom Events",id:"custom-events",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"backend-events"},"Backend Events"),(0,s.kt)("p",null,"Often, an extension will want to react to some events occuring elsewhere in DuRoom. For instance, we might want to increment a counter when a new discussion is posted, send a welcome email when a user logs in for the first time, or add tags to a discussion before saving it to the database. These events are known as ",(0,s.kt)("strong",{parentName:"p"},"domain events"),", and are broadcasted across the framework through ",(0,s.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/events"},"Laravel's event system"),"."),(0,s.kt)("p",null,"For a full list of backend events, see our ",(0,s.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/php/master/search.html?search=Event"},"API documentation"),". Domain events classes are organized by namespace, usually ",(0,s.kt)("inlineCode",{parentName:"p"},"DuRoom\\TYPE\\Event"),"."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,s.kt)("a",{parentName:"h5",href:"https://github.com/DuRoom/cli"},"DuRoom CLI"))),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can use the CLI to automatically generate event listeners:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ duroom-cli make backend event-listener\n")))),(0,s.kt)("h2",{id:"listening-to-events"},"Listening to Events"),(0,s.kt)("p",null,"You can attach a listener to an event using the ",(0,s.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/php/master/duroom/extend/event"},(0,s.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,s.kt)("a",{parentName:"p",href:"/extend/start#extenders"},"extender"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\nuse DuRoom\\Post\\Event\\Deleted;\nuse Symfony\\Contracts\\Translation\\TranslatorInterface;\n\n\nreturn [\n    (new Extend\\Event)\n        ->listen(Deleted::class, function($event) {\n            // do something here\n        })\n        ->listen(Deleted::class, PostDeletedListener::class)\n];\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"class PostDeletedListener\n{\n    protected $translator;\n\n    public function __construct(TranslatorInterface $translator)\n    {\n        $this->translator = $translator;\n    }\n\n    public function handle(Deleted $event)\n    {\n        // Your logic here\n    }\n}\n")),(0,s.kt)("p",null,"As shown above, a listener class can be used instead of a callback. This allows you to ",(0,s.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/container"},"inject dependencies")," into your listener class via constructor parameters. In this example we resolve a translator instance, but we can inject anything we want/need."),(0,s.kt)("p",null,"You can also listen to multiple events at once via an event subscriber. This is useful for grouping common functionality; for instance, if you want to update some metadata on changes to posts:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\nuse DuRoom\\Post\\Event\\Deleted;\nuse DuRoom\\Post\\Event\\Saving;\nuse Symfony\\Contracts\\Translation\\TranslatorInterface;\n\n\nreturn [\n    (new Extend\\Event)\n        ->subscribe(PostEventSubscriber::class),\n];\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"class PostEventSubscriber\n{\n    protected $translator;\n  \n    public function __construct(TranslatorInterface $translator)\n    {\n        $this->translator = $translator;\n    }\n  \n    public function subscribe($events)\n    {\n        $events->listen(Deleted::class, [$this, 'handleDeleted']);\n        $events->listen(Saving::class, [$this, 'handleSaving']);\n    }\n  \n    public function handleDeleted(Deleted $event)\n    {\n        // Your logic here\n    }\n  \n    public function handleSaving(Saving $event)\n    {\n        // Your logic here\n    }\n}\n")),(0,s.kt)("h2",{id:"dispatching-events"},"Dispatching Events"),(0,s.kt)("p",null,"Dispatching events is very simple. All you need to do is inject ",(0,s.kt)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Events\\Dispatcher")," into your class, and then call its ",(0,s.kt)("inlineCode",{parentName:"p"},"dispatch")," method. For instance:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Post\\Event\\Deleted;\nuse Illuminate\\Contracts\\Events\\Dispatcher;\n\n\nclass SomeClass\n{\n    /**\n      * @var Dispatcher\n      */\n    protected $events;\n\n    /**\n      * @param Dispatcher $events\n      */\n    public function __construct(Dispatcher $events)\n    {\n        $this->events = $events;\n    }\n\n    public function someMethod()\n    {\n        // Logic\n        $this->events->dispatch(\n            new Deleted($somePost, $someActor)\n        );\n        // More Logic\n    }\n}\n")),(0,s.kt)("h2",{id:"custom-events"},"Custom Events"),(0,s.kt)("p",null,"As an extension developer you can define your own events to allow yourself (or other extensions) to react to events in your extension.\nEvents are generally instances of simple classes (no need to extend anything). When defining a new event, you'll typically want to use public properties, and maybe some methods for convenience of users.\nFor example, if we take a look at ",(0,s.kt)("inlineCode",{parentName:"p"},"DuRoom\\Post\\Event\\Deleted"),", it's just a wrapping around some data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/*\n * This file is part of DuRoom.\n *\n * For detailed copyright and license information, please view the\n * LICENSE file that was distributed with this source code.\n */\n\nnamespace DuRoom\\Post\\Event;\n\nuse DuRoom\\Post\\Post;\nuse DuRoom\\User\\User;\n\nclass Deleted\n{\n    /**\n     * @var Post\n     */\n    public $post;\n\n    /**\n     * @var User\n     */\n    public $actor;\n\n    /**\n     * @param Post $post\n     * @param User $user\n     */\n    public function __construct(Post $post, User $actor = null)\n    {\n        $this->post = $post;\n        $this->actor = $actor;\n    }\n}\n")))}m.isMDXComponent=!0}}]);
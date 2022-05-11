"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[3170],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8334:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="Routes and Content",u={unversionedId:"extend/routes",id:"extend/routes",title:"Routes and Content",description:"A fundamental part of extending DuRoom is adding routes \u2014\xa0both to expose new resources in the JSON-API, and to add new pages to the frontend.",source:"@site/docs/extend/routes.md",sourceDirName:"extend",slug:"/extend/routes",permalink:"/vi/extend/routes",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/routes.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Frontend Development",permalink:"/vi/extend/frontend"},next:{title:"Models and Migrations",permalink:"/vi/extend/models"}},p={},d=[{value:"Backend Routes",id:"backend-routes",level:2},{value:"Defining Routes",id:"defining-routes",level:3},{value:"Controllers",id:"controllers",level:3},{value:"Route Parameters",id:"route-parameters",level:3},{value:"Generating URLs",id:"generating-urls",level:3},{value:"Views",id:"views",level:3},{value:"API Controllers",id:"api-controllers",level:3},{value:"Frontend Routes",id:"frontend-routes",level:2},{value:"Route Parameters",id:"route-parameters-1",level:3},{value:"Generating URLs",id:"generating-urls-1",level:3},{value:"Linking to Other Pages",id:"linking-to-other-pages",level:3},{value:"Content",id:"content",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routes-and-content"},"Routes and Content"),(0,o.kt)("p",null,"A fundamental part of extending DuRoom is adding routes \u2014\xa0both to expose new resources in the JSON-API, and to add new pages to the frontend."),(0,o.kt)("p",null,"Routing happens on both the PHP backend and the JavaScript frontend."),(0,o.kt)("h2",{id:"backend-routes"},"Backend Routes"),(0,o.kt)("p",null,"On the backend, DuRoom has three collections of routes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"forum")," These routes are accessible under ",(0,o.kt)("inlineCode",{parentName:"p"},"yourforum.com/"),". They include routes that show pages in the frontend (like ",(0,o.kt)("inlineCode",{parentName:"p"},"yourforum.com/d/123-title"),") and other utility routes (like the reset password route).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"admin")," These routes are accessible under ",(0,o.kt)("inlineCode",{parentName:"p"},"yourforum.com/admin/"),". By default, there is only one ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," route on the backend; the rest of the admin routing happens on the frontend.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"api")," These routes are accessible under ",(0,o.kt)("inlineCode",{parentName:"p"},"yourforum.com/api/")," and make up DuRoom's JSON:API."))),(0,o.kt)("h3",{id:"defining-routes"},"Defining Routes"),(0,o.kt)("p",null,"You can add routes to any of these collections using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Routes")," extender. Pass the name of the collection in the extender's constructor, then call its methods to add routes."),(0,o.kt)("p",null,"There are methods to register routes for any HTTP request method: ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"patch"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),". All of these methods accept three arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$path")," The route path using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nikic/FastRoute#defining-routes"},"FastRoute")," syntax."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$name")," A unique name for the route, used for generating URLs. To avoid conflicts with other extensions, you should use your vendor name as a namespace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$handler")," The name of the controller class that will handle the request. This will be resolved through the container.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse DuRoom\\Extend;\nuse Acme\\HelloWorld\\HelloWorldController;\n\nreturn [\n    (new Extend\\Routes('forum'))\n        ->get('/hello-world', 'acme.hello-world', HelloWorldController::class)\n];\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,o.kt)("a",{parentName:"h5",href:"https://github.com/DuRoom/cli"},"DuRoom CLI"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use the CLI to automatically generate your routes:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ duroom-cli make backend route\n")))),(0,o.kt)("h3",{id:"controllers"},"Controllers"),(0,o.kt)("p",null,"In DuRoom, ",(0,o.kt)("strong",{parentName:"p"},"Controller")," is just another name for a class that implements ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/php-fig/http-server-handler/blob/master/src/RequestHandlerInterface.php"},"RequestHandlerInterface"),". Put simply, a controller must implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method which receives a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/php-fig/http-message/blob/master/src/ServerRequestInterface.php"},"Request")," and must return a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/php-fig/http-message/blob/master/src/ResponseInterface.php"},"Response"),". DuRoom includes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/laminas/laminas-diactoros"},"laminas-diactoros")," which contains ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," implementations that you can return."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace Acme\\HelloWorld;\n\nuse Laminas\\Diactoros\\Response\\HtmlResponse;\nuse Psr\\Http\\Message\\ResponseInterface as Response;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\nuse Psr\\Http\\Server\\RequestHandlerInterface;\n\nclass HelloWorldController implements RequestHandlerInterface\n{\n    public function handle(Request $request): Response\n    {\n        return new HtmlResponse('<h1>Hello, world!</h1>');\n    }\n}\n")),(0,o.kt)("p",null,"Controllers are resolved from the ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/container"},"container")," so you can inject dependencies into their constructors."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"What are Controllers?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle")," method of a Controller is the code that runs when someone visits your route (or sends data to it via a form submission). Generally speaking, Controller implementations follow the pattern:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Retrieve information (GET params, POST data, the current user, etc) from the Request object."),(0,o.kt)("li",{parentName:"ol"},"Do something with that information. For instance, if our controller handles a route for creating posts, we'll want to save a new post object to the database."),(0,o.kt)("li",{parentName:"ol"},"Return a response. Most routes will return an HTML webpage, or a JSON api response.")))),(0,o.kt)("h3",{id:"route-parameters"},"Route Parameters"),(0,o.kt)("p",null,"Sometimes you will need to capture segments of the URI within your route. You may do so by defining route parameters using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nikic/FastRoute#defining-routes"},"FastRoute")," syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    (new Extend\\Routes('forum'))\n        ->get('/user/{id}', 'acme.user', UserController::class)\n")),(0,o.kt)("p",null,"The values of these parameters will be merged with the request's query params, which you can access in your controller by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"$request->getQueryParams()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Illuminate\\Support\\Arr;\n\n$id = Arr::get($request->getQueryParams(), 'id');\n")),(0,o.kt)("h3",{id:"generating-urls"},"Generating URLs"),(0,o.kt)("p",null,"You can generate URLs to any of the defined routes using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DuRoom\\Http\\UrlGenerator")," class. Inject an instance of this into your controller or view, and call the ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," method to select a route collection. Then, you can generate a URL to a route using the name you gave it when it was defined. You can pass an array of parameters as the second argument. Parameters will fill in matching URI segments, otherwise they will be appended as query params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$url = $this->url->to('forum')->route('acme.user', ['id' => 123, 'foo' => 'bar']);\n// http://yourforum.com/user/123?foo=bar\n")),(0,o.kt)("h3",{id:"views"},"Views"),(0,o.kt)("p",null,"You can inject Laravel's ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/views"},"View")," factory into your controller. This will allow you to render a ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/blade"},"Blade template")," into your controller's response."),(0,o.kt)("p",null,"First, you'll need to register the view. See ",(0,o.kt)("a",{parentName:"p",href:"/vi/extend/views"},"the relevant article")," for more information on this."),(0,o.kt)("p",null,"Then, inject the factory into your controller and render your view into an ",(0,o.kt)("inlineCode",{parentName:"p"},"HtmlResponse"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Illuminate\\Contracts\\View\\Factory;\n\n\nclass HelloWorldController implements RequestHandlerInterface\n{\n    protected $view;\n    \n    public function __construct(Factory $view)\n    {\n        $this->view = $view;\n    }\n    \n    public function handle(Request $request): Response\n    {\n        $view = $this->view->make('acme.hello-world::greeting');\n        \n        return new HtmlResponse($view->render());\n    }\n}\n")),(0,o.kt)("h3",{id:"api-controllers"},"API Controllers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DuRoom\\Api\\Controller")," namespace contains a number of abstract controller classes that you can extend to easily implement new JSON-API resources. See ",(0,o.kt)("a",{parentName:"p",href:"/vi/extend/api"},"Working with Data")," for more information."),(0,o.kt)("h2",{id:"frontend-routes"},"Frontend Routes"),(0,o.kt)("p",null,"Adding routes to the frontend actually requires you to register them on ",(0,o.kt)("em",{parentName:"p"},"both")," the frontend and the backend. This is because when your route is visited, the backend needs to know to serve up the frontend, and the frontend needs to know what to display on the page."),(0,o.kt)("p",null,"On the backend, instead of adding your frontend route via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Routes")," extender, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Frontend")," extender's ",(0,o.kt)("inlineCode",{parentName:"p"},"route")," method. This always assumes ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," as the method, and accepts a route path and name as the first two arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    (new Extend\\Frontend('forum'))\n        ->route('/users', 'acme.users')\n")),(0,o.kt)("p",null,"Now when ",(0,o.kt)("inlineCode",{parentName:"p"},"yourforum.com/users")," is visited, the forum frontend will be displayed. However, since the frontend doesn't yet know about the ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," route, the discussion list will still be rendered."),(0,o.kt)("p",null,"DuRoom builds on ",(0,o.kt)("a",{parentName:"p",href:"https://mithril.js.org/index.html#routing"},"Mithril's routing system"),", adding route names and an abstract class for pages (",(0,o.kt)("inlineCode",{parentName:"p"},"common/components/Page"),"). To register a new route, add an object for it to ",(0,o.kt)("inlineCode",{parentName:"p"},"app.routes"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.routes['acme.users'] = { path: '/users', component: UsersPage };\n")),(0,o.kt)("p",null,"Now when ",(0,o.kt)("inlineCode",{parentName:"p"},"yourforum.com/users")," is visited, the forum frontend will be loaded and the ",(0,o.kt)("inlineCode",{parentName:"p"},"UsersPage")," component will be rendered in the content area. For more information on frontend pages, please see ",(0,o.kt)("a",{parentName:"p",href:"/vi/extend/frontend-pages"},"that documentation section"),"."),(0,o.kt)("p",null,"Advanced use cases might also be interested in using ",(0,o.kt)("a",{parentName:"p",href:"/vi/extend/frontend-pages#route-resolvers-advanced"},"route resolvers"),"."),(0,o.kt)("h3",{id:"route-parameters-1"},"Route Parameters"),(0,o.kt)("p",null,"Frontend routes also allow you to capture segments of the URI, but the ",(0,o.kt)("a",{parentName:"p",href:"https://mithril.js.org/route.html"},"Mithril route syntax")," is slightly different:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"app.routes['acme.user'] = { path: '/user/:id', component: UserPage };\n")),(0,o.kt)("p",null,"Route parameters will be passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"attrs")," of the route's component. They will also be available through ",(0,o.kt)("a",{parentName:"p",href:"https://mithril.js.org/route.html#mrouteparam"},(0,o.kt)("inlineCode",{parentName:"a"},"m.route.param")),"."),(0,o.kt)("h3",{id:"generating-urls-1"},"Generating URLs"),(0,o.kt)("p",null,"To generate a URL to a route on the frontend, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.route")," method. This accepts two arguments: the route name, and a hash of parameters. Parameters will fill in matching URI segments, otherwise they will be appended as query params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const url = app.route('acme.user', { id: 123, foo: 'bar' });\n// http://yourforum.com/users/123?foo=bar\n")),(0,o.kt)("h3",{id:"linking-to-other-pages"},"Linking to Other Pages"),(0,o.kt)("p",null,"A forum wouldn't be very useful if it only had one page.\nWhile you could, of course, implement links to other parts of your forum with HTML anchor tags and hardcoded links, this can be difficult to maintain, and defeats the purpose of DuRoom being a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single-page_application"},"Single Page Application")," in the first place."),(0,o.kt)("p",null,"DuRoom uses Mithril's routing API to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component that neatly wraps links to other internal pages. Its use is fairly simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import Link from \'duroom/common/components/Link\';\n\n// Link can be used just like any other component:\n<Link href="/route/known/to/mithril">Hello World!</Link>\n\n// You\'ll frequently use Link with generated routes:\n<Link href={app.route(\'settings\')}>Hello World!</Link>\n\n// Link can even generate external links with the external attr:\n<Link external={true} href="https://google.com">Hello World!</Link>\n\n// The above example with external = true is equivalent to:\n<a href="https://google.com">Hello World!</a>\n// but is provided for flexibility: sometimes you might have links\n// that are conditionally internal or external.\n')),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("p",null,"Whenever you visit a frontend route, the backend constructs a HTML document with the scaffolding necessary to boot up the frontend JavaScript application. You can easily modify this document to perform tasks like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changing the ",(0,o.kt)("inlineCode",{parentName:"li"},"<title>")," of the page"),(0,o.kt)("li",{parentName:"ul"},"Adding external JavaScript and CSS resources"),(0,o.kt)("li",{parentName:"ul"},"Adding SEO content and ",(0,o.kt)("inlineCode",{parentName:"li"},"<meta>")," tags"),(0,o.kt)("li",{parentName:"ul"},"Adding data to the JavaScript payload (eg. to preload resources which are going to be rendered on the page immediately, thereby preventing an unnecessary request to the API)")),(0,o.kt)("p",null,"You can make blanket changes to the frontend using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Frontend")," extender's ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," method. This accepts a closure which receives two parameters: a ",(0,o.kt)("inlineCode",{parentName:"p"},"DuRoom\\Frontend\\Document")," object which represents the HTML document that will be displayed, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Frontend\\Document;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\n\nreturn [\n    (new Extend\\Frontend('forum'))\n        ->content(function (Document $document, Request $request) {\n            $document->head[] = '<script>alert(\"Hello, world!\")<\/script>';\n        })\n];\n")),(0,o.kt)("p",null,"You can also add content onto your frontend route registrations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    (new Extend\\Frontend('forum'))\n        ->route('/users', 'acme.users', function (Document $document, Request $request) {\n            $document->title = 'Users';\n        })\n];\n")))}c.isMDXComponent=!0}}]);
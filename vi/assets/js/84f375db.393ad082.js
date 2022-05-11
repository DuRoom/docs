"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[1662],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return r?t.createElement(h,s(s({ref:n},u),{},{components:r})):t.createElement(h,s({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5953:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={},d="Middleware",l={unversionedId:"extend/middleware",id:"extend/middleware",title:"Middleware",description:"Middleware is a nifty way to wrap the handling of HTTP requests in DuRoom. This can allow you to modify responses, add your own checks to the request, and much more. The possibilities are endless!",source:"@site/docs/extend/middleware.md",sourceDirName:"extend",slug:"/extend/middleware",permalink:"/docs/vi/extend/middleware",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/middleware.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Mail Drivers",permalink:"/docs/vi/extend/mail"},next:{title:"Model Visibility",permalink:"/docs/vi/extend/model-visibility"}},u={},p=[{value:"Adding Middleware In Your Extension",id:"adding-middleware-in-your-extension",level:2},{value:"Restricting Middleware to Certain Routes",id:"restricting-middleware-to-certain-routes",level:2},{value:"Returning Your Own Response",id:"returning-your-own-response",level:2},{value:"Modifying the Response After Handling",id:"modifying-the-response-after-handling",level:2},{value:"Passing On the Request",id:"passing-on-the-request",level:2}],c={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"Middleware is a nifty way to wrap the handling of HTTP requests in DuRoom. This can allow you to modify responses, add your own checks to the request, and much more. The possibilities are endless!"),(0,o.kt)("p",null,'DuRoom maintains a middleware "Pipe" through which all requests pass. Each of the three "applications" (',(0,o.kt)("inlineCode",{parentName:"p"},"admin"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"forum"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"api"),") have their own subpipe: after being processed through some shared logic, requests are diverted to one of the pipes based on the path."),(0,o.kt)("p",null,"A request passes through the middleware layers in order. When the request is handled (a middleware returns something instead of passing the request to the next layer, or throws an exception), the response will move back up the middleware layers in reverse order, before finally being returned to the user. Everything from DuRoom's error handler to its authentication logic is implemented as middleware, and so can be supplemented, replaced, reordered, or removed by extensions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Psr\\Http\\Message\\ResponseInterface;\nuse Psr\\Http\\Message\\ServerRequestInterface;\nuse Psr\\Http\\Server\\MiddlewareInterface;\nuse Psr\\Http\\Server\\RequestHandlerInterface;\n\nclass YourMiddleware implements MiddlewareInterface {\n    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface\n    {\n        // Logic to run before the request is processed and later middleware is called.\n        $response = $handler->handle($request);\n        // Logic to run after the request is processed.\n        return $response\n    }\n}\n")),(0,o.kt)("h2",{id:"adding-middleware-in-your-extension"},"Adding Middleware In Your Extension"),(0,o.kt)("p",null,"To add a new middleware, simply use the middleware extender in your extension's ",(0,o.kt)("inlineCode",{parentName:"p"},"extend.php")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\n// use DuRoom\\Http\\Middleware\\CheckCsrfToken;\n\nreturn [\n    // Add middleware to forum frontend\n    (new Extend\\Middleware('forum'))->add(YourMiddleware::class),\n    // Admin frontend\n    (new Extend\\Middleware('admin'))->add(YourMiddleware::class),\n    // API frontend\n    (new Extend\\Middleware('api'))->add(YourMiddleware::class),\n\n    (new Extend\\Middleware('frontend'))\n        // remove a middleware (e.g. remove CSRF token check \ud83d\ude31)\n        ->remove(CheckCsrfToken::class)\n        // insert before another middleware (e.g. before a CSRF token check)\n        ->insertBefore(CheckCsrfToken::class, YourMiddleware::class)\n        // insert after another middleware (e.g. after a CSRF token check)\n        ->insertAfter(CheckCsrfToken::class, YourMiddleware::class)\n        // replace a middleware (e.g. replace the CSRF check with your own implementation)\n        ->replace(CheckCsrfToken::class, YourMiddleware::class)\n];\n")),(0,o.kt)("p",null,"Tada! Middleware registered. Remember that order matters."),(0,o.kt)("p",null,"Now that we've got the basics down, let's run through a few more things:"),(0,o.kt)("h2",{id:"restricting-middleware-to-certain-routes"},"Restricting Middleware to Certain Routes"),(0,o.kt)("p",null,"If you don't need your middleware to execute under every route, you can add an ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," to filter it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Laminas\\Diactoros\\Uri;\n\npublic function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface\n  {\n    $currentRoute = $request->getUri()->getPath();\n    $routeToRunUnder = new Uri(app()->url('/path/to/run/under'));\n\n    if ($currentRoute === $routeToRunUnder->getPath()) {\n        // Your logic here!\n    }\n\n    return $handler->handle($request);\n}\n")),(0,o.kt)("p",null,"If your middleware runs after ",(0,o.kt)("inlineCode",{parentName:"p"},"DuRoom\\Http\\Middleware\\ResolveRoute")," (which is recommended if it is route-dependent), you can access the route name via ",(0,o.kt)("inlineCode",{parentName:"p"},"$request->getAttribute('routeName')"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface\n{\n    if ($request->getAttribute('routeName') === 'register') {\n        // Your logic here!\n    }\n\n    return $handler->handle($request);\n}\n")),(0,o.kt)("p",null,"Of course, you can use any condition, not just the current route. Simple, right?"),(0,o.kt)("h2",{id:"returning-your-own-response"},"Returning Your Own Response"),(0,o.kt)("p",null,"Let's refer back to the example and say you're checking a user against an external database during registration. One user registers and they are found in this database. Uh-oh! Let's keep them from registering:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\JsonApiResponse;\nuse Tobscure\\JsonApi\\Document;\nuse Tobscure\\JsonApi\\Exception\\Handler\\ResponseBag;\n\npublic function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface\n{\n    if ($userFoundInDatabase) {\n        $error = new ResponseBag('422', [\n            [\n                'status' => '422',\n                'code' => 'validation_error',\n                'source' => [\n                    'pointer' => '/data/attributes/email',\n                ],\n                'detail' => 'Yikes! Your email can\\'t be used.',\n            ],\n        ]);\n        $document = new Document();\n        $document->setErrors($error->getErrors());\n      \n        return new JsonApiResponse($document, $error->getStatus());\n    }\n\n    return $handler->handle($request);\n}\n")),(0,o.kt)("p",null,"Phew! Crisis avoided."),(0,o.kt)("p",null,"To learn more about the request and response objects, see the ",(0,o.kt)("a",{parentName:"p",href:"https://www.php-fig.org/psr/psr-7/#1-specification"},"PSR HTTP message interfaces")," documentation."),(0,o.kt)("h2",{id:"modifying-the-response-after-handling"},"Modifying the Response After Handling"),(0,o.kt)("p",null,"If you'd like to do something with the response after the initial request has been handled, that's no problem! Just run the request handler and then your logic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface\n{\n    $response = $handler->handle($request);\n\n    // Your logic...\n    $response = $response->withHeader('Content-Type', 'application/json');\n\n    return $response;\n}\n")),(0,o.kt)("p",null,"Keep in mind that PSR-7 responses are immutable, so you'll need to reassign the ",(0,o.kt)("inlineCode",{parentName:"p"},"$response")," variable every time you modify the response."),(0,o.kt)("h2",{id:"passing-on-the-request"},"Passing On the Request"),(0,o.kt)("p",null,"Once all is said and done and you aren't returning a response yourself, you can simply pass the request to the next middleware:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return $handler->handle($request);\n")),(0,o.kt)("p",null,"Great! We're all done here. Now you can make the middleware of your dreams!"))}m.isMDXComponent=!0}}]);
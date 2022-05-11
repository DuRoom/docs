"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[9815],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7354:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="API and Data Flow",d={unversionedId:"extend/api",id:"extend/api",title:"API and Data Flow",description:"In the previous article, we learned how DuRoom uses models to interact with data. Here, we'll learn how to get that data from the database to the JSON-API to the frontend, and all the way back again.",source:"@site/docs/extend/api.md",sourceDirName:"extend",slug:"/extend/api",permalink:"/docs/vi/extend/api",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/api.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Models and Migrations",permalink:"/docs/vi/extend/models"},next:{title:"Distribution",permalink:"/docs/vi/extend/distribution"}},p={},u=[{value:"API Request Lifecycle",id:"api-request-lifecycle",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Listing Resources",id:"listing-resources",level:3},{value:"Pagination",id:"pagination",level:4},{value:"Sorting",id:"sorting",level:4},{value:"Searching and Filtering",id:"searching-and-filtering",level:4},{value:"Showing a Resource",id:"showing-a-resource",level:3},{value:"Creating a Resource",id:"creating-a-resource",level:3},{value:"Updating a Resource",id:"updating-a-resource",level:3},{value:"Deleting a Resource",id:"deleting-a-resource",level:3},{value:"Including Relationships",id:"including-relationships",level:3},{value:"Extending API Controllers",id:"extending-api-controllers",level:3},{value:"Serializers",id:"serializers",level:2},{value:"Attributes and Relationships",id:"attributes-and-relationships",level:3},{value:"Extending Serializers",id:"extending-serializers",level:3},{value:"Non-Model Serializers and <code>ForumSerializer</code>",id:"non-model-serializers-and-forumserializer",level:3}],c={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-and-data-flow"},"API and Data Flow"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"/docs/vi/extend/models"},"previous article"),", we learned how DuRoom uses models to interact with data. Here, we'll learn how to get that data from the database to the JSON-API to the frontend, and all the way back again. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To use the built-in REST API as part of an integration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/vi/rest-api"},"Consuming the REST API"),"."))),(0,i.kt)("h2",{id:"api-request-lifecycle"},"API Request Lifecycle"),(0,i.kt)("p",null,"Before we go into detail about how to extend DuRoom's data API, it's worth thinking about the lifecycle of a typical API request:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DuRoom API Flowchart",src:n(1272).Z,width:"1532",height:"669"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An HTTP request is sent to DuRoom's API. Typically, this will come from the DuRoom frontend, but external programs can also interact with the API. DuRoom's API mostly follows the ",(0,i.kt)("a",{parentName:"li",href:"https://jsonapi.org/"},"JSON:API")," specification, so accordingly, requests should follow ",(0,i.kt)("a",{parentName:"li",href:"https://jsonapi.org/format/#fetching"},"said specification"),"."),(0,i.kt)("li",{parentName:"ol"},"The request is run through ",(0,i.kt)("a",{parentName:"li",href:"/docs/vi/extend/middleware"},"middleware"),", and routed to the proper controller. You can learn more about controllers as a whole on our ",(0,i.kt)("a",{parentName:"li",href:"/docs/vi/extend/routes"},"routes and content documentation"),". Assuming the request is to the API (which is the case for this section), the controller that handles the request will be a subclass of ",(0,i.kt)("inlineCode",{parentName:"li"},"DuRoom\\Api\\AbstractSerializeController"),"."),(0,i.kt)("li",{parentName:"ol"},"Any modifications done by extensions to the controller via the ",(0,i.kt)("a",{parentName:"li",href:"#extending-api-controllers"},(0,i.kt)("inlineCode",{parentName:"a"},"ApiController")," extender")," are applied. This could entail changing sort, adding includes, changing the serializer, etc."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"$this->data()")," method of the controller is called, yielding some raw data that should be returned to the client. Typically, this data will take the form of a Laravel Eloquent model collection or instance, which has been retrieved from the database. That being said, the data could be anything as long as the controller's serializer can process it. Each controller is responsible for implementing its own ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," method. Note that for ",(0,i.kt)("inlineCode",{parentName:"li"},"PATCH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," requests, ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," will perform the operation in question, and return the modified model instance."),(0,i.kt)("li",{parentName:"ol"},"That data is run through any pre-serialization callbacks that extensions register via the ",(0,i.kt)("a",{parentName:"li",href:"#extending-api-controllers"},(0,i.kt)("inlineCode",{parentName:"a"},"ApiController")," extender"),"."),(0,i.kt)("li",{parentName:"ol"},"The data is passed through a ",(0,i.kt)("a",{parentName:"li",href:"#serializers"},"serializer"),", which converts it from the backend, database-friendly format to the JSON:API format expected by the frontend. It also attaches any related objects, which are run through their own serializers. As we'll explain below, extensions can ",(0,i.kt)("a",{parentName:"li",href:"#attributes-and-relationships"},"add / override relationships and attributes")," at the serialization level."),(0,i.kt)("li",{parentName:"ol"},"The serialized data is returned as a JSON response to the frontend."),(0,i.kt)("li",{parentName:"ol"},"If the request originated via the DuRoom frontend's ",(0,i.kt)("inlineCode",{parentName:"li"},"Store"),", the returned data (including any related objects) will be stored as ",(0,i.kt)("a",{parentName:"li",href:"#frontend-models"},"frontend models")," in the frontend store.")),(0,i.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,i.kt)("p",null,"We learned how to use models to interact with data, but we still need to get that data from the backend to the frontend.\nWe do this by writing API Controller ",(0,i.kt)("a",{parentName:"p",href:"/docs/vi/extend/routes"},"routes"),", which implement logic for API endpoints. "),(0,i.kt)("p",null,"As per the JSON:API convention, we'll want to add separate endpoints for each operation we support. Common operations are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Listing instances of a model (possibly including searching/filtering)"),(0,i.kt)("li",{parentName:"ul"},"Getting a single model instance"),(0,i.kt)("li",{parentName:"ul"},"Creating a model instance"),(0,i.kt)("li",{parentName:"ul"},"Updating a model instance"),(0,i.kt)("li",{parentName:"ul"},"Deleting a single model instance")),(0,i.kt)("p",null,"We'll go over each type of controller shortly, but once they're written, you can add these five standard endpoints (or a subset of them) using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Routes")," extender:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    (new Extend\\Routes('api'))\n        ->get('/tags', 'tags.index', ListTagsController::class)\n        ->get('/tags/{id}', 'tags.show', ShowTagController::class)\n        ->post('/tags', 'tags.create', CreateTagController::class)\n        ->patch('/tags/{id}', 'tags.update', UpdateTagController::class)\n        ->delete('/tags/{id}', 'tags.delete', DeleteTagController::class)\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Paths to API endpoints are not arbitrary! To support interactions with frontend models:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The path should either be ",(0,i.kt)("inlineCode",{parentName:"li"},"/prefix/{id}")," for get/update/delete, or ",(0,i.kt)("inlineCode",{parentName:"li"},"/prefix")," for list/create."),(0,i.kt)("li",{parentName:"ul"},"the prefix (",(0,i.kt)("inlineCode",{parentName:"li"},"tags")," in the example above) must correspond to the JSON:API model type. You'll also use this model type in your serializer's ",(0,i.kt)("inlineCode",{parentName:"li"},"$type")," attribute, and when registering the frontend model (",(0,i.kt)("inlineCode",{parentName:"li"},"app.store.models.TYPE = MODEL_CLASS"),")."),(0,i.kt)("li",{parentName:"ul"},"The methods must match the example above.")),(0,i.kt)("p",{parentName:"div"},"Also, remember that route names (",(0,i.kt)("inlineCode",{parentName:"p"},"tags.index"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tags.show"),", etc) must be unique!"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Api\\Controller")," namespace contains a number of abstract controller classes that you can extend to easily implement your JSON-API resources."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("a",{parentName:"h5",href:"https://github.com/DuRoom/cli"},"DuRoom CLI"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use the CLI to automatically create your endpoint controllers:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ duroom-cli make backend api-controller\n")))),(0,i.kt)("h3",{id:"listing-resources"},"Listing Resources"),(0,i.kt)("p",null,"For the controller that lists your resource, extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Api\\Controller\\AbstractListController")," class. At a minimum, you need to specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"$serializer")," you want to use to serialize your models, and implement a ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," method to return a collection of models. The ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," method accepts the ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," object and the tobscure/json-api ",(0,i.kt)("inlineCode",{parentName:"p"},"Document"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\Controller\\AbstractListController;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\nuse Tobscure\\JsonApi\\Document;\n\nclass ListTagsController extends AbstractListController\n{\n    public $serializer = TagSerializer::class;\n    \n    protected function data(Request $request, Document $document)\n    {\n        return Tag::all();\n    }\n}\n")),(0,i.kt)("h4",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"You can allow the number of resources being ",(0,i.kt)("strong",{parentName:"p"},"listed")," to be customized by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLimit")," properties on your controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    // The number of records included by default.\n    public $limit = 20;\n    \n    // The maximum number of records that can be requested.\n    public $maxLimit = 50;\n")),(0,i.kt)("p",null,"You can then extract pagination information from the request using the ",(0,i.kt)("inlineCode",{parentName:"p"},"extractLimit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"extractOffset")," methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$limit = $this->extractLimit($request);\n$offset = $this->extractOffset($request);\n\nreturn Tag::skip($offset)->take($limit);\n")),(0,i.kt)("p",null,"To add pagination links to the JSON:API document, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Document::addPaginationLinks")," method."),(0,i.kt)("h4",{id:"sorting"},"Sorting"),(0,i.kt)("p",null,"You can allow the sort order of resources being ",(0,i.kt)("strong",{parentName:"p"},"listed")," to be customized by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"sort")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sortField")," properties on your controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    // The default sort field and order to use.\n    public $sort = ['name' => 'asc'];\n    \n    // The fields that are available to be sorted by.\n    public $sortFields = ['firstName', 'lastName'];\n")),(0,i.kt)("p",null,"You can then extract sorting information from the request using the ",(0,i.kt)("inlineCode",{parentName:"p"},"extractSort")," method. This will return an array of sort criteria which you can apply to your query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Illuminate\\Support\\Str;\n\n// ...\n\n$sort = $this->extractSort($request);\n$query = Tag::query();\n\nforeach ($sort as $field => $order) {\n    $query->orderBy(Str::snake($field), $order);\n}\n\nreturn $query->get();\n")),(0,i.kt)("h4",{id:"searching-and-filtering"},"Searching and Filtering"),(0,i.kt)("p",null,"Read our ",(0,i.kt)("a",{parentName:"p",href:"/docs/vi/extend/search"},"searching and filtering")," guide for more information!"),(0,i.kt)("h3",{id:"showing-a-resource"},"Showing a Resource"),(0,i.kt)("p",null,"For the controller that shows a single resource, extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Api\\Controller\\AbstractShowController")," class. Like for the list controller, you need to specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"$serializer")," you want to use to serialize your models, and implement a ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," method to return a single model. We'll learn about serializers ",(0,i.kt)("a",{parentName:"p",href:"#serializers"},"in just a bit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\Controller\\AbstractShowController;\nuse Illuminate\\Support\\Arr;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\nuse Tobscure\\JsonApi\\Document;\n\nclass ShowTagController extends AbstractShowController\n{\n    public $serializer = TagSerializer::class;\n    \n    protected function data(Request $request, Document $document)\n    {\n        $id = Arr::get($request->getQueryParams(), 'id');\n        \n        return Tag::findOrFail($id);\n    }\n}\n")),(0,i.kt)("h3",{id:"creating-a-resource"},"Creating a Resource"),(0,i.kt)("p",null,"For the controller that creates a resource, extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Api\\Controller\\AbstractCreateController")," class. This is the same as the show controller, except the response status code will automatically be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"201 Created"),". You can access the incoming JSON:API document body via ",(0,i.kt)("inlineCode",{parentName:"p"},"$request->getParsedBody()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\Controller\\AbstractCreateController;\nuse Illuminate\\Support\\Arr;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\nuse Tobscure\\JsonApi\\Document;\n\nclass CreateTagController extends AbstractCreateController\n{\n    public $serializer = TagSerializer::class;\n    \n    protected function data(Request $request, Document $document)\n    {\n        $attributes = Arr::get($request->getParsedBody(), 'data.attributes');\n        \n        return Tag::create([\n            'name' => Arr::get($attributes, 'name')\n        ]);\n    }\n}\n")),(0,i.kt)("h3",{id:"updating-a-resource"},"Updating a Resource"),(0,i.kt)("p",null,"For the controller that updates a resource, extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Api\\Controller\\AbstractShowController")," class. Like for the create controller, you can access the incoming JSON:API document body via ",(0,i.kt)("inlineCode",{parentName:"p"},"$request->getParsedBody()"),"."),(0,i.kt)("h3",{id:"deleting-a-resource"},"Deleting a Resource"),(0,i.kt)("p",null,"For the controller that deletes a resource, extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Api\\Controller\\AbstractDeleteController")," class. You only need to implement a ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," method which enacts the deletion. The controller will automatically return an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"204 No Content")," response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\Controller\\AbstractDeleteController;\nuse Illuminate\\Support\\Arr;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\n\nclass DeleteTagController extends AbstractDeleteController\n{    \n    protected function delete(Request $request)\n    {\n        $id = Arr::get($request->getQueryParams(), 'id');\n        \n        Tag::findOrFail($id)->delete();\n    }\n}\n")),(0,i.kt)("h3",{id:"including-relationships"},"Including Relationships"),(0,i.kt)("p",null,"To include relationships when ",(0,i.kt)("strong",{parentName:"p"},"listing"),", ",(0,i.kt)("strong",{parentName:"p"},"showing"),", or ",(0,i.kt)("strong",{parentName:"p"},"creating")," your resource, specify them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$include")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$optionalInclude")," properties on your controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    // The relationships that are included by default.\n    public $include = ['user'];\n    \n    // Other relationships that are available to be included.\n    public $optionalInclude = ['discussions'];\n")),(0,i.kt)("p",null,"You can then get a list of included relationships using the ",(0,i.kt)("inlineCode",{parentName:"p"},"extractInclude")," method. This can be used to eager-load the relationships on your models before they are serialized:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$relations = $this->extractInclude($request);\n\nreturn Tag::all()->load($relations);\n")),(0,i.kt)("h3",{id:"extending-api-controllers"},"Extending API Controllers"),(0,i.kt)("p",null,"It is possible to customize all of these options on ",(0,i.kt)("em",{parentName:"p"},"existing")," API controllers too via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiController")," extender"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\Event\\WillGetData;\nuse DuRoom\\Api\\Controller\\ListDiscussionsController;\nuse Illuminate\\Contracts\\Events\\Dispatcher;\n\nreturn [\n    (new Extend\\ApiController(ListDiscussionsController::class))\n        ->setSerializer(MyDiscussionSerializer::class)\n        ->addInclude('user')\n        ->addOptionalInclude('posts')\n        ->setLimit(20)\n        ->setMaxLimit(50)\n        ->setSort(['name' => 'asc'])\n        ->addSortField('firstName')\n        ->prepareDataQuery(function ($controller) {\n            // Add custom logic here to modify the controller\n            // before data queries are executed.\n        })\n]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiController")," extender can also be used to adjust data before serialization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\Event\\WillSerializeData;\nuse DuRoom\\Api\\Controller\\ListDiscussionsController;\nuse Illuminate\\Contracts\\Events\\Dispatcher;\n\nreturn [\n    (new Extend\\ApiController(ListDiscussionsController::class))\n        ->prepareDataForSerialization(function ($controller, $data, $request, $document) {\n            $data->load('myCustomRelation');\n        }),\n]\n")),(0,i.kt)("h2",{id:"serializers"},"Serializers"),(0,i.kt)("p",null,"Before we can send our data to the frontend, we need to convert it to JSON:API format so that it can be consumed by the frontend.\nYou should become familiar with the ",(0,i.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/"},"JSON:API specification"),".\nDuRoom's JSON:API layer is powered by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tobscure/json-api"},"tobscure/json-api")," library."),(0,i.kt)("p",null,"A serializer is just a class that converts some data (usually ",(0,i.kt)("a",{parentName:"p",href:"/docs/vi/extend/models#backend-models"},"Eloquent models"),") into JSON:API.\nSerializers serve as intermediaries between backend and frontend models: see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/vi/extend/models"},"model documentation")," for more information.\nTo define a new resource type, create a new serializer class extending ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Api\\Serializer\\AbstractSerializer"),". You must specify a resource ",(0,i.kt)("inlineCode",{parentName:"p"},"$type")," and implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"getDefaultAttributes")," method which accepts the model instance as its only argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\Serializer\\AbstractSerializer;\nuse DuRoom\\Api\\Serializer\\UserSerializer;\n\nclass DiscussionSerializer extends AbstractSerializer\n{\n    protected $type = 'discussions';\n\n    protected function getDefaultAttributes($discussion)\n    {\n        return [\n            'title' => $discussion->title,\n        ];\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("a",{parentName:"h5",href:"https://github.com/DuRoom/cli"},"DuRoom CLI"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use the CLI to automatically create your serializer:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ duroom-cli make backend api-serializer\n")))),(0,i.kt)("h3",{id:"attributes-and-relationships"},"Attributes and Relationships"),(0,i.kt)("p",null,"You can also specify relationships for your resource. Simply create a new method with the same name as the relation on your model, and return a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"hasOne")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"hasMany")," depending on the nature of the relationship. You must pass in the model instance and the name of the serializer to use for the related resources."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    protected function user($discussion)\n    {\n        return $this->hasOne($discussion, UserSerializer::class);\n    }\n")),(0,i.kt)("h3",{id:"extending-serializers"},"Extending Serializers"),(0,i.kt)("p",null,"To add ",(0,i.kt)("strong",{parentName:"p"},"attributes")," and ",(0,i.kt)("strong",{parentName:"p"},"relationships")," to an existing resource type, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiSerializer")," extender:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Api\\Serializer\\UserSerializer;\n\nreturn [\n    (new Extend\\ApiSerializer(UserSerializer::class))\n        // One attribute at a time\n        ->attribute('firstName', function ($serializer, $user, $attributes) {\n                return $user->first_name\n        })\n        // Multiple modifications at once, more complex logic\n        ->mutate(function($serializer, $user, $attributes) {\n            $attributes['someAttribute'] = $user->someAttribute;\n            if ($serializer->getActor()->can('administrate')) {\n                $attributes['someDate'] = $serializer->formatDate($user->some_date);\n            }\n\n            return $attributes;\n        })\n        // API relationships\n        ->hasOne('phone', PhoneSerializer::class)\n        ->hasMany('comments', CommentSerializer::class),\n]\n")),(0,i.kt)("h3",{id:"non-model-serializers-and-forumserializer"},"Non-Model Serializers and ",(0,i.kt)("inlineCode",{parentName:"h3"},"ForumSerializer")),(0,i.kt)("p",null,"Serializers don't have to correspond to Eloquent models: you can define JSON:API resources for anything.\nFor instance, DuRoom core uses the ",(0,i.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/php/master/duroom/api/serializer/forumserializer"},(0,i.kt)("inlineCode",{parentName:"a"},"DuRoom\\Api\\Serializer\\ForumSerializer"))," to send an initial payload to the frontend. This can include settings, whether the current user can perform certain actions, and other data. Many extensions add data to the payload by extending the attributes of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForumSerializer"),"."))}m.isMDXComponent=!0},1272:function(e,t,n){t.Z=n.p+"assets/images/api_flowchart-7508632ce34af196090c7d478a6ba438.png"}}]);
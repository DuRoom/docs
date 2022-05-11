"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[7969],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3510:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Searching and Filtering",c={unversionedId:"extend/search",id:"extend/search",title:"Searching and Filtering",description:"DuRoom treats searching and filtering as parallel but distinct processes. Which process is used to handle a request to a List API endpoint depends on the query parameters:",source:"@site/docs/extend/search.md",sourceDirName:"extend",slug:"/extend/search",permalink:"/docs/vi/extend/search",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/search.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Post Types",permalink:"/docs/vi/extend/post-types"},next:{title:"Service Provider",permalink:"/docs/vi/extend/service-provider"}},p={},m=[{value:"Filtering",id:"filtering",level:2},{value:"Modify Filtering for an Existing Model",id:"modify-filtering-for-an-existing-model",level:3},{value:"Add Filtering to a New Model",id:"add-filtering-to-a-new-model",level:3},{value:"Searching",id:"searching",level:2},{value:"Modify Searching for an Existing Model",id:"modify-searching-for-an-existing-model",level:3},{value:"Add Searching to a New Model",id:"add-searching-to-a-new-model",level:3},{value:"Search Drivers",id:"search-drivers",level:3},{value:"Frontend Tools",id:"frontend-tools",level:2}],d={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"searching-and-filtering"},"Searching and Filtering"),(0,i.kt)("p",null,"DuRoom treats searching and filtering as parallel but distinct processes. Which process is used to handle a request to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/vi/extend/api#api-endpoints"},(0,i.kt)("inlineCode",{parentName:"a"},"List")," API endpoint")," depends on the query parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Filtering is applied when the ",(0,i.kt)("inlineCode",{parentName:"li"},"filter[q]")," query param is omitted. Filters represent ",(0,i.kt)("strong",{parentName:"li"},"structured")," queries: for instance, you might want to only retrieve discussions in a certain category, or users who registered before a certain date. Filtering computes results based entirely on ",(0,i.kt)("inlineCode",{parentName:"li"},"filter[KEY] = VALUE")," query parameters."),(0,i.kt)("li",{parentName:"ul"},"Searching is applied when the ",(0,i.kt)("inlineCode",{parentName:"li"},"filter[q]")," query param is included. Searches represent ",(0,i.kt)("strong",{parentName:"li"},"unstructured"),' queries: the user submits an arbitrary string, and data records that "match" it are returned. For instance, you might want to search discussions based on the content of their posts, or users based on their username. Searching computes results based solely on parsing the ',(0,i.kt)("inlineCode",{parentName:"li"},"filter[q]")," query param: all other ",(0,i.kt)("inlineCode",{parentName:"li"},"filter[KEY] = VALUE")," params are ignored when searching. It's important to note that searches aren't entirely unstructured: the dataset being searched can be constrained by gambits (which are very similar to filters, and will be explained later).")),(0,i.kt)("p",null,"This distinction is important because searches and filters have very different use cases: filters represent ",(0,i.kt)("em",{parentName:"p"},"browsing"),": that is, the user is passively looking through some category of content. In contrast, searches represent, well, ",(0,i.kt)("em",{parentName:"p"},"searching"),": the user is actively looking for content based on some criteria."),(0,i.kt)("p",null,"DuRoom implements searching and filtering via per-model ",(0,i.kt)("inlineCode",{parentName:"p"},"Searcher")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Filterer")," classes (discussed in more detail below). Both classes accept a ",(0,i.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/php/master/duroom/query/querycriteria"},(0,i.kt)("inlineCode",{parentName:"a"},"DuRoom\\Query\\QueryCriteria"))," instance (a wrapper around the user and query params), and return a ",(0,i.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/php/master/duroom/query/queryresults"},(0,i.kt)("inlineCode",{parentName:"a"},"DuRoom\\Query\\QueryResults"))," instance (a wrapper around an Eloquent model collection). This common interface means that adding search/filter support to models is quite easy."),(0,i.kt)("p",null,"One key advantage of this split is that it allows searching to be implemented via an external service, such as ElasticSearch. For larger communities, this can be significantly more performant and accurate. There isn't a dedicated extender for this yet, so for now, replacing the default DuRoom search driver requires overriding the container bindings of ",(0,i.kt)("inlineCode",{parentName:"p"},"Searcher")," classes. This is a highly advanced use case; if you're interested in doing this, please reach out on our ",(0,i.kt)("a",{parentName:"p",href:"https://discuss-duroom.js.org/"},"community forums"),"."),(0,i.kt)("p",null,"Remember that the ",(0,i.kt)("a",{parentName:"p",href:"https://jsonapi.org/format"},"JSON:API schema")," is used for all API requests."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reuse Code")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Often, you might want to use the same class as both a ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Gambit")," (both explained below).\nYour classes can implement both interface; see DuRoom core's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/Discussion/Query/UnreadFilterGambit.php"},(0,i.kt)("inlineCode",{parentName:"a"},"UnreadFilterGambit"))," for an example."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Query Builder vs Eloquent Builder")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Filter"),"s, ",(0,i.kt)("inlineCode",{parentName:"p"},"Gambit"),'s, filter mutators, and gambit mutators (all explained below) receive a "state" parameter, which wraps '))),(0,i.kt)("h2",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"Filtering constrains queries based on ",(0,i.kt)("inlineCode",{parentName:"p"},"Filters")," (highlighted in code to avoid confusion with the process of filtering), which are classes that implement ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Filter\\FilterInterface"),' and run depending on query parameters. After filtering is complete, a set of callbacks called "filter mutators" run for every filter request.'),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," method on a ",(0,i.kt)("inlineCode",{parentName:"p"},"Filterer")," class is called, the following process takes place (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/Filter/AbstractFilterer.php#L50-L93"},"relevant code"),"):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An Eloquent query builder instance for the model is obtained. This is provided by the per-model ",(0,i.kt)("inlineCode",{parentName:"li"},"{MODEL_NAME}Filterer")," class's ",(0,i.kt)("inlineCode",{parentName:"li"},"getQuery()")," method."),(0,i.kt)("li",{parentName:"ol"},"We loop through all ",(0,i.kt)("inlineCode",{parentName:"li"},"filter[KEY] = VALUE")," query params. For each of these, any ",(0,i.kt)("inlineCode",{parentName:"li"},"Filter"),"s registered to the model whose ",(0,i.kt)("inlineCode",{parentName:"li"},"getFilterKey()")," method matches the query param ",(0,i.kt)("inlineCode",{parentName:"li"},"KEY")," is applied. ",(0,i.kt)("inlineCode",{parentName:"li"},"Filter"),"s can be negated by providing the query param as ",(0,i.kt)("inlineCode",{parentName:"li"},"filter[-KEY] = VALUE"),". Whether or not a ",(0,i.kt)("inlineCode",{parentName:"li"},"Filter")," is negated is passed to it as an argument: implementing negation is up to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Filter"),"s."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://jsonapi.org/format/#fetching-sorting"},"Sorting"),", ",(0,i.kt)("a",{parentName:"li",href:"https://jsonapi.org/format/#fetching-pagination"},"pagination")," are applied."),(0,i.kt)("li",{parentName:"ol"},'Any "filter mutators" are applied. These are callbacks that receive the filter state (a wrapper around the query builder and current user) and filter criteria, and perform some arbitrary changes. All "filter mutators" run on any request.'),(0,i.kt)("li",{parentName:"ol"},"We calculate if there are additional matching model instances beyond the query set we're returning for this request, and return this value along with the actual model data, wrapped in a ",(0,i.kt)("inlineCode",{parentName:"li"},"DuRoom\\Query\\QueryResults")," object.")),(0,i.kt)("h3",{id:"modify-filtering-for-an-existing-model"},"Modify Filtering for an Existing Model"),(0,i.kt)("p",null,"Let's say you've added a ",(0,i.kt)("inlineCode",{parentName:"p"},"country")," column to the User model, and would like to filter users by country. We'll need to define a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace YourPackage\\Filter;\n\nuse DuRoom\\Filter\\FilterInterface;\nuse DuRoom\\Filter\\FilterState;\n\nclass CountryFilter implements FilterInterface\n{\n    public function getFilterKey(): string\n    {\n        return 'country';\n    }\n\n    public function filter(FilterState $filterState, string $filterValue, bool $negate)\n    {\n        $country = trim($filterValue, '\"');\n\n        $filterState->getQuery()->where('users.country', $negate ? '!=' : '=', $country);\n    }\n}\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"FilterState")," is a wrapper around the Eloquent builder's underlying Query builder and the current user."),(0,i.kt)("p",null,'Also, let\'s pretend that for some reason, we want to omit any users that have a different country from the current user on ANY filter.\nWe can use a "filter mutator" for this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace YourPackage\\Filter;\n\nuse DuRoom\\Filter\\FilterState;\nuse DuRoom\\Query\\QueryCriteria;\n\nclass OnlySameCountryFilterMutator\n{\n    public function __invoke(FilterState $filterState, QueryCriteria $queryCriteria)\n    {\n        $filterState->getQuery()->where('users.country', $filterState->getActor()->country);\n    }\n}\n")),(0,i.kt)("p",null,"Now, all we need to do is register these via the Filter extender:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"  // Other extenders\n  (new Extend\\Filter(UserFilterer::class))\n    ->addFilter(CountryFilter::class)\n    ->addFilterMutator(OnlySameCountryFilterMutator::class),\n  // Other extenders\n")),(0,i.kt)("h3",{id:"add-filtering-to-a-new-model"},"Add Filtering to a New Model"),(0,i.kt)("p",null,"To filter a model that doesn't support filtering, you'll need to create a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom/Filter/AbstractFilterer")," for that model.\nFor an example, see core's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/User/Filter/UserFilterer.php"},"UserFilterer"),"."),(0,i.kt)("p",null,"Then, you'll need to use that filterer in your model's ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," controller. For an example, see core's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/Api/Controller/ListUsersController.php#L93-L98"},"ListUsersController"),"."),(0,i.kt)("h2",{id:"searching"},"Searching"),(0,i.kt)("p",null,"Searching constrains queries by applying ",(0,i.kt)("inlineCode",{parentName:"p"},"Gambit"),"s, which are classes that implement ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Search\\GambitInterface"),", based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter[q]"),' query param.\nAfter searching is complete, a set of callbacks called "search mutators" run for every search request.'),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"search")," method on a ",(0,i.kt)("inlineCode",{parentName:"p"},"Searcher")," class is called, the following process takes place (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/Search/AbstractSearcher.php#L55-L79"},"relevant code"),"):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An Eloquent query builder instance for the model is obtained. This is provided by the per-model ",(0,i.kt)("inlineCode",{parentName:"li"},"{MODEL_NAME}Searcher")," class's ",(0,i.kt)("inlineCode",{parentName:"li"},"getQuery()")," method."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"filter[q]"),' param is split by spaces into "tokens". Each token is matched against the model\'s registered ',(0,i.kt)("inlineCode",{parentName:"li"},"Gambit"),"s (each gambit has a ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," method). For any tokens that match a gambit, that gambit is applied, and the token is removed from the query string. Once all regular ",(0,i.kt)("inlineCode",{parentName:"li"},"Gambit"),"s have ran, all remaining unmatched tokens are passed to the model's ",(0,i.kt)("inlineCode",{parentName:"li"},"FullTextGambit"),", which implements the actual searching logic. For example if searching discussions, in the ",(0,i.kt)("inlineCode",{parentName:"li"},"filter[q]")," string ",(0,i.kt)("inlineCode",{parentName:"li"},"'author:1 hello is:hidden' world"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"author:1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"is:hidden")," would get matched by core's Author and Hidden gambits, and ",(0,i.kt)("inlineCode",{parentName:"li"},"'hello world'")," (the remaining tokens) would be passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"DiscussionFulltextGambit"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://jsonapi.org/format/#fetching-sorting"},"Sorting"),", ",(0,i.kt)("a",{parentName:"li",href:"https://jsonapi.org/format/#fetching-pagination"},"pagination")," are applied."),(0,i.kt)("li",{parentName:"ol"},'Any "search mutators" are applied. These are callbacks that receive the search state (a wrapper around the query builder and current user) and criteria, and perform some arbitrary changes. All "search mutators" run on any request.'),(0,i.kt)("li",{parentName:"ol"},"We calculate if there are additional matching model instances beyond the query set we're returning for this request, and return this value along with the actual model data, wrapped in a ",(0,i.kt)("inlineCode",{parentName:"li"},"DuRoom\\Query\\QueryResults")," object.")),(0,i.kt)("h3",{id:"modify-searching-for-an-existing-model"},"Modify Searching for an Existing Model"),(0,i.kt)("p",null,"Let's reuse the \"country\" examples we used above, and see how we'd implement the same things for searching:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace YourPackage\\Search;\n\nuse DuRoom\\Search\\AbstractRegexGambit;\nuse DuRoom\\Search\\SearchState;\n\nclass CountryGambit extends AbstractRegexGambit\n{\n    public function getGambitPattern(): string\n    {\n        return 'country:(.+)';\n    }\n\n    public function conditions(SearchState $search, array $matches, bool $negate)\n    {\n        $country = trim($matches[1], '\"');\n\n        $search->getQuery()->where('users.country', $negate ? '!=' : '=', $country);\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"No Spaces in Gambit Patterns!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DuRoom splits the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter[q]")," string into tokens by splitting it at spaces.\nThis means that your custom gambits can NOT use spaces as part of their pattern."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"AbstractRegexGambit")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All a gambit needs to do is implement ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Search\\GambitInterface"),", which receives the search state and a token.\nIt should return if this gambit applies for the given token, and if so, make whatever mutations are necessary to the\nquery builder accessible as ",(0,i.kt)("inlineCode",{parentName:"p"},"$searchState->getQuery()"),"."),(0,i.kt)("p",{parentName:"div"},"However, for most gambits, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractRegexGambit")," abstract class (used above) should be used as a base class.\nThis makes it a lot simpler to match and apply gambits."))),(0,i.kt)("p",null,"Similarly, the search mutator we need is almost identical to the filter mutator from before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace YourPackage\\Search;\n\nuse DuRoom\\Query\\QueryCriteria;\nuse DuRoom\\Search\\SearchState;\n\nclass OnlySameCountrySearchMutator\n{\n    public function __invoke(SearchState $searchState, QueryCriteria $queryCriteria)\n    {\n        $searchState->getQuery()->where('users.country', $filterState->getActor()->country);\n    }\n}\n")),(0,i.kt)("p",null,"We can register these via the ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleDuRoomSearch")," extender (in the future, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Search")," extender will be used for registering custom search drivers):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"  // Other extenders\n  (new Extend\\SimpleDuRoomSearch(UserSearcher::class))\n    ->addGambit(CountryGambit::class)\n    ->addSearchMutator(OnlySameCountrySearchMutator::class),\n  // Other extenders\n")),(0,i.kt)("h3",{id:"add-searching-to-a-new-model"},"Add Searching to a New Model"),(0,i.kt)("p",null,"To support searching for a model, you'll need to create a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom/Search/AbstractSearcher")," for that model.\nFor an example, see core's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/User/Search/UserSearcher.php"},"UserSearcher"),"."),(0,i.kt)("p",null,"Then, you'll need to use that searcher in your model's ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," controller. For an example, see core's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/Api/Controller/ListUsersController.php#L93-L98"},"ListUsersController"),"."),(0,i.kt)("p",null,"Every searcher ",(0,i.kt)("strong",{parentName:"p"},"must")," have a fulltext gambit (the logic that actually does the searching). Otherwise, it won't be booted by DuRoom, and you'll get an error.\nSee core's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/User/Search/Gambit/FulltextGambit.php"},"FulltextGambit for users")," for an example.\nYou can set (or override) the full text gambit for a searcher via the ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleDuRoomSearch")," extender's ",(0,i.kt)("inlineCode",{parentName:"p"},"setFullTextGambit()")," method."),(0,i.kt)("h3",{id:"search-drivers"},"Search Drivers"),(0,i.kt)("p",null,"Coming soon!"),(0,i.kt)("h2",{id:"frontend-tools"},"Frontend Tools"),(0,i.kt)("p",null,"Coming soon!"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[5917],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={},l="Consuming the REST API",u={unversionedId:"rest-api",id:"rest-api",title:"Consuming the REST API",description:"DuRoom exposes a REST API which is used by the single page application but also available for external scripts.",source:"@site/docs/rest-api.md",sourceDirName:".",slug:"/rest-api",permalink:"/vi/rest-api",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/rest-api.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Console",permalink:"/vi/console"},next:{title:"Local Extenders",permalink:"/vi/extenders"}},p={},d=[{value:"Authentication",id:"authentication",level:2},{value:"API keys",id:"api-keys",level:3},{value:"Creation",id:"creation",level:4},{value:"Usage",id:"usage",level:4},{value:"Access Tokens",id:"access-tokens",level:3},{value:"Creation",id:"creation-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"CSRF Protection",id:"csrf-protection",level:3},{value:"Endpoints",id:"endpoints",level:2},{value:"List discussions",id:"list-discussions",level:3},{value:"Create discussion",id:"create-discussion",level:3},{value:"Create user",id:"create-user",level:3},{value:"Errors",id:"errors",level:2},{value:"CSRF Token Mismatch",id:"csrf-token-mismatch",level:3},{value:"Validation errors",id:"validation-errors",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"consuming-the-rest-api"},"Consuming the REST API"),(0,s.kt)("p",null,"DuRoom exposes a REST API which is used by the single page application but also available for external scripts."),(0,s.kt)("p",null,"The API follows the best practices defined by the ",(0,s.kt)("a",{parentName:"p",href:"https://jsonapi.org/"},"JSON:API")," specification."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To extend the REST API with new endpoints, see ",(0,s.kt)("a",{parentName:"p",href:"/vi/extend/api"},"API and Data Flow")," in the developer documentation."))),(0,s.kt)("h2",{id:"authentication"},"Authentication"),(0,s.kt)("p",null,"The single page app uses session cookies to authenticate against the API.\nExternal scripts can use stateless authentication using ",(0,s.kt)("a",{parentName:"p",href:"#api-keys"},"API Keys")," or ",(0,s.kt)("a",{parentName:"p",href:"#access-tokens"},"Access Tokens"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"GET")," endpoints can be used without authentication.\nOnly content visible to guests will be returned.\nOther endpoints generally cannot be used without authentication because of the ",(0,s.kt)("a",{parentName:"p",href:"#csrf-protection"},"CSRF protection"),"."),(0,s.kt)("h3",{id:"api-keys"},"API keys"),(0,s.kt)("p",null,"API Keys are the primary way for scripts, tools and integrations to interact with DuRoom."),(0,s.kt)("h4",{id:"creation"},"Creation"),(0,s.kt)("p",null,"There is currently no UI to manage API Keys, but they can be created manually in the ",(0,s.kt)("inlineCode",{parentName:"p"},"api_keys")," table of the database."),(0,s.kt)("p",null,"The following attributes can be filled:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"key"),": Generate a long unique token (recommended: alpha-numerical, 40 characters) and set it here, this will be the token used in the ",(0,s.kt)("inlineCode",{parentName:"li"},"Authorization")," header."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user_id"),": Optional. If set, the key can only be used to act as the given user.")),(0,s.kt)("p",null,"The remaining attributes are either automatically filled or currently not used:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id"),": Will be filled by MySQL auto-increment."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"allowed_ips"),": Not implemented."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"scopes"),": Not implemented."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"created_at"),": Can be set to any date, but is meant for the date of creation of the key."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"last_activity_at"),": Will be updated automatically when the token is used.")),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Attach your key value to each API request using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Authorization")," header.\nThen provide the user ID you want to interact as at the end of the header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Authorization: Token YOUR_API_KEY_VALUE; userId=1\n")),(0,s.kt)("p",null,"If a ",(0,s.kt)("inlineCode",{parentName:"p"},"user_id")," value has been set for the key in the database, ",(0,s.kt)("inlineCode",{parentName:"p"},"userId=")," will be ignored.\nOtherwise, it can be set to any valid user ID that exists in the database."),(0,s.kt)("h3",{id:"access-tokens"},"Access Tokens"),(0,s.kt)("p",null,"Access Tokens are short-lived tokens that belong to a specific user."),(0,s.kt)("p",null,"Those tokens are used behind the scenes for cookie sessions.\nTheir use in stateless API requests has the same effect as a regular session.\nThe user last activity will be updated each time the token is used."),(0,s.kt)("h4",{id:"creation-1"},"Creation"),(0,s.kt)("p",null,"All users are allowed to create access tokens.\nTo create a token, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/token")," endpoint with the credentials of your user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'POST /api/token HTTP/1.1\n\n{\n    "identification": "Toby",\n    "password": "pass7word"\n}\n\nHTTP/1.1 200 OK\n\n{\n    "token": "YACub2KLfe8mfmHPcUKtt6t2SMJOGPXnZbqhc3nX",\n    "userId": "1"\n}\n')),(0,s.kt)("p",null,"At the moment, 3 token types exist, although only 2 types can be created via the REST API."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"session")," tokens expire after 1h of inactivity. This is the default token type."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"session_remember")," tokens expire after 5 years of inactivity. They can be obtained by specifying ",(0,s.kt)("inlineCode",{parentName:"li"},"remember=1")," in the request attributes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"developer")," tokens never expire. They can only be created manually in the database at the moment.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"All access tokens are deleted when the user logs out")," (this includes ",(0,s.kt)("inlineCode",{parentName:"p"},"developer")," tokens, although it is planned to change it)."),(0,s.kt)("h4",{id:"usage-1"},"Usage"),(0,s.kt)("p",null,"Attach the returned ",(0,s.kt)("inlineCode",{parentName:"p"},"token")," value to each API request using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Authorization")," header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Authorization: Token YACub2KLfe8mfmHPcUKtt6t2SMJOGPXnZbqhc3nX\n")),(0,s.kt)("h3",{id:"csrf-protection"},"CSRF Protection"),(0,s.kt)("p",null,"Most of the ",(0,s.kt)("inlineCode",{parentName:"p"},"POST"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"PUT"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," API endpoints are protected against ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-site request forgery"),".\nThis means stateless requests are not possible without authentication."),(0,s.kt)("p",null,"When using an API Key or Access Token, CSRF protection is bypassed."),(0,s.kt)("h2",{id:"endpoints"},"Endpoints"),(0,s.kt)("p",null,"This part of the documentation is still in progress.\nWe are researching options to provide an automated documentation of the endpoints."),(0,s.kt)("p",null,"Every extension adds new endpoints and attributes so it's difficult to provide a complete documentation of all endpoints.\nA good way to discover endpoints is to use the browser development tools to inspect requests made by the single page application."),(0,s.kt)("p",null,"Below are a few examples of commonly used endpoints.\nJSON has been truncated to make reading easier."),(0,s.kt)("h3",{id:"list-discussions"},"List discussions"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"GET /api/discussions\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "links": {\n    "first": "https://duroom.js.org/api/discussions",\n    "next": "https://duroom.js.org/api/discussions?page%5Boffset%5D=20"\n  },\n  "data": [\n    {\n      "type": "discussions",\n      "id": "234",\n      "attributes": {\n        "title": "Lorem Ipsum",\n        "slug": "234-lorem-ipsum",\n        "commentCount": 10,\n        "participantCount": 3,\n        "createdAt": "2022-01-01T10:20:30+00:00",\n        "lastPostedAt": "2022-01-05T10:20:30+00:00",\n        "lastPostNumber": 10,\n        "canReply": true,\n        "canRename": true,\n        "canDelete": true,\n        "canHide": true,\n        "isHidden": true,\n        "hiddenAt": "2022-01-06T10:20:30+00:00",\n        "lastReadAt": "2022-01-02T10:20:30+00:00",\n        "lastReadPostNumber": 2,\n        "isApproved": true,\n        "canTag": true,\n        "isLocked": false,\n        "canLock": true,\n        "isSticky": false,\n        "canSticky": true,\n        "canMerge": true,\n        "subscription": null\n      },\n      "relationships": {\n        "user": {\n          "data": {\n            "type": "users",\n            "id": "1"\n          }\n        },\n        "lastPostedUser": {\n          "data": {\n            "type": "users",\n            "id": "64"\n          }\n        },\n        "tags": {\n          "data": [\n            {\n              "type": "tags",\n              "id": "3"\n            }\n          ]\n        },\n        "firstPost": {\n          "data": {\n            "type": "posts",\n            "id": "668"\n          }\n        }\n      }\n    },\n    {\n      "type": "discussions",\n      "id": "234",\n      "attributes": {\n        // [...]\n      },\n      "relationships": {\n        // [...]\n      }\n    },\n    // [...] more discussions\n  ],\n  "included": [\n    {\n      "type": "users",\n      "id": "1",\n      "attributes": {\n        "username": "Admin",\n        "displayName": "Admin",\n        "avatarUrl": null,\n        "slug": "1"\n      }\n    },\n    {\n      "type": "users",\n      "id": "64",\n      "attributes": {\n        "username": "DuRoom",\n        "displayName": "DuRoom",\n        "avatarUrl": "https://duroom.js.org/assets/avatars/Z4hEncw0ndVqZ8be.png",\n        "slug": "64"\n      }\n    },\n    {\n      "type": "tags",\n      "id": "3",\n      "attributes": {\n        "name": "Welcome",\n        "description": "Post interesting things here",\n        "slug": "welcome",\n        "color": "#888",\n        "backgroundUrl": null,\n        "backgroundMode": null,\n        "icon": "fas fa-bullhorn",\n        "discussionCount": 30,\n        "position": 1,\n        "defaultSort": null,\n        "isChild": false,\n        "isHidden": false,\n        "lastPostedAt": "2022-01-05T10:20:30+00:00",\n        "canStartDiscussion": true,\n        "canAddToDiscussion": true,\n        "isRestricted": false\n      }\n    },\n    {\n      "type": "posts",\n      "id": "668",\n      "attributes": {\n        "number": 1,\n        "createdAt": "2022-01-01T10:20:30+00:00",\n        "contentType": "comment",\n        "contentHtml": "<p>Hello World</p>"\n      }\n    },\n    // [...] more includes for the other discussions\n  ]\n}\n')),(0,s.kt)("h3",{id:"create-discussion"},"Create discussion"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST /api/discussions\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data":{\n    "type": "discussions",\n    "attributes": {\n      "title": "Lorem Ipsum",\n      "content": "Hello World"\n    },\n    "relationships": {\n      "tags": {\n        "data": [\n          {\n            "type": "tags",\n            "id": "1"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,s.kt)("p",null,"The response includes the ID of the new discussion:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "type": "discussions",\n    "id": "42",\n    "attributes": {\n      "title": "Lorem Ipsum",\n      "slug": "42-lorem-ipsum",\n      "commentCount": 1\n      // [...] other attributes\n    },\n    "relationships": {\n      "posts": {\n        "data": [\n          {\n            "type": "posts",\n            "id": "58"\n          }\n        ]\n      },\n      "user": {\n        "data": {\n          "type": "users",\n          "id": "1"\n        }\n      },\n      // [...] other relationships\n    }\n  },\n  "included":[\n    {\n      "type": "posts",\n      "id": "38",\n      "attributes": {\n        "number": 1,\n        "contentType": "comment",\n        "contentHtml": "\\u003Cp\\u003EHello World\\u003C\\/p\\u003E"\n        // [...] other attributes\n      }\n    }\n    // [...] other includes\n  ]\n}\n')),(0,s.kt)("h3",{id:"create-user"},"Create user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"POST /api/users\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "attributes": {\n      "username": "DuRoom",\n      "email": "duroom@example.com",\n      "password": "correcthorsebatterystaple"\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"errors"},"Errors"),(0,s.kt)("p",null,"DuRoom uses various HTTP status code and includes error descriptions that follow the ",(0,s.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/#errors"},"JSON:API error spec"),"."),(0,s.kt)("p",null,"Below are a few common errors you might encounter when using the REST API:"),(0,s.kt)("h3",{id:"csrf-token-mismatch"},"CSRF Token Mismatch"),(0,s.kt)("p",null,"If you receive a 400 HTTP error with ",(0,s.kt)("inlineCode",{parentName:"p"},"csrf_token_mismatch")," message, it means the ",(0,s.kt)("inlineCode",{parentName:"p"},"Authorization")," header is absent or invalid and DuRoom attempted to authenticate through the session cookie."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "status": "400",\n      "code": "csrf_token_mismatch"\n    }\n  ]\n}\n')),(0,s.kt)("h3",{id:"validation-errors"},"Validation errors"),(0,s.kt)("p",null,"Validation errors are returned with 422 HTTP status code.\nThe name of the invalid field is returned as the ",(0,s.kt)("inlineCode",{parentName:"p"},"pointer")," value.\nThere can be multiple errors for a single field at the same time."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "status": "422",\n      "code": "validation_error",\n      "detail": "The username has already been taken.",\n      "source":{\n        "pointer":"\\/data\\/attributes\\/username"\n      }\n    },\n    {\n      "status": "422",\n      "code": "validation_error",\n      "detail": "The email has already been taken.",\n      "source": {\n        "pointer":"\\/data\\/attributes\\/email"\n      }\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);
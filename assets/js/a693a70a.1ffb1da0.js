"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[2718],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],r={},l="Models and Migrations",d={unversionedId:"extend/models",id:"extend/models",title:"Models and Migrations",description:"At the foundation, any forum revolves around data: users provide discussions, posts, profile information, etc. Our job as forum developers is to provide a great experience for creating, reading, updating, and deleting this data. This article will discuss how DuRoom stores and access data. In the next article, we'll follow up on this by explaining how data flows through the API.",source:"@site/docs/extend/models.md",sourceDirName:"extend",slug:"/extend/models",permalink:"/extend/models",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/models.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Routes and Content",permalink:"/extend/routes"},next:{title:"API and Data Flow",permalink:"/extend/api"}},u={},p=[{value:"The Big Picture",id:"the-big-picture",level:2},{value:"Migrations",id:"migrations",level:2},{value:"Migration Structure",id:"migration-structure",level:3},{value:"Migration Lifecycle",id:"migration-lifecycle",level:3},{value:"Creating Tables",id:"creating-tables",level:3},{value:"Renaming Tables",id:"renaming-tables",level:3},{value:"Creating/Dropping Columns",id:"creatingdropping-columns",level:3},{value:"Renaming Columns",id:"renaming-columns",level:3},{value:"Default Settings and Permissions",id:"default-settings-and-permissions",level:3},{value:"Data Migrations (Advanced)",id:"data-migrations-advanced",level:3},{value:"Backend Models",id:"backend-models",level:2},{value:"Adding New Models",id:"adding-new-models",level:3},{value:"Relationships",id:"relationships",level:3},{value:"Frontend Models",id:"frontend-models",level:2},{value:"Fetching Data",id:"fetching-data",level:3},{value:"Adding New Models",id:"adding-new-models-1",level:3},{value:"Extending Models",id:"extending-models",level:3},{value:"Saving Resources",id:"saving-resources",level:3},{value:"Creating New Resources",id:"creating-new-resources",level:3},{value:"Deleting Resources",id:"deleting-resources",level:3},{value:"Backend Models vs Frontend Models",id:"backend-models-vs-frontend-models",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"models-and-migrations"},"Models and Migrations"),(0,i.kt)("p",null,"At the foundation, any forum revolves around data: users provide discussions, posts, profile information, etc. Our job as forum developers is to provide a great experience for creating, reading, updating, and deleting this data. This article will discuss how DuRoom stores and access data. In the ",(0,i.kt)("a",{parentName:"p",href:"/extend/api"},"next article"),", we'll follow up on this by explaining how data flows through the API."),(0,i.kt)("p",null,"DuRoom makes use of ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/database"},"Laravel's Database component"),". You should familiarize yourself with it before proceeding, as it is assumed as prior knowledge in the following documentation."),(0,i.kt)("h2",{id:"the-big-picture"},"The Big Picture"),(0,i.kt)("p",null,"Before we delve into implementation details, let's define some key concepts."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Migrations")," allow you to modify the database. If you're adding a new table, defining a new relationship, adding a new column to a table, or making some other DB structural change, you'll need to use a migration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Models")," provide a convenient, code-based API for creating, reading, updating, and deleting data. On the backend, they are represented by PHP classes, and are used to interact with the MySQL database. On the frontend, they are represented by JS classes, and are used to interact with the ",(0,i.kt)("a",{parentName:"p",href:"/extend/api"},"JSON:API"),", which we'll discuss in the next article."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("a",{parentName:"h5",href:"https://github.com/DuRoom/cli"},"DuRoom CLI"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use the CLI to automatically create your model:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ duroom-cli make backend model\n$ duroom-cli make frontend model\n")))),(0,i.kt)("h2",{id:"migrations"},"Migrations"),(0,i.kt)("p",null,"If we want to use a custom model, or add attributes to an existing one, we will need to modify the database to add tables / columns. We do this via migrations."),(0,i.kt)("p",null,"Migrations are like version control for your database, allowing you to easily modify DuRoom's database schema in a safe way. DuRoom's migrations are very similar to ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/migrations"},"Laravel's"),", although there are some differences."),(0,i.kt)("p",null,"Migrations live inside a folder suitably named ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations")," in your extension's  directory. Migrations should be named in the format ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY_MM_DD_HHMMSS_snake_case_description")," so that they are listed and run in order of creation."),(0,i.kt)("h3",{id:"migration-structure"},"Migration Structure"),(0,i.kt)("p",null,"In DuRoom, migration files should ",(0,i.kt)("strong",{parentName:"p"},"return an array")," with two functions: ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"down"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," function is used to add new tables, columns, or indexes to your database, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"down")," function should reverse these operations. These functions receive an instance of the ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/migrations#creating-tables"},"Laravel schema builder")," which you can use to alter the database schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Illuminate\\Database\\Schema\\Builder;\n\nreturn [\n    'up' => function (Builder $schema) {\n        // up migration\n    },\n    'down' => function (Builder $schema) {\n        // down migration\n    }\n];\n")),(0,i.kt)("p",null,"For common tasks like creating a table, or adding columns to an existing table, DuRoom provides some helpers which construct this array for you, and take care of writing the ",(0,i.kt)("inlineCode",{parentName:"p"},"down")," migration logic while they're at it. These are available as static methods on the ",(0,i.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/php/master/duroom/database/migration"},(0,i.kt)("inlineCode",{parentName:"a"},"DuRoom\\Database\\Migration"))," class."),(0,i.kt)("h3",{id:"migration-lifecycle"},"Migration Lifecycle"),(0,i.kt)("p",null,"Migrations are applied when the extension is enabled for the first time or when it's enabled and there are some outstanding migrations. The executed migrations are logged in the database, and when some are found in the migrations folder of an extension that aren't logged as completed yet, they will be executed. "),(0,i.kt)("p",null,"Migrations can also be manually applied with ",(0,i.kt)("inlineCode",{parentName:"p"},"php duroom migrate"),' which is also needed to update the migrations of an already enabled extension. To undo the changes applied by migrations, you need to click "Purge" next to an extension in the Admin UI, or you need to use the ',(0,i.kt)("inlineCode",{parentName:"p"},"php duroom migrate:reset")," command. Nothing can break by running ",(0,i.kt)("inlineCode",{parentName:"p"},"php duroom migrate")," again if you've already migrated - executed migrations will not run again."),(0,i.kt)("p",null,"There are currently no composer-level hooks for managing migrations at all (i.e. updating an extension with ",(0,i.kt)("inlineCode",{parentName:"p"},"composer update")," will not run its outstanding migrations)."),(0,i.kt)("h3",{id:"creating-tables"},"Creating Tables"),(0,i.kt)("p",null,"To create a table, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Migration::createTable")," helper. The ",(0,i.kt)("inlineCode",{parentName:"p"},"createTable")," helper accepts two arguments. The first is the name of the table, while the second is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Closure")," which receives a ",(0,i.kt)("inlineCode",{parentName:"p"},"Blueprint")," object that may be used to define the new table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Database\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\n\nreturn Migration::createTable('users', function (Blueprint $table) {\n    $table->increments('id');\n});\n")),(0,i.kt)("p",null,"When creating the table, you may use any of the schema builder's ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/migrations#creating-columns"},"column methods")," to define the table's columns."),(0,i.kt)("h3",{id:"renaming-tables"},"Renaming Tables"),(0,i.kt)("p",null,"To rename an existing database table, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Migration::renameTable")," helper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"return Migration::renameTable($from, $to);\n")),(0,i.kt)("h3",{id:"creatingdropping-columns"},"Creating/Dropping Columns"),(0,i.kt)("p",null,"To add columns to an existing table, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Migration::addColumns")," helper. The ",(0,i.kt)("inlineCode",{parentName:"p"},"addColumns")," helper accepts two arguments. The first is the name of the table. The second is an array of column definitions, with the key being the column name. The value of each item is an array with the column definitions, as understood by Laravel's ",(0,i.kt)("inlineCode",{parentName:"p"},"Illuminate\\Database\\Schema\\Blueprint::addColumn()")," method. The first value is the column type, and any other keyed values are passed through to ",(0,i.kt)("inlineCode",{parentName:"p"},"addColumn"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"return Migration::addColumns('users', [\n    'email' => ['string', 'length' => 255, 'nullable' => true],\n    'discussion_count' => ['integer', 'unsigned' => true]\n]);\n")),(0,i.kt)("p",null,"To drop columns from an existing table, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Migration::dropColumns")," helper, which accepts the same arguments as the ",(0,i.kt)("inlineCode",{parentName:"p"},"addColumns")," helper. Just like when dropping tables, you should specify the full column definitions so that the migration can be rolled back cleanly."),(0,i.kt)("h3",{id:"renaming-columns"},"Renaming Columns"),(0,i.kt)("p",null,"To rename columns, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Migration::renameColumns")," helper. The ",(0,i.kt)("inlineCode",{parentName:"p"},"renameColumns")," helper accepts two arguments. The first is the name of the table, while the second is an array of column names to rename:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"return Migration::renameColumns('users', ['from' => 'to']);\n")),(0,i.kt)("h3",{id:"default-settings-and-permissions"},"Default Settings and Permissions"),(0,i.kt)("p",null,"Data migrations are the recommended way to specify default settings and permissions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"return Migration::addSettings([\n    'foo' => 'bar',\n]);\n")),(0,i.kt)("p",null,"and"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Group\\Group;\n\nreturn Migration::addPermissions([\n    'some.permission' => Group::MODERATOR_ID\n]);\n")),(0,i.kt)("p",null,"Note that this should only be used then adding ",(0,i.kt)("strong",{parentName:"p"},"new")," permissions or settings. If you use these helpers, and the settings/permissions already exist, you'll end up overriding those settings on all sites where they have been manually configured."),(0,i.kt)("h3",{id:"data-migrations-advanced"},"Data Migrations (Advanced)"),(0,i.kt)("p",null,"A migration doesn't have to change database structure: you could use a migration to insert, update, or delete rows in a table. The migration helpers that add ",(0,i.kt)("a",{parentName:"p",href:"#default-settings-and-permissions"},"defaults for settings/permissions")," are just one case of this. For instance, you could use migrations to create default instances of a new model your extension adds. Since you have access to the ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/migrations#creating-tables"},"Eloquent Schema Builder"),", anything is possible (although of course, you should be extremely cautious and test your extension extensively)."),(0,i.kt)("h2",{id:"backend-models"},"Backend Models"),(0,i.kt)("p",null,"With all your snazzy new database tables and columns, you're going to want a way to access the data in both the backend and the frontend. On the backend it's pretty straightforward \u2013\xa0you just need to be familiar with ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/eloquent"},"Eloquent"),"."),(0,i.kt)("h3",{id:"adding-new-models"},"Adding New Models"),(0,i.kt)("p",null,"If you've added a new table, you'll need to set up a new model for it. Rather than extending the Eloquent ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," class directly, you should extend ",(0,i.kt)("inlineCode",{parentName:"p"},"DuRoom\\Database\\AbstractModel")," which provides a bit of extra functionality to allow your models to be extended by other extensions. See the Eloquent docs linked above for examples of what your model class should look like."),(0,i.kt)("h3",{id:"relationships"},"Relationships"),(0,i.kt)("p",null,"You can also add ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/eloquent-relationships"},"relationships")," to existing models using the ",(0,i.kt)("inlineCode",{parentName:"p"},"hasOne"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"belongsTo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hasMany"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"belongsToMany"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship")," methods on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," extender. The first argument is the relationship name; the rest of the arguments are passed into the equivalent method on the model, so you can specify the related model name and optionally override table and key names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    new Extend\\Model(User::class)\n        ->hasOne('phone', 'App\\Phone', 'foreign_key', 'local_key')\n        ->belongsTo('country', 'App\\Country', 'foreign_key', 'other_key')\n        ->hasMany('comment', 'App\\Comment', 'foreign_key', 'local_key')\n        ->belongsToMany('role', 'App\\Role', 'role_user', 'user_id', 'role_id')\n")),(0,i.kt)("p",null,"Those 4 should cover the majority of relations, but sometimes, finer-grained customization is needed (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"morphMany"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"morphToMany"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"morphedByMany"),"). ANY valid Eloquent relationship is supported by the ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"    new Extend\\Model(User::class)\n        ->relationship('mobile', 'App\\Phone', function ($user) {\n            // Return any Eloquent relationship here.\n            return $user->belongsToMany(Discussion::class, 'recipients')\n                ->withTimestamps()\n                ->wherePivot('removed_at', null);\n        })\n")),(0,i.kt)("h2",{id:"frontend-models"},"Frontend Models"),(0,i.kt)("p",null,"DuRoom provides a simple toolset for working with data in the frontend in the form of frontend models. There's 2 main concepts to be aware of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Model instances are objects that represent a record from the database. You can use their methods to get attributes and relationships of that record, save changes to the record, or delete the record."),(0,i.kt)("li",{parentName:"ul"},"The Store is a util class that caches all the models we've fetched from the API, links related models together, and provides methods for getting model instances from both the API and the local cache.")),(0,i.kt)("h3",{id:"fetching-data"},"Fetching Data"),(0,i.kt)("p",null,"DuRoom's frontend contains a local data ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," which provides an interface to interact with the JSON:API. You can retrieve resource(s) from the API using the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," method, which always returns a promise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// GET /api/discussions?sort=createdAt\napp.store.find('discussions', {sort: 'createdAt'}).then(console.log);\n\n// GET /api/discussions/123\napp.store.find('discussions', 123).then(console.log);\n")),(0,i.kt)("p",null,"Once resources have been loaded, they will be cached in the store so you can access them again without hitting the API using the ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getById")," methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const discussions = app.store.all('discussions');\nconst discussion = app.store.getById('discussions', 123);\n")),(0,i.kt)("p",null,"The store wraps the raw API resource data in model objects which make it a bit easier to work with. Attributes and relationships can be accessed via pre-defined instance methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const id = discussion.id();\nconst title = discussion.title();\nconst posts = discussion.posts(); // array of Post models\n")),(0,i.kt)("p",null,"You can learn more about the store in our ",(0,i.kt)("a",{parentName:"p",href:"https://api.duroom.js.org/docs/js/master/class/src/common/store.js~store"},"API documentation"),"."),(0,i.kt)("h3",{id:"adding-new-models-1"},"Adding New Models"),(0,i.kt)("p",null,"If you have added a new resource type, you will need to define a new model for it. Models must extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," class and re-define the resource attributes and relationships:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Model from 'duroom/common/Model';\n\nexport default class Tag extends Model {\n  title = Model.attribute('title');\n  createdAt = Model.attribute('createdAt', Model.transformDate);\n  parent = Model.hasOne('parent');\n  discussions = Model.hasMany('discussions');\n}\n")),(0,i.kt)("p",null,"You must then register your new model with the store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"app.store.models.tags = Tag;\n")),(0,i.kt)("h3",{id:"extending-models"},"Extending Models"),(0,i.kt)("p",null,"To add attributes and relationships to existing models, modify the model class prototype:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Discussion.prototype.user = Model.hasOne('user');\nDiscussion.prototype.posts = Model.hasMany('posts');\nDiscussion.prototype.slug = Model.attribute('slug');\n")),(0,i.kt)("h3",{id:"saving-resources"},"Saving Resources"),(0,i.kt)("p",null,"To send data back through the API, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," method on a model instance. This method returns a Promise which resolves with the same model instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"discussion.save({ title: 'Hello, world!' }).then(console.log);\n")),(0,i.kt)("p",null,"You can also save relationships by passing them in a ",(0,i.kt)("inlineCode",{parentName:"p"},"relationships")," key. For has-one relationships, pass a single model instance. For has-many relationships, pass an array of model instances."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"user.save({\n  relationships: {\n    groups: [\n      store.getById('groups', 1),\n      store.getById('groups', 2)\n    ]\n  }\n})\n")),(0,i.kt)("h3",{id:"creating-new-resources"},"Creating New Resources"),(0,i.kt)("p",null,"To create a new resource, create a new model instance for the resource type using the store's ",(0,i.kt)("inlineCode",{parentName:"p"},"createRecord")," method, then ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const discussion = app.store.createRecord('discussions');\n\ndiscussion.save({ title: 'Hello, world!' }).then(console.log);\n")),(0,i.kt)("h3",{id:"deleting-resources"},"Deleting Resources"),(0,i.kt)("p",null,"To delete a resource, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," method on a model instance. This method returns a Promise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"discussion.delete().then(done);\n")),(0,i.kt)("h2",{id:"backend-models-vs-frontend-models"},"Backend Models vs Frontend Models"),(0,i.kt)("p",null,"Often, backend and frontend models will have similar attributes and relationships. This is a good pattern to follow, but isn't always true."),(0,i.kt)("p",null,"The attributes and relationships of backend models are based on the ",(0,i.kt)("strong",{parentName:"p"},"database"),". Each column in the model's table will map to an attribute on the backend model."),(0,i.kt)("p",null,"The attributes and relationships of frontend models are based on the output of ",(0,i.kt)("a",{parentName:"p",href:"/extend/api"},"API Serializers"),". These will be covered more in depth in the next article, but it's worth that a serializer could output all, any, or none of the backend model's attributes, and the names under which they're accessed might be different in the backend and frontend."),(0,i.kt)("p",null,"Furthermore, when you save a backend model, that data is being written directly to the database. But when you save a frontend model, all you're doing is triggering a request to the API. In the ",(0,i.kt)("a",{parentName:"p",href:"/extend/api"},"next article"),", we'll learn how to handle these requests in the backend, so your requested changes are actually reflected in the database."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[7080],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},1933:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],l={},s="Help Build DuRoom",u={unversionedId:"contributing",id:"contributing",title:"Help Build DuRoom",description:"Interested in contributing to DuRoom development? That's great! From opening a bug report to creating a pull request: every single one is appreciated and welcome. DuRoom wouldn't be possible without our community contributions.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/vi/contributing",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"FAQ",permalink:"/docs/vi/faq"},next:{title:"Docs and Translation",permalink:"/docs/vi/contributing-docs-translations"}},p={},m=[{value:"Why Contribute to DuRoom?",id:"why-contribute-to-duroom",level:2},{value:"What to Work On",id:"what-to-work-on",level:2},{value:"Development Setup",id:"development-setup",level:2},{value:"Setting Up a Local Codebase",id:"setting-up-a-local-codebase",level:3},{value:"Development Tools",id:"development-tools",level:3},{value:"Development Workflow",id:"development-workflow",level:2},{value:"Coding Style",id:"coding-style",level:2},{value:"PHP",id:"php",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Database",id:"database",level:3},{value:"CSS",id:"css",level:3},{value:"Translations",id:"translations",level:3},{value:"Contributor License Agreement",id:"contributor-license-agreement",level:2}],c={toc:m};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"help-build-duroom"},"Help Build DuRoom"),(0,r.kt)("p",null,"Interested in contributing to DuRoom development? That's great! From ",(0,r.kt)("a",{parentName:"p",href:"/docs/vi/bugs"},"opening a bug report")," to creating a pull request: every single one is appreciated and welcome. DuRoom wouldn't be possible without our community contributions."),(0,r.kt)("p",null,"Before contributing, please read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/vi/code-of-conduct"},"code of conduct"),"."),(0,r.kt)("p",null,"This document is a guide for developers who want to contribute code to DuRoom. If you're just getting started, we recommend that you read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/vi/extend/start"},"Getting Started")," documentation in the Extension docs to understand a bit more about how DuRoom works."),(0,r.kt)("h2",{id:"why-contribute-to-duroom"},"Why Contribute to DuRoom?"),(0,r.kt)("p",null,"\u26a1 ",(0,r.kt)("strong",{parentName:"p"},"Have Real Impact.")," There are thousands of DuRoom instances, with millions of aggregate end users. By contributing to DuRoom, your code will have a positive impact on all of them."),(0,r.kt)("p",null,"\ud83d\udd2e ",(0,r.kt)("strong",{parentName:"p"},"Shape the Future of DuRoom.")," We have a long backlog, and limited time. If you're willing to champion a feature or change, it's much more likely to happen, and you'll be able to enact your vision for it. The best road to influence is contributing."),(0,r.kt)("p",null,"\ud83e\uddd1\u200d\ud83d\udcbb ",(0,r.kt)("strong",{parentName:"p"},"Become a Better Engineer.")," Our codebase is modern, and we heavily value good engineering and clean code. There's also a lot of interesting, challenging problems to solve regarding design, infrastructure, performance, and extensibility. Especially if you're a student or early in your career, working on DuRoom is a great opportunity to build development skills."),(0,r.kt)("p",null,"\ud83c\udfa0 ",(0,r.kt)("strong",{parentName:"p"},"It's Fun!")," We really enjoy working on DuRoom: there's a lot of interesting challenges and fun features to build. We also have an active community on ",(0,r.kt)("a",{parentName:"p",href:"https://discuss-duroom.js.org"},"our forums"),"."),(0,r.kt)("h2",{id:"what-to-work-on"},"What to Work On"),(0,r.kt)("p",null,"Check out our upcoming ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/core/milestones"},"Milestones")," for an overview of what needs to be done. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/core/labels/Good%20first%20issue"},"Good first issue")," label for a list of issues that should be relatively easy to get started with. If there's anything you're unsure of, don't hesitate to ask! All of us were just starting out once."),(0,r.kt)("p",null,"If you're planning to go ahead and work on something, please comment on the relevant issue or create a new one first. This way we can ensure that your precious work is not in vain."),(0,r.kt)("p",null,"Since DuRoom is so extension-driven, we highly recommend ",(0,r.kt)("a",{parentName:"p",href:"/docs/vi/extend"},"our extension docs")," as a reference when working on core, as well as for bundled extensions. You should start with ",(0,r.kt)("a",{parentName:"p",href:"/docs/vi/extend"},"the introduction")," for a better understanding of our extension philosophy."),(0,r.kt)("h2",{id:"development-setup"},"Development Setup"),(0,r.kt)("h3",{id:"setting-up-a-local-codebase"},"Setting Up a Local Codebase"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/duroom"},"DuRoom/duroom"),' is a "skeleton" application which uses Composer to download the core package and a bunch of extensions. Source code for DuRoom core, extensions, and all packages used by the aforementioned is located in the DuRoom monorepo ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework"},"DuRoom/framework"),". In order to contribute to these, you'll need to fork and clone the monorepo repository locally, and then add it to your dev environment as a ",(0,r.kt)("a",{parentName:"p",href:"https://getcomposer.org/doc/05-repositories.md#path"},"Composer path repository"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/DuRoom/duroom.git\ncd duroom\n\n# Set up a Composer path repository for DuRoom monorepo packages\ncomposer config repositories.0 path "PATH_TO_MONOREPO/*/*"\ngit clone https://github.com/<username>/framework.git PATH_TO_MONOREPO\n')),(0,r.kt)("p",null,"Next, ensure that Composer accepts unstable releases from your local copies by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"minimum-stability")," key to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json"),"."),(0,r.kt)("p",null,"Finally, run ",(0,r.kt)("inlineCode",{parentName:"p"},"composer install")," to complete the installation from the path repositories."),(0,r.kt)("p",null,"After your local installation is set up, make sure you've enabled ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," mode in ",(0,r.kt)("strong",{parentName:"p"},"config.php"),", and set ",(0,r.kt)("inlineCode",{parentName:"p"},"display_errors")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"On")," in your php config. This will allow you to see error details for both DuRoom and PHP. Debug mode also forces a re-compilation of DuRoom's asset files on each request, removing the need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"php duroom cache:clear")," after each change to the extension's JavaScript or CSS."),(0,r.kt)("p",null,"DuRoom's front-end code is written in ES6 and transpiled into JavaScript. During development you will need to recompile the JavaScript using ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn")),". ",(0,r.kt)("strong",{parentName:"p"},"Please do not commit the resulting ",(0,r.kt)("inlineCode",{parentName:"strong"},"dist")," files when sending PRs"),"; this is automatically taken care of when changes are merged into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,r.kt)("p",null,"To contribute to the frontend, first install the JavaScript dependencies. The monorepo uses ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/workspaces/"},"yarn workspaces")," to easily install JS dependencies across all packages within."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/framework\nyarn install\n")),(0,r.kt)("p",null,"Then you can watch JavaScript files for changes during development:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd framework/core/js\nyarn dev\n")),(0,r.kt)("p",null,"The process is the same for extensions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd extensions/tags/js\nyarn dev\n")),(0,r.kt)("h3",{id:"development-tools"},"Development Tools"),(0,r.kt)("p",null,"After you've forked and cloned the repositories you'll be working on, you'll need to set up local hosting so you can test out your changes.\nDuRoom doesn't currently come with a development server, so you'll need to set up Apache/NGINX/Caddy/etc to serve this local DuRoom installation."),(0,r.kt)("p",null,"Alternatively, you can use tools like, ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/valet"},"Laravel Valet")," (Mac), ",(0,r.kt)("a",{parentName:"p",href:"https://www.apachefriends.org/index.html"},"XAMPP")," (Windows) to serve a local forum."),(0,r.kt)("p",null,"Most DuRoom contributors develop with ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/phpstorm/download/"},"PHPStorm")," or ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,r.kt)("h2",{id:"development-workflow"},"Development Workflow"),(0,r.kt)("p",null,"A typical contribution workflow looks like this:"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83e\udded ",(0,r.kt)("strong",{parentName:"p"},"Plan")," out your contribution"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Figure out ",(0,r.kt)("a",{parentName:"li",href:"#what-to-work-on"},"which issue you want to tackle")),(0,r.kt)("li",{parentName:"ul"},"Set up a ",(0,r.kt)("a",{parentName:"li",href:"#setting-up-a-local-codebase"},"development environment")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83c\udf33 ",(0,r.kt)("strong",{parentName:"p"},"Branch")," off the appropriate branch into a new feature branch."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Bug fixes")," should be sent to the latest stable branch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Minor")," features that are fully backwards compatible with the current DuRoom release may be sent to the latest stable branch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Major")," features should always be sent to the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch, which contains the upcoming DuRoom release."),(0,r.kt)("li",{parentName:"ul"},"Internally we use the naming scheme ",(0,r.kt)("inlineCode",{parentName:"li"},"<initials>/<short-description>")," (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"tz/refactor-frontend"),")."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udd28 ",(0,r.kt)("strong",{parentName:"p"},"Write")," some code."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See below about ",(0,r.kt)("a",{parentName:"li",href:"#coding-style"},"Coding Style"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udea6 ",(0,r.kt)("strong",{parentName:"p"},"Test")," your code."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add unit tests as necessary when fixing bugs or adding features."),(0,r.kt)("li",{parentName:"ul"},"Run the test suite with ",(0,r.kt)("inlineCode",{parentName:"li"},"vendor/bin/phpunit")," in the relevant package folder."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"/docs/vi/extend/testing"},"here")," for more information about testing in DuRoom."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udcbe ",(0,r.kt)("strong",{parentName:"p"},"Commit")," your code with a descriptive message."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'If your change resolves an existing issue (usually, it should) include "Fixes #123" on a newline, where 123 is the issue number.'),(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"Conventional Commits")," specification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Fix")," commits should describe the issue fixed, not how it was fixed."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83c\udf81 ",(0,r.kt)("strong",{parentName:"p"},"Submit")," a Pull Request on GitHub."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fill out the pull request template."),(0,r.kt)("li",{parentName:"ul"},"If your change is visual, include a screenshot or GIF demonstrating the change."),(0,r.kt)("li",{parentName:"ul"},"Do NOT check-in the JavaScript ",(0,r.kt)("inlineCode",{parentName:"li"},"dist")," files. These will be compiled automatically on merge."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83e\udd1d ",(0,r.kt)("strong",{parentName:"p"},"Engage")," with the DuRoom team for approval."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Team members will review your code. We may suggest some changes or improvements or alternatives, but for small changes your pull request should be accepted quickly."),(0,r.kt)("li",{parentName:"ul"},"When addressing feedback, push additional commits instead of overwriting or squashing (we will squash on merge)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udd7a ",(0,r.kt)("strong",{parentName:"p"},"Dance")," like you just contributed to DuRoom."))),(0,r.kt)("h2",{id:"coding-style"},"Coding Style"),(0,r.kt)("p",null,"In order to keep the DuRoom codebase clean and consistent, we have a number of coding style guidelines that we follow. When in doubt, read the source code."),(0,r.kt)("p",null,"Don't worry if your code styling isn't perfect! StyleCI and Prettier will automatically check formatting for every pull request. This allows us to focus on the content of the contribution, not the code style."),(0,r.kt)("h3",{id:"php"},"PHP"),(0,r.kt)("p",null,"DuRoom follows the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md"},"PSR-2")," coding standard and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md"},"PSR-4")," autoloading standard. On top of this, we conform to a number of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/.styleci.yml"},"other style rules"),". We use PHP 7 type hinting and return type declarations where possible, and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.phpdoc.org/"},"PHPDoc")," to provide inline documentation. Try and mimic the style used by the rest of the codebase in your contributions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespaces should be singular (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"DuRoom\\Discussion"),", not ",(0,r.kt)("inlineCode",{parentName:"li"},"DuRoom\\Discussions"),")"),(0,r.kt)("li",{parentName:"ul"},"Interfaces should be suffixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"Interface")," (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"MailableInterface"),")"),(0,r.kt)("li",{parentName:"ul"},"Abstract classes should be prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"Abstract")," (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"AbstractModel"),")"),(0,r.kt)("li",{parentName:"ul"},"Traits should be suffixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"Trait")," (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"ScopeVisibilityTrait"),")")),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"DuRoom's JavaScript mostly follows the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript"},"Airbnb Style Guide"),". We use ",(0,r.kt)("a",{parentName:"p",href:"https://esdoc.org/manual/tags.html"},"ESDoc")," to provide inline documentation."),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Columns")," should be named according to their data type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DATETIME or TIMESTAMP: ",(0,r.kt)("inlineCode",{parentName:"li"},"{verbed}_at")," (eg. created_at, read_at) or ",(0,r.kt)("inlineCode",{parentName:"li"},"{verbed}_until")," (eg. suspended_until)"),(0,r.kt)("li",{parentName:"ul"},"INT that is a count: ",(0,r.kt)("inlineCode",{parentName:"li"},"{noun}_count")," (eg. comment_count, word_count)"),(0,r.kt)("li",{parentName:"ul"},"Foreign key: ",(0,r.kt)("inlineCode",{parentName:"li"},"{verbed}_{entity}_id")," (eg. hidden_user_id)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Verb can be omitted for primary relationship (eg. post author is just ",(0,r.kt)("inlineCode",{parentName:"li"},"user_id"),")"))),(0,r.kt)("li",{parentName:"ul"},"BOOL: ",(0,r.kt)("inlineCode",{parentName:"li"},"is_{adjective}")," (eg. is_locked)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tables")," should be named as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use plural form (",(0,r.kt)("inlineCode",{parentName:"li"},"discussions"),")"),(0,r.kt)("li",{parentName:"ul"},"Separate multiple words with underscores (",(0,r.kt)("inlineCode",{parentName:"li"},"access_tokens"),")"),(0,r.kt)("li",{parentName:"ul"},"For relationships tables, join the two table names in singular form with an underscore in alphabetical order (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"discussion_user"),")")),(0,r.kt)("h3",{id:"css"},"CSS"),(0,r.kt)("p",null,"DuRoom's CSS classes roughly follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md"},"SUIT CSS naming conventions")," using the format ",(0,r.kt)("inlineCode",{parentName:"p"},".ComponentName-descendentName--modifierName"),"."),(0,r.kt)("h3",{id:"translations"},"Translations"),(0,r.kt)("p",null,"We use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/vi/extend/i18n#appendix-a-standard-key-format"},"standard key format")," to name translation keys descriptively and consistently."),(0,r.kt)("h2",{id:"contributor-license-agreement"},"Contributor License Agreement"),(0,r.kt)("p",null,"By contributing your code to DuRoom you grant the DuRoom Foundation (Stichting DuRoom) a non-exclusive, irrevocable, worldwide, royalty-free, sublicensable, transferable license under all of Your relevant intellectual property rights (including copyright, patent, and any other rights), to use, copy, prepare derivative works of, distribute and publicly perform and display the Contributions on any licensing terms, including without limitation: (a) open source licenses like the MIT license; and (b) binary, proprietary, or commercial licenses. Except for the licenses granted herein, You reserve all right, title, and interest in and to the Contribution."),(0,r.kt)("p",null,"You confirm that you are able to grant us these rights. You represent that You are legally entitled to grant the above license. If Your employer has rights to intellectual property that You create, You represent that You have received permission to make the Contributions on behalf of that employer, or that Your employer has waived such rights for the Contributions."),(0,r.kt)("p",null,"You represent that the Contributions are Your original works of authorship, and to Your knowledge, no other person claims, or has the right to claim, any right in any invention or patent related to the Contributions. You also represent that You are not legally obligated, whether by entering into an agreement or otherwise, in any way that conflicts with the terms of this license."),(0,r.kt)("p",null,'The DuRoom Foundation acknowledges that, except as explicitly described in this Agreement, any Contribution which you provide is on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE.'))}d.isMDXComponent=!0}}]);
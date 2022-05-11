"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[9584],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8873:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="PR Merging Workflow",u={unversionedId:"internal/merging",id:"internal/merging",title:"PR Merging Workflow",description:"Implementation Review Criteria",source:"@site/docs/internal/merging.md",sourceDirName:"internal",slug:"/internal/merging",permalink:"/vi/internal/merging",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/internal/merging.md",tags:[],version:"current",frontMatter:{},sidebar:"internalSidebar",previous:{title:"T\xe0i li\u1ec7u nh\xf3m n\u1ed9i b\u1ed9",permalink:"/vi/internal"},next:{title:"Bundled Extensions Policy",permalink:"/vi/internal/bundled-extensions-policy"}},c={},m=[{value:"Implementation Review Criteria",id:"implementation-review-criteria",level:2},{value:"Merge Time!",id:"merge-time",level:2}],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pr-merging-workflow"},"PR Merging Workflow"),(0,o.kt)("h2",{id:"implementation-review-criteria"},"Implementation Review Criteria"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adheres to our conventions or can be patched up easily after merging, follows proper code style."),(0,o.kt)("li",{parentName:"ul"},"Are there any implementation details that could be done better through alternate technologies/technical approaches?"),(0,o.kt)("li",{parentName:"ul"},"Does not touch any lines outside of the intended changes, eg through formatting or compilation."),(0,o.kt)("li",{parentName:"ul"},"If the changes are to code intended as a public API, has a proper doc block been included?")),(0,o.kt)("h2",{id:"merge-time"},"Merge Time!"),(0,o.kt)("p",null,"If all of the checks in the template are met, ",(0,o.kt)("strong",{parentName:"p"},"any")," core developer may merge this PR. If the PR is authored by a core developer, they should probably be the ones to merge it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Merging:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GitHub offers several ways to merge a PR. Choose between the following strategies:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Merge")," when the PR branch consists of atomic, well-described commits that are nice to have in the version history."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Squash")," when lots of cleanup commits have accumulated. Please make sure to follow the ",(0,o.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"Conventional Commits")," spec for the squash commit."))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After merging:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Make sure the ",(0,o.kt)("em",{parentName:"li"},"issue")," (if none exists, the PR - but not both) belongs to the appropriate milestone and project board."),(0,o.kt)("li",{parentName:"ul"},"PRs in extensions cannot be assigned to core milestones, so create a core issue that references it and add it to the milestone."),(0,o.kt)("li",{parentName:"ul"},"Close all relevant issues (",(0,o.kt)("em",{parentName:"li"},"if")," they are closed completely)."),(0,o.kt)("li",{parentName:"ul"},"Regressions should be labeled as such and removed from the project board and milestone after merging."),(0,o.kt)("li",{parentName:"ul"},"Check for follow-up tasks:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Merge related PRs (language files, extensions, documentations)."),(0,o.kt)("li",{parentName:"ul"},"Documentation updates."))),(0,o.kt)("li",{parentName:"ul"},"Create issues for further follow-up tasks, if necessary.")))))}f.isMDXComponent=!0}}]);
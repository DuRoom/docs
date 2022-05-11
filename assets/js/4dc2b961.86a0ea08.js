"use strict";(self.webpackChunkduroom_docs=self.webpackChunkduroom_docs||[]).push([[1737],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),i=["components"],a={},l="Filesystem",d={unversionedId:"extend/filesystem",id:"extend/filesystem",title:"Filesystem",description:"DuRoom core integrates with the filesystem to store and serve assets (like compiled JS/CSS or upload logos/favicons) and avatars.",source:"@site/docs/extend/filesystem.md",sourceDirName:"extend",slug:"/extend/filesystem",permalink:"/docs/extend/filesystem",draft:!1,editUrl:"https://github.com/DuRoom/docs/tree/master/docs/extend/filesystem.md",tags:[],version:"current",frontMatter:{},sidebar:"extendSidebar",previous:{title:"Extensibility",permalink:"/docs/extend/extensibility"},next:{title:"Formatting",permalink:"/docs/extend/formatting"}},p={},c=[{value:"Disks",id:"disks",level:2},{value:"Using existing disks",id:"using-existing-disks",level:3},{value:"Declaring new disks",id:"declaring-new-disks",level:3},{value:"Storage drivers",id:"storage-drivers",level:2},{value:"GUI and Admin Configuration",id:"gui-and-admin-configuration",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"filesystem"},"Filesystem"),(0,o.kt)("p",null,"DuRoom core integrates with the filesystem to store and serve assets (like compiled JS/CSS or upload logos/favicons) and avatars."),(0,o.kt)("p",null,"Extensions can use DuRoom's provided utils for their own filesystem interaction and file storage needs. This system is based around ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/filesystem"},"Laravel's filesystem tools"),", which are in turn based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thephpleague/flysystem"},"Flysystem library"),"."),(0,o.kt)("h2",{id:"disks"},"Disks"),(0,o.kt)("p",null,"Filesystem ",(0,o.kt)("strong",{parentName:"p"},"disks")," represent storage locations, and are backed by storage drivers, which we'll cover later.\nDuRoom core has 2 disks: ",(0,o.kt)("inlineCode",{parentName:"p"},"duroom-assets")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"duroom-avatars"),"."),(0,o.kt)("h3",{id:"using-existing-disks"},"Using existing disks"),(0,o.kt)("p",null,"To access a disk, you'll need to retrieve it from the ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/api/8.x/Illuminate/Contracts/Filesystem/Factory.html"},"Filesystem Factory"),".\nTo do so, you should inject the factory contract in your class, and access the disks you need."),(0,o.kt)("p",null,"Let's take a look at core's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/4ecd9a9b2ff0e9ba42bb158f3f83bb3ddfc10853/framework/core/src/Api/Controller/DeleteLogoController.php#L19-L58"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteLogoController"))," for an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/*\n * This file is part of DuRoom.\n *\n * For detailed copyright and license information, please view the\n * LICENSE file that was distributed with this source code.\n */\n\nnamespace DuRoom\\Api\\Controller;\n\nuse DuRoom\\Http\\RequestUtil;\nuse DuRoom\\Settings\\SettingsRepositoryInterface;\nuse Illuminate\\Contracts\\Filesystem\\Factory;\nuse Illuminate\\Contracts\\Filesystem\\Filesystem;\nuse Laminas\\Diactoros\\Response\\EmptyResponse;\nuse Psr\\Http\\Message\\ServerRequestInterface;\n\nclass DeleteLogoController extends AbstractDeleteController\n{\n    /**\n     * @var SettingsRepositoryInterface\n     */\n    protected $settings;\n\n    /**\n     * @var Filesystem\n     */\n    protected $uploadDir;\n\n    /**\n     * @param SettingsRepositoryInterface $settings\n     * @param Factory $filesystemFactory\n     */\n    public function __construct(SettingsRepositoryInterface $settings, Factory $filesystemFactory)\n    {\n        $this->settings = $settings;\n        $this->uploadDir = $filesystemFactory->disk('duroom-assets');\n    }\n\n    /**\n     * {@inheritdoc}\n     */\n    protected function delete(ServerRequestInterface $request)\n    {\n        RequestUtil::getActor($request)->assertAdmin();\n\n        $path = $this->settings->get('logo_path');\n\n        $this->settings->set('logo_path', null);\n\n        if ($this->uploadDir->exists($path)) {\n            $this->uploadDir->delete($path);\n        }\n\n        return new EmptyResponse(204);\n    }\n}\n")),(0,o.kt)("p",null,"The object returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"$filesystemFactory->disk(DISK_NAME)")," implements the ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/api/8.x/Illuminate/Contracts/Filesystem/Cloud.html"},"Illuminate\\Contracts\\Filesystem\\Cloud")," interface, and can be used to create/get/move/delete files, and to get the URL to a resource."),(0,o.kt)("h3",{id:"declaring-new-disks"},"Declaring new disks"),(0,o.kt)("p",null,"Some extensions will want to group their resources / uploads onto a custom disk as opposed to using ",(0,o.kt)("inlineCode",{parentName:"p"},"duroom-assets")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"duroom-avatars"),"."),(0,o.kt)("p",null,"This can be done via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Filesystem")," extender:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\n\nreturn [\n    (new Extend\\Filesystem)\n        ->disk('duroom-uploads', function (Paths $paths, UrlGenerator $url) {\n            return [\n                'root'   => \"$paths->public/assets/uploads\",\n                'url'    => $url->to('forum')->path('assets/uploads')\n            ];\n        });\n")),(0,o.kt)("p",null,"Since all disks use the local filesystem by default, you'll need to provide a base path and base URL for the local filesystem."),(0,o.kt)("p",null,"The config array can contain other entries supported by ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/filesystem#configuration"},"Laravel disk config arrays"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"driver")," key should not be provided, and will be ignored."),(0,o.kt)("h2",{id:"storage-drivers"},"Storage drivers"),(0,o.kt)("p",null,"DuRoom selects the active driver for each disk by checking the ",(0,o.kt)("inlineCode",{parentName:"p"},"disk_driver.DISK_NAME")," key in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/extend/settings"},"settings repository")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/config"},"config.php file"),". If no driver is configured, or the configured driver is unavailable, DuRoom will default to the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," driver."),(0,o.kt)("p",null,"You can define new storage drivers by implementing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DuRoom/framework/blob/main/framework/core/src/Filesystem/DriverInterface.php#L16"},(0,o.kt)("inlineCode",{parentName:"a"},"DuRoom\\Filesystem\\DriverInterface")," interface"),", and registering it via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Filesystem")," extender:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use DuRoom\\Extend;\n\nreturn [\n    (new Extend\\Filesystem)\n        ->driver('aws-with-cdn', AwsWithCdnDriver::class);\n")),(0,o.kt)("p",null,"Filesystem storage drivers are a very powerful tool that allows you to completely customize file storage locations, attach arbitrary CDNs, and otherwise extend the filesystem / cloud storage integration layer."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some drivers might try to index their filesystem every time the driver is instantiated, even if only the ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," method is needed. This can have serious performance implications. In most cases, you'll want to ensure that your driver's ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," method does not ping the remote filesystem. Similarly, the remote filesystem should usually not be accessed until operations are actually executed."))),(0,o.kt)("h2",{id:"gui-and-admin-configuration"},"GUI and Admin Configuration"),(0,o.kt)("p",null,"DuRoom does not currently provide a GUI for selecting drivers for disks, or for entering settings for drivers. This might be added in the future.\nFor now, extensions are responsible for providing a GUI for their disks and drivers."),(0,o.kt)("p",null,"As noted ",(0,o.kt)("a",{parentName:"p",href:"#storage-drivers"},"above"),", if your extension provides a GUI for selecting drivers for a disk, it should modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"disk_driver.DISK_NAME")," key in settings."))}m.isMDXComponent=!0}}]);
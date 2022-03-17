"use strict";(self.webpackChunkcourseview_docs=self.webpackChunkcourseview_docs||[]).push([[7],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||c;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8608:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={sidebar_position:2},p="Create a new project",u={unversionedId:"create-expo-project",id:"create-expo-project",title:"Create a new project",description:"Expo project generator",source:"@site/docs/create-expo-project.md",sourceDirName:".",slug:"/create-expo-project",permalink:"/courseview-docs/create-expo-project",editUrl:"https://github.com/eighth-mile/courseview-docs/tree/main/docs/docs/create-expo-project.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites and Setup",permalink:"/courseview-docs/"}},l={},s=[{value:"Expo project generator",id:"expo-project-generator",level:2},{value:"Run the project",id:"run-the-project",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"create-a-new-project"},"Create a new project"),(0,c.kt)("h2",{id:"expo-project-generator"},"Expo project generator"),(0,c.kt)("p",null,"Open terminal / Cygwin and run the following command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"expo init courseview\n")),(0,c.kt)("p",null,"This should create a new folder ",(0,c.kt)("inlineCode",{parentName:"p"},"courseview")," with some sample code"),(0,c.kt)("p",null,"Navigate to the directory:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"cd courseview\n")),(0,c.kt)("p",null,"You can open the folder from VSCode"),(0,c.kt)("h2",{id:"run-the-project"},"Run the project"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"expo start\n")))}f.isMDXComponent=!0}}]);
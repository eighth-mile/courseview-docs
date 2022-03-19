"use strict";(self.webpackChunkcourseview_docs=self.webpackChunkcourseview_docs||[]).push([[256],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),c=["components"],a={sidebar_position:5},l="Building download button",s={unversionedId:"add-list-component",id:"add-list-component",title:"Building download button",description:"Create components/DownloadButton.js file:",source:"@site/docs/add-list-component.md",sourceDirName:".",slug:"/add-list-component",permalink:"/courseview-docs/add-list-component",editUrl:"https://github.com/eighth-mile/courseview-docs/tree/main/docs/docs/add-list-component.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Empty view component",permalink:"/courseview-docs/home-empty-view"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-download-button"},"Building download button"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"components/DownloadButton.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { FontAwesome } from '@expo/vector-icons';\nimport { TouchableOpacity, StyleSheet, Text, View } from 'react-native';\n\nexport default function DownloadButton() {\n  return (\n    <TouchableOpacity style={styles.container}>\n      <FontAwesome name=\"cloud-download\" size={16} color=\"black\" style={styles.icon} />\n      <Text style={styles.text}>Download</Text>\n    </TouchableOpacity>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flexDirection: 'row',\n  },\n  icon: {\n    marginEnd: 4\n  },\n  text: {\n    textTransform: 'uppercase',\n    fontWeight: '500',\n  }\n});\n")),(0,i.kt)("h1",{id:"building-sync-button-very-similar-to-above"},"Building Sync button (very similar to above)"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"components/SyncButton.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { FontAwesome5 } from '@expo/vector-icons'; \nimport { TouchableOpacity, StyleSheet, Text, View } from 'react-native';\n\nexport default function SyncButton() {\n  return (\n    <TouchableOpacity style={styles.container}>\n      <FontAwesome5 name=\"sync\" size={14} color=\"black\" style={styles.icon} />\n      <Text style={styles.text}>Sync</Text>\n    </TouchableOpacity>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flexDirection: 'row',\n  },\n  icon: {\n    marginEnd: 6\n  },\n  text: {\n    textTransform: 'uppercase',\n    fontWeight: '500',\n  }\n});\n")))}m.isMDXComponent=!0}}]);
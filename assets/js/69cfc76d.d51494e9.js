"use strict";(self.webpackChunkcourseview_docs=self.webpackChunkcourseview_docs||[]).push([[256],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},c="Building download button",s={unversionedId:"add-list-component",id:"add-list-component",title:"Building download button",description:"Create components/DownloadButton.js file:",source:"@site/docs/add-list-component.md",sourceDirName:".",slug:"/add-list-component",permalink:"/courseview-docs/add-list-component",editUrl:"https://github.com/eighth-mile/courseview-docs/tree/main/docs/docs/add-list-component.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Empty view component",permalink:"/courseview-docs/home-empty-view"},next:{title:"Program selector page",permalink:"/courseview-docs/program-selector-page"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-download-button"},"Building download button"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"components/DownloadButton.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { FontAwesome } from '@expo/vector-icons';\nimport { TouchableOpacity, StyleSheet, Text, View } from 'react-native';\n\nexport default function DownloadButton() {\n  return (\n    <TouchableOpacity style={styles.container}>\n      <FontAwesome name=\"cloud-download\" size={16} color=\"black\" style={styles.icon} />\n      <Text style={styles.text}>Download</Text>\n    </TouchableOpacity>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flexDirection: 'row',\n  },\n  icon: {\n    marginEnd: 4\n  },\n  text: {\n    textTransform: 'uppercase',\n    fontWeight: '500',\n  }\n});\n")),(0,i.kt)("h1",{id:"building-sync-button-very-similar-to-above"},"Building Sync button (very similar to above)"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"components/SyncButton.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { FontAwesome5 } from '@expo/vector-icons'; \nimport { TouchableOpacity, StyleSheet, Text, View } from 'react-native';\n\nexport default function SyncButton() {\n  return (\n    <TouchableOpacity style={styles.container}>\n      <FontAwesome5 name=\"sync\" size={14} color=\"black\" style={styles.icon} />\n      <Text style={styles.text}>Sync</Text>\n    </TouchableOpacity>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flexDirection: 'row',\n  },\n  icon: {\n    marginEnd: 6\n  },\n  text: {\n    textTransform: 'uppercase',\n    fontWeight: '500',\n  }\n});\n")),(0,i.kt)("h1",{id:"building-list-item-component"},"Building List item component"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"components/ListItem.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';\n\nexport default function ListItem({ title, subtitle, link, action }) {\n  return (\n    <TouchableOpacity>\n      <View style={styles.container}>\n        \n        <View style={styles.textContainer}>\n          <Text style={styles.title}>\n            {title}\n          </Text>\n          <Text style={styles.subtitle}>\n            {subtitle}\n          </Text>\n        </View>\n\n        <View style={styles.actionContainer}>\n          {action}\n        </View>\n      </View>\n    </TouchableOpacity>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flexDirection: 'column',\n    borderWidth: 1,\n    borderStyle: 'solid',\n    borderColor: '#CBCBCB',\n    marginHorizontal: 8,\n    marginVertical: 4,\n    padding: 8,\n  },\n  textContainer: {\n    alignItems: 'flex-start',\n  }, \n  actionContainer: {\n    alignItems: 'flex-end',\n  },\n  title: {\n    fontSize: 20,\n    marginVertical: 4,\n  },\n  subtitle: {\n    fontSize: 14,\n    color: \"#727272\"\n  },\n});\n")),(0,i.kt)("h1",{id:"building-list-component"},"Building List component"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"components/List.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { TouchableOpacity, StyleSheet, Text, View } from \'react-native\';\nimport DownloadButton from \'./DownloadButton\';\nimport ListItem from \'./ListItem\';\nimport SyncButton from \'./SyncButton\';\n\nexport default function List({ items }) {\n  return (\n    <View style={styles.container}>\n      <ListItem\n        title="My program"\n        subtitle="9 subjects" \n        action={<SyncButton />}\n      />\n      <ListItem\n        title="My program 2" \n        subtitle="8 subjects" \n        action={<DownloadButton />}\n      />\n      <ListItem\n        title="My program"\n        subtitle="9 subjects"\n      />\n    </View>\n  )   \n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 100,\n    width: \'100%\',\n  },\n});\n')))}d.isMDXComponent=!0}}]);
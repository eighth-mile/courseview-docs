"use strict";(self.webpackChunkcourseview_docs=self.webpackChunkcourseview_docs||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?l.createElement(g,i(i({ref:t},d),{},{components:n})):l.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var l=n(7462),a=n(3366),o=(n(7294),n(3905));n(2389),n(3725);var i=["components"],r={slug:"/",sidebar_position:1},p="Prerequisites and Setup",s={unversionedId:"index",id:"index",title:"Prerequisites and Setup",description:"Complete the following setup instructions based on your Operating system on laptop and phone.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/courseview-docs/",editUrl:"https://github.com/eighth-mile/courseview-docs/tree/main/docs/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a new project",permalink:"/courseview-docs/create-expo-project"}},d={},u=[{value:"Mobile",id:"mobile",level:2},{value:"Android",id:"android",level:3},{value:"Step 1: Enable Developer options",id:"step-1-enable-developer-options",level:4},{value:"Step 2: Enable USB Debugging",id:"step-2-enable-usb-debugging",level:4},{value:"Step 3: Install Expo Go",id:"step-3-install-expo-go",level:4},{value:"iOS (iPhone)",id:"ios-iphone",level:3},{value:"Step 1: Install Expo Go app",id:"step-1-install-expo-go-app",level:4},{value:"Desktop",id:"desktop",level:2},{value:"Windows",id:"windows",level:3},{value:"Step 1: Install Chocolatey",id:"step-1-install-chocolatey",level:4},{value:"Step 2: Install required packages using Chocolatey",id:"step-2-install-required-packages-using-chocolatey",level:4},{value:"Step 3 - Verify all installations",id:"step-3---verify-all-installations",level:4},{value:"Step 4 - Connect Android Debug Bridge (ADB) connection",id:"step-4---connect-android-debug-bridge-adb-connection",level:4},{value:"Ubuntu",id:"ubuntu",level:3},{value:"Step 1: Install adb &amp; git",id:"step-1-install-adb--git",level:4},{value:"Step 2: Install nvm (Node Version Manager)",id:"step-2-install-nvm-node-version-manager",level:4},{value:"Step 3: Install node 16",id:"step-3-install-node-16",level:4},{value:"Step 4: Install yarn",id:"step-4-install-yarn",level:4},{value:"Step 5: Install expo",id:"step-5-install-expo",level:4},{value:"macOS",id:"macos",level:3},{value:"Step 1: Install Homebrew",id:"step-1-install-homebrew",level:4},{value:"Step 2: Install Git",id:"step-2-install-git",level:4},{value:"Step 3: Install required Packages",id:"step-3-install-required-packages",level:4},{value:"Step 4: Install VSCode",id:"step-4-install-vscode",level:4},{value:"Step 5: Verify installations",id:"step-5-verify-installations",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites-and-setup"},"Prerequisites and Setup"),(0,o.kt)("p",null,"Complete the following setup instructions based on your Operating system on laptop and phone."),(0,o.kt)("h2",{id:"mobile"},"Mobile"),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("h4",{id:"step-1-enable-developer-options"},"Step 1: Enable Developer options"),(0,o.kt)("p",null,"Depending on yout Android phone manufacturer, this steps can vary. You can refer the official guide - ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options#enable"},"https://developer.android.com/studio/debug/dev-options#enable")),(0,o.kt)("p",null,"To enable developer options, tap the ",(0,o.kt)("strong",{parentName:"p"},'"Build Number"')," option 7 times:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android 9 and higher: ",(0,o.kt)("strong",{parentName:"li"},"Settings > About Phone > Build Number")),(0,o.kt)("li",{parentName:"ul"},"Android 8 and Andorid 8.1.0: ",(0,o.kt)("strong",{parentName:"li"},"Settings > System > About Phone > Build Number")),(0,o.kt)("li",{parentName:"ul"},"Android 7 and lower: ",(0,o.kt)("strong",{parentName:"li"},"Settings > About Phone > Build Number"))),(0,o.kt)("h4",{id:"step-2-enable-usb-debugging"},"Step 2: Enable USB Debugging"),(0,o.kt)("p",null,'Once you have enabled the "Developer options", you should enable "USB Debugging". Follow the official guide - ',(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options#debugging"},"https://developer.android.com/studio/debug/dev-options#debugging")),(0,o.kt)("img",{src:"https://developer.android.com/studio/images/run/dev-options-debug_2x.png",alt:"Android USB Debugging",width:"300"}),(0,o.kt)("h4",{id:"step-3-install-expo-go"},"Step 3: Install Expo Go"),(0,o.kt)("p",null,"Install Expo Go app from Google Play store - ",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent"},"https://play.google.com/store/apps/details?id=host.exp.exponent")),(0,o.kt)("a",{href:"https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"},(0,o.kt)("img",{alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",width:"200"})),(0,o.kt)("h3",{id:"ios-iphone"},"iOS (iPhone)"),(0,o.kt)("h4",{id:"step-1-install-expo-go-app"},"Step 1: Install Expo Go app"),(0,o.kt)("p",null,"Download Expo Go app from App store - ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/expo-go/id982107779"},"https://apps.apple.com/us/app/expo-go/id982107779")),(0,o.kt)("a",{href:"https://apps.apple.com/us/app/expo-go/id982107779?itsct=apps_box_badge&itscg=30200",style:{display:"inline-block",overflow:"hidden",borderRadius:8,width:169,height:54}},(0,o.kt)("img",{src:"https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=169x54&releaseDate=1439769600&h=4d5527ffc1dd8e2bc08756d8c1d14893",alt:"Download on the App Store",style:{borderRadius:8,width:169,height:54}})),(0,o.kt)("h2",{id:"desktop"},"Desktop"),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("h4",{id:"step-1-install-chocolatey"},"Step 1: Install Chocolatey"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Option 1 - Follow the official guide's ",(0,o.kt)("strong",{parentName:"li"},'"Install Chocolatey for Individual Use"')," section - ",(0,o.kt)("a",{parentName:"li",href:"https://chocolatey.org/install"},"https://chocolatey.org/install")),(0,o.kt)("li",{parentName:"ul"},"Option 2 - ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=7Cp2LS9eE3c"},"YouTube - How to Install Chocolatey on Windows 10"))),(0,o.kt)("p",null,"Verify your installation by running the following command in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started"},"Powershell"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"choco\n")),(0,o.kt)("h4",{id:"step-2-install-required-packages-using-chocolatey"},"Step 2: Install required packages using Chocolatey"),(0,o.kt)("p",null,"You need the following apps/packages. If you have it installed, you can skip the corresponding Chocolatey command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJS 16.14.1 LTS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"Git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cygwin.com/install.html"},"CygWin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/releases/platform-tools#downloads"},"Android Debug Bridge"))),(0,o.kt)("p",null,"Run the following commands in ",(0,o.kt)("strong",{parentName:"p"},"Powershell")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"choco install vscode --version 1.65.2 -y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"choco install nodejs-lts --version 16.14.0 -y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"choco install git --version 2.35.1.2 -y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"choco install cygwin --version 3.3.4 -y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"choco install adb --version 32.0.0 -y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global expo-cli\n")),(0,o.kt)("h4",{id:"step-3---verify-all-installations"},"Step 3 - Verify all installations"),(0,o.kt)("p",null,"Open ",(0,o.kt)("strong",{parentName:"p"},"Cygwin")," and run the following commands:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Checklist")),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("inlineCode",{parentName:"li"},"git --version"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Should give output similar to: ",(0,o.kt)("inlineCode",{parentName:"li"},"git version 2.32.0")))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("inlineCode",{parentName:"li"},"node --version"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Should give output: ",(0,o.kt)("inlineCode",{parentName:"li"},"v16.14.0")))),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("inlineCode",{parentName:"li"},"adb --version"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Should give following out:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Android Debug Bridge version 1.0.41\nVersion 31.0.3-7562133\nInstalled as\n")))))),(0,o.kt)("h4",{id:"step-4---connect-android-debug-bridge-adb-connection"},"Step 4 - Connect Android Debug Bridge (ADB) connection"),(0,o.kt)("p",null,"Connect your Android phone to your laptop/PC via USB cable. Run the following command in Cygwin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"adb devices\n")),(0,o.kt)("p",null,"It should detect your device, and output something similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"List of devices attached\n81459a030404    device  ----\x3e YOUR PHONE'S SERIAL\n")),(0,o.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,o.kt)("h4",{id:"step-1-install-adb--git"},"Step 1: Install adb & git"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install android-tools-adb android-tools-fastboot git\n")),(0,o.kt)("h4",{id:"step-2-install-nvm-node-version-manager"},"Step 2: Install nvm (Node Version Manager)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\necho \'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\' >> ~/.bashrc\necho \'[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\' >> ~/.bashrc\nsource ~/.bashrc\n')),(0,o.kt)("h4",{id:"step-3-install-node-16"},"Step 3: Install node 16"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nvm install 16\nnvm use 16\n")),(0,o.kt)("p",null,"Verify ",(0,o.kt)("inlineCode",{parentName:"p"},"node 16")," is used through:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node --version\n")),(0,o.kt)("h4",{id:"step-4-install-yarn"},"Step 4: Install yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --global yarn\n")),(0,o.kt)("h4",{id:"step-5-install-expo"},"Step 5: Install expo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn global add expo-cli\n")),(0,o.kt)("h3",{id:"macos"},"macOS"),(0,o.kt)("h4",{id:"step-1-install-homebrew"},"Step 1: Install Homebrew"),(0,o.kt)("p",null,"Open ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,o.kt)("h4",{id:"step-2-install-git"},"Step 2: Install Git"),(0,o.kt)("p",null,"You should have Git installed by default in Mac. Verify by running ",(0,o.kt)("inlineCode",{parentName:"p"},"git --version")," in Terminal. If not, install Git:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install git\n")),(0,o.kt)("h4",{id:"step-3-install-required-packages"},"Step 3: Install required Packages"),(0,o.kt)("p",null,"Run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install node@16 yarn watchman\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install --cask android-platform-tools\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn global add expo-cli\n")),(0,o.kt)("h4",{id:"step-4-install-vscode"},"Step 4: Install VSCode"),(0,o.kt)("p",null,"Download and install VSCode - ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download")),(0,o.kt)("h4",{id:"step-5-verify-installations"},"Step 5: Verify installations"),(0,o.kt)("p",null,"The following commands should give appropriate outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node --version\nnpm --version\nadb --version\nyarn --version\nwatchman --version\nexpo --version\n")))}m.isMDXComponent=!0}}]);
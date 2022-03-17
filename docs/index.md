---
slug: /
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prerequisites and Setup

Complete the following setup instructions based on your Operating system on laptop and phone.

## Mobile

### Android

#### Step 1: Enable Developer options

Depending on yout Android phone manufacturer, this steps can vary. You can refer the official guide - [https://developer.android.com/studio/debug/dev-options#enable](https://developer.android.com/studio/debug/dev-options#enable)

To enable developer options, tap the **"Build Number"** option 7 times:

- Android 9 and higher: **Settings > About Phone > Build Number**
- Android 8 and Andorid 8.1.0: **Settings > System > About Phone > Build Number**
- Android 7 and lower: **Settings > About Phone > Build Number**

#### Step 2: Enable USB Debugging

Once you have enabled the "Developer options", you should enable "USB Debugging". Follow the official guide - [https://developer.android.com/studio/debug/dev-options#debugging](https://developer.android.com/studio/debug/dev-options#debugging)

<img src="https://developer.android.com/studio/images/run/dev-options-debug_2x.png" alt="Android USB Debugging" width="300" />


#### Step 3: Install Expo Go

Install Expo Go app from Google Play store - [https://play.google.com/store/apps/details?id=host.exp.exponent](https://play.google.com/store/apps/details?id=host.exp.exponent)

<a href='https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="200" /></a>

### iOS (iPhone)

#### Step 1: Install Expo Go app

Download Expo Go app from App store - [https://apps.apple.com/us/app/expo-go/id982107779](https://apps.apple.com/us/app/expo-go/id982107779)

<a href="https://apps.apple.com/us/app/expo-go/id982107779?itsct=apps_box_badge&amp;itscg=30200" style={{ display: 'inline-block', overflow: 'hidden', borderRadius: 8, width: 169, height: 54 }}><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=169x54&amp;releaseDate=1439769600&h=4d5527ffc1dd8e2bc08756d8c1d14893" alt="Download on the App Store" style={{ borderRadius: 8, width: 169, height: 54 }} /></a>

## Desktop

### Windows

#### Step 1: Install Chocolatey

- Option 1 - Follow the official guide's **"Install Chocolatey for Individual Use"** section - [https://chocolatey.org/install](https://chocolatey.org/install)
- Option 2 - [YouTube - How to Install Chocolatey on Windows 10](https://www.youtube.com/watch?v=7Cp2LS9eE3c)

Verify your installation by running the following command in **[Powershell](https://docs.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started)**

```bash
choco
```

#### Step 2: Install required packages using Chocolatey

You need the following apps/packages. If you have it installed, you can skip the corresponding Chocolatey command:
* [VSCode](https://code.visualstudio.com/)
* [NodeJS 16.14.1 LTS](https://nodejs.org/en/)
* [Git](https://git-scm.com/download/win)
* [CygWin](https://www.cygwin.com/install.html)
* [Android Debug Bridge](https://developer.android.com/studio/releases/platform-tools#downloads)

Run the following commands in **Powershell**

```bash
choco install vscode --version 1.65.2 -y
```

```bash
choco install nodejs-lts --version 16.14.0 -y
```

```bash
choco install git --version 2.35.1.2 -y
```

```bash
choco install cygwin --version 3.3.4 -y
```

```bash
choco install adb --version 32.0.0 -y
```

#### Step 3 - Verify all installations

Open **Cygwin** and run the following commands:

**Checklist**

- [ ] `git --version`
    - Should give output similar to: `git version 2.32.0`
- [ ] `node --version`
    - Should give output: `v16.14.0`
- [ ] `adb --version`
    - Should give following out:
    ```
    Android Debug Bridge version 1.0.41
    Version 31.0.3-7562133
    Installed as
    ```

#### Step 4 - Connect Android Debug Bridge (ADB) connection

Connect your Android phone to your laptop/PC via USB cable. Run the following command in Cygwin:

```
adb devices
```

It should detect your device, and output something similar to this:

```
List of devices attached
81459a030404	device  ----> YOUR PHONE'S SERIAL
```

### Ubuntu

#### Step 1: Install adb & git

```
sudo apt install android-tools-adb android-tools-fastboot git
```

#### Step 2: Install nvm (Node Version Manager)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
echo 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm' >> ~/.bashrc
source ~/.bashrc
```

#### Step 3: Install node 16

```
nvm install 16
nvm use 16
```

Verify `node 16` is used through:

```
node --version
```

### macOS

#### Step 1: Install Homebrew

Open **Terminal** and run the following command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Step 2: Install Git

You should have Git installed by default in Mac. Verify by running `git --version` in Terminal. If not, install Git:

```
brew install git
```

#### Step 3: Install required Packages

Run the following commands:

```
brew install node@16 yarn watchman
```

```
brew install --cask android-platform-tools
```

```
yarn global add expo-cli
```

#### Step 4: Install VSCode

Download and install VSCode - [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

#### Step 5: Verify installations

The following commands should give appropriate outputs:

```
node --version
npm --version
adb --version
yarn --version
watchman --version
expo --version
```

### Android Platform Guide

- [Installing the Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements)
- [Check environment](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#install-pre-requisites-for-building)
```bash
# hicordova environment
$ cordova requirements
Java JDK: installed 1.8.0
Android SDK: installed true
Android target: installed android-29,android-28
Gradle: installed /Users/kimseongrim/.sdkman/candidates/gradle/6.2.2/bin/gradle
```
- [Setting up an Emulator](https://developer.android.google.cn/studio/run/managing-avds?hl=zh-cn)

### Development
```bash
# install resource manager(Option)
$ npm i -g nrm
$ nrm use taobao

# install packages
$ npm install
$ cd cordova
$ npm install
$ cd ..

# run in browser
$ npm run serve

# run in android
$ npm run android

# build, create key, signature
$ npm run build
$ npm run keystore
$ npm run jarsigner
```

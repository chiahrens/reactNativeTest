# reactNativeTest

First of all, you need to install and configure android/ios development environment as well as the emulator/simulator. If you cannot do that, this won't work.

For all:
```
nvm use 10

npm install -g react-native-cli

npm install

// you might have to run this. I'm not sure...
react-native link react-native-gesture-handler
```

Then update nightwatch.json to match your config for your emulator - androidLocal for android and iosLocal for ios.


Android
```
// This will build the apk (only once, takes long time), start the react-native server, and the apk on the android emulator.
react-native run-android

// Run the android test
npm run android:test
```

IOS
```
// This will build the app (only once, takes long time), start the react-native server, and the app on the ios simulator.
react-native run-ios

// Run the ios test
npm run ios:test
```

Refer to https://developers.perfectomobile.com/display/TT/React-Native+and+unique+identifiers on the different accessibily identifiers that need to be used for ios and android. 

For both android and ios, you can use xpath just fine. However, it is discouraged because of performance issues. It is recommended that you use "accessibility id" selector instead of the "css" selector.
* For android, the attriubte on the TextInput element is "accessibilityLabel"
* For ios, the attribute on the TextInput element is "testId"

Found this to confirm my theory - https://medium.com/@gethylgeorge/we-are-facing-issue-where-testid-is-not-mapped-to-resource-id-for-android-and-therefore-we-are-15b0e1f0d1f2
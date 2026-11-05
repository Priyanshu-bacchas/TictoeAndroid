# TictoeAndroid

Android app wrapper for the existing Tic-Tac-Toe / Zero Cross web app.

The app loads the same live website in a Capacitor Android WebView, so it uses the same login, backend, friends, chat and database as the website.

## Build APK

A GitHub Actions workflow builds a debug APK whenever files are pushed to `main`, or manually from Actions → Build Android APK → Run workflow.

Download the generated APK from the workflow run's Artifacts section (`tictoeandroid-debug-apk`).

## App configuration

- App name: TictoeAndroid
- Application ID: `com.tictoe.android`
- Live website: `https://tic-toe-1-jfny.onrender.com`

If the Render frontend URL changes, update `server.url` in `capacitor.config.json`.

## Local build

Requirements: Node.js 22, Java 21, Android SDK.

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK output: `android/app/build/outputs/apk/debug/app-debug.apk`.

Note: this first version is an online wrapper and requires an internet connection. It does not duplicate or redeploy the backend; it connects to the existing live website.

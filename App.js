import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { AppNavigation } from "./src/navigation/AppNavigation";
import * as Font from 'expo-font';
import store from './src/store/index.js';
import { DB } from "./src/db";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [fontIsReady, setFontIsReady] = useState(false);

  async function loadApplication() {
    try {
      await Font.loadAsync({
        'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      });
      await DB.init();
      setFontIsReady(true);
      console.log('database started')
    } catch (e) {
      console.log('error', e)
    }
  };

  if (!isReady || !fontIsReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

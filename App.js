import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Routes from './app/routes';

const getFonts = () =>
  Font.loadAsync({
    'Montserrat-ExtraBold': require('./app/assets/fonts/Montserrat-ExtraBold.otf'),
    'Montserrat-Medium': require('./app/assets/fonts/Montserrat-Medium.otf'),
    'Montserrat-Regular': require('./app/assets/fonts/Montserrat-Regular.otf'),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Routes />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default App;

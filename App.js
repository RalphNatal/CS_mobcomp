import React, { useState, useMemo, createContext } from 'react';
import { registerRootComponent } from 'expo';
import AppNavigator from './src/navigation';
import { lightTheme, darkTheme } from './src/styles/theme';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { TtsProvider } from './src/utils/TtsContext';
import { FontSizeProvider } from './src/utils/FontSizeContext';
import { DyslexicProvider } from './src/utils/DyslexicContext';

export const ThemeContext = createContext();

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const currentTheme = useMemo(
    () => (darkModeEnabled ? darkTheme : lightTheme),
    [darkModeEnabled]
  );

  React.useEffect(() => {
    Font.loadAsync({
      'OpenDyslexic': require('./assets/images/OpenDyslexic-Italic.otf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return (
      <ThemeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled, currentTheme }}>
      <DyslexicProvider>
        <FontSizeProvider>
          <TtsProvider>
            <AppNavigator />
          </TtsProvider>
        </FontSizeProvider>
      </DyslexicProvider>
    </ThemeContext.Provider>
  );
}

export default App;

registerRootComponent(App);

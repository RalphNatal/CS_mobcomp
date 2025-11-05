import React, { useState, useMemo, createContext } from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { registerRootComponent } from 'expo';
import AppNavigator from './src/navigation';
import { lightTheme, darkTheme } from './src/styles/theme';

// Theme Context (Global)
export const ThemeContext = createContext();

import { TtsProvider } from './src/utils/TtsContext';
import { FontSizeProvider } from './src/utils/FontSizeContext';

function App() {
  // Logic for switching themes
  const [darkModeEnabled, setDarkModeEnabled] = useState(false); 

  const currentTheme = useMemo(
    () => (darkModeEnabled ? darkTheme : lightTheme),
    [darkModeEnabled]
  );

  return (
    <ThemeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled, currentTheme }}>
      <FontSizeProvider>
        <TtsProvider>
          <AppNavigator />
        </TtsProvider>
      </FontSizeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

registerRootComponent(App);

import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { registerRootComponent } from 'expo';
import AppNavigator from './src/navigation';

function App() {
  return <AppNavigator/>;
}

export default App;
registerRootComponent(App);

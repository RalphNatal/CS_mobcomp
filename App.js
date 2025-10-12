import React from 'react';
import { registerRootComponent } from 'expo';
import AppNavigator from './src/navigation'; // ⬅️ This is your navigation index.js

function App() {
  return <AppNavigator />;
}

export default App;
registerRootComponent(App);

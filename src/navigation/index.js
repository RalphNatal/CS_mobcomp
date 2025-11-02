import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../../App';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DrawerNavigator from './DrawerNavigator';
import CategoryScreen from '../screens/CategoryScreen';
import JobSearchScreen from '../screens/JobSearch';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { currentTheme } = useContext(ThemeContext);

  const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: currentTheme.colors.background, // Current theme background
    card: currentTheme.colors.card,
    text: currentTheme.colors.text,
    border: currentTheme.colors.border || DefaultTheme.colors.border,
    primary: currentTheme.colors.primary,
    notification: currentTheme.colors.accent,
  },
};
return (
  <NavigationContainer theme={navigationTheme}>
  <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="JobSearch" component={JobSearchScreen} />
      </Stack.Navigator>
</NavigationContainer>
)

}

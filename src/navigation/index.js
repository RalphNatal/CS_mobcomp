import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DrawerNavigator from './DrawerNavigator';
import CategoryScreen from '../screens/CategoryScreen';
import ElectronicsScreen from '../screens/categories/ElectronicsScreen.js';
import ClothingScreen from '../screens/categories/ClothingScreen.js';
import GroceriesScreen from '../screens/categories/GroceriesScreen.js';
import ServicesScreen from '../screens/categories/ServicesScreen.js';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          gestureEnabled: true,
        }}
      >
        {/* Auth / Intro Screens */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* Main Drawer App */}
        <Stack.Screen name="Main" component={DrawerNavigator} />

        {/* ✅ Category Screen (for Popular Categories navigation) */}
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="Electronics" component={ElectronicsScreen} />
      <Stack.Screen name="Clothing" component={ClothingScreen} />
      <Stack.Screen name="Groceries" component={GroceriesScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

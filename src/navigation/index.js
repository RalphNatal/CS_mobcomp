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
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import ResumeScreen from '../screens/ResumeScreen';
import EditResumeScreen from '../screens/EditResumeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const themeContext = useContext(ThemeContext);
  
  // Provide fallback if context is undefined
  if (!themeContext) {
    return null;
  }

  const { currentTheme } = themeContext;

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: currentTheme?.colors?.background || '#fff',
      card: currentTheme?.colors?.card || '#f5f5f5',
      text: currentTheme?.colors?.text || '#000',
      border: currentTheme?.colors?.border || '#e0e0e0',
      primary: currentTheme?.colors?.primary || '#007AFF',
      notification: currentTheme?.colors?.accent || '#FF3B30',
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          cardStyle: { backgroundColor: currentTheme?.colors?.background || '#fff' },
        }}
      >
        {/* Authentication Stack */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ animationEnabled: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ animationEnabled: false }}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen}
          options={{ animationEnabled: false }}
        />

        {/* Main App Stack */}
        <Stack.Screen 
          name="Main" 
          component={DrawerNavigator}
          options={{ animationEnabled: false }}
        />

        {/* Job Browsing Stack */}
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />
        
        <Stack.Screen
          name="CompanyDetails"
          component={CompanyDetailsScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />

        {/* Resume Stack - Accessible from CompanyDetails */}
        <Stack.Screen
          name="ResumeScreen"
          component={ResumeScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />

        {/* Edit Resume Stack - Accessible from ResumeScreen */}
        <Stack.Screen
          name="EditResume"
          component={EditResumeScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />

        {/* Job Search Stack */}
        <Stack.Screen 
          name="JobSearch" 
          component={JobSearchScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import { useTts } from '../utils/TtsContext';

import SpeakableText from '../components/SpeakableText';
import CustomDrawer from '../components/CustomDrawer';

// Screens
import tempHomeScreen from '../screens/tempHomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import JobSearchScreen from '../screens/JobSearch';
import CategoryScreen from '../screens/CategoryScreen';
import CompanyDetailsScreen from '../screens/CompanyDetailsScreen';
import ResumeScreen from '../screens/ResumeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { currentTheme } = useContext(ThemeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();
  const { fontSizeMultiplier } = useContext(FontSizeContext);

  // Custom drawer labels with TTS and dyslexic font
  const renderLabel = (label) => (props) => (
    <SpeakableText
      style={{
        fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
        fontSize: 16 * fontSizeMultiplier,
        color: props.color,
      }}
      ttsEnabled={ttsEnabled}
    >
      {label}
    </SpeakableText>
  );

  // Custom screen header (title) with TTS and dyslexic font
  const renderHeader = (label) => () => (
    <SpeakableText
      ttsEnabled={ttsEnabled}
      style={{
        fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
        fontSize: 22 * fontSizeMultiplier,
        color: '#fff',
        fontWeight: dyslexicEnabled ? 'normal' : '700',
      }}
    >
      {label}
    </SpeakableText>
  );

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawer
          {...props}
          dyslexicEnabled={dyslexicEnabled}
          ttsEnabled={ttsEnabled}
          fontSizeMultiplier={fontSizeMultiplier}
        />
      )}
      screenOptions={{
        headerStyle: { backgroundColor: currentTheme.colors.primary },
        headerTintColor: '#fff',
        drawerActiveBackgroundColor: currentTheme.colors.primary,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: currentTheme.colors.text,
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={tempHomeScreen}
        options={{
          drawerLabel: renderLabel('Home'),
          headerTitle: renderHeader('Home'),
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🏠</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: renderLabel('Profile'),
          headerTitle: renderHeader('Profile'),
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>👤</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="JobSearch"
        component={JobSearchScreen}
        options={{
          drawerLabel: renderLabel('Job Search'),
          headerTitle: renderHeader('Job Search'),
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🔍</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="CategoryScreenDrawer"
        component={CategoryScreen}
        options={{
          drawerLabel: renderLabel('Browse Categories'),
          headerTitle: renderHeader('Browse Categories'),
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>📂</Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: renderLabel('Settings'),
          headerTitle: renderHeader('Settings'),
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>⚙️</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
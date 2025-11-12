import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/tempHomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';
import { ThemeContext } from '../../App';
import { useDyslexic } from '../utils/DyslexicContext';
import { useTts } from '../utils/TtsContext';
import { FontSizeContext } from '../utils/FontSizeContext';
import SpeakableText from '../components/SpeakableText';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { currentTheme } = useContext(ThemeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();
  const { fontSizeMultiplier, setFontSizeMultiplier } = useContext(FontSizeContext);

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
          setFontSizeMultiplier={setFontSizeMultiplier}
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
        component={HomeScreen}
        options={{
          drawerLabel: renderLabel('Home'),
          headerTitle: renderHeader('Home')
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: renderLabel('Settings'),
          headerTitle: renderHeader('Settings')
        }}
      />
    </Drawer.Navigator>
  );
}

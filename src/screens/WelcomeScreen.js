import React, { useRef, useEffect, useContext } from 'react';
import { View, Image, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../components/PrimaryButton';
import { lightTheme, darkTheme } from '../styles/theme';
import { welcomeStyles } from '../styles/WelcomeStyles';

import { FontSizeContext } from '../utils/FontSizeContext';
import SpeakableText from '../components/SpeakableText';
import { useDyslexic } from '../utils/DyslexicContext';
import { useTts } from '../utils/TtsContext';

// Device width, used for layout calculations if needed
const { width } = Dimensions.get('window');

// Toggle dark mode demo; in real app get from context or state
const darkModeEnabled = false;
const currentTheme = darkModeEnabled ? darkTheme : lightTheme;

export default function WelcomeScreen({ navigation }) {
  // Animated values for fade and slide effects
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(50)).current;

  // Access accessibility and theme contexts
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.spring(slide, { toValue: 0, stiffness: 90, useNativeDriver: true }),
    ]).start();
  }, []);

  // Dynamic styles based on current theme and accessibility prefs
  const styles = welcomeStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  return (
    <View style={styles.container}>
      {/* Background gradient for visual depth */}
      <LinearGradient
        colors={[currentTheme.colors.background, currentTheme.colors.accent + '25']}
        style={styles.gradient}
      />

      {/* Decorative circles harmony with theme */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />
      <View style={[styles.circle, styles.circle3]} />

      {/* Main content with animation */}
      <Animated.View style={{ opacity: fade, transform: [{ translateY: slide }] }}>
        {/* Application logo */}
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

        {/* App title with TTS and dyslexic font */}
        <SpeakableText
          style={[
            styles.title,
            { fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (currentTheme.fontFamily || 'System') },
          ]}
          ttsEnabled={ttsEnabled}
        >
          Connex — Skills to Opportunity
        </SpeakableText>

        {/* Supporting subtitle */}
        <SpeakableText
          style={[
            styles.subtitle,
            { fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (currentTheme.fontFamily || 'System') },
          ]}
          ttsEnabled={ttsEnabled}
        >
          Find certified training and job listings tailored to your skillset.
        </SpeakableText>

        {/* Login button */}
        <View style={{ marginTop: 30 }}>
          <PrimaryButton title="Login" onPress={() => navigation.navigate('Login')} />
        </View>

        {/* Sign up button */}
        <View style={{ marginTop: 12 }}>
          <PrimaryButton
            title="Create Account"
            onPress={() => navigation.navigate('Signup')}
            style={{ backgroundColor: currentTheme.colors.accent }}
          />
        </View>
      </Animated.View>
    </View>
  );
}

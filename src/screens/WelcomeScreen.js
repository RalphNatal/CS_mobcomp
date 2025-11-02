import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../components/PrimaryButton';
import { lightTheme, darkTheme } from '../styles/theme';
import { welcomeStyles } from '../styles/WelcomeStyles';

const { width } = Dimensions.get('window');

const darkModeEnabled = false;
const currentTheme = darkModeEnabled ? darkTheme : lightTheme;

export default function WelcomeScreen({ navigation }) {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.spring(slide, { toValue: 0, stiffness: 90, useNativeDriver: true }),
    ]).start();
  }, []);

  const styles = welcomeStyles(currentTheme);

  return (
    <View style={styles.container}>
      {/* Background gradient */}
      <LinearGradient
        colors={[currentTheme.colors.background, currentTheme.colors.accent + '25']}
        style={styles.gradient}
      />

      {/* Decorative faded circles */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />
      <View style={[styles.circle, styles.circle3]} />

      {/* Animated content */}
      <Animated.View style={{ opacity: fade, transform: [{ translateY: slide }] }}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Connex — Skills to Opportunity</Text>
        <Text style={styles.subtitle}>
          Find certified training and job listings tailored to your skillset.
        </Text>

        <View style={{ marginTop: 30 }}>
          <PrimaryButton title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
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

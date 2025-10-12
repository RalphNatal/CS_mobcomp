import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../styles/theme';
import { welcomeStyles as styles } from '../styles/WelcomeStyles';

const { width } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.spring(slide, { toValue: 0, stiffness: 90, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Background gradient */}
      <LinearGradient
        colors={[theme.colors.background, theme.colors.accent + '25']}
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
            style={{ backgroundColor: theme.colors.accent }}
          />
        </View>
      </Animated.View>
    </View>
  );
}


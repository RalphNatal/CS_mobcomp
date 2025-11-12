import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import SpeakableText from '../components/SpeakableText';
import { validateLogin } from '../utils/UserStorage';

/**
 * Creates styles dynamic to current theme, font size multiplier, and dyslexic mode
 */
const createStyles = (theme, fontSizeMultiplier, dyslexicEnabled) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      padding: 20,
    },
    card: {
      backgroundColor: theme.colors.card,
      padding: 20,
      borderRadius: 16,
      shadowColor: '#000',
      shadowOpacity: 0.06,
      shadowRadius: 10,
      elevation: 4,
    },
    heading: {
      fontSize: 22 * fontSizeMultiplier,
      marginBottom: 6,
      color: theme.colors.text,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
      fontWeight: dyslexicEnabled ? 'normal' : 'bold',
    },
    sub: {
      color: theme.colors.text,
      marginBottom: 14,
      fontSize: 14 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },
    small: {
      color: theme.colors.text,
      fontSize: 14 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
    link: {
      color: theme.colors.primary,
      fontWeight: '600',
      fontSize: 14 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
    errorText: {
      color: 'red',
      fontSize: 12 * fontSizeMultiplier,
      marginTop: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
  });

export default function LoginScreen({ navigation }) {
  // Get theming and accessibility contexts
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  
  // Generate styles based on current theme, font size, and font preferences
  const styles = createStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  // State for input fields and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validate input fields
  const validateForm = () => {
    let newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handles login button press with JSON validation
  const handleLogin = async () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fill in all required fields correctly');
      return;
    }

    setLoading(true);
    try {
      const result = await validateLogin(email, password);
      
      if (result.success) {
        Alert.alert('Success', `Welcome back, ${result.user.name}!`);
        // Clear inputs
        setEmail('');
        setPassword('');
        setErrors({});
        // Navigate to main app
        navigation.replace('Main');
      } else {
        Alert.alert('Login Failed', result.message);
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.card}>
        {/* Heading and subtitle with dyslexic font and TTS support */}
        <SpeakableText style={styles.heading} ttsEnabled>
          Welcome back
        </SpeakableText>
        <SpeakableText style={styles.sub} ttsEnabled>
          Sign in to continue to Connex
        </SpeakableText>

        {/* Email Input Field */}
        <InputField
          label={
            <SpeakableText
              style={{
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
                fontSize: 16 * fontSizeMultiplier,
                color: currentTheme.colors.text,
              }}
            >
              Email
            </SpeakableText>
          }
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          error={errors.email}
          fontSizeMultiplier={fontSizeMultiplier}
        />

        {/* Password Input Field */}
        <InputField
          label={
            <SpeakableText
              style={{
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
                fontSize: 16 * fontSizeMultiplier,
                color: currentTheme.colors.text,
              }}
            >
              Password
            </SpeakableText>
          }
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (errors.password) setErrors({ ...errors, password: '' });
          }}
          error={errors.password}
          fontSizeMultiplier={fontSizeMultiplier}
        />

        {/* Sign in Button with loading state */}
        {loading ? (
          <ActivityIndicator size="large" color={currentTheme.colors.primary} style={{ marginTop: 8 }} />
        ) : (
          <PrimaryButton
            title="Sign in"
            onPress={handleLogin}
            style={{ marginTop: 8 }}
            fontSizeMultiplier={fontSizeMultiplier}
          />
        )}

        {/* Navigation to Signup View */}
        <View style={styles.row}>
          <SpeakableText style={styles.small}>Don't have an account?</SpeakableText>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <SpeakableText style={styles.link}> Create one</SpeakableText>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
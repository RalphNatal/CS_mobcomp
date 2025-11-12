import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import { useTts } from '../utils/TtsContext';
import SpeakableText from '../components/SpeakableText';

// Create styles based on theme, font size multiplier, and dyslexic font setting
const createStyles = (theme, fontSizeMultiplier, dyslexicEnabled) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
    },
    heading: {
      fontSize: 22 * fontSizeMultiplier,
      marginBottom: 20,
      color: theme.colors.text,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
      fontWeight: dyslexicEnabled ? 'normal' : 'bold',
    },
    terms: {
      textAlign: 'center',
      marginTop: 14,
      color: theme.colors.muted,
      fontSize: 12 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
    },
  });

export default function SignupScreen({ navigation }) {
  // Get theme, fontSizeMultiplier, dyslexic flag, and TTS enablement
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();

  const styles = createStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  return (
    <View style={styles.container}>
      {/* Header with SpeakableText for TTS and dyslexic font */}
      <SpeakableText
        style={styles.heading}
        ttsEnabled={ttsEnabled}
      >
        Create your account
      </SpeakableText>

      {/* Full name field label uses SpeakableText for dyslexic font and TTS */}
      <InputField
        label={
          <SpeakableText
            style={{
              fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              fontSize: 16 * fontSizeMultiplier,
              color: currentTheme.colors.text,
            }}
            ttsEnabled={ttsEnabled}
          >
            Full name
          </SpeakableText>
        }
        fontSizeMultiplier={fontSizeMultiplier}
      />

      {/* Email field label */}
      <InputField
        label={
          <SpeakableText
            style={{
              fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              fontSize: 16 * fontSizeMultiplier,
              color: currentTheme.colors.text,
            }}
            ttsEnabled={ttsEnabled}
          >
            Email
          </SpeakableText>
        }
        keyboardType="email-address"
        fontSizeMultiplier={fontSizeMultiplier}
      />

      {/* Password field label */}
      <InputField
        label={
          <SpeakableText
            style={{
              fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              fontSize: 16 * fontSizeMultiplier,
              color: currentTheme.colors.text,
            }}
            ttsEnabled={ttsEnabled}
          >
            Password
          </SpeakableText>
        }
        secureTextEntry
        fontSizeMultiplier={fontSizeMultiplier}
      />

      {/* Create Account Button */}
      <PrimaryButton
        title="Create account"
        onPress={() => navigation.replace('Main')}
        fontSizeMultiplier={fontSizeMultiplier}
      />

      {/* Terms & Privacy Notice */}
      <SpeakableText style={styles.terms} ttsEnabled={ttsEnabled}>
        By creating an account you agree to our Terms & Privacy.
      </SpeakableText>
    </View>
  );
}

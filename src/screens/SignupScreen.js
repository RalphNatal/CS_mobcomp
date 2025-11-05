import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';

const createStyles = (theme, fontSizeMultiplier) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
    },
    heading: {
      fontSize: 22 * fontSizeMultiplier,
      fontWeight: '700',
      marginBottom: 20,
      color: theme.colors.text,
    },
    terms: {
      textAlign: 'center',
      marginTop: 14,
      color: theme.colors.muted,
      fontSize: 12 * fontSizeMultiplier,
    },
  });

export default function SignupScreen({ navigation }) {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const styles = createStyles(currentTheme, fontSizeMultiplier);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create your account</Text>

      <InputField label="Full name" fontSizeMultiplier={fontSizeMultiplier} />
      <InputField label="Email" keyboardType="email-address" fontSizeMultiplier={fontSizeMultiplier} />
      <InputField label="Password" secureTextEntry fontSizeMultiplier={fontSizeMultiplier} />

      <PrimaryButton
        title="Create account"
        onPress={() => navigation.replace('Main')}
        fontSizeMultiplier={fontSizeMultiplier}
      />

      <Text style={styles.terms}>
        By creating an account you agree to our Terms & Privacy.
      </Text>
    </View>
  );
}

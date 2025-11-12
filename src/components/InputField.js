import React, { useContext } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';

// Styles to support theme, font size, and dyslexic font
const inputStyles = (theme, fontSizeMultiplier, dyslexicEnabled) =>
  StyleSheet.create({
    label: {
      color: theme.colors.muted,
      marginBottom: 6,
      fontSize: 14 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
    input: {
      backgroundColor: theme.colors.card,
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.colors.border || '#E2E8F0',
      color: theme.colors.text,
      fontSize: 16 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
    errorText: {
      color: 'red',
      fontSize: 12 * fontSizeMultiplier,
      marginTop: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
    },
  });


 // InputField
const InputField = ({ label, error, ...props }) => {
  // Grab theme, fontSizeMultiplier, and dyslexic state from context
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();

  // Generate styles using current context values
  const styles = inputStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  return (
    <View style={{ marginBottom: 16 }}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>
      {/* Main Input box with theme and dyslexic */}
      <TextInput
        style={[styles.input, error && { borderColor: 'red' }]}
        placeholderTextColor={currentTheme.colors.muted}
        {...props}
      />
      {/* Display error below field, if present */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputField;

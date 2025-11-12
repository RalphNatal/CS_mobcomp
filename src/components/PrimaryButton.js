import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { lightTheme, darkTheme } from '../styles/theme';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';

// Toggle for light/dark preview - in app, get from ThemeContext instead!
const darkModeEnabled = false;
const currentTheme = darkModeEnabled ? darkTheme : lightTheme;

// StyleSheet generator: supports theme, font scaling, and dyslexic font
const buttonStyles = (theme, fontSizeMultiplier, dyslexicEnabled) =>
  StyleSheet.create({
    btn: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 12,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    txt: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16 * fontSizeMultiplier,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
    },
  });


// PrimaryButton
export default function PrimaryButton({ title, onPress, style }) {
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const styles = buttonStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, style]} // Merge any custom style with base button
      activeOpacity={0.85} // Add press feedback
    >
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

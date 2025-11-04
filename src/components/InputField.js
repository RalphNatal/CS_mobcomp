import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { lightTheme, darkTheme } from '../styles/theme';
import { FontSizeContext } from '../utils/FontSizeContext';

const darkModeEnabled = false;
const currentTheme = darkModeEnabled ? darkTheme : lightTheme;

const buttonStyles = (theme, fontSizeMultiplier) =>
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
    }
  });

export default function PrimaryButton({ title, onPress, style }) {
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const styles = buttonStyles(currentTheme, fontSizeMultiplier);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

import React, { useContext } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';

const inputStyles = (theme, fontSizeMultiplier) =>
  StyleSheet.create({
    label: {
      color: theme.colors.muted,
      marginBottom: 6,
      fontSize: 14 * fontSizeMultiplier,
    },
    input: {
      backgroundColor: theme.colors.card,
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.colors.border || '#E2E8F0',
      color: theme.colors.text,
      fontSize: 16 * fontSizeMultiplier,
    },
    errorText: {
      color: 'red',
      fontSize: 12 * fontSizeMultiplier,
      marginTop: 4,
    },
  });

const InputField = ({ label, error, ...props }) => {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const styles = inputStyles(currentTheme, fontSizeMultiplier);

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && { borderColor: 'red' }]}
        placeholderTextColor={currentTheme.colors.muted}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputField;

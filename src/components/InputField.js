import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import theme from '../styles/theme';

const InputField = ({ label, error, ...props }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={[
          styles.input, 
          error && { borderColor: 'red' }
        ]} 
        {...props} 
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.muted, 
    marginBottom: 6
  },
  input: {
    backgroundColor: theme.colors.card,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4
  }
});

export default InputField;
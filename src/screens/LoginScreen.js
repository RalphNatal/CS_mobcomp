import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../styles/theme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      navigation.replace('Main');
    } else {
      Alert.alert('Error', 'Please fill in all required fields');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Welcome back</Text>
        <Text style={styles.sub}>Sign in to continue to Connex</Text>

        <InputField 
          label="Email" 
          keyboardType="email-address" 
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
        />
        <InputField 
          label="Password" 
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          error={errors.password}
        />

        <PrimaryButton 
          title="Sign in" 
          onPress={handleLogin} 
          style={{ marginTop: 8 }} 
        />

        <View style={styles.row}>
          <Text style={styles.small}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}> Create one</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, justifyContent: 'center', padding: 20 },
  card: { backgroundColor: theme.colors.card, padding: 20, borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10, elevation: 4 },
  heading: { fontSize: 22, fontWeight: '700', marginBottom: 6, color: theme.colors.text },
  sub: { color: theme.colors.muted, marginBottom: 14 },
  row: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
  small: { color: theme.colors.muted },
  link: { color: theme.colors.primary, fontWeight: '600' },
  
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

import React from 'react';
import { View, Text, Image } from 'react-native';
import { homeStyles as styles } from '../styles/HomeStyles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to TESDA Jobs</Text>
      <Text style={styles.subtitle}>
        Your pathway to training and employment.
      </Text>
    </View>
  );
}

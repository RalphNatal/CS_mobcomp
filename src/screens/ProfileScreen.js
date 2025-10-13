import React from 'react';
import { View, Text, Image } from 'react-native';
import { profileStyles as styles } from '../styles/ProfileStyles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/profile.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Juan Dela Cruz</Text>
      <Text style={styles.email}>juan.delacruz@example.com</Text>
      <Text style={styles.sectionTitle}>Skills:</Text>
      <Text style={styles.skills}>• Welding{"\n"}• Electrical Installation{"\n"}• Computer Servicing</Text>
    </View>
  );
}

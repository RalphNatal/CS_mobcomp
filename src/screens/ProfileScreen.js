import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { profileStyles } from '../styles/ProfileStyles';
import SpeakableText from '../components/SpeakableText';

export default function ProfileScreen() {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const styles = profileStyles(currentTheme);

  const scaleFontSize = (base) => base * fontSizeMultiplier;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/profile.png')}
        style={styles.avatar}
      />
      <SpeakableText style={[styles.name, { fontSize: scaleFontSize(24) }]}>Juan Dela Cruz</SpeakableText>
      <SpeakableText style={[styles.email, { fontSize: scaleFontSize(16) }]}>juan.delacruz@example.com</SpeakableText>
      <SpeakableText style={[styles.sectionTitle, { fontSize: scaleFontSize(20) }]}>Skills:</SpeakableText>
      <SpeakableText style={[styles.skills, { fontSize: scaleFontSize(14) }]}>
        • Welding{"\n"}• Electrical Installation{"\n"}• Computer Servicing
      </SpeakableText>
    </View>
  );
}

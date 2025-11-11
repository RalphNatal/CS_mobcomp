import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import { profileStyles } from '../styles/ProfileStyles';
import SpeakableText from '../components/SpeakableText';
import { useTts } from '../utils/TtsContext';

// ProfileScreen shows the user's profile picture, name, email, and skills.
export default function ProfileScreen() {
  // Consume contexts for theme, font size, dyslexic font, and TTS enablement
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const { ttsEnabled } = useTts();

  // Generate dynamic styles with theme and user preferences
  const styles = profileStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  // Helper function for consistent font size scaling
  const scaleFontSize = (base) => base * fontSizeMultiplier;

  return (
    <View style={styles.container}>
      {/* Profile avatar image */}
      <Image source={require('../../assets/images/profile.png')} style={styles.avatar} />

      {/* User name with accessibility and TTS */}
      <SpeakableText style={[styles.name, { fontSize: scaleFontSize(24) }]} ttsEnabled={ttsEnabled}>
        Juan Dela Cruz
      </SpeakableText>

      {/* User email */}
      <SpeakableText style={[styles.email, { fontSize: scaleFontSize(16) }]} ttsEnabled={ttsEnabled}>
        juan.delacruz@example.com
      </SpeakableText>

      {/* Skills section header */}
      <SpeakableText style={[styles.sectionTitle, { fontSize: scaleFontSize(20) }]} ttsEnabled={ttsEnabled}>
        Skills:
      </SpeakableText>

      {/* Skills list with line breaks */}
      <SpeakableText style={[styles.skills, { fontSize: scaleFontSize(14) }]} ttsEnabled={ttsEnabled}>
        {'\u2022'} Welding{'\n'}
        {'\u2022'} Electrical Installation{'\n'}
        {'\u2022'} Computer Servicing
      </SpeakableText>
    </View>
  );
}

import React, { useContext } from 'react';
import { View, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { settingsStyles } from '../styles/SettingsStyles';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import { SimpleSlider } from '../components/Slider';
import SpeakableText from '../components/SpeakableText';
import { ScrollView } from 'react-native-gesture-handler';
import { useTts } from '../utils/TtsContext';

export default function SettingsScreen({ navigation }) {
  // Obtain contexts for theme, font size, dyslexic font, and TTS state
  const { currentTheme, darkModeEnabled, setDarkModeEnabled } = useContext(ThemeContext);
  const { fontSizeMultiplier, setFontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled, setDyslexicEnabled } = useDyslexic();
  const { ttsEnabled, setTtsEnabled } = useTts();

  // Load the styles dynamically based on contexts
  const styles = settingsStyles(currentTheme, fontSizeMultiplier, dyslexicEnabled);

  // Notification toggle state
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  // Handler for logout confirmation and navigation
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => navigation.replace("Login") }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Screen Header */}
        <SpeakableText style={styles.header} ttsEnabled={ttsEnabled}>
          Settings
        </SpeakableText>

        {/* Account Settings Section */}
        <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
          Account
        </SpeakableText>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-circle-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
          <SpeakableText style={styles.optionText} ttsEnabled={ttsEnabled}>Edit Profile</SpeakableText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="lock-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
          <SpeakableText style={styles.optionText} ttsEnabled={ttsEnabled}>Change Password</SpeakableText>
        </TouchableOpacity>

        {/* Preferences Section */}
        <SpeakableText style={styles.sectionTitle} ttsEnabled={ttsEnabled}>
          Preferences
        </SpeakableText>

        {/* Notifications Toggle */}
        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <Ionicons name="notifications-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
            <SpeakableText style={styles.optionText} ttsEnabled={ttsEnabled}>Notifications</SpeakableText>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={notificationsEnabled ? currentTheme.colors.primary : "#ccc"}
          />
        </View>

        {/* Dark Mode Toggle */}
        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <Ionicons name="moon-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
            <SpeakableText style={styles.optionText} ttsEnabled={ttsEnabled}>Dark Mode</SpeakableText>
          </View>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
            thumbColor={darkModeEnabled ? currentTheme.colors.primary : "#ccc"}
          />
        </View>

        {/* Dyslexic Font Toggle */}
        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <Ionicons name="book-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
            <SpeakableText style={styles.optionText} ttsEnabled={ttsEnabled}>Dyslexic Font</SpeakableText>
          </View>
          <Switch
            value={dyslexicEnabled}
            onValueChange={setDyslexicEnabled}
            thumbColor={dyslexicEnabled ? currentTheme.colors.primary : "#ccc"}
          />
        </View>

        {/* Text-to-Speech Toggle */}
        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <Ionicons name="volume-high-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
            <SpeakableText style={styles.optionText} ttsEnabled={ttsEnabled}>Text to Speech</SpeakableText>
          </View>
          <Switch
            value={ttsEnabled}
            onValueChange={setTtsEnabled}
            thumbColor={ttsEnabled ? currentTheme.colors.primary : "#ccc"}
          />
        </View>

        {/* Font Size Adjustment Slider */}
        <SimpleSlider
          value={fontSizeMultiplier}
          onValueChange={setFontSizeMultiplier}
          min={0.8}
          max={1.5}
          step={0.05}
          theme={currentTheme}
        />

        {/* Logout Button */}
        <TouchableOpacity style={[styles.option, styles.logout]} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24 * fontSizeMultiplier} color="#e74c3c" />
          <SpeakableText style={[styles.optionText, { color: "#e74c3c" }]} ttsEnabled={ttsEnabled}>
            Logout
          </SpeakableText>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

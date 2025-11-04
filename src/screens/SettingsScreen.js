import React, { useContext } from 'react';
import { View, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { settingsStyles } from '../styles/SettingsStyles';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { SimpleSlider } from '../components/Slider';
import SpeakableText from '../components/SpeakableText';

export default function SettingsScreen({ navigation }) {
  const { currentTheme, darkModeEnabled, setDarkModeEnabled } = useContext(ThemeContext);
  const { fontSizeMultiplier, setFontSizeMultiplier } = useContext(FontSizeContext);
  const styles = settingsStyles(currentTheme, fontSizeMultiplier);

  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

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
      {/* Header */}
      <SpeakableText style={styles.header}>Settings</SpeakableText>

      {/* Account Section */}
      <SpeakableText style={styles.sectionTitle}>Account</SpeakableText>
      <TouchableOpacity style={styles.option}>
        <Ionicons name="person-circle-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
        <SpeakableText style={styles.optionText}>Edit Profile</SpeakableText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialIcons name="lock-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
        <SpeakableText style={styles.optionText}>Change Password</SpeakableText>
      </TouchableOpacity>

      {/* Preferences Section */}
      <SpeakableText style={styles.sectionTitle}>Preferences</SpeakableText>

      <View style={styles.optionRow}>
        <View style={styles.optionLeft}>
          <Ionicons name="notifications-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
          <SpeakableText style={styles.optionText}>Notifications</SpeakableText>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          thumbColor={notificationsEnabled ? currentTheme.colors.primary : "#ccc"}
        />
      </View>

      <View style={styles.optionRow}>
        <View style={styles.optionLeft}>
          <Ionicons name="moon-outline" size={24 * fontSizeMultiplier} color={currentTheme.colors.primary} />
          <SpeakableText style={styles.optionText}>Dark Mode</SpeakableText>
        </View>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
          thumbColor={darkModeEnabled ? currentTheme.colors.primary : "#ccc"}
        />
      </View>

      {/* Font Size Adjuster */}
      <SimpleSlider
        value={fontSizeMultiplier}
        onValueChange={setFontSizeMultiplier}
        min={0.8}
        max={1.5}
        step={0.05}
        theme={currentTheme}
      />

      {/* Logout */}
      <TouchableOpacity style={[styles.option, styles.logout]} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24 * fontSizeMultiplier} color="#e74c3c" />
        <SpeakableText style={[styles.optionText, { color: "#e74c3c" }]}>Logout</SpeakableText>
      </TouchableOpacity>
    </View>
  );
}

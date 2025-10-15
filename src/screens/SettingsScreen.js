import React from 'react';
import { View, Text, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';
import { settingsStyles as styles } from '../styles/SettingsStyles';

export default function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => navigation.replace("Login") },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Settings</Text>

      {/* Account Section */}
      <Text style={styles.sectionTitle}>Account</Text>
      <TouchableOpacity style={styles.option}>
        <Ionicons name="person-circle-outline" size={24} color={theme.colors.primary} />
        <Text style={styles.optionText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <MaterialIcons name="lock-outline" size={24} color={theme.colors.primary} />
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      {/* Preferences Section */}
      <Text style={styles.sectionTitle}>Preferences</Text>

      <View style={styles.optionRow}>
        <View style={styles.optionLeft}>
          <Ionicons name="notifications-outline" size={24} color={theme.colors.primary} />
          <Text style={styles.optionText}>Notifications</Text>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          thumbColor={notificationsEnabled ? theme.colors.primary : "#ccc"}
        />
      </View>

      <View style={styles.optionRow}>
        <View style={styles.optionLeft}>
          <Ionicons name="moon-outline" size={24} color={theme.colors.primary} />
          <Text style={styles.optionText}>Dark Mode</Text>
        </View>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
          thumbColor={darkModeEnabled ? theme.colors.primary : "#ccc"}
        />
      </View>

      {/* Logout */}
      <TouchableOpacity style={[styles.option, styles.logout]} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#e74c3c" />
        <Text style={[styles.optionText, { color: "#e74c3c" }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

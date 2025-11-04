import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { drawerStyles } from '../styles/DrawerStyles';

export default function CustomDrawer(props) {
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const styles = drawerStyles(currentTheme);

  return (
    <View style={{ flex: 1, backgroundColor: currentTheme.colors.background }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: currentTheme.colors.background }}>
        {/* Profile Header */}
        <View style={[styles.profileContainer, { backgroundColor: currentTheme.colors.primary }]}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={styles.profileImage}
          />
          <Text style={[styles.profileName, { color: currentTheme.colors.onPrimary, fontSize: 18 * fontSizeMultiplier }]}>
            John Doe
          </Text>
          <Text style={[styles.profileEmail, { color: currentTheme.colors.onPrimary, fontSize: 14 * fontSizeMultiplier }]}>
            johndoe@email.com
          </Text>
        </View>

        {/* Drawer Menu */}
        <View style={styles.menuContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Logout button */}
      <View
        style={[
          styles.logoutSection,
          {
            borderTopColor: currentTheme.colors.border || currentTheme.colors.muted,
            backgroundColor: currentTheme.colors.background,
          },
        ]}
      >
        <TouchableOpacity style={styles.logoutBtn} onPress={() => alert('Logged out!')}>
          <Ionicons name="log-out-outline" size={20 * fontSizeMultiplier} color={currentTheme.colors.primary} />
          <Text style={[styles.logoutText, { color: currentTheme.colors.text, fontSize: 14 * fontSizeMultiplier }]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

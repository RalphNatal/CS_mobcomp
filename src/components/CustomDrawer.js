import React, { useContext } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Contexts for theming, font size, dyslexic mode, and TTS
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import { drawerStyles } from '../styles/DrawerStyles';
import { useTts } from '../utils/TtsContext';
import SpeakableText from '../components/SpeakableText';

export default function CustomDrawer(props) {
  // Get theme, font scaling, dyslexic enabled value, styles, and TTS controls from respective contexts
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const styles = drawerStyles(currentTheme, dyslexicEnabled, fontSizeMultiplier);
  const { ttsEnabled } = useTts();

  return (
    <View style={{ flex: 1, backgroundColor: currentTheme.colors.background }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: currentTheme.colors.background }}
      >

        {/* Profile Header with Avatar, Name, Email */}
        <View style={[styles.profileContainer, { backgroundColor: currentTheme.colors.primary }]}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={styles.profileImage}
          />

          {/* Name with dyslexic font, theming, and TTS */}
          <SpeakableText
            style={[
              styles.profileName,
              {
                color: currentTheme.colors.onPrimary,
                fontSize: 18 * fontSizeMultiplier,
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              },
            ]}
            ttsEnabled={ttsEnabled}
          >
            John Doe
          </SpeakableText>
          
          {/* Email display with dyslexic font and TTS */}
          <SpeakableText
            style={[
              styles.profileEmail,
              {
                color: currentTheme.colors.onPrimary,
                fontSize: 14 * fontSizeMultiplier,
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              },
            ]}
            ttsEnabled={ttsEnabled}
          >
            johndoe@email.com
          </SpeakableText>
        </View>

        {/* Main Drawer Menu (using DrawerItemList) */}
        <View style={styles.menuContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Logout Button Section */}
      <View
        style={[
          styles.logoutSection,
          {
            borderTopColor: currentTheme.colors.border || currentTheme.colors.muted,
            backgroundColor: currentTheme.colors.background,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => alert('Logged out!')}  // Placeholder for logging out
        >
          <Ionicons
            name="log-out-outline"
            size={20 * fontSizeMultiplier}
            color={currentTheme.colors.primary}
          />
          <SpeakableText
            style={[
              styles.logoutSpeakableText,
              {
                color: currentTheme.colors.text,
                fontSize: 14 * fontSizeMultiplier,
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              },
            ]}
            ttsEnabled={ttsEnabled}
          >
            Logout
          </SpeakableText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

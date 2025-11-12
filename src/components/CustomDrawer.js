import React, { useContext, useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// Contexts for theming, font size, dyslexic mode, and TTS
import { ThemeContext } from '../../App';
import { FontSizeContext } from '../utils/FontSizeContext';
import { useDyslexic } from '../utils/DyslexicContext';
import { drawerStyles } from '../styles/DrawerStyles';
import { useTts } from '../utils/TtsContext';
import SpeakableText from '../components/SpeakableText';
import { getCurrentUser, logout } from '../utils/UserStorage';

export default function CustomDrawer(props) {
  // Get theme, font scaling, dyslexic enabled value, styles, and TTS controls from respective contexts
  const { currentTheme } = useContext(ThemeContext);
  const { fontSizeMultiplier } = useContext(FontSizeContext);
  const { dyslexicEnabled } = useDyslexic();
  const styles = drawerStyles(currentTheme, dyslexicEnabled, fontSizeMultiplier);
  const { ttsEnabled } = useTts();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load current user on mount
  React.useEffect(() => {
    loadCurrentUser();
  }, []);

  const loadCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  const handleResumePress = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        // Navigate to ResumeScreen without company parameter (since it's from drawer)
        props.navigation.navigate('ResumeScreen', { company: { name: 'Your Profile' } });
      } else {
        Alert.alert('Error', 'Please login first');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open resume');
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            setLoading(true);
            try {
              const result = await logout();
              if (result.success) {
                // Navigate to Login screen
                props.navigation.navigate('Login');
              } else {
                Alert.alert('Error', result.message);
              }
            } catch (error) {
              Alert.alert('Error', 'Failed to logout');
            } finally {
              setLoading(false);
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

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
                color: currentTheme.colors.onPrimary || '#fff',
                fontSize: 18 * fontSizeMultiplier,
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              },
            ]}
            ttsEnabled={ttsEnabled}
          >
            {currentUser?.name || 'User'}
          </SpeakableText>
          
          {/* Email display with dyslexic font and TTS */}
          <SpeakableText
            style={[
              styles.profileEmail,
              {
                color: currentTheme.colors.onPrimary || '#fff',
                fontSize: 14 * fontSizeMultiplier,
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              },
            ]}
            ttsEnabled={ttsEnabled}
          >
            {currentUser?.email || 'Not logged in'}
          </SpeakableText>
        </View>

        {/* Main Drawer Menu (using DrawerItemList) */}
        <View style={styles.menuContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Additional Menu Items Section */}
      <View
        style={[
          styles.bottomMenuSection,
          {
            borderTopColor: currentTheme.colors.border || currentTheme.colors.muted,
            backgroundColor: currentTheme.colors.background,
          },
        ]}
      >
        {/* Resume Button */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={handleResumePress}
          disabled={!currentUser}
        >
          <View style={styles.iconContainer}>
            <SpeakableText style={styles.iconEmoji} ttsEnabled={ttsEnabled}>
              📄
            </SpeakableText>
          </View>
          <SpeakableText
            style={[
              styles.menuButtonText,
              {
                color: currentUser ? currentTheme.colors.text : currentTheme.colors.muted,
                fontSize: 16 * fontSizeMultiplier,
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              },
            ]}
            ttsEnabled={ttsEnabled}
          >
            My Resume
          </SpeakableText>
        </TouchableOpacity>

        {/* Divider */}
        <View
          style={[
            styles.divider,
            { backgroundColor: currentTheme.colors.border || currentTheme.colors.muted },
          ]}
        />

        {/* Logout Button - Full Width */}
        <TouchableOpacity
          style={[
            styles.logoutButton,
            {
              backgroundColor: currentTheme.colors.primary,
              opacity: loading ? 0.6 : 1,
            },
          ]}
          onPress={handleLogout}
          disabled={loading}
        >
          <SpeakableText
            style={[
              styles.logoutButtonText,
              {
                color: '#fff',
                fontSize: 16 * fontSizeMultiplier,
                fontFamily: dyslexicEnabled ? 'OpenDyslexic' : undefined,
              },
            ]}
            ttsEnabled={ttsEnabled}
          >
            {loading ? 'Logging out...' : 'Logout'}
          </SpeakableText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
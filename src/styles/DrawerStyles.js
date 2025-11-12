import { StyleSheet } from 'react-native';

export const drawerStyles = (theme, dyslexicEnabled = false, fontSizeMultiplier = 1) =>
  StyleSheet.create({
    profileContainer: {
      paddingHorizontal: 20,
      paddingVertical: 30,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: `${theme.colors.onPrimary}20`,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 12,
      backgroundColor: `${theme.colors.onPrimary}10`,
    },
    profileName: {
      fontWeight: '600',
      marginBottom: 4,
    },
    profileEmail: {
      opacity: 0.8,
    },
    menuContainer: {
      flex: 1,
      paddingVertical: 12,
    },
    bottomMenuSection: {
      borderTopWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    menuButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
      marginVertical: 4,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
      backgroundColor: `${theme.colors.primary}15`,
    },
    iconEmoji: {
      fontSize: 22,
    },
    menuButtonText: {
      fontWeight: '500',
    },
    divider: {
      height: 1,
      marginVertical: 8,
      marginHorizontal: 0,
    },
    logoutButton: {
      paddingVertical: 14,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
    },
    logoutButtonText: {
      fontWeight: '600',
    },
  });
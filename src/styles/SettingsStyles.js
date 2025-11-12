import { StyleSheet } from 'react-native';

export const settingsStyles = (theme, multiplier = 1, dyslexicFontEnabled = false) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
    },
    header: {
      fontSize: 24 * multiplier,
      color: theme.colors.text,
      marginBottom: 20,
      fontFamily: dyslexicFontEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
      fontWeight: dyslexicFontEnabled ? 'normal' : 'bold',
    },
    sectionTitle: {
      fontSize: 16 * multiplier,
      fontWeight: '600',
      color: theme.colors.muted,
      marginTop: 20,
      marginBottom: 10,
      fontFamily: dyslexicFontEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.card,
      padding: 14,
      borderRadius: 12,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    optionText: {
      fontSize: 16 * multiplier,
      marginLeft: 12,
      color: theme.colors.text,
      fontFamily: dyslexicFontEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.card,
      padding: 14,
      borderRadius: 12,
      justifyContent: 'space-between',
      marginBottom: 10,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    optionLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logout: {
      marginTop: 30,
      borderColor: '#e74c3c',
      borderWidth: 1,
      backgroundColor: 'transparent',
      fontFamily: dyslexicFontEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
    },
    scrollContent: {
      paddingVertical: 10,
    },
  });

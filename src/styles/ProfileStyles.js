import { StyleSheet } from 'react-native';

export const styles = (theme, fontSizeMultiplier, dyslexicEnabled) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: theme.colors.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      alignItems: 'center',
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 16,
    },
    headerInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    name: {
      fontSize: 24 * fontSizeMultiplier,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    title: {
      fontSize: 16 * fontSizeMultiplier,
      color: theme.colors.primary,
      marginBottom: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    location: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.muted,
      marginLeft: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    editButton: {
      flexDirection: 'row',
      backgroundColor: theme.colors.primary,
      marginHorizontal: 20,
      marginVertical: 16,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    editButtonText: {
      color: '#fff',
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      marginLeft: 8,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    sectionTitle: {
      fontSize: 18 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 12,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    about: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.text,
      lineHeight: 22,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    contactText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.text,
      marginLeft: 12,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -4,
    },
    skillBadge: {
      backgroundColor: `${theme.colors.primary}20`,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      margin: 4,
    },
    skillText: {
      color: theme.colors.primary,
      fontSize: 14 * fontSizeMultiplier,
      fontWeight: '500',
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    experienceItem: {
      marginBottom: 16,
    },
    roleText: {
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    companyText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.primary,
      marginBottom: 2,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    periodText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.muted,
      marginBottom: 4,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    descriptionText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.text,
      lineHeight: 20,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    educationItem: {
      marginBottom: 12,
    },
    degreeText: {
      fontSize: 16 * fontSizeMultiplier,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 2,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    schoolText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.primary,
      marginBottom: 2,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
    yearText: {
      fontSize: 14 * fontSizeMultiplier,
      color: theme.colors.muted,
      fontFamily: dyslexicEnabled ? 'OpenDyslexic' : 'System',
    },
  });
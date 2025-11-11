import { StyleSheet } from 'react-native';

export const profileStyles = (theme, fontSizeMultiplier = 1, dyslexicEnabled = false) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: theme.spacing.l,
    backgroundColor: theme.colors.background,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 40,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    color: theme.colors.primary,
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
    fontWeight: dyslexicEnabled ? 'normal' : 'bold',
  },
  email: {
    fontSize: 15,
    color: theme.colors.muted,
    marginVertical: 6,
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginTop: 20,
    alignSelf: 'flex-start',
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
  },
  skills: {
    fontSize: 16,
    color: theme.colors.text,
    marginTop: 8,
    lineHeight: 22,
    alignSelf: 'flex-start',
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
  },
});

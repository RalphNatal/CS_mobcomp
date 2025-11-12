import { StyleSheet } from 'react-native';

export const companyCardStyles = (theme, dyslexicEnabled = false) => StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.m,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.primary,
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
  },
  field: {
    fontSize: 15,
    color: theme.colors.muted,
    marginTop: 4,
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    marginTop: 4,
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : theme.fontFamily || 'System',
  },
});

import { StyleSheet } from 'react-native';

export const jobDetailsStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.l,
    backgroundColor: theme.colors.background,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 4,
  },
  desc: {
    marginTop: 16,
    fontSize: 15,
    color: theme.colors.muted,
    lineHeight: 22,
  },
});

import { StyleSheet } from 'react-native';

export const profileStyles = (theme) => StyleSheet.create({
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
    fontWeight: '700',
    color: theme.colors.primary,
  },
  email: {
    fontSize: 15,
    color: theme.colors.muted,
    marginVertical: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  skills: {
    fontSize: 16,
    color: theme.colors.text,
    marginTop: 8,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
});

import { StyleSheet } from 'react-native';

export const jobListStyles = (theme, fontSizeMultiplier = 1, dyslexicEnabled = false) => StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.background,
  },
});

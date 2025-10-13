import { StyleSheet } from 'react-native';
import theme from './theme';

export const companyCardStyles = StyleSheet.create({
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
  },
  field: {
    fontSize: 15,
    color: theme.colors.muted,
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    marginTop: 4,
  },
});

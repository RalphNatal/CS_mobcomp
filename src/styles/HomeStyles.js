import { StyleSheet } from 'react-native';
import theme from './theme';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.m,
  },
  header: {
    marginTop: theme.spacing.l,
    marginBottom: theme.spacing.l,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.muted,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    color: theme.colors.text,
  },
  searchButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.m,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: theme.colors.muted,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginVertical: theme.spacing.m,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '47%',
    backgroundColor: theme.colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  categoryName: {
    marginTop: 6,
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center',
  },
  stepsContainer: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
  },
  stepBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  stepText: {
    marginLeft: 12,
    fontSize: 14,
    color: theme.colors.text,
    fontWeight: '500',
  },
});

import { StyleSheet } from 'react-native';

export const companyCardStyles = (theme) => StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: theme.colors.text, 
  },
  card: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card, 
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  logo: { width: 60, height: 60, borderRadius: 10, marginRight: 12 },
  textContainer: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600', color: theme.colors.text },
  desc: { fontSize: 14, color: theme.colors.muted, marginTop: 4 }, 
});

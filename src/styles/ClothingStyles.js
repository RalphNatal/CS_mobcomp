import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: theme.colors.primaryText,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
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
  name: { fontSize: 18, fontWeight: '600' },
  desc: { fontSize: 14, color: '#666', marginTop: 4 },
});

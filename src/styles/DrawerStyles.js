import { StyleSheet } from 'react-native';
import theme from './theme';

export const drawerStyles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  profileEmail: {
    color: '#e0e0e0',
    fontSize: 13,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 10,
  },
  logoutSection: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 15,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: '600',
    marginLeft: 10,
  },
});

import { StyleSheet } from 'react-native';

export const drawerStyles = (theme) => StyleSheet.create({
  profileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
  },
  profileEmail: {
    fontSize: 13,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 10,
  },
  logoutSection: {
    borderTopWidth: 1,
    padding: 15,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

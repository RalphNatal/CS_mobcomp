import { StyleSheet } from 'react-native';

export const drawerStyles = (theme, dyslexicEnabled = false) => StyleSheet.create({
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
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
    fontWeight: dyslexicEnabled ? 'normal' : 'bold',
  },
  profileEmail: {
    fontSize: 13,
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
  },
  menuContainer: { flex: 1, paddingTop: 10 },
  logoutSection: { borderTopWidth: 1, padding: 15 },
  logoutBtn: { flexDirection: 'row', alignItems: 'center' },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    fontFamily: dyslexicEnabled ? 'OpenDyslexic' : (theme.fontFamily || 'System'),
  },
});

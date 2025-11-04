import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/tempHomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';
import CategoryScreen from '../screens/CategoryScreen';
import { ThemeContext } from '../../App';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: currentTheme.colors.primary },
        headerTintColor: '#fff',
        drawerActiveBackgroundColor: currentTheme.colors.primary,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: currentTheme.colors.text,
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      {/* Add other screens as needed */}
    </Drawer.Navigator>
  );
}

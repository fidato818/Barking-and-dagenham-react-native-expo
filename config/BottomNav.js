import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../pages/homepage';

import SettingScreen from '../pages/Setting';
import ProfileScreen from '../pages/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = (props) => {
  return (
    <Stack.Navigator
      // initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        // header: (props) => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen name="Home Page" component={Home} />
      <Stack.Screen name="Setting Page" component={SettingScreen} />
      <Stack.Screen name="Profile Page" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Chat">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ProfileScreen}
        options={{
          title: 'Contacts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-supervisor-circle"
              color={color}
              size={26}
            />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" color={color} size={26} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

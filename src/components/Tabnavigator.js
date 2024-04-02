import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Screens
import { MainScreen, Dashboard, LoginScreen} from '../screens'

const Tab = createBottomTabNavigator();

function Tabnavigator () {
  return (
      <Tab.Navigator
      initialRouteName="Trang chủ"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Dashboard}
        options={{
          tabBarLabel: 'Trang cá nhân',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabnavigator;

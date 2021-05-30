import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import TodoScreen from '../screens/TodoList/TodoScreen';
import ProfileScreen from '../screens/Setting/ProfileScreen';
import SettingScreen from '../screens/Setting/SettingScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


export default function TodoTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "TodoScreen":
              iconName = 'md-list';
              break;
            case "ProfileScreen":
              iconName = 'md-person';
              break;
            case "SettingScreen":
              iconName = 'md-settings';
              break;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}

      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={{ title: 'Todo' }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: 'Setting' }}
      />
    </Tab.Navigator>

  )
}

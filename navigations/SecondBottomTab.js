import * as React from 'react';
// import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Bmi from '../screens/Bmi';
import Movies from '../components/Movies';
import CreateMovies from '../components/CreateMovies';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function SecondBottomTab() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Bmi"
        component={Bmi}
        options={{ title: 'Bmi' }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{ title: 'Movies' }}
      />
      <Tab.Screen
        name="CreateMovies"
        component={CreateMovies}
        options={{ title: 'Create' }}
      />

    </Tab.Navigator>
  );
}

import * as React from 'react';
import Bmi from '../screens/Bmi';
import Movies from '../components/Movies';
import CreateMovies from '../components/CreateMovies';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

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

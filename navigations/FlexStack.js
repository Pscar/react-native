import React from 'react';
import FlexScreen from '../screens/FlexScreen';
import Ex1 from '../screens/Ex1';
import Ex2 from '../screens/Ex2';
import Ex3 from '../screens/Ex3';
import Ex4 from '../screens/Ex4';
import Ex5 from '../screens/Ex5';
import Ex6 from '../screens/Ex6';
import Ex7 from '../screens/Ex7';
import Ex8 from '../screens/Ex8';
import Ex9 from '../screens/Ex9';
import Ex10 from '../screens/Ex10';
import Ex11 from '../screens/Ex11';
import Ex12 from '../screens/Ex12';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function FlexStack() {
  return (
    <Stack.Navigator initialRouteName="FlexScreen">
      <Tab.Screen
        name="FlexScreen"
        component={FlexScreen}
        options={{ title: 'FlexScreen' }}
      />
      <Tab.Screen
        name="Ex1"
        component={Ex1}
        options={{ title: 'Ex1' }}
      />
      <Tab.Screen
        name="Ex2"
        component={Ex2}
        options={{ title: 'Ex2' }}
      />
      <Tab.Screen
        name="Ex3"
        component={Ex3}
        options={{ title: 'Ex3' }}
      />
      <Tab.Screen
        name="Ex4"
        component={Ex4}
        options={{ title: 'Ex4' }}
      />
      <Tab.Screen
        name="Ex5"
        component={Ex5}
        options={{ title: 'Ex5' }}
      />
      <Tab.Screen
        name="Ex6"
        component={Ex6}
        options={{ title: 'Ex6' }}
      />
      <Tab.Screen
        name="Ex7"
        component={Ex7}
        options={{ title: 'Ex7' }}
      />
      <Tab.Screen
        name="Ex8"
        component={Ex8}
        options={{ title: 'Ex8' }}
      />
      <Tab.Screen
        name="Ex9"
        component={Ex9}
        options={{ title: 'Ex9' }}
      />
      <Tab.Screen
        name="Ex10"
        component={Ex10}
        options={{ title: 'Ex10' }}
      />
      <Tab.Screen
        name="Ex11"
        component={Ex11}
        options={{ title: 'Ex11' }}
      />
      <Tab.Screen
        name="Ex12"
        component={Ex12}
        options={{ title: 'Ex12' }}
      />
    </Stack.Navigator>

  )
}

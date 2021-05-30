import React from 'react';
import BottomTab from './navigations/BottomTab';
import SecondBottomTab from './navigations/SecondBottomTab';
import ThreeBottomTab from './navigations/ThreeBottomTab';
import TodoTab from './navigations/TodoTab';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <RootStack.Navigator initialRouteName="BottomTab">

        <RootStack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ title: 'Main', headerShown: false }}
        />

        <RootStack.Screen
          name="SecondBottomTab"
          component={SecondBottomTab}
          options={{ title: 'Second Tab' }}
        />

        <RootStack.Screen
          name="ThreeBottomTab"
          component={ThreeBottomTab}
          options={{ title: 'Three Tab' }}
        />
        <RootStack.Screen
          name="TodoTab"
          component={TodoTab}
          options={{ title: 'TodoTab' }}
        />
        
      </RootStack.Navigator>

    </NavigationContainer>
  );
}



import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Users from '../pages/Users';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Usuários' }}
      />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
}

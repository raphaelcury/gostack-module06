import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import User from '../pages/User';
import Repo from '../pages/Repo';

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
      <Stack.Screen
        name="User"
        component={User}
        options={({ route }) => ({ title: route.params.user.name })}
      />
      <Stack.Screen
        name="Repo"
        component={Repo}
        options={({ route }) => ({ title: route.params.repo.name })}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from '../views/Home';
import ItemDetail from '../views/ItemDetail';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ItemDetail' component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => <Route />;

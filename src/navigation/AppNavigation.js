import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Orders from '../screens/orders';
import SingleOrder from '../screens/single-order';

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Order" component={SingleOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

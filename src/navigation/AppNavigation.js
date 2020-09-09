import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {bodyColor} from '../styles/_variables';
import Orders from '../screens/orders';
import Inventory from '../screens/inventory';
import Reports from '../screens/reports';
import Account from '../screens/account';
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
        <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Order"
          component={SingleOrder}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: bodyColor,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

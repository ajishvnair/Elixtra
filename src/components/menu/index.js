import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {bodyColor} from '../../styles/_variables';
import styles from './styles';

export default function ({route, navigation}) {
  return (
    <View style={styles.menu}>
      <View opacity={route === 'orders' ? 1 : 0.3}>
        <Icon
          name="shopping-bag"
          type="font-awesome"
          color={bodyColor}
          size={25}
          onPress={() => navigation.navigate('Orders')}
        />
        <Text style={styles.itemText}>Orders</Text>
      </View>
      <View opacity={route === 'inventory' ? 1 : 0.3}>
        <Icon
          name="file-text-o"
          type="font-awesome"
          color={bodyColor}
          size={25}
          onPress={() => navigation.navigate('Inventory')}
        />
        <Text style={styles.itemText}>Inventory</Text>
      </View>
      <View opacity={route === 'reports' ? 1 : 0.3}>
        <Icon
          name="file"
          type="font-awesome"
          color={bodyColor}
          size={25}
          onPress={() => navigation.navigate('Reports')}
        />
        <Text style={styles.itemText}>Reports</Text>
      </View>
      <View opacity={route === 'account' ? 1 : 0.3}>
        <Icon
          name="user-circle"
          type="font-awesome"
          color={bodyColor}
          size={25}
          onPress={() => navigation.navigate('Account')}
        />
        <Text style={styles.itemText}>Account</Text>
      </View>
    </View>
  );
}

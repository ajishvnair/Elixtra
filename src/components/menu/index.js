import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {bodyColor} from '../../styles/_variables';
import styles from './styles';

export default function () {
  return (
    <View style={styles.menu}>
      <View>
        <Icon
          name="shopping-bag"
          type="font-awesome"
          color={bodyColor}
          size={25}
          onPress={() => console.log('hello')}
        />
        <Text style={styles.itemText}>Orders</Text>
      </View>
      <View>
        <Icon
          name="file-text-o"
          type="font-awesome"
          color={bodyColor}
          size={25}
          onPress={() => console.log('hello')}
        />
        <Text style={styles.itemText}>Inventory</Text>
      </View>
      <View>
        <Icon
          name="file"
          type="font-awesome"
          color={bodyColor}
          size={25}
          onPress={() => console.log('hello')}
        />
        <Text style={styles.itemText}>Reports</Text>
      </View>
      <View>
        <Icon
          name="user-circle"
          type="font-awesome"
          color={bodyColor}
          size={25}
          onPress={() => console.log('hello')}
        />
        <Text style={styles.itemText}>Account</Text>
      </View>
    </View>
  );
}

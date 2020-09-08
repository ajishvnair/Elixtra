import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

export default function () {
  return (
    <View>
      <View style={styles.items}>
        <Icon
          // raised
          name="phone"
          type="font-awesome"
          color="white"
          size={25}
          containerStyle={styles.iconContainer}
        />
        <View>
          <Text style={styles.title}>Ramesh PP</Text>
          <Text style={{...styles.title, ...styles.blurText}}>
            Contact Customer
          </Text>
        </View>
      </View>

      <View style={styles.items}>
        <Icon
          // raised
          name="headphones"
          type="font-awesome"
          color="white"
          size={25}
          containerStyle={styles.iconContainer}
        />
        <View>
          <Text style={styles.title}>Have any query</Text>
          <Text style={{...styles.title, ...styles.blurText}}>Contact Us</Text>
        </View>
      </View>
    </View>
  );
}

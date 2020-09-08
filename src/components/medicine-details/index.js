import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

export default function ({medicine}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Icon
          name="medkit"
          containerStyle={styles.mgRight}
          type="font-awesome"
          color="white"
          size={20}
        />
        <Text style={styles.title}>{medicine.name}</Text>
      </View>

      <Text style={styles.title}>{medicine.quantity}</Text>
    </View>
  );
}

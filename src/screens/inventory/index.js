import React from 'react';
import {View} from 'react-native';
import Menu from '../../components/menu';
import styles from '../orders/styles';
import Title from '../../components/title';

export default function ({navigation}) {
  return (
    <View style={styles.container}>
      <Title title="Inventory" />
      <Menu route="inventory" navigation={navigation} />
    </View>
  );
}

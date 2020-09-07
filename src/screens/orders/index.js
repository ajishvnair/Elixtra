import React from 'react';
import {View, Text} from 'react-native';
import Menu from '../../components/menu';
import styles from './styles';

export default function () {
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
}

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Title from '../../components/title';

export default function ({navigation, route}) {
  // order details from navigation
  const {params: {order = {}} = {}} = route;
  return (
    <View style={styles.container}>
      <Title title={`Order No ${order.orderNo}`} size={20} />
    </View>
  );
}

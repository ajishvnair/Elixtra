import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Button} from 'react-native';
// import {Button} from 'react-native-elements';
import {ordersData} from '../../common/data-provider';

import styles from './styles';

export default function ({activeTab}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataByCategory = ordersData.filter(
      (order) => order.status === activeTab,
    );
    setData(dataByCategory);
  }, [activeTab, setData]);
  return (
    <ScrollView>
      {data.map((order, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.orderTitle}>Order No {order.orderNo}</Text>
          <Text style={styles.orderTime}>ORDER TIME</Text>
          <Text
            style={
              styles.orderTime
            }>{`${order.orderDate} at ${order.orderTime}`}</Text>
          <Text style={styles.orderStatus}>{'Status: Pending'}</Text>
          <Button title="VIEW ORDER DETAILS" color="blue" />
        </View>
      ))}
    </ScrollView>
  );
}

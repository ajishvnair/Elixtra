import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import {ordersData} from '../../common/data-provider';
import {capitalize} from '../../common/common-methods';

import styles from './styles';

export default function ({activeTab, navigation}) {
  const [data, setData] = useState([]);
  /**
   * to filter out orders based on status
   */
  useEffect(() => {
    const dataByCategory = ordersData.filter(
      (order) => order.status === activeTab,
    );
    setData(dataByCategory);
  }, [activeTab, setData]);

  const handleViewOrderDetails = (order) => {
    navigation.navigate('Order', {order});
  };

  return (
    <ScrollView>
      {data.map((order, index) => (
        <View key={index} style={styles.container}>
          {/* order Number */}
          <Text style={styles.orderTitle}>Order No {order.orderNo}</Text>
          {/* Order time and date */}
          <Text style={styles.orderTime}>ORDER TIME</Text>
          <Text
            style={
              styles.orderTime
            }>{`${order.orderDate} at ${order.orderTime}`}</Text>
          {/* order Status */}
          <Text style={styles.orderStatus}>
            {`Status: ${capitalize(order.status)}`}
          </Text>
          <TouchableHighlight onPress={() => handleViewOrderDetails(order)}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>VIEW ORDER DETAILS </Text>
              {order.status === 'pending' && (
                <Icon
                  name="eye"
                  type="font-awesome"
                  color="white"
                  size={20}
                  onPress={() => console.log('hello')}
                />
              )}
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}

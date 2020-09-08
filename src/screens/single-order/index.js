import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {capitalize} from '../../common/common-methods';
import styles from './styles';
import Title from '../../components/title';
import MedicineDetails from '../../components/medicine-details';

export default function ({navigation, route}) {
  // order details from navigation
  const {params: {order = {}} = {}} = route;
  return (
    <View style={styles.container}>
      <Title title={`Order No ${order.orderNo}`} size={20} />
      {/* Time */}
      <View style={styles.orderDetails}>
        <Text
          style={{
            ...styles.generalFont,
            ...styles.blurFont,
          }}>{`Status: ${capitalize(order.status)}`}</Text>
        <View style={styles.orderSchedule}>
          <Icon
            // raised
            name="calendar-o"
            type="font-awesome"
            color="white"
            size={15}
            containerStyle={styles.iconContainer}
          />
          <Text
            style={{
              ...styles.generalFont,
            }}>{`${order.orderDate}, ${order.orderTime}`}</Text>
        </View>
        {/* Comment */}
        <Text
          style={{
            ...styles.generalFont,
            ...styles.titleFont,
            ...styles.mtNormal,
          }}>
          {`Comment: ${order.comment}`}
        </Text>
        {/* Medicines */}
        <Text
          style={{
            ...styles.generalFont,
            ...styles.titleFont,
            ...styles.mtHigh,
          }}>
          Medicine
        </Text>
        {/* medicines count */}
        <Text
          style={{
            ...styles.generalFont,
            ...styles.blurFont,
            ...styles.mlLow,
          }}>
          {`${order.medicines.length} total`}
        </Text>
        {/* Medicines Details */}
        {order.medicines.map((medicine, index) => (
          <MedicineDetails medicine={medicine} key={index} />
        ))}
      </View>
    </View>
  );
}

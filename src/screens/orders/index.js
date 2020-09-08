import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import Menu from '../../components/menu';
import styles from './styles';
import Tabs from '../../components/orders-tab';
import Title from '../../components/title';
import OrdersData from '../../components/orders-by-category';

export default function () {
  const [activeTab, setActiveTab] = useState('pending'); // enum ['pending','completed','canceled']
  return (
    <View style={styles.container}>
      <Title title="Orders" />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <View style={styles.ordersContainer}>
        <OrdersData activeTab={activeTab} />
      </View>
      <Menu />
    </View>
  );
}

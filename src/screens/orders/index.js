import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Menu from '../../components/menu';
import styles from './styles';
import Tabs from '../../components/orders-tab';
import Title from '../../components/title';

export default function () {
  const [activeTab, setActiveTab] = useState('pending'); // enum ['pending','completed','canceled']
  return (
    <View style={styles.container}>
      <Title title="Orders" />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Menu />
    </View>
  );
}

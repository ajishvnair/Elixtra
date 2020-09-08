import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ordersData} from '../../common/data-provider';

export default function ({activeTab}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataByCategory = ordersData.filter(
      (order) => order.status === activeTab,
    );
    setData(dataByCategory);
  }, [activeTab, setData]);
  return (
    <View style={{marginTop: 30}}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}

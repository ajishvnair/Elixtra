import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NO</Text>
      <Text style={styles.title}>ORDERS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 70,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 5,
    opacity: 0.2,
  },
});

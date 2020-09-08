import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function ({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 30,
    marginTop: 20,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
});

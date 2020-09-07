import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bodyColor} from './src/styles/_variables';
import Menu from './src/components/menu';

export default function () {
  return (
    <View style={styles.contanier}>
      <Text>From app .s</Text>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: bodyColor,
  },
});

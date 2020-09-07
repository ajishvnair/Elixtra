import React from 'react';
import {View} from 'react-native';

import AppNavigation from './src/navigation/AppNavigation';

export default function () {
  return (
    <View style={{flex: 1}}>
      <AppNavigation />
    </View>
  );
}

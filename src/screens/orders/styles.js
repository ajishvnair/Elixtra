import {StyleSheet} from 'react-native';
import {bodyColor} from '../../styles/_variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bodyColor,
  },
  ordersContainer: {
    display: 'flex',
    paddingHorizontal: 30,
    paddingVertical: 10,
    height: '70%',
  },
});

export default styles;

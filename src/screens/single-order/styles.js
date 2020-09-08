import {StyleSheet} from 'react-native';
import {bodyColor} from '../../styles/_variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bodyColor,
  },
  orderDetails: {
    left: 35,
    marginTop: 5,
  },
  generalFont: {
    fontSize: 15,
    color: 'white',
  },
  blurFont: {
    opacity: 0.8,
  },
  iconContainer: {
    backgroundColor: 'rgba(121, 210, 209, 0.600)',
    padding: 10,
    borderRadius: 50,
    width: 35,
    marginRight: 10,
  },
  orderSchedule: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  titleFont: {
    fontSize: 20,
  },
  mtNormal: {
    marginTop: 10,
  },
  mtHigh: {
    marginTop: 15,
  },
  mlLow: {
    marginLeft: 5,
  },
  whiteBox: {
    margin: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white',
  },
});

export default styles;

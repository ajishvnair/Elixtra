import {StyleSheet} from 'react-native';
import {bodyColor} from '../../styles/_variables';

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    // width: '90%',
    height: 70,
    left: 2,
    right: 2,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  itemText: {
    fontSize: 12,
    padding: 5,
    color: bodyColor,
  },
});

export default styles;

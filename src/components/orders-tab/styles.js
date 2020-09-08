import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // left: 10,
    // right: 10,
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  tabContainer: {
    padding: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 0,
  },
});

export default styles;

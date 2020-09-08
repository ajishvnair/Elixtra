import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'rgba(121, 210, 209, 0.600)',
    borderRadius: 20,
  },
  title: {
    color: 'white',
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mgRight: {
    marginRight: 10,
  },
});

export default styles;

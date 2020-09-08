import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // opacity: 0.5,
    backgroundColor: 'rgba(121, 210, 209, 0.600)',
    marginTop: 10,
    padding: 20,

    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    position: 'relative',
  },
  orderTitle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  orderTime: {
    color: 'white',
    fontSize: 13,
  },
  orderStatus: {
    marginVertical: 10,
    color: 'white',
    fontSize: 13,
  },
  button: {
    color: 'blue',
  },
  //   orderContent: {
  //     zIndex: 50,
  //   },
});

export default styles;

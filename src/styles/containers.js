import { StyleSheet } from 'react-native';
import { bgColor } from './variables';

export default StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    flexDirection: 'column',
    flex: 1
  },
  login: {
    flexDirection: 'column',
    flex: 1,
    margin: 20
  }
});

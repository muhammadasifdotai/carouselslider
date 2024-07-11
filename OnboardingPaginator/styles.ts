import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    backgroundColor: colors.green,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 8,
    marginTop: 30,
  },
});
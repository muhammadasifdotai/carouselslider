import {StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    color: colors.lightblack,
    fontFamily: fonts.primary.Regular,
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.black,
    fontFamily: fonts.primary.Bold,
    fontSize: 32,
    marginVertical: 20,
    textAlign: 'center',
  },
});

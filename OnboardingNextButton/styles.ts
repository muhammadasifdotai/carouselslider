import {StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      },
      nextButton: {
        backgroundColor: colors.green,
        borderRadius: 30,
        marginBottom: 15,
        padding: 15,
        width: 300,
      },
      nextButtonText: {
        color: colors.white,
        fontFamily: fonts.primary.SemiBold,
        textAlign: 'center',
      },
      skipButton: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.green,
        backgroundColor: colors.lightgreen,
        padding: 15,
      },
      skipButtonText: {
        color: colors.green1,
        fontFamily: fonts.primary.SemiBold,
        textAlign: 'center',
      },
});

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../constants/Theme';

const styles = StyleSheet.create({
  cardImageStyle: {
    width: wp(30),
    height: hp(20),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignSelf: 'center',
    margin: 8,
  },
  titleStyle: {
    fontWeight: '300',
    fontSize: wp(5),
    color: COLORS.blue,
    textAlign: 'center',
    lineHeight: hp(4),
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
  cardImageStyle: {
    width: verticalScale(135),
    height: horizontalScale(190),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignSelf: 'center',
    margin: 4,
  },
  titleStyle: {
    fontWeight: '300',
    fontSize: horizontalScale(20),
    marginTop: verticalScale(5),
    color: COLORS.blue,
    textAlign: 'center',
    lineHeight: horizontalScale(4),
  },
});

export default styles;

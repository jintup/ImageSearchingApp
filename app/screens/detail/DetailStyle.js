import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Theme';
import {Fonts} from '../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardImageStyle: {
    width: wp(100),
    height: hp(70),
  },
  titleStyle: {
    color: COLORS.black,
    font: Fonts.Semibold,
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    letterSpacing: 10,
  },
  lowerViewStyle: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: COLORS.lightLime,
    bottom: 10,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/theme';
import {Fonts} from '../../assets';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: COLORS.black,
    fontSize: 20,
    fontWeight: Fonts.ExtraBold,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  emptyTextStyle: {
    textAlign: 'center',
    fontSize: hp(3),
  },
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: Fonts.Bold,
    textAlign: 'center',
    letterSpacing: 10,
  },
});

export default styles;

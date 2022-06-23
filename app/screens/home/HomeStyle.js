import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: COLORS.black,
    fontSize: 20,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 10,
  },
});

export default styles;

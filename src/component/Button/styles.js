import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dark,
    height: 60,
    width: 300,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledStyle: {
    opacity: 0.7,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
});

export default styles;

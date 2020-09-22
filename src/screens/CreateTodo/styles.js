import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  input: {
    marginTop: 20,
    fontSize: 20,
    paddingTop: 20,
    padding: 20,
    margin: 20,
    backgroundColor: COLORS.white,
    borderColor: COLORS.coolGrey,
    borderWidth: 2,
    borderRadius: 5,
    color: COLORS.darkGreyTwo,
  },
  button: {
    width: null,
    borderRadius: null,
    height: 70,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

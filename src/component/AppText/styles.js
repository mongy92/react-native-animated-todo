import {StyleSheet, Platform} from 'react-native';
import {COLORS} from '../../common';

const styles = StyleSheet.create({
  text: {
    color: COLORS.dark,
    textAlign: Platform.OS === 'ios' ? 'left' : null,
  },
});

export default styles;

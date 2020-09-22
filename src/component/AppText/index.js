import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

let AppText = ({children, style, onPress, numberOfLines, ...rest}) => (
  <Text
    style={[styles.text, style]}
    numberOfLines={numberOfLines}
    onPress={onPress}
    {...rest}>
    {children}
  </Text>
);

AppText = React.memo(AppText);
export {AppText};

AppText.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.any,
  onPress: PropTypes.func,
  numberOfLines: PropTypes.number,
};

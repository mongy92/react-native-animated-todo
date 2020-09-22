import React from 'react';
import {TouchableOpacity, ViewPropTypes} from 'react-native';
import {AppText} from '../AppText';
import PropTypes from 'prop-types';
import styles from './styles';

let Button = ({
  title,

  style,
  titleStyle,
  onPress,
  disabled,
  ...props
}) => {
  const buttonStyle = [styles.button, style, disabled && styles.disabledStyle];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.6}
      {...props}>
      <AppText style={[styles.text, titleStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};

Button = React.memo(Button);
export {Button};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  disabled: PropTypes.bool,
};

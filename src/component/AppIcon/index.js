import React from 'react';
import {TouchableOpacity, ViewPropTypes} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const AppIcon = (props) => <Icon color={'gray'} {...props} />;

AppIcon.propTypes = {
  name: PropTypes.string.isRequired, // icon name
  color: PropTypes.string, // icon color
  size: PropTypes.number, // icon size
  style: PropTypes.object,
};

const PressedIcon = ({
  onPress,
  containerStyle,
  name,
  size,
  color,
  disabled,
  ...props
}) => {
  const opacity_style = {opacity: disabled ? 0.5 : 1};
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[containerStyle, opacity_style]}
      activeOpacity={0.7}>
      <AppIcon {...props} name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

PressedIcon.propTypes = {
  name: PropTypes.string.isRequired, // icon name
  color: PropTypes.string, // icon color
  size: PropTypes.number, // icon size
  onPress: PropTypes.func.isRequired, // function called when on press function
  disabled: PropTypes.bool, // icon disabled
  containerStyle: ViewPropTypes.style, // style for the icon container
};

export {AppIcon, PressedIcon};

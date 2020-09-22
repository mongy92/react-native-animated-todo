import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Animated,
  Platform,
  UIManager,
  Dimensions,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {formatDate, getRandomImage} from '../../utils';
import {PressedIcon} from '../AppIcon';
import {ICONS, COLORS, IMAGES} from '../../common';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const {width} = Dimensions.get('window');

const TodoItem = ({
  todo,
  index,
  onPressEdit,
  onPressDelete,
  isInitialRender,
}) => {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true,
      delay: isInitialRender ? index * 300 : 0,
    }).start();
  }, []);

  const deleteTodo = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      onPressDelete();
    });
  };

  const translateAnimation = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-width, 0, width],
  });

  const opacityAnimation = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.View
      activeOpacity={0.7}
      style={[
        styles.card,
        {
          transform: [{translateX: translateAnimation}],
          opacity: opacityAnimation,
        },
      ]}>
      <ImageBackground
        style={[styles.image, index === 2 && styles.thirdItemStyle]}
        source={todo.image}>
        <Text style={styles.itemCount}>{`# TODO : ${index + 1}  `}</Text>

        <View style={styles.info}>
          <Text style={styles.dateText}>{formatDate(todo.date)}</Text>
          <Text style={styles.todoText}>{`${todo.text}`}</Text>
        </View>
        <View style={styles.actionBar}>
          <PressedIcon
            name={ICONS.edit}
            size={20}
            containerStyle={[styles.iconContainer, styles.editIconSeperator]}
            color={COLORS.oceanBlue}
            onPress={onPressEdit}
          />
          <PressedIcon
            size={20}
            name={ICONS.delete}
            color={COLORS.redishOrange}
            containerStyle={styles.iconContainer}
            onPress={deleteTodo}
          />
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

export {TodoItem};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.any,
    text: PropTypes.string,
    date: PropTypes.any,
  }).isRequired,
  onPressDelete: PropTypes.func.isRequired,
  onPressEdit: PropTypes.func.isRequired,
};

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Todos from '../screens/Todos';
import CreateTodo from '../screens/CreateTodo';
import styles from './styles';
import {COLORS, ICONS} from '../common';
import {PressedIcon} from '../component';
import {STRINGS} from '../common/Strings';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: COLORS.dark,
        animationEnabled: false,
      }}>
      <RootStack.Screen
        name={'Splash'}
        component={Splash}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={'Todos'}
        component={Todos}
        options={({navigation}) => ({
          title: STRINGS.todos,
          headerRightContainerStyle: styles.headerRightContainerStyle,
          headerRight: () => (
            <PressedIcon
              name={ICONS.plus_circle}
              size={30}
              color={COLORS.grass}
              onPress={() => navigation.navigate('CreateTodo')}
            />
          ),
        })}
      />
      <RootStack.Screen
        name={'CreateTodo'}
        component={CreateTodo}
        options={{
          ...TransitionPresets.ModalTransition,
          animationEnabled: true,
        }}
      />
    </RootStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);

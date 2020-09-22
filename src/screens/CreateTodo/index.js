import React, {useState, useLayoutEffect} from 'react';
import {View, TextInput, Keyboard, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {Button} from '../../component';
import {COLORS} from '../../common';
import {createTodoHandler, updateTodoHandler} from '../../utils';
import {onCreateTodo, onUpdateTodo} from '../../redux/actions/Todos';
import {useDispatch} from 'react-redux';
import {STRINGS} from '../../common/Strings';

const CreateTodo = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const todo = params && params.todo;
  const [text, setText] = useState(todo ? todo.text : '');
  const disabled = text.trim().length == 0;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: todo ? STRINGS.edit_todo : STRINGS.new_todo,
    });
  }, []);

  const handleOnSubmit = () => {
    if (disabled) return Keyboard.dismiss();
    if (todo) {
      const updatedTodo = updateTodoHandler({todo, text});
      dispatch(onUpdateTodo(updatedTodo));
    } else {
      const newTodo = createTodoHandler(text);
      dispatch(onCreateTodo(newTodo));
    }
    Keyboard.dismiss();
    navigation.goBack();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <TextInput
        multiline
        placeholderTextColor={COLORS.coolGrey}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={styles.input}
        onChangeText={(t) => setText(t)}
        value={text}
        placeholder={STRINGS.enter_new_todo}
        maxLength={300}
        returnKeyType="done"
        onSubmitEditing={handleOnSubmit}
        blurOnSubmit
      />
      <Button
        disabled={disabled}
        title={todo ? STRINGS.edit : STRINGS.save}
        style={styles.button}
        onPress={handleOnSubmit}
      />
    </ScrollView>
  );
};

export default CreateTodo;

import {CREATE_TODO, DELETE_TODO, UPDATE_TODO} from '../actionTypes';

export const onCreateTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const onUpdateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};

export const onDeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

import {combineReducers} from 'redux';
import TodosReducer from './Todos';

export default combineReducers({
  todos: TodosReducer,
});

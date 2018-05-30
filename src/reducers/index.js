import { combineReducers } from 'redux';
import { showUsers } from './users';
import { changeInputText } from './input';

const rootReducer = combineReducers({
  user: showUsers,
  inp: changeInputText
});

export default rootReducer;

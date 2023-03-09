import { combineReducers } from 'redux';

// importa os reducers
import userReducer from './User.reducer';
import test from './Test';

const rootReducer = combineReducers(
  {
    userReducer,
    test,
  }
);

export default rootReducer;
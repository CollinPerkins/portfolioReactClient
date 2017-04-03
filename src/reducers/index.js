import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import calcReducer from './projectReducers/calc_reducer';

const rootReducer = combineReducers({
  form,
  calcState: calcReducer,
  auth: authReducer
});

export default rootReducer;

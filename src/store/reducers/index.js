import { combineReducers } from 'redux';
import resourcesReducer from './resources.reducer';

const rootReducer = combineReducers({
  resources: resourcesReducer
});

export default rootReducer;

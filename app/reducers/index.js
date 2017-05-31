
import { combineReducers } from 'redux';
import line from './line/index';

const reducer = combineReducers({
	line
});

const rootReducer = (state, action) =>{
	return reducer(state, action)
}

export default rootReducer;

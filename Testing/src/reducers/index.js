import {combineReducers} from 'redux';
import reducerComments from './reducer_comments';

const rootReducer = combineReducers({
    comments: (state = []) => state
});

export default rootReducer;

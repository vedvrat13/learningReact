import {combineReducers} from 'redux';
import reducerComments from './reducer_comments';

const rootReducer = combineReducers({
    comments: reducerComments
});

export default rootReducer;

import {FETCH_POSTS} from '../actions/index';

const INITIAL_STATE = {};

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}
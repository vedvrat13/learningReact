import {COMMENT_LIST} from '../actions/constants';

export default function(state = [], action) {
    switch (action.type) {
        case COMMENT_LIST:
            return [...state, action.payload];
        default:
            return state;
    }
}

import {COMMENT_LIST} from '../actions/index';
export default function(state = [], action) {
    console.log(action.payload);
    switch (action.type) {
        case COMMENT_LIST:

            return state;
        default:
            return state;
    }
}

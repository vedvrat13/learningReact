import {expect} from '../test_helper';
import {COMMENT_LIST} from '../../src/actions/constants';
import commentReducer from '../../src/reducers/reducer_comments';

describe('REDUCERS', () => {
    it('return the state as is for unexpected data', () => {
        const response = commentReducer(undefined,{})
        expect(response).to.eql([]);
    });
    it('handles action of type COMMENT_LIST', () => {
        const action = {type:COMMENT_LIST, payload:'new comment'};
        const response = commentReducer(undefined,action);
        expect(response).to.eql(['new comment']);
    });
})

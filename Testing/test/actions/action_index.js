import {expect} from '../test_helper';
import {COMMENT_LIST} from '../../src/actions/constants';
import {addComment} from '../../src/actions';

describe('ACTIONS', () => {
    describe('COMMENT_LIST', () => {
        it('has the correct type', () => {
            const comment = addComment();
            expect(comment.type).to.equal('COMMENT_LIST');
        });
        it('has the correct payload', () => {
            const comment = addComment('new comment');
            expect(comment.payload).to.equal('new comment');
        });
    });
});

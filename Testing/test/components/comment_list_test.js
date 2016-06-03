import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {
    let component;
    beforeEach(() => {
        const props = {
            comments: ['New Comment', 'New Comment2']
        };
        component = renderComponent(CommentList, null, props)
    });
    it('has className CommentList', () => {
        expect(component).to.have.class ('CommentList');
    });
    it('displays all the comments', () => {
        expect(component.find('li').length).to.equal(2);
    });
    it('contains LI with the text as in comments', () => {
        expect(component).to.contain('New Comment')
    });
});

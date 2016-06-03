import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has a className CommentBox', () => {
        expect(component).to.have.class('CommentBox');
    });
    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });
    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering the text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });
        it('shows the text in textbox', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });
        it('clears the textbox when submitted', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});

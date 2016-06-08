import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

describe('COMPONENT: App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('contains Comment Box', () => {
        expect(component.find('.CommentBox')).to.exist;
    });
    it('contains Comment List', () => {
        expect(component.find('.CommentList')).to.exist;
    });
});

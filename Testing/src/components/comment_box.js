import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/index';
import {COMMENT_LIST} from '../actions/constants';

class CommentBox extends Component {
    constructor() {
        super();

        this.state = {
            comment: []
        }
    }
    handleChange(event) {
        this.setState({comment: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.state.comment);
        this.setState({comment: ''});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className='CommentBox'>
                <textarea onChange={(event) => this.handleChange(event)} value={this.state.comment}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default connect(null,{addComment})(CommentBox);

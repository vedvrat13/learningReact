import React, {Component} from 'react';

class PostsShow extends Component {
    render() {
        return (
            <div>Posts show {this.props.params.id}</div>
        );
    }
}

export default PostsShow;

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsList extends React.Component {
    constructor() {
        super();
        this.renderPostsList = this.renderPostsList.bind(this);
    }
    componentWillMount() {
        this.props.fetchPosts();
    }
    renderPostsList() {
        if (!this.props.posts) {
            return <div>Loading..</div>
        }
        return this.props.posts.map(function(post) {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <ul className="list-group">
                    {this.renderPostsList()}
                </ul>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}

function mapActionsToProps(dispatch) {
    return bindActionCreators({
        fetchPosts: fetchPosts
    }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(PostsList);

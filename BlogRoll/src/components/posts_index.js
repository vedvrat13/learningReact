import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index.js'

class PostsList extends React.Component {
    constructor(){
        super();

        this.renderPostsList = this.renderPostsList.bind(this);
    }
    renderPostsList(){
        if(!this.props.posts){
            return <div>Loading..</div>
        }
        this.props.fetchPosts();
        console.log('Entered 2');
        console.log(this.props.posts);
        return this.props.posts.map(function(post){
            return <li key={post.id}>{post.title}</li>;
        });
    }
    render(){
        return(
            <ul>
            {this.renderPostsList()}
            </ul>

        );
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    };
}

function mapActionsToProps(dispatch){

    return bindActionCreators({fetchPosts:fetchPosts},dispatch)
}

export default connect(mapStateToProps,mapActionsToProps)(PostsList);

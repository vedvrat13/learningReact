import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Posts from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const greeting = () => {
    return <div>Hello</div>
};

export default(
    <Route path='/' component={App}>
        <IndexRoute component={Posts}/>
        <Route path='posts/new' component={PostsNew}/>
        <Route path='posts/:id' component={PostsShow}/>
    </Route>
);

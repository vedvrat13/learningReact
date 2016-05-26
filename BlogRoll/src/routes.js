import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Posts from './components/posts_index';

const greeting = () => {
    return <div>Hello</div>
};

export default(
    <Route path='/' component={App}>
        <IndexRoute component={Posts}/>
        <Route path='/posts' component={greeting}/>
    </Route>
);

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=123';

export function fetchPosts(){
    const response = axios.get(`${ROOT_URL}posts${API_KEY}`);
    console.log('------------------');
    console.log(response);
    console.log('------------------');
    return {
        type:FETCH_POSTS,
        payload:response
    };
}

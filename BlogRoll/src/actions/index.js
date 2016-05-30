import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=123';

export function fetchPosts() {
    const response = axios.get(`${ROOT_URL}posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: response
    };
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}posts${API_KEY}`, props);

    return {
        type: CREATE_POSTS,
        payload: request
    };
}

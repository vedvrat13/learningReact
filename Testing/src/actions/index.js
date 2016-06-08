import React from 'react';
import {COMMENT_LIST} from './constants';

export function addComment(data) {
    return {
        type: COMMENT_LIST,
        payload: data
    }
}

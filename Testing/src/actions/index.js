import React from 'react';

export const COMMENT_LIST = 'COMMENT_LIST';

export function addComment(data){
    return {
        type:COMMENT_LIST,
        payload:data
    }
}

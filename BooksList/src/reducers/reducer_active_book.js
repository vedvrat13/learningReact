export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            console.log("In Reducer");
            return action.payload;
            // Always return a fresh object
    }
    return state;
}

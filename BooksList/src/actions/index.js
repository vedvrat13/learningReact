export function selectBook(book) {
    // selectBook is an _ActionCreator and it needs to return a type and payload,
    // the returned Object is an action which gets passed to all _Reducers
    return {
        type:"BOOK_SELECTED",
        payload:book
    };
}

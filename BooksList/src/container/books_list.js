import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BooksList extends React.Component {
    constructor() {
        super();

    }
    handleClick(book) {
        this.props.selectBook(book);
    }
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li onClick={() => this.handleClick(book)} className="list-group-item" key={book.title}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {books: state.books}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

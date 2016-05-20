import React from 'react';
import { Component } from 'react';
import BooksList from '../container/books_list';
import BookDetail from '../container/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
          <BooksList />
          <BookDetail />
      </div>
    );
  }
}

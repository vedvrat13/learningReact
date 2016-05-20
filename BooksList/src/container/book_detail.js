import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends React.Component {
    render() {
        if (!this.props.activeBook) {
            return <div>Select a Book</div>
        }
        return (
            <div>
                Book Details : {this.props.activeBook.title}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {activeBook: state.activeBook}
}

export default connect(mapStateToProps)(BookDetail);

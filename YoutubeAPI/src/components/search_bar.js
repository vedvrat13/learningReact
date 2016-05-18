import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    constructor(){
        super();

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div className="searchBar">
                <input value={this.state.term} onChange={(event) => this.handleInputChange(event.target.value)} />
            </div>
        );
    }
    handleInputChange(term){
        this.props.onSearchBarChange(term);
        this.setState({term});
    }
}

export default SearchBar;

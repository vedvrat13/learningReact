import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            term: ''
        };
    }
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term:''
        })
    }
    render() {
        return (
            <form onSubmit={(event) => this.onFormSubmit(event)} className="input-group">
                <input type="text" placeholder="Enter City Name" value={this.state.term} className="form-control" onChange={(event) => this.onInputChange(event)}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state) {}

function mapActionsToProps(dispatch) {
    return bindActionCreators({
        fetchWeather: fetchWeather
    }, dispatch);
}

export default connect(null, mapActionsToProps)(SearchBar);

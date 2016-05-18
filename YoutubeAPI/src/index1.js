import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/RaisedButton';


const UsernameComponent = () => (<TextField id="Default" floatingLabelText="Enter Username" fullWidth="true"/>);
const PasswordComponent = () => (<TextField type="password" id="Default" floatingLabelText="Enter Password" fullWidth="true"/>);

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
            <AppBar title="Marlin"></AppBar>
            <UsernameComponent/>
            <br/>
            <PasswordComponent/>
            <Button label="Submit" primary/>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>, document.querySelector('.container'));

import React, { Component } from 'react'
import {withAuth0} from '@auth0/auth0-react'; // use 'with' class based components

class LoginButton extends Component {
    render() {
        // get the auth0 properties that we need (provided to us by auth0)
        const {
            loginWithRedirect,
            isAuthenticated
        } = this.props.auth0;
        console.log(`Props: ${this.props.auth0}`);
        
        // If user already athenticated, dont display the Login button
        return !isAuthenticated && (
            <button onClick={loginWithRedirect}>Login</button>
        );
    }
}
// Since this component uses auth0 we need to wrap our export with withAuth0()
export default withAuth0(LoginButton);
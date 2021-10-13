import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'; // use 'with' class based components

class LogoutButton extends Component {
    render() {
        // get the auth0 properties that we need (provided to us by auth0)
        const {
            isAuthenticated,
            logout
        } = this.props.auth0;

        // If user IS already authenticated, display the Logout button
        return isAuthenticated && (
            <button onClick={() => {
                logout({ returnTo: window.location.origin });
            }}>Logout</button>
        );
    }
}
// Since this component uses auth0 we need to wrap our export with withAuth0()
export default withAuth0(LogoutButton);
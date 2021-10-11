import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'; // use 'with' class based components

class LogoutButton extends Component {
    render() {
        const {
            isAuthenticated,
            logout
        } = this.props.auth0;

        return isAuthenticated && (
            <button onClick={() => {
                logout({ returnTo: window.location.origin });
            }}>Log out</button>
        );
    }
}

export default withAuth0(LogoutButton);
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

// Component to display some stuff from user profile
// Will only be rendered from App component if the user authenticated/logged in
class Profile extends Component {
  
  render() {
    const { user, isAuthenticated, isLoading } = this.props.auth0; // Get the user from the auth0
    return (
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    );
  }
}

// Since this component uses auth0 we need to wrap our export with withAuth0()
export default withAuth0(Profile);

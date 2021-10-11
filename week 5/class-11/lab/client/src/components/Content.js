import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

// Example Component. Will only be rendered by app component if user was logged in (see app.js)
class Content extends React.Component {

  render() {
    return(
      <h1>Welcome to the Site Content!!</h1>
    )
  }
}

// Since this component uses auth0 we need to wrap our export with withAuth0()
export default withAuth0(Content);

import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

// Example Component. Will only be rendered by app component if user was logged in (see app.js)
class Content extends React.Component {
  componentDidMount = () => {
    if(this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;

        const config = {
          headers: {"Authorization" : `Bearer ${jwt}`},
          method: 'get',
          baseURL: 'http://localhost:3001',
          url: '/test'
        }
        axios(config)
          .then(axiosResults => console.log(axiosResults.data))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    return(
      <h1>Welcome to the Site Content!!</h1>
    )
  }
}

// Since this component uses auth0 we need to wrap our export with withAuth0()
export default withAuth0(Content);

import React from 'react';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Content from './components/Content';
class App extends React.Component {
  render() {
    return (
      <>
        <LoginButton />
        <LogoutButton />
        {/* If the user as logged in, display some user info stuff */}
        {this.props.auth0.isAuthenticated &&
          <>
            <Profile />
            <Content />
          </>
        }
      </>
    )
  }
}

export default withAuth0(App);


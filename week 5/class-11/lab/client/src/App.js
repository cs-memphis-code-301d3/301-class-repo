import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      {/* If the user as logged in, display some user info stuff */}
      {this.props.auth0.isAuthenticated &&
        <>
          <Profile />
          <Content />
        </>
      }
    </div>
  );
}

export default App;

# User Authentication with Auth0

Example with a Node/Express backend securing an endpoint.

## Setup/run:
* npm install
* npm run start

This server listens on port 3000 by default.


http://localhost:3001/login - Login through auth0
http://localhost:3001/logout - Logout via auth0
http://localhost:3001/ - Displays user login status
http://localhost:3001/content - If user is signed in, display user profile information. If not signed in, redirect to auth0 login page
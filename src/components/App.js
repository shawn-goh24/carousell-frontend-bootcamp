import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
import logo from "../logo.png";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div className="App">
          <header className="App-header">
            {/* <button onClick={() => loginWithRedirect()}>Login</button> */}
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {console.log(user)}
            <Outlet />
          </header>
        </div>
      ) : (
        <div className="App">
          <header className="App-header">
            <button onClick={() => loginWithRedirect()}>Login</button>
            <img src={logo} className="App-logo" alt="logo" />
            <Outlet />
          </header>
        </div>
      )}{" "}
    </>
  );
}

export default App;

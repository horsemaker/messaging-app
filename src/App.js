import './App.css'; // 2.33.20
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch> 
              <Route path="/rooms/:roomId">      
                <Chat />
              </Route>
              <Route path="/">
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

// firebase login
// firebase init
// select hosting => spacebar
// use an existing project => important
// select project
// build
// Y => single page app
// npm run build
// firebase deploy

import React, { useEffect, useState } from 'react';
import { Route, Switch } from "wouter";

import Login from "pages/Login";
import Temporizador from "pages/Temporizador"

import MockClientes from 'mockClientes'

import { UserContextProvider } from "context/UserContext"

import './App.css';

function App() {
  const [value, setValue] = useState(
    localStorage.getItem('myMock') || ''
  );

  useEffect(() => {
    localStorage.setItem('myMock', JSON.stringify(MockClientes));
  }, [value]);



  return (
    <UserContextProvider>
      <div className="App">
        <header className="App-header">
          <section className="App-content">
            <Switch>
              <Route component={Login} path="/" />
              <Route component={Temporizador} path="/temporizador" />
            </Switch>
          </section>
        </header>
      </div>
    </UserContextProvider>
  );
}

export default App;

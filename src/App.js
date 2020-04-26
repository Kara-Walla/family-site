import React from 'react';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage, SubmitPage } from './pages'
import { AppContainer } from './components'
import './App.css';

export default function App() {
  return (
    <HashRouter basename="/">
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/submit">
          <Submit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

function Home() {
  return <AppContainer>
    <HomePage/>
  </AppContainer>;
}

function Submit() {
  return <AppContainer>
    <SubmitPage/>
  </AppContainer>;
}

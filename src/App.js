import React,{Fragment} from 'react';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './screens/HomePage';
import { About } from './screens/About';

function App() {
  return (
    <BrowserRouter >
      <Fragment>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

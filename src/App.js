import React,{Fragment} from 'react';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './screens/HomePage';
import { About } from './screens/About';
import { Search } from './components/SearchComponent.js/Search';

function App() {
  return (
    <BrowserRouter >
      <Fragment>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

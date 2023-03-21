import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Register';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router> */}
      <header className="App-header">
        UpForGrabs
      </header>
      <Register />
    </div>
  );
}

export default App;

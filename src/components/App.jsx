import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Battle from "./battle/Battle";
import Popular from "./popular/Popular";
import Result from "./result/Result";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/battle">Battle</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
          </ul>
          <Route path="/" exact component={Homepage} />
          <Route path="/battle" component={Battle} />
          <Route path="/popular" component={Popular} />
          <Route path="/result" component={Result} />
        </div>
      </Router>
    );
  }
}

export default App;

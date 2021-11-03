import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

let App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>this is a checkOut page</h1>
          </Route>
          <Route path="/login">
            <h1>this is a login page</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>this is a home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

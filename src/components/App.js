import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "./SearchForm";
import Home from "./Home";
import Nav from "./Nav";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchForm} />

        <Route
          render={() => (
            <h2>404 error: URL does not match any existing paths!</h2>
          )}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

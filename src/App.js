import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Containers/Homepage";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Homepage} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

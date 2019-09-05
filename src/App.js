import React, { Component } from "react";
import ReactDom from "react-dom";
import { Route, Link, Switch, HashRouter as Router } from "react-router-dom";
import { Provider } from "./context";
import Header from "./component/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contacts from "./component/Contacts";
import Addcontact from "./addContact";
import About from "./About";
import NotFound from "./NotFound";
import EditContact from "./EditContact";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="app">
            <Header heading="Contact Manager" />

            <div className="container">
              {" "}
              <Switch>
                <Route exact path="/addcontact" component={Addcontact} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/EditContact/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

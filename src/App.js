import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import ContactDetails from './pages/ContactDetails';
import ContactEdit from './pages/ContactEdit';
import ContactAdd from './pages/ContactAdd';
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contacts" exact>
            <Contacts />
          </Route>
          <Route path="/contacts/details/:contactId" exact>
            <ContactDetails />
          </Route>
          <Route path="/contacts/edit/:contactId" exact>
            <ContactEdit />
          </Route>
          <Route path="/contacts/add" exact>
            <ContactAdd />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default App;

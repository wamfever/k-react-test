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
          <Route path="/k-react-test" exact>
            <Home />
          </Route>
          <Route path="/k-react-test/contacts" exact>
            <Contacts />
          </Route>
          <Route path="/k-react-test/contacts/details/:contactId" exact>
            <ContactDetails />
          </Route>
          <Route path="/k-react-test/contacts/edit/:contactId" exact>
            <ContactEdit />
          </Route>
          <Route path="/k-react-test/contacts/add" exact>
            <ContactAdd />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default App;

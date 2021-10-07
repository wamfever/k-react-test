import React from "react";
import {
  HashRouter,
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
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;

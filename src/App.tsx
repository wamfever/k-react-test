import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { ContactsDetails } from './pages/ContactDetails';
import { ContactsEdit } from './pages/ContactEdit';
import { ContactsAdd } from './pages/ContactAdd';
import { DefaultLayout } from './layouts/DefaultLayout';

const App = (): JSX.Element => {
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
            <ContactsDetails />
          </Route>
          <Route path="/contacts/edit/:contactId" exact>
            <ContactsEdit />
          </Route>
          <Route path="/contacts/add" exact>
            <ContactsAdd />
          </Route>
        </Switch>
      </DefaultLayout>
    </HashRouter>
  );
}

export default App;

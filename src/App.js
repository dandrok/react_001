import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPages from './pages/NewMeetups';
import FacoritesPage from './pages/Facorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupsPages />
        </Route>
        <Route path="/favorites">
          <FacoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;


import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home';
import CreateEmpl from '../CreateEmp';
import ListEmpl from '../ListEmp';
import NotFound from '../NotFound';
import Header from '../../components/Header';
import Title from '../../components/Title';

function App() {
  return (
    <Router>
      <div className="container-app">
        <Header />
        <main>
          <h1 className="sr-only"> HRnet, application de gestion des ressources humaines</h1>
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route path="/Home" component={Home} />
            <Route path="/CreateEmpl" component={CreateEmpl} />
            <Route path="/ListEmpl" component={ListEmpl} />
            <Route path='*' component={NotFound} />
          </Switch>
        </main>
        {/*  <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

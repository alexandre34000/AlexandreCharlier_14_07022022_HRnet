
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home';
import CreateEmpl from '../CreateEmp';
import ListEmpl from '../ListEmp';
import NotFound from '../NotFound';
import Header from '../../components/Header';

function App() {
  return (
    <Router>
      <div className="container-app">
        <Header />
        <main>
          <h1 className="sr-only"> HRnet, application de gestion des ressources humaines</h1>
          <Switch>
            <Redirect exact from="/" to="/employee-create" />
            <Route path="/Home" component={Home} />
            <Route path="/employee-create" component={CreateEmpl} />
            <Route path="/employee-list" component={ListEmpl} />
            <Route path='*' component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

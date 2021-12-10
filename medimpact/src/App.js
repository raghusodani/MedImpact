
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './views/Auth/Login/Login';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

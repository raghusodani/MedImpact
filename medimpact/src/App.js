
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './views/Auth/Login/Login';
import VerifyEmail from './views/Auth/VerifyEmail/VerifyEmail';
import Dashboard from './views/Dashboard/Dashboard';
import { getToken } from './helpers/LocalStorageValidator';
function App() {
  let token = getToken();
  const checkAuth = () => {
    if (token) {
      return <Dashboard/>
    }
    else {
      return <Login/>
    }
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login} />
          <Route path ='/dashboard/:type' component={()=>checkAuth} />
          <Route path="/verification/:token" component={VerifyEmail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

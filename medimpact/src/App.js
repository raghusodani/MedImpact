
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './views/Auth/Login/Login';
import Signup from './views/Auth/Signup/Signup';
import VerifyEmail from './views/Auth/VerifyEmail/VerifyEmail';
import Dashboard from './views/Dashboard/Dashboard';
import { getToken } from './helpers/LocalStorageValidator';
import FirstTimeLogin from './components/FirstTimeLogin/FirstTimeLogin';
function App() {
  let token = getToken();
  const checkAuth = (type) => {
    if (token) {
      switch (type) {
      case 'Dashboard':
      return <Dashboard/>
      case 'FirstTimeLogin':
      return <FirstTimeLogin/> 
    }
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
          <Route path ='/dashboard/:type' component={()=>checkAuth("Dashboard")} />
          <Route path = "/signup" component = {Signup} />
          <Route path="/verification/:token" component={VerifyEmail} />
          <Route path="/signupdetails" component={()=>checkAuth("FirstTimeLogin")} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

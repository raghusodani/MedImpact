
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './views/Auth/Login/Login';
<<<<<<< HEAD
import Signup from './views/Auth/Signup/Signup';
=======
import VerifyEmail from './views/Auth/VerifyEmail/VerifyEmail';
import Dashboard from './views/Dashboard/Dashboard';
import { getToken } from './helpers/LocalStorageValidator';
>>>>>>> 3311fa4def90c0457dedfb726930436d57635554
function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login} />
<<<<<<< HEAD
          <Route path = "/signup" component = {Signup} />
=======
          <Route path ='/dashboard/:type' component={()=>{getToken() ? Dashboard : Login}} />
          <Route path="/verification/:token" component={VerifyEmail} />
>>>>>>> 3311fa4def90c0457dedfb726930436d57635554
        </Switch>
      </Router>

    </div>
  );
}

export default App;

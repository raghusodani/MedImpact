
import './App.css';
import Web3 from "web3";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MedImpact from "./contracts/MedImpact.json";
import getWeb3 from "./getWeb3";
import Login from './views/Auth/Login/Login';
import Signup from './views/Auth/Signup/Signup';
import VerifyEmail from './views/Auth/VerifyEmail/VerifyEmail';
import Dashboard from './views/Dashboard/Dashboard';
import { getToken, getType } from './helpers/LocalStorageValidator';
import FirstTimeLogin from './components/FirstTimeLogin/FirstTimeLogin'
import Billing from './views/Billing/Billing';
import Inventory from './views/Inventory/Inventory';
import SearchContent from './views/Search/SearchContent';
import NavBar from './components/dashboard/StoreDashboard/NavBar';
import Home from './views/Landing/Home';
function App() {
  let token = getToken();
  let type = getType();
  const checkAuth = (type) => {
    if (token) {
      switch (type) {
        case 'Dashboard':
          return <Dashboard />
        case 'FirstTimeLogin':
          return <FirstTimeLogin />
      }
    }
    else {
      return <Login />
    }
  }
  const checkStore = (component) => {
      if(type==="Store"){
        if(component==="billing"){
          return <Billing />
        }
        else if(component==="inventory"){
          return <Inventory />
        }
      }
      else{
        return <Redirect to="dashboard/Donor" />
      }
  }



  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState();
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buffer, setBuffer] = useState('');

  useEffect( async () => {
    console.log("setup");
    try {

      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      console.log("setup");

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      setAccount(accounts[0]);

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = MedImpact.networks[networkId];
      const contract = new web3.eth.Contract(
        MedImpact.abi,
        "0xC7bd92706Afc3232A2EF3D033690eB001AEA15Bd",
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      setWeb3(web3);
      setAccounts(accounts);
      setContract(contract);

      setLoading(false);

      console.log("medicalStoresCount", contract.methods.medicalStoresCount().call());

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }, [])

  console.log("contract", contract);
  console.log("accounts", accounts);
  console.log("web3", web3);
  
  /*captureFile = (e) => {

    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      setBuffer(Buffer(reader.result))
      console.log('buffer', buffer)
    }
  }

  addMedicalStore = () => {
    console.log("Submitting file to ipfs...")

    //adding file to the IPFS
    ipfs.files.add(buffer, (error, result) => {
      console.log('Ipfs result', result)
      if (error) {
        console.error(error)
        return
      }

      setLoading(true)
      contract.methods.uploadImage(result[0].hash).send({ from: account }).on('transactionHash', (hash) => {
        setLoading(false)
      })
    })
  }
  */

  return (
    <div className="App">
      
      <Router>
      <NavBar/>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path='/dashboard/:type' component={() => checkAuth("Dashboard")} />
          <Route path="/signup" component={Signup} />
          <Route path="/verification/:token" component={VerifyEmail} />
          <Route path="/signupdetails" component={() => checkAuth("FirstTimeLogin")} />
          <Route path='/search/:searchType' component={SearchContent} />
          <Route path ="/billing" component={()=>checkStore("billing")} />
          <Route path='/inventory' component={()=>checkStore("inventory")} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

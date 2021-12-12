import './App.css';
import Web3 from "web3";
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MedImpact from "./contracts/MedImpact.json";
import getWeb3 from "./getWeb3";
import Login from './views/Auth/Login/Login';
import Signup from './views/Auth/Signup/Signup';
import VerifyEmail from './views/Auth/VerifyEmail/VerifyEmail';
import Dashboard from './views/Dashboard/Dashboard';
import { getToken, getType } from './helpers/LocalStorageValidator';
import FirstTimeLogin from './components/FirstTimeLogin/FirstTimeLogin';
import Billing from './views/Billing/Billing';
import Inventory from './views/Inventory/Inventory';
import SearchContent from './views/Search/SearchContent';
import NavBar from './components/dashboard/StoreDashboard/NavBar';
import Invoice from './views/Invoice/Invoice';
import Home from './views/Landing/Home';
//import ipfsClient from 'ipfs-http-client';
import { create } from "ipfs-http-client";
import { HashRouter } from 'react-router-dom';

const client = create('https://ipfs.infura.io:5001/api/v0');

function App() {
  let token = getToken();
  let type = getType();
  const checkAuth = (type) => {
    if (token) {
      switch (type) {
        case 'Dashboard':
          return <Dashboard invoicesCount={invoicesCount} purchasesCount={purchasesCount} />
        case 'FirstTimeLogin':
          return <FirstTimeLogin addMedicalStore={addMedicalStore} />
      }
    }
    else {
      return <Login setup={setup} />
    }
  }
  const checkStore = (component) => {
    if (type === "Store") {
      if (component === "billing") {
        return <Billing />
      }
      else if (component === "inventory") {
        return <Inventory getMedicines={getMedicines} getBills={getBills} />
      }
      else if (component === "invoice") {
        return <Invoice addingMedicine={addingMedicine} retrieveFile={retrieveFile} handleUpload={handleUpload} />
      }
      else {
        return <Redirect to="dashboard/Donor" />
      }
    }
    else {
      return <Redirect to="/login" />
    }
  }

  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState();
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  //const [buffer, setBuffer] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [bills, setBills] = useState([]);
  const [file, setFile] = useState(null);
  //const [urlArr, setUrlArr] = useState([]);

  //const ipfsAPI = require('ipfs-api');
  //const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });

  const setup = async () => {
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
        "0x0FC72f1b810A6fE6ff2a585c1c250f640C1c7ACA",
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      setWeb3(web3);
      setAccounts(accounts);
      setContract(contract);

      setLoading(false);

      console.log("medicalStoresCount", contract?.methods?.medicalStoresCount().call());

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }

  useEffect(async () => {
    console.log("setup");
    setup();
  }, [])

  console.log("contract", contract);
  console.log("accounts", accounts);
  console.log("web3", web3);

  const addMedicalStore = async (ownerName, medicalStoreName, phoneno, ownerAddress) => {
    setLoading(true)
    contract?.methods?.addMedicalStore(ownerName, medicalStoreName, phoneno, ownerAddress).send({ from: account }).on('transactionHash', (hash) => {
      setLoading(false)
    })
    console.log("add medicine")
  }

  const addingMedicine = async (medicineName, rate, price, quantity, batchNo, manufactDate, expiryDate) => {
    console.log("medicineName", medicineName)
    setLoading(true)
    contract?.methods?.addMedicine(medicineName, rate, price, quantity, batchNo, manufactDate, expiryDate).send({ from: account }).on('transactionHash', (hash) => {
      setLoading(false)
    })

    // console.log("Submitting file to ipfs...")

    // //adding file to the IPFS
    // ipfs.files.add(buffer, (error, result) => {
    //   console.log('Ipfs result', result)
    //   if (error) {
    //     console.error(error)
    //     return
    //   }
    // })
  }

  const invoicesCount = async () => {
    console.log("contract", contract)
    const invoices = await contract?.methods.invoicesCount().call()
    console.log("invoices", invoices)
    return invoices;
  }

  const purchasesCount = async () => {
    console.log("contract", contract)
    const purchases = await contract?.methods?.purchasesCount()?.call()
    console.log("purchases", purchases)
    return purchases;
  }

  const getMedicines = async () => {
    const medicineCount = await contract?.methods?.medicineCountInMedicalStore(account).call();
    //console.log("medicineCount", medicineCount);
    setMedicines([]);
    for (let i = 1; i <= medicineCount; i++) {
      console.log("i", i)
      //const batchId = await contract?.methods?.batchIdOfMedicine(account, i).call();
      //console.log("in for batchId", batchId)
      const medicine = await contract?.methods?.myMedicines(account, i).call();
      //setMedicines([...medicines, medicine])
      setMedicines((prevState) => [...prevState, medicine])
      console.log("in for medicine", medicine)      
    }
    return medicines;
  }

  const getBills = async () => {
    const billCount = await contract?.methods?.myBillsCount(account).call();
    console.log("billCount", billCount);
    setBills([]);
    for (let i = 1; i <= billCount; i++) {
      console.log("i", i)
      const bill = await contract?.methods?.myBills(account, i).call();
      console.log("in for bill", bill)
      setBills((prevState) => [...prevState, bill])
    }
    return bills;
  }  


  // const captureFile = (e) => {

  //   e.preventDefault()
  //   const file = e.target.files[0]
  //   const reader = new FileReader()
  //   reader.readAsArrayBuffer(file)

  //   reader.onloadend = () => {
  //     setBuffer(Buffer(reader.result))
  //     console.log('buffer', buffer)
  //   }
  // }

  const retrieveFile = (e) => {
    e.preventDefault();
    const data = e.target.files[0];
    console.log(data);
    const reader = new window.FileReader();
    console.log(reader)
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      console.log("Buffer data: ", reader.result);
      setFile(reader.result);
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const created = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      //setUrlArr(prev => [...prev, url]);
      setLoading(true)
      contract?.methods?.addBills(url).send({ from: account }).on('transactionHash', (hash) => {
        setLoading(false)
      })


    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <div className="App">

      <HashRouter>
        <NavBar />
        <Switch>
          <Redirect exact from={'/'} to={'/home'} />
          <Route path={'/home'} component={Home} />
          <Route path="/login" component={Login} />
          <Route path='/dashboard/:type' component={() => checkAuth("Dashboard")} />
          <Route path="/signup" component={Signup} />
          <Route path="/verification/:token" component={() => { return <VerifyEmail /> }} />
          <Route path="/signupdetails" component={() => checkAuth("FirstTimeLogin")} />
          <Route path='/search/:searchType' component={SearchContent} />
          <Route path="/billing" component={() => checkStore("billing")} />
          <Route path='/inventory' component={() => checkStore("inventory")} />
          <Route path='/invoice' component={() => checkStore("invoice")} />
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;

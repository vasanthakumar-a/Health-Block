import React, { Component, useState, useEffect } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import AuthContract from './contracts/Auth.json';
import getWeb3 from "./getWeb3";

import { Home } from "./components/Home";
import { Form } from "./components/Form";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter as Router,	Routes, Route } from 'react-router-dom';
import OrganizationSidebar from "./components/OrganizationSidebar";
import { UserHome } from "./components/UserHome";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

class App extends Component {
  state = { web3: null, accounts: null, contract: null, auth: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      var networkId = await web3.eth.net.getId();
      var deployedNetwork = SimpleStorageContract.networks[networkId];
      var instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log("Deployed Simple");
      this.setState({ web3, accounts, contract: instance });
      // ##############

      deployedNetwork = AuthContract.networks[networkId];
      instance = new web3.eth.Contract(
        AuthContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log("Deployed Auth")
      this.setState({ auth: instance });
      
      // ##############

      
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Form data={JsonData.signup} formState={this.state} />} />
          <Route path="/signin" element={<Form data={JsonData.signin} formState={this.state}/>} />
          <Route path="/facility-signin" element={<Form data={JsonData.hospitalSignin}/>} formState={this.state} />
          <Route path="/facility-signup" element={<Form data={JsonData.hospitalSignup} formState={this.state}/>} />

          <Route path="/org-sidebar" element={<OrganizationSidebar />} />
          <Route path="/user-home" element={<UserHome />} />
        </Routes>
      </Router>
    </div>
    );
  }
}

export default App;

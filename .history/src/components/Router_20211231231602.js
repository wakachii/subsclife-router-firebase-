///Home画面
import React, { useState, useContext, useEffect } from 'react';
import { db } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import { BrowserRouter, BrowserRouter as Router, Route,Switch} from "react-router-dom";

import page404 from "./components/page404"
import AddSubscription from "./components/add-subscription"
import EditSubscription from "./components/edit-subscription";

{/*画面遷移*/}
const Routepages = () => {
  return (
<BrowserRouter>

  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/add-subscription/" component={AddSubscription} />
  <Route path="/edit-subscription/" component={EditSubscription} />
  <Route path="/404" component={page404} />
  <Route component={page404} />
  </Switch>
</BrowserRouter>
</Router>
)}
export default Routepages
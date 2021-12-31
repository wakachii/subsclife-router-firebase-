import React from "react";
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route,Switch} from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthProvider";

///pages
import Home from "./components/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import page404 from "./components/page404"
import AddSubscription from "./components/add-subscription"
import EditSubscription from "./components/edit-subscription";

const App = () => {
  return (
    <React
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>


    <BrowserRouter>
    </BrowserRouter>
  );
};

export default App;

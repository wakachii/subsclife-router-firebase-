import React from "react";
import firebase from "firebase/compat/app";
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route,Switch} from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthProvider";

///pages
import Home from "./components/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
// import page404 from "./components/editpages/page404"
// import AddSubscription from "./components/editpages/add-subscription"
// import EditSubscription from "./components/editpages/edit-subscription";

// export default App;
class App extends React.Component{
  render(){
  return (
    <div>
{/*ログイン・サインインの画面遷移*/}
     <AuthProvider>
       <Router>
         <Switch>
           <PrivateRoute exact path="/" component={Home} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/signup" component={SignUp} />
           {/* 以下でページ遷移もできます */}
            {/* <BrowserRouter> 
               <Router>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add-subscription/" component={AddSubscription} />
                <Route path="/edit-subscription/" component={EditSubscription} />
                <Route path="/404" component={page404} />
                <Route component={page404} />
                </Switch>
              </Router>
            </BrowserRouter> */}
         </Switch>
       </Router>
     </AuthProvider>

</div>
  );
};
}
export default App;

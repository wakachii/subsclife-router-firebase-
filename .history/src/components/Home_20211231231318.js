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
class Home extends React.Component{

   render(){

   
      return (


///jsx関連のエラーが出るので回避のためにreact.Fragmentを使用
    <React.Fragment>
        <div className="container">
         <h1>subsclife</h1>
         <h3 className="Home-subscriptionList">一覧表示</h3>
         <div className="my-3"><Link to="/add-subscription">新規登録</Link></div>
         <div className="my-4"><Link to="/edit-subscription">編集</Link></div>
         {/* <p>{this.props.location.state.subsc}</p> */}
        </div>
        <div>Home<button onClick={ () => firebase.auth().signOut() }>sign out</button></div>
    </React.Fragment>
      );
  }}export default Home

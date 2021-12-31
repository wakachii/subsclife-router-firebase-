import React, { useState, useContext, useEffect } from 'react';
import { db } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';
import firebase from "firebase/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
      return (
    <React.Fragment>
        <div className="container">
          <h1></>
         <h3 className="Home-subscriptionList">一覧表示</h3>
         <div className="my-3"><Link to="/add-subscription">新規登録</Link></div>
        </div>
    </React.Fragment>
      );
  }
}

export default Home;
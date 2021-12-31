import React, { useState, useContext, useEffect } from 'react';
import { db } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';
import firebase from "firebase/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import 

class Home extends React.Component {
  render() {
      return (

          <div>
            subsclife
          </div>
          <div className="container">
              <h3 className="text-center my-5">一覧表示</h3>
              <div className="my-3"><Link to="/create">新規登録</Link></div>
          </div>
      );
  }
}

export default Home;
///Home画面
import React, { useState, useContext, useEffect } from 'react';
import { db } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';


function Home(){
   const Netflix = {
    subscription_name: "Netflix",
    subscription_price: "990",
    subscription_url: "https://www.netflix.com/browse",
    subscription_picture: "t22189.jpg"
  }
  const AmazonPrime ={
    subscription_name: "AmazonPrime",
    subscription_price: "550",
    subscription_url: "https://www.amazon.co.jp/ref=nav_logo",
    subscription_picture: "t22189.jpg"
  }

  const [subsc,set]
   
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
        <div><button onClick={ () => firebase.auth().signOut() }>sign out</button></div>
    </React.Fragment>
      );
  }export default Home

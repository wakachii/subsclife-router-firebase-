///Home画面
import React, { useState, useContext, useEffect } from 'react';
import "./Home.css"
import firebase from "firebase/compat/app";
import "firebase/firestore";
// 画面遷移のためのimport
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Addition from './Addition';
import PieChart from './Piechart';


export default function Home() {

  Modal.setAppElement("#root");

  // モーダルのスタイル設定
  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0)"
    },
    content: {
      bottom: 0,
      borderRadius: "1rem",
      padding: "1.5rem",
      backgroundColor: "rgba(0,0,0)"
    }
  };
  return (
      <React.Fragment>
      <Header />
      <div><button className='sign_out_button' onClick={() => firebase.auth().signOut()}>sign out</button></div>
      <Addition name={'edit'} />
      <Main />
      
      <Footer />
    </React.Fragment>
  );
}

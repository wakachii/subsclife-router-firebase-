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
import 

export default function Home() {

  Modal.setAppElement("#root");

  return (
      <React.Fragment>
      <Header />
      <div className='buttons'>
      <button className='sign_out_button' onClick={() => firebase.auth().signOut()}>sign out</button></div>
      <Addition name={'edit'} />
      {/* <Main className='main' /> */}
      <Footer />
    </React.Fragment>
  );
}

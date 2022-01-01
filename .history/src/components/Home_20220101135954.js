///Home画面
import React, { useState, useContext, useEffect } from 'react';
import { db } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

function Home(){
  const [mypageIsOpen, mypageSetOpen] = React.useState(false);
  const [addmodalIsOpen, addmodalSetOpen] = React.useState(false);
  const [removemodalIsOpen, removemodalSetOpen] = React.useState(false);

  Modal.setAppElement("#root");
  const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0)"},
  content: {
    bottom: 0,
    borderRadius: "1rem",
    padding: "1.5rem",
    backgroundColor: "rgba(0,0,0)"
  }
};
      return (

///jsx関連のエラーが出るので回避のためにreact.Fragmentを使用
    <React.Fragment>
        <div className="container">
         <h1>subsclife</h1>
         <h3 className="Home-subscriptionList">一覧表示</h3>
          {/*ボタン*/}
        <button className='to_mypage' onClick={() => mypageSetOpen(true)}>My page</button>

{/*モーダル */}
<Modal isOpen={mypageIsOpen} style={modalStyle}>
  <h1 className='user_name'>use name</h1>
  <div>
   <button className='colsemypage' onClick={() => mypageSetOpen(false)}>home</button>
   <button className='logout_button'>logout</button>
  </div>
</Modal>
         {/* <div className="my-3"><Link to="/add-subscription">新規登録</Link></div>
         <div className="my-4"><Link to="/edit-subscription">編集</Link></div> */}
        </div>
       
    </React.Fragment>
      );
  }export default Home
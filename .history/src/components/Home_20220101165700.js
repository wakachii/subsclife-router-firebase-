///Home画面
import React, { useState, useContext, useEffect } from 'react';

import firebase from "firebase/compat/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Subscribe from './components/subscribe'

function Home() {
  const [mypageIsOpen, mypageSetOpen] = React.useState(false);
  const [addmodalIsOpen, addmodalSetOpen] = React.useState(false);
  const [removemodalIsOpen, removemodalSetOpen] = React.useState(false);

  Modal.setAppElement("#root");
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

    ///jsx関連のエラーが出るので回避のためにreact.Fragmentを使用
    <React.Fragment>
      <h1>subsclife</h1>
      <h3 className="Home-subscriptionList">一覧表示</h3>




      {/* ホーム */}
      {/*ボタン*/}
      <button className='to_mypage' onClick={() => mypageSetOpen(true)}>My page</button>

      {/*モーダル */}
      <Modal isOpen={mypageIsOpen} style={modalStyle}>
        <h1 className='user_name'>use name</h1>
        <div>
          <button className='colsemypage' onClick={() => mypageSetOpen(false)}>home</button>
          <div><button onClick={() => firebase.auth().signOut()}>sign out</button></div>
        </div>
      </Modal>
      {/* <div className="my-3"><Link to="/add-subscription">新規登録</Link></div>
         <div className="my-4"><Link to="/edit-subscription">編集</Link></div> */}



      {/* 追加 */}
      {/*ボタン*/}
      <button className='add' onClick={() => addmodalSetOpen(true)}>add subscribe</button>
      {/*モーダル*/}
      <Modal isOpen={addmodalIsOpen} style={modalStyle}>
        <h1 className='add_subscription'>add subscription</h1>
        <button className='closeadd' onClick={() => addmodalSetOpen(false)}>home</button>

        <div className='candidates'>
          <div>
            <h1>amazon prime</h1>
            <h1>abemaTV</h1>
            <h1>Disny+</h1>
            <h1>Hulu</h1>
          </div>
          <div>
            <h1>Spotify</h1>
            <h1>Youtube Premium</h1>
            <h1>apple music</h1>
          </div>
          <button type="add" className='add'>add</button>
        </div>
      </Modal>



      {/* 削除 */}
      {/*削除モーダルボタン*/}
      <button className='remove' onClick={() => removemodalSetOpen(true)}>remove subscribe</button>
      {/*削除モーダル*/}
      <Modal isOpen={removemodalIsOpen} style={modalStyle}>
        <h1 className='remove_subscription'>remove subscription</h1>
        <button className='closeremove' onClick={() => removemodalSetOpen(false)}>home</button>
      </Modal>


      {/*合計金額*/}
      <h1 className='total'><div className='cost'>¥990</div>your total</h1>
      <div><Subscribe/></div>
    </React.Fragment>
  );
} export default Home

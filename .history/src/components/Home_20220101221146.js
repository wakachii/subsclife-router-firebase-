///Home画面
import React, { useState, useContext, useEffect } from 'react';
import "./Home.css"
import firebase from "firebase/compat/app";
import "firebase/firestore";
// 画面遷移のためのimport
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export default function Home() {
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
      <h1>一覧表示</h1>


      {/* mypage関連*/}
      {/*ボタン*/}
      <button className='to_mypage_button' onClick={() => mypageSetOpen(true)}>My page</button>

      {/*モーダル */}
      <Modal isOpen={mypageIsOpen} style={modalStyle}>
        <h1>my page</h1>

          <button className='close_mypage_button' onClick={() => mypageSetOpen(false)}>home</button>
          <div><button className='sign_out_button' onClick={() => firebase.auth().signOut()}>sign out</button></div>
      </Modal>
      {/* 画面遷移もできる(使わなかったら削除してください) */}
      {/* <div className="my-3"><Link to="/add-subscription">新規登録</Link></div>
         <div className="my-4"><Link to="/edit-subscription">編集</Link></div> */}



      {/* 追加モーダル関連*/}
      {/*ボタン*/}
      <button className='to_addmodal_button' onClick={() => addmodalSetOpen(true)}>add subscribe</button>
      {/*モーダル*/}
      <Modal isOpen={addmodalIsOpen} style={modalStyle}>
        <h1>add subscription</h1>
        <button className='close_addmodal_button' onClick={() => addmodalSetOpen(false)}>home</button>

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
          <button type="add" className='addmodal_add_button'>add</button>
        </div>
      </Modal>



      {/* 削除 */}
      {/*削除モーダルボタン*/}
      <button className='to_removemodal_button' onClick={() => removemodalSetOpen(true)}>remove subscribe</button>
      {/*削除モーダル*/}
      <Modal isOpen={removemodalIsOpen} style={modalStyle}>
        <h1>remove subscription</h1>
        <button className='close_removemodal_button' onClick={() => removemodalSetOpen(false)}>home</button>
      </Modal>


      {/*合計金額*/}
      <h1 className='total_price'>¥990your total</h1>


      {/* この後のサブスク管理のところは保留中 */}
      {/* <div><Subscribe/></div> */}
    </React.Fragment>
  );
}

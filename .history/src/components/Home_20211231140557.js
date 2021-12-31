import React, { useState, useContext, useEffect } from 'react';
import { db } from "../firebase/Firebase";
import { AuthContext } from '../auth/AuthProvider';
import firebase from "firebase/app";
import "firebase/firestore";

export default function Home(){

  return(
    <div>
      Home
    </div>
  )
}

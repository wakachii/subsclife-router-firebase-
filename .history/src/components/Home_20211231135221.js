import React, { useState, useContext, useEffect } from 'react';
import { db } from "../firebase/Firebase";

import { AuthContext } from '../auth/AuthProvider';
import { totalCalc } from './TotalIncome';
import firebase from "firebase/app";
import "firebase/firestore";

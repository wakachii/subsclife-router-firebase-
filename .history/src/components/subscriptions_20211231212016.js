///firebaseと接続してsubscriptionを編集するcontext
import React,{useState,useContext,useCallback,useMemo,createContext} from "react";
import { AuthContext } from './auth'
import { db } from '../utils/firebase'




const [subscriptionData, setSubscriptionData]

const { currentUser } = useContext(AuthContext)

const collection = useMemo(() => {
  const col = db.collection('subscriptionData')

  // 更新イベント監視
  col.where('uid', '==', currentUser.uid).onSnapshot(query => {
    const data = []
    query.forEach(d => data.push({ ...d.data(), docId: d.id }))
    setTodos(data)
  })

  return col
}, [])

const add = useCallback(async data => {
  await collection.add({
    uid: currentUser.uid,
    data,
    isComplete: false,
    createdAt: new Date(),
  })
}, [])
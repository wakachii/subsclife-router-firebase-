///firebaseと接続してsubscriptionを編集するcontext
import React,{useState,useContext,useCallback,use} from "react";
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

const add = useCallback(async text => {
  await collection.add({
    uid: currentUser.uid,
    text,
    isComplete: false,
    createdAt: new Date(),
  })
}, [])
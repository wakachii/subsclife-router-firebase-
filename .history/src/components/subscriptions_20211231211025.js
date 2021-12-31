///firebaseと接続してsubscriptionを編集するcontext
import React,{useState,} from "react";
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
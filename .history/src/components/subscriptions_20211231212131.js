///firebaseと接続してsubscriptionを編集するcontext
import React,{useState,useContext,useCallback,useMemo,createContext} from "react";
import { AuthContext } from './auth'
import { db } from '../utils/firebase'





const SubscriptionContext = createContext()

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const { currentUser } = useContext(AuthContext)

  const collection = useMemo(() => {
    const col = db.collection('todos')

    // 更新イベント監視
    col.where('uid', '==', currentUser.uid).onSnapshot(query => {
      const data = []
      query.forEach(d => data.push({ ...d.data(), docId: d.id }))
      setTodos(data)
    })

    return col
  }, [])
///firebaseと接続してsubscriptionを編集するcontext
import React,{useState,useContext,useCallback,useMemo,createContext} from "react";
import { AuthContext } from './auth'
import { db } from '../utils/firebase'



const SubscriptionContext = createContext()

const todosProvider = ({ children }) => {
  const [subscriptionData, setSubscriptionData] = useState([])
  const { currentUser } = useContext(AuthContext)

  const collection = useMemo(() => {
    const col = db.collection('subscription')

    // 更新イベント監視
    col.where('uid', '==', currentUser.uid).onSnapshot(query => {
      const data = []
      query.forEach(d => data.push({ ...d.data(), docId: d.id }))
      setSubscriptionData(data)
    })

    return col
  }, [])
  const add = useCallback(async text => {
    try {
      await collection.add({
        uid: currentUser.uid,
        text,
        isComplete: false,
        createdAt: new Date(),
      })
    } catch (e) {
      console.log(e)
    }
  }, [])

  const update = useCallback(
    async ({ docId, text, isComplete }) => {
      const updateTo = {
        ...todos.find(t => t.docId === docId),
        text,
        isComplete,
      }
      if (isComplete) {
        updateTo.completedAt = new Date()
      }
      try {
        await collection.doc(docId).set(updateTo)
      } catch (e) {
        console.log(e)
      }
    },
    [todos]
  )

  const remove = useCallback(
    async ({ docId }) => {
      try {
        await collection.doc(docId).delete()
      } catch (e) {
        console.log(e)
      }
    },
    [todos]
  )

  return (
    <TodosContext.Provider value={{ todos, add, update, remove }}>
      {children}
    </TodosContext.Provider>
  )
}

export { TodosContext, TodosProvider }
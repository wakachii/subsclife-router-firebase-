///firebaseと接続してsubscriptionを編集するcontext
import React,{useState,useContext,useCallback,useMemo,createContext} from "react";
import { AuthContext } from './auth'
import { db } from '../utils/firebase'



const SubscriptonContext = createContext()

const SubscriptionProvider = ({ children }) => {
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
  const add = useCallback(async subsc => {
    try {
      await collection.add({
        uid: currentUser.uid,
        subsc,
        isComplete: false,
        createdAt: new Date(),
      })
    } catch (e) {
      console.log(e)
    }
  }, [])

  const update = useCallback(
    async ({ docId, subsc, isComplete }) => {
      const updateTo = {
        ...todos.find(t => t.docId === docId),
        subsc,
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
    [subscriptionData]
  )

  const remove = useCallback(
    async ({ docId }) => {
      try {
        await collection.doc(docId).delete()
      } catch (e) {
        console.log(e)
      }
    },
    []
  )

  return (
    <TodosContext.Provider value={{ todos, add, update, remove }}>
      {children}
    </TodosContext.Provider>
  )
}

export { SubscriptonContext, SubscriptionProvider }
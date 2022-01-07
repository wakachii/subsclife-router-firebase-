import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Login from "./Login";

const PrivateRoute = ({ component, ...rest}) => {
  const { currentUser } = useContext(AuthContext);
  //AuthContextからcurrentUserを受け取る

  const Component = currentUser ? component : Login;
  //currentUserがtrueの場合component＝Home、falseならLoginコンポーネントにroute

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;





    var userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
    if (!userDoc.exists) {
      // Firestore にユーザー用のドキュメントが作られていなければ作る
      await userDoc.ref.set({
        screen_name: user.uid,
        display_name: '名無しさん',
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
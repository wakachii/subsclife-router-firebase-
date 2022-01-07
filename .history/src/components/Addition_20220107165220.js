import React,{useEffect,useContext,useMemo} from 'react';
import MainContents from './MainContents';
import "./Addition.css"
import PieGraph from './Piegraph'
// import firebase from 'firebase/compat';
import { db } from '../firebase/Firebase';
import firebase from 'firebase/compat/app';
import { AuthContext } from '../auth/AuthProvider';
import { doc, getDoc,collection, addDoc,setDoc,onSnapshot,updateDoc} from "firebase/firestore";
import firestore from 'firestore';

import "firebase/firestore";

export const SelectedContext = React.createContext();


const Addition = (props) => {


    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [selected, setSelected] = React.useState([]);


     useEffect(function(){
        firebase.firestore().collection("checkbox").doc(uid).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              items.push(doc.data());
            });
          });
        setSelected({ items: items });
        })


    const { currentUser } = useContext(AuthContext)
    let user = currentUser;
    let uid = user.uid;


    const onClickAdd = async() => {

        try {
          const docRef =  doc(db, "checkbox",uid)
          setDoc(docRef,          {
            checked:selected,
            uid: uid
          },{ capital: true }, { merge: true });

          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        handleCloseModal()
      }
    


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (event) => {
        if (selected.includes(event.target.value)) {
            setSelected(selected.filter(item => item !== event.target.value));
        }
        else {
            setSelected([...selected, event.target.value]);

        }
    };

    let modal;

    if (isModalOpen === true) {
        modal = (
            <div className='modal-addition'>
                <div className='modal-inner'>
                    <button onClick={onClickAdd}>save</button>
                    <div className='modal-info'>
                        <label>
                            <input
                                type="checkbox"
                                value="Amazon Prime"
                                onChange={handleChange}
                                checked={selected.includes('Amazon Prime')}
                            />
                            Amazon Prime
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Youtube Premium"
                                onChange={handleChange}
                                checked={selected.includes('Youtube Premium')}
                            />
                            Youtube Premium
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Netflix"
                                onChange={handleChange}
                                checked={selected.includes('Netflix')}
                            />
                            Netflix
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="U-NEXT"
                                onChange={handleChange}
                                checked={selected.includes('U-NEXT')}
                            />
                            U-NEXT
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Disney+"
                                onChange={handleChange}
                                checked={selected.includes('Disney+')}
                            />
                            Disney+
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Apple Music"
                                onChange={handleChange}
                                checked={selected.includes('Apple Music')}
                            />
                            Apple Music
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Spotify"
                                onChange={handleChange}
                                checked={selected.includes('Spotify')}
                            />
                            Spotify
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Kindle Unlimited"
                                onChange={handleChange}
                                checked={selected.includes('Kindle Unlimited')}
                            />
                            Kindle Unlimited
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Microsoft 365"
                                onChange={handleChange}
                                checked={selected.includes('Microsoft 365')}
                            />
                            Microsoft 365
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Google Workspace"
                                onChange={handleChange}
                                checked={selected.includes('Google Workspace')}
                            />
                            Google Workspace
                        </label>
                        <br/>

                        <label>
                            <input
                                type="checkbox"
                                value="Progate"
                                onChange={handleChange}
                                checked={selected.includes('Progate')}
                            />
                            Progate
                        </label>
                        <br/>
                    </div>

                    <button
                        className='modal-close-btn'
                        onClick={() => {handleCloseModal()}}
                    >
                        close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <button className='add-item-btn' onClick={() => handleOpenModal()}>{props.name}</button>

            <SelectedContext.Provider value={selected}>
                <MainContents />
                <PieGraph />
            </SelectedContext.Provider>
            {modal}
        </>
    );
}

export default Addition;
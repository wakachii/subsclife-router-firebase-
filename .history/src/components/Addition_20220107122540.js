import React,{useEffect,useContext} from 'react';
import MainContents from './MainContents';
import "./Addition.css"
import PieGraph from './Piegraph'
// import firebase from 'firebase/compat';
import { db } from '../firebase/Firebase';
import firebase from 'firebase/compat/app';
import { AuthContext } from '../auth/AuthProvider';

import "firebase/firestore";

export const SelectedContext = React.createContext();


const Addition = (props) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [selected, setSelected] = React.useState([]);
    const { currentUser } = useContext(AuthContext)


    useEffect (() => {
        getSubscData();}, []);

          //firebase subscData
    const getSubscData = () => {
    const subscData = db.collection('checkbox')
    subscData.where('uid', '==', currentUser.uid).onSnapshot(query => {
      const selected = []
      query.forEach(doc => selected.push({...doc.data(), docId: doc.id}))
      setSelected(selected);
    })
  }
  const Savedata= (props) => {
    const docId = Math.random().toString(32).substring(2);
    const date = firebase.firestore.Timestamp.now();
    db.collection('incomeItems').doc(docId).set({
      uid: currentUser.uid,
      checked: selected,
      date,
    })
    .then(response => {
      setSelected([
        ...selected, {checked:selected, docId: docId , date: date}
      ]); 
    })
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
            Savedata()
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
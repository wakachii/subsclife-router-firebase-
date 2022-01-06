import React from 'react';
import MainContents from './MainContents';
import

export const SelectedContext = React.createContext();

const Addition = (props) =>
{
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [selected, setSelected] = React.useState([]);

    const handleOpenModal = () =>
    {
        setIsModalOpen(true);
    };

    const handleCloseModal = () =>
    {
        setIsModalOpen(false);
    };

    const handleChange = (event) =>
    {
        if (selected.includes(event.target.value))
        {
          setSelected(selected.filter(item => item !== event.target.value));
        }
        else
        {
          setSelected([...selected, event.target.value]);
        }
    };

    let modal;
    
    if(isModalOpen === true)
    {
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

                        <label>
                            <input
                                type="checkbox"
                                value="Youtube Premium"
                                onChange={handleChange}
                                checked={selected.includes('Youtube Premium')}
                            />
                            Youtube Premium
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Netflix"
                                onChange={handleChange}
                                checked={selected.includes('Netflix')}
                            />
                            Netflix
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="U-NEXT"
                                onChange={handleChange}
                                checked={selected.includes('U-NEXT')}
                            />
                            U-NEXT
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="a"
                                onChange={handleChange}
                                checked={selected.includes('a')}
                            />
                            a
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="b"
                                onChange={handleChange}
                                checked={selected.includes('b')}
                            />
                            b
                        </label>
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

    return(
        <>
            <button className='add-item-btn' onClick={() => handleOpenModal()}>{props.name}</button>

            <SelectedContext.Provider value={selected}>
                <MainContents />
            </SelectedContext.Provider>

            {modal}
        </>
    );
}

export default Addition;
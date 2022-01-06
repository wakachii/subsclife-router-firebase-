import React from 'react';
import MainContents from './MainContents';
import "./Addition.css"

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const SelectedContext = React.createContext();

const Addition = (props) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [selected, setSelected] = React.useState([]);

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
                                value="Disney+"
                                onChange={handleChange}
                                checked={selected.includes('Disney+')}
                            />
                            Disney+
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Apple Music"
                                onChange={handleChange}
                                checked={selected.includes('Apple Music')}
                            />
                            Apple Music
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Spotify"
                                onChange={handleChange}
                                checked={selected.includes('Spotify')}
                            />
                            Spotify
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Kindle Unlimited"
                                onChange={handleChange}
                                checked={selected.includes('Kindle Unlimited')}
                            />
                            Kindle Unlimited
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Microsoft 365"
                                onChange={handleChange}
                                checked={selected.includes('Microsoft 365')}
                            />
                            Microsoft 365
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Google Workspace"
                                onChange={handleChange}
                                checked={selected.includes('Google Workspace')}
                            />
                            Google Workspace
                        </label>
                    </div>

                    <button
                        className='modal-close-btn'
                        onClick={() => { handleCloseModal() }}
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
            </SelectedContext.Provider>

            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={1000} height={1000}>
                    <Pie
                        data={selected.values}
                        cx="100%"
                        cy="100%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="price">
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            {modal}
        </>
    );
}

export default Addition;
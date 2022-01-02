import React from 'react';

const Addition = (props) =>
{
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOpenModal = () =>
    {
        setIsModalOpen(true);
    }

    const handleCloseModal = () =>
    {
        setIsModalOpen(false);
    }

    let modal;
    
    if(isModalOpen === true)
    {
        modal = (
            <div className='modal-addition'>
                <div className='modal-inner'>
                    <div className='modal-header'>
                        
                    </div>
                    <div className='modal-info'>
                        
                    </div>
                    <button
                        className='modal-close-btn'
                        onClick={() => handleCloseModal()}
                    >
                        close</button>
                </div>
            </div>
        );
    }

    return(
        <>
            <p className='add-item-btn' onClick={() => handleOpenModal()}>{props.name}</p>

            {modal}
        </>
    );
}

export default Addition;
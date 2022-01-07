import React from 'react';
import "T"

const Item = (props) =>
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
            <div className='modal'>
                <div className='modal-inner'>
                    <div className='modal-header'>
                        <p className='modal-name'>{props.name}</p>
                    </div>
                    <div className='modal-info'>
                        <p>Price : ¥ {props.price} per month</p>
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
            <div className='item-card' onClick={() => handleOpenModal()}>
                 <p className='item-name'>{props.name}</p>
                 <p className='item-price'>¥ {props.price}</p>
            </div>

            {modal}
        </>
    );
};

export default Item;
import React from 'react';

const TotalAmount = (props) =>
{
    return(
        <p className='total-amount'>¥ {props.totalAmount} / month</p>
    );
};

export default TotalAmount;
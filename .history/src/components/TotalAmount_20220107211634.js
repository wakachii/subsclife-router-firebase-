import React from 'react';
import "TotalAmount"

const TotalAmount = (props) =>
{
    return(
        <p className='total-amount'>¥ {props.totalAmount} / month</p>
    );
};

export default TotalAmount;
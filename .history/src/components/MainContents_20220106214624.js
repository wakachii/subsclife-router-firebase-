import React from 'react';
import TotalAmount from './TotalAmount';
import Item from './Item';
import {SelectedContext} from './Addition';

const MainContents = (props) =>
{
    const itemList = [
        {
            name: 'Amazon Prime',
            price: 500
        },
        {
            name: 'Youtube Premium',
            price: 1180
        },
        {
            name: 'Netflix',
            price: 1490
        },
        {
            name: 'U-NEXT',
            price: 2189
        }
    ];

    const selected = React.useContext(SelectedContext);

    const sumPrice = () =>
    {
        let sum = 0;
        for(let i = 0; i < itemList.length; i++)
        {
            sum += itemList[i].price;
        }

        return sum;
    }

    let items = [];

    for(let i = 0; i < selected.length; i++)
    {
        items = [...items, (<Item name={selected[i]}/>)];
    }

    return(
        <>
            <TotalAmount totalAmount={sumPrice()}/>

            <div className='card-box'>
                {items}
            </div>
        </>
    );
};

export default MainContents;
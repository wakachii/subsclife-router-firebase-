import React from 'react';
import TotalAmount from './TotalAmount';
import Item from './Item';

const Main = (props) =>
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

    const itemList2 = [
        {
            name: 'Disney+',
            price: 990
        },
        {
            name: 'Kindle Unlimited',
            price: 980
        },
        {
            name: 'Microsoft 365',
            price: 1284
        },
        {
            name: 'Google Workspace',
            price: 680
        }
    ];

    const sumPrice = () =>
    {
        let sum = 0;
        for(let i = 0; i < itemList.length; i++)
        {
            sum += itemList[i].price;
        }

        for(let i = 0; i < itemList2.length; i++)
        {
            sum += itemList2[i].price;
        }

        return sum;
    }

    return(
        <>
            <div className='main-wrapper'>
                <div className='container'>
                    <TotalAmount totalAmount={sumPrice()}/>

                    <div className='card-box'>
                    {
                        itemList.map((item) =>
                        {
                            return(
                                <Item name={item.name} price={item.price}/>
                            );
                        })
                    }
                    </div>

                    <div className='card-box'>
                    {
                        itemList2.map((item) =>
                        {
                            return(
                                <Item name={item.name} price={item.price}/>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
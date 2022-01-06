import React from 'react';
import TotalAmount from './TotalAmount';
import Item from './Item';




const MainContents = (props) => {
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

  const sumPrice = () => {
    let sum = 0;
    for (let i = 0; i < itemList.length; i++) {
      sum += itemList[i].price;
    }

    return sum;
  }

  let items = [];
  let price = [];

  for (let i = 0; i < selected.length; i++) {
    switch (selected[i]) {
      case 'Amazon Prime':
        price[i] = 500;
        break;

      case 'Youtube Premium':
        price[i] = 1180;
        break;

      case 'Netflix':
        price[i] = 1490;
        break;

      case 'U-NEXT':
        price[i] = 2189;
        break;

      case 'Disney+':
        price[i] = 990;
        break;

      case 'Apple Music':
        price[i] = 980;
        break;

      case 'Spotify':
        price[i] = 1280;
        break;

      case 'Kindle Unlimited':
        price[i] = 980;
        break;

      case 'Microsoft 365':
        price[i] = 1284;
        break;

      case 'Google Workspace':
        price[i] = 680;
        break;
    }

    items = [...items, (<Item name={selected[i]} price={price[i]} />)];
  }


  return (
    <>
      <TotalAmount totalAmount={sumPrice()} />

      <div className='card-box'>
        {items}
      </div>

import { SelectedContext } from './Addition';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={1000} height={1000}>
          <Pie
            data={items}
            cx="100%"
            cy="100%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey={price}>
          </Pie>
        </PieChart>
      </ResponsiveContainer>



    </>
  );
};

export default MainContents;
import React from 'react';
import TotalAmount from './TotalAmount';
import Item from './Item';
import { SelectedContext } from './Addition';
import PieGraph from './Piegraph';


const MainContents = (props) => {

  const selected = React.useContext(SelectedContext);

  let sum = 0;
  let items = [];
  let price = [];


  for(let i = 0; i < selected.length; i++)
  {
      
      switch(selected[i])
      {
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

          case 'Progate':
              price[i] = 1078;
              break;

          default:
              break;
      }

    items = [...items, (<Item name={selected[i]} price={price[i]} />)];
    sum += price[i];
  }

  return (
    <>
    
      <TotalAmount totalAmount={sum} />
      <PieGraph />
      <div className='card-box'>
        {items}
      </div>
    </>
  );
};

export default MainContents;
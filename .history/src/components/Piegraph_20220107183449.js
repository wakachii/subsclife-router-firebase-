import { SelectedContext } from './Addition';
import { PieChart, Pie, Text, ResponsiveContainer } from 'recharts'
import React from 'react';
import Item from './Item';

const  PieGraph = (props) => {

  const selected = React.useContext(SelectedContext);


  let price = [];
  let data = [{}];

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
      data.push({name:selected[i],price:price[i]})
      
  }
console.log(data)
  return (
    <>
      <PieChart width={1000} height={270}>
           <Pie data={data} dataKey="price" cx="600" cy="150" outerRadius={100} fill="#98FB98" label/>
     </PieChart>
    </>
  );
};

export default PieGraph;
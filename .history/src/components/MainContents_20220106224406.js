import React from 'react';
import TotalAmount from './TotalAmount';
import Item from './Item';
import { SelectedContext } from './Addition';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';








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

  ///円グラフ
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  return (
    <>
      <TotalAmount totalAmount={sumPrice()} />

      <div className='card-box'>
        {items}
      </div>


      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default MainContents;
import { SelectedContext } from './Addition';
import { PieChart, Pie, Text, ResponsiveContainer } from 'recharts'
import React from 'react';
import Item from './Item';
import { namedQuery } from 'firebase/firestore';

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
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


//   const label = ({ name, value, cx, x, y }) => {
//     const textAnchor = x > cx ? "start" : "end";
//     return (
//       <>
//     {/* 引数で付属情報を受け取れます */}

//         {/* <Text x={x} y={y} fill="#82ca9d">{value}</Text>
//         <Text x={x} y={y} textAnchor={textAnchor} dominantBaseline="hanging" fill="#82ca9d">{name}</Text>
//       </> */}
//     )
//   }
  
     console.log(data)
  return (
    <>
      {/* <PieChart width={1000} height={260}>
           <Pie data={data} dataKey="price" cx="600" cy="130" outerRadius={100} fill="#98FB98" label={label}/>
     </PieChart> */}
     <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default PieGraph;
// import React, { useState } from 'react';

// export default function Subscribe() {
//   const initalState = [{
//     subscname: "Netflix",
//     pictureurl: "522189.jpg",
//     price: "990",
//     url: "https://www.netflix.com/browse"}
//   ]
//   const [subscriptions, setSubscribe] = useState(initalState);

//   return (
//       <button className='subsc'>
//         <div>
//          {subscriptions.map((subscription,index)=>(
//          <h1 key={index}>{subscription.subscname}</h1>
//         ))}</div>
//         <div>
//         {subscriptions.map((subscription,index)=>(
//          <h5 key={index}>{subscription.price}/month</h5>))}
//         </div>
//      </button>
//     );
  
// }
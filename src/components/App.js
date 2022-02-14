// 4

// 4.1

// function App() {
//   return (
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//   );
// }
// export default App;

// 4.2

// function App() {
//   return (
//     <>
//       <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li>text3</li>
//       </ul>
//       <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li>text3</li>
//       </ul>
//       ;
//     </>
//   );
// }
// export default App;

// 4.3

// function App() {
//   return <input />;
// }

// 4.4
// function App() {
//   return (
//     <>
//       <input />
//       <input />
//       <input />;
//     </>
//   );
// }

// 5.1

// function App() {
//   const str1 = 'text1';
//   const str2 = 'text1';

//   return (
//     <div>
//       <p>{str1}</p>
//       <p>{str2}</p>
//     </div>
//   );
// }

// 5.2

// function App() {
//   const name = 'user';
//   const age = '30';

//   return (
//     <div>
//       name: {name}
//       age: {age}
//     </div>
//   );
// }
// function App() {
//   const name = 'john';
//   const surname = 'smit';

//   return <div>result: {name + ' ' + surname}</div>;
// }
// export default App;

// 5.4
// function App() {
//   const name = 'john';
//   const surname = 'smit';

//   return <div>result: {name + ' ' + surname}</div>;
// }

// 5.5

// function App() {
//   const num = 4;

//   return <div>result: {Math.sqrt(num)}</div>;
// }

// 5.6

// const App = () => {
//   const arr = [1, 2, 3, 4, 5];

//   return (
//     <>
//       <ul>
//         <li>{arr[0]}</li>
//         <li>{arr[1]}</li>
//         <li>{arr[2]}</li>
//         <li>{arr[3]}</li>
//         <li>{arr[4]}</li>
//       </ul>
//     </>
//   );
// };

// 5.7

// function App() {
//   const obj = { name: 'john', surname: 'smit' };

//   return (
//     <>
//       <p>
//         name: <span>{obj.name}</span>, surname: <span>{obj.surname}</span>,
//       </p>
//     </>
//   );
// }

// 6.1

// function App() {
//   const li1 = <li>text1</li>;
//   const li2 = <li>text2</li>;
//   const li3 = <li>text3</li>;
//   return (
//     <ul>
//       {li1}
//       {li2}
//       {li3}
//     </ul>
//   );
// }

// 6.2

// function App() {
//   const items = (
//     <>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </>
//   );

//   return <ul>{items}</ul>;
// }

// 7.1

// function App() {
//   const attr = 'block';

//   return <div id={attr}>text</div>;
// }

// 7.2

// function App() {
//   const attr = 'block';

//   return <div className={attr}>text</div>;
// }

// 7.3

// function App() {
//   const class1 = 'block1';
//   const class2 = 'block2';

//   return (
//     <div>
//       <p className={class1}>text</p>
//       <p className={class2}>text</p>
//     </div>
//   );
// }

// 7.4

// function App() {
//   const str1 = 'label';
//   const str2 = 'block';
//   const str3 = 'elem';

//   return (
//     <div>
//       <label id={str1} htmlFor={str2} className={str3}>
//         text
//       </label>{' '}
//       <br></br>
//       <input id={str2} />
//     </div>
//   );
// }

// 8.1

// function App() {
//   let text;
//   const isAdult = true;

//   if (isAdult) {
//     text = <p>18</p>;
//   } else text = <>No</>;

//   return <>{text}</>;
// }

// function App() {
//   let table = '';
//   const isAdmin = true;

//   if (isAdmin) {
//     table = (
//       <tr>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//       </tr>
//     );
//   }

//   return <>{table}</>;
// }

// 10.1

// function App() {
//   function getDigitsSum(num) {
//     let sum = 0;
//     let newNum = String(num);
//     for (let i = 0; i < newNum.length; i++) {
//       sum += Number(newNum[i]);
//     }
//     return sum;
//   }

//   return <div>{getDigitsSum(123)}</div>;
// }

// 10.2
// function App() {
//   function getDigitsSum(num) {
//     let sum = 0;
//     let newNum = String(num);
//     for (let i = 0; i < newNum.length; i++) {
//       sum += Number(newNum[i]);
//     }
//     return sum;
//   }

//   return <div>{getDigitsSum(12345)}</div>;
// }

// 11.1

// function App() {
//   function show1() {
//     alert(1);
//   }

//   function show2() {
//     alert(2);
//   }

//   return (
//     <div>
//       <button onClick={show1}>act1</button>
//       <button onClick={show2}>act2</button>
//     </div>
//   );
// }

// 11.2

// function App() {
//   function showNumber(num) {
//     alert(num);
//     }

//   return (
//     <div>
//       <button onClick={() => showNumber(1)}>act1</button>
//       <button onClick={() => showNumber(3)}>act2</button>
//       <button onClick={() => showNumber(2)}>act3</button>
//     </div>
//   );
// }

// 12.1
// function App() {
//   function func(event) {
//     console.log(event); // объект с событием
//   }

//   return (
//     <div>
//       <button onClick={func}>act</button>
//     </div>
//   );
// }

// export default App;

// 12.2

// function App() {
//   function func(event) {
//     console.log(event.target); // объект с событием
//   }

//   return (
//     <div>
//       <button onClick={func}>act</button>
//     </div>
//   );
// }

// 12.4
// function App() {
//   function func(arg, event) {
//     console.log(arg, event);
//   }

//   return (
//     <div>
//       <button onClick={event => func('eee', event)}>act</button>
//     </div>
//   );
// }

// 12.5

// function App() {
//   function func(event, arg) {
//     console.log(event, arg);
//   }

//   return (
//     <div>
//       <button onClick={event => func(event, 'eee')}>act</button>
//     </div>
//   );
// }

// 13.1
// function App() {
//   const arr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>];

//   return <>{arr}</>;
// }

// 13.2

// function App() {
//   const arr = [];

//   for (let i = 1; i < 6; i += 1) {
//     arr.push(<p>{i}</p>);
//   }

//   return <>{arr}</>;
// }

// 13.3-13.4

// function App() {
//   const arr = ['a', 'b', 'c', 'd', 'e'];

//   const res = arr.map(elem => <p>{elem}</p>);

//   return <>{res}</>;
// }

// function App() {
//   const arr = ['a', 'b', 'c', 'd', 'e'];

//   const res = arr.map((elem, idx) => <p key={idx}>{elem}</p>);

//   return <>{res}</>;
// }

// 14.1

// const users = [
//   { name: 'user1', surn: 'surn1', age: 30 },
//   { name: 'user2', surn: 'surn2', age: 31 },
//   { name: 'user3', surn: 'surn3', age: 32 },
// ];

// function App() {
//   const res = users.map((user, index) => (
//     <p key={index}>
//       <span>{user.name}</span> : <span>{user.surn}</span> :
//       <span>{user.age}</span>
//     </p>
//   ));

//   return <>{res}</>;
// }

// 14.2

// const users = [
//   { name: 'user1', surn: 'surn1', age: 30 },
//   { name: 'user2', surn: 'surn2', age: 31 },
//   { name: 'user3', surn: 'surn3', age: 32 },
// ];

// function App() {
//   const res = users.map((user, index) => (
//     <p key={index}>
//       <span>{user.name}</span> : <span>{user.surn}</span> :
//       <span>{user.age}</span>
//     </p>
//   ));

//   return <>{res}</>;
// }

// export default App;

// 14.3
// const users = [
//   { id: 1, name: 'user1', surn: 'surn1', age: 30 },
//   { id: 2, name: 'user2', surn: 'surn2', age: 31 },
//   { id: 3, name: 'user3', surn: 'surn3', age: 32 },
// ];
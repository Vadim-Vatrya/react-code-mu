// import { nanoid } from 'nanoid';
// import uuid from 'react-uuid';
import { useState } from 'react';

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

// 15.1

// function App() {
//   const users = [
//     { id: 1, name: 'user1', surn: 'surn1', age: 30 },
//     { id: 2, name: 'user2', surn: 'surn2', age: 31 },
//     { id: 3, name: 'user3', surn: 'surn3', age: 32 },
//   ];
//   const res = users.map((user, index) => (
//     <tr key={users.id}>
//       <td>{user.name}</td>
//       <td>{user.surn}</td>
//       <td>{user.age}</td>
//     </tr>
//   ));

//   return (
//     <table>
//       <thead>
//         <tr>
//           <td>ФИО</td>
//           <td>Имя</td>
//           <td>Возраст</td>
//         </tr>
//       </thead>
//       <tbody>{res}</tbody>
//     </table>
//   );
// }

// 16.1

// const users = [
//   { name: 'user1', surn: 'surn1', age: 30 },
//   { name: 'user2', surn: 'surn2', age: 31 },
//   { name: 'user3', surn: 'surn3', age: 32 },
// ];
// users.id = nanoid();

// // console.log(users);

// function App() {
//   const res = users.map(user => (
//     <p key={user.id}>
//       <span>{user.name}</span> : <span>{user.surn}</span> :
//       <span>{user.age}</span>
//     </p>
//   ));

//   return <>{res}</>;
// }

// const users = [

// function App() {
//   let [inCart, setInCart] = useState(false);

//   return (
//     <div>
//       <span>{inCart ? 'в корзине' : 'не в корзине'}</span>
//       <button onClick={() => setInCart(!inCart)}>btn</button>
//     </div>
//   );
// }

// 17.1-17.6
// function App() {
//   const [name, setName] = useState('Ivan');
//   const [surname, setSurname] = useState('Ivanov');
//   const [age, setAge] = useState(30);
//   const [banned, setBanned] = useState(false);
//   const [count, setCount] = useState(age);

//   return (
//     <div>
//       <span>{name}</span> :<span>{surname}</span> :<span>{age}</span>
//       <br></br>
//       <button onClick={() => setName('Vanya')}>btn1</button>
//       <button onClick={() => setSurname('Ivanova')}>bt2</button>
//       <button onClick={() => setAge(31)}>btn3</button>
//       <br></br>
//       <span>{banned ? 'забанен' : 'не забанен'}</span>
//       <br></br>
//       <button onClick={() => setBanned(true)}>btn4</button>
//       <button onClick={() => setBanned(false)}>btn3</button>
//       <br></br>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <span>{count}</span>
//     </div>
//   );
// }

// 18.1

// function App() {
//   const [value, setValue] = useState('');
//   const [cost, setCost] = useState();

//   function handleChangeValue(event) {
//     setValue(event.target.value);
//   }
//   function handleChangeCost(event) {
//     setCost(event.target.value);
//   }

//   return (
//     <div>
//       <input value={value} onChange={handleChangeValue} />
//       <p>text: {value}</p>
//       <br></br>
//       <input value={cost} onChange={handleChangeCost} />
//       <p>text: {cost}</p>
//     </div>
//   );
// }

// 18.2

// function App() {
//   const [value, setValue] = useState('');

//   function handleChangeValue(event) {
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <input value={value} onChange={handleChangeValue} />
//       <p>text: {value.length}</p>
//     </div>
//   );
// }

// 18.3

// function App() {
//   const [age, setAge] = useState('');

//   function handleChangeValue(event) {
//     setAge(event.target.value);
//   }

//   return (
//     <div>
//       <input value={age} onChange={handleChangeValue} />
//       <p>text: {2022 - Number(age)}</p>
//     </div>
//   );
// }

// 18.4

// function App() {
//   const [degree, setDegree] = useState('');

//   function handleChangeValue(event) {
//     setDegree(event.target.value);
//   }

//   return (
//     <div>
//       <input value={degree} onChange={handleChangeValue} />
//       <p>text: {Number(degree) - 273}</p>
//     </div>
//   );
// }

// 18.5

// function App() {
//   const [value1, setValue1] = useState(0);
//   const [value2, setValue2] = useState(0);
//   const [value3, setValue3] = useState(0);
//   const [value4, setValue4] = useState(0);
//   const [value5, setValue5] = useState(0);

//   function handleChange1(event) {
//     setValue1(Number(event.target.value));
//   }

//   function handleChange2(event) {
//     setValue2(Number(event.target.value));
//   }

//   function handleChange3(event) {
//     setValue3(Number(event.target.value));
//   }

//   function handleChange4(event) {
//     setValue4(Number(event.target.value));
//   }

//   function handleChange5(event) {
//     setValue5(Number(event.target.value));
//   }

//   return (
//     <div>
//       <input value={value1} onChange={handleChange1} />
//       <input value={value2} onChange={handleChange2} />
//       <input value={value3} onChange={handleChange3} />
//       <input value={value4} onChange={handleChange4} />
//       <input value={value5} onChange={handleChange5} />
//       <p>result: {(value1 + value2 + value3 + value4 + value5) / 5}</p>
//     </div>
//   );
// }

// 19.1

// function App() {
//   const [value1, setValue1] = useState(0);
//   const [value2, setValue2] = useState(0);
//   const [result1, setResult1] = useState(0);
//   const [result2, setResult2] = useState(0);

//   return (
//     <div>
//       <input value={value1} onChange={event => setValue1(event.target.value)} />
//       <input value={value2} onChange={event => setValue2(event.target.value)} />

//       <button onClick={() => setResult1(Number(value1) + Number(value2))}>
//         btn
//       </button>
//       <button onClick={() => setResult2(Number(value1) * Number(value2))}>
//         btn
//       </button>
//       <p>result: {result1}</p>
//       <p>result: {result2}</p>
//     </div>
//   );
// }

// 19.2-19.3

// function App() {
//   const [value1, setValue1] = useState('2022 - 12 - 21');
//   const [value2, setValue2] = useState('2022 - 12 - 31');
//   const [result, setResult] = useState(0);

//   function handleClick() {
//     setResult(Number(value2) - Number(value1));
//   }

//   return (
//     <div>
//       <input value={value1} onChange={event => setValue1(event.target.value)} />
//       <input value={value2} onChange={event => setValue2(event.target.value)} />

//       <button onClick={handleClick}>btn</button>
//       <p>result: {result}</p>
//     </div>
//   );
// }

// 19.4

// function digit(num) {
//   return num.split('').reduce((sum, elem) => sum + elem, 0);
// }

// function App() {
//   const [value, setValue] = useState(0);
//   const [blur, setBlur] = useState(0);

//   function handleChange(event) {
//     setValue(event.target.value);
//   }
//   function onBlur() {
//     setBlur(value => value.split('').reduce((sum, elem) => sum + elem, 0));
//   }

//   return (
//     <>
//       <input value={value} onBlur={onBlur} onChange={handleChange} />
//       <p>{blur}</p>
//     </>
//   );
// }

// 19.5

// 20.1
// function App() {
//   const [value, setValue] = useState('');
//   // const [result, setResult] = useState(0);

//   function handleChange(event) {
//     setValue(function translitRuEn(event) {
//     let magic = function (lit) {
//       let arrayLits = [
//         ['а', 'a'],
//         ['б', 'b'],
//         ['в', 'v'],
//         ['г', 'g'],
//         ['д', 'd'],
//         ['е', 'e'],
//         ['ё', 'yo'],
//         ['ж', 'zh'],
//         ['з', 'z'],
//         ['и', 'i'],
//         ['й', 'j'],
//         ['к', 'k'],
//         ['л', 'l'],
//         ['м', 'm'],
//         ['н', 'n'],
//         ['о', 'o'],
//         ['п', 'p'],
//         ['р', 'r'],
//         ['с', 's'],
//         ['т', 't'],
//         ['у', 'u'],
//         ['ф', 'f'],
//         ['х', 'h'],
//         ['ц', 'c'],
//         ['ч', 'ch'],
//         ['ш', 'w'],
//         ['щ', 'shh'],
//         ['ъ', "''"],
//         ['ы', 'y'],
//         ['ь', "'"],
//         ['э', 'e'],
//         ['ю', 'yu'],
//         ['я', 'ya'],
//         ['А', 'A'],
//         ['Б', 'B'],
//         ['В', 'V'],
//         ['Г', 'G'],
//         ['Д', 'D'],
//         ['Е', 'E'],
//         ['Ё', 'YO'],
//         ['Ж', 'ZH'],
//         ['З', 'Z'],
//         ['И', 'I'],
//         ['Й', 'J'],
//         ['К', 'K'],
//         ['Л', 'L'],
//         ['М', 'M'],
//         ['Н', 'N'],
//         ['О', 'O'],
//         ['П', 'P'],
//         ['Р', 'R'],
//         ['С', 'S'],
//         ['Т', 'T'],
//         ['У', 'U'],
//         ['Ф', 'F'],
//         ['Х', 'H'],
//         ['Ц', 'C'],
//         ['Ч', 'CH'],
//         ['Ш', 'W'],
//         ['Щ', 'SHH'],
//         ['Ъ', ''],
//         ['Ы', 'Y'],
//         ['Ь', ''],
//         ['Э', 'E'],
//         ['Ю', 'YU'],
//         ['Я', 'YA'],
//         ['0', '0'],
//         ['1', '1'],
//         ['2', '2'],
//         ['3', '3'],
//         ['4', '4'],
//         ['5', '5'],
//         ['6', '6'],
//         ['7', '7'],
//         ['8', '8'],
//         ['9', '9'],
//         ['a', 'a'],
//         ['b', 'b'],
//         ['c', 'c'],
//         ['d', 'd'],
//         ['e', 'e'],
//         ['f', 'f'],
//         ['g', 'g'],
//         ['h', 'h'],
//         ['i', 'i'],
//         ['j', 'j'],
//         ['k', 'k'],
//         ['l', 'l'],
//         ['m', 'm'],
//         ['n', 'n'],
//         ['o', 'o'],
//         ['p', 'p'],
//         ['q', 'q'],
//         ['r', 'r'],
//         ['s', 's'],
//         ['t', 't'],
//         ['u', 'u'],
//         ['v', 'v'],
//         ['w', 'w'],
//         ['x', 'x'],
//         ['y', 'y'],
//         ['z', 'z'],
//         ['A', 'A'],
//         ['B', 'B'],
//         ['C', 'C'],
//         ['D', 'D'],
//         ['E', 'E'],
//         ['F', 'F'],
//         ['G', 'G'],
//         ['H', 'H'],
//         ['I', 'I'],
//         ['J', 'J'],
//         ['K', 'K'],
//         ['L', 'L'],
//         ['M', 'M'],
//         ['N', 'N'],
//         ['O', 'O'],
//         ['P', 'P'],
//         ['Q', 'Q'],
//         ['R', 'R'],
//         ['S', 'S'],
//         ['T', 'T'],
//         ['U', 'U'],
//         ['V', 'V'],
//         ['W', 'W'],
//         ['X', 'X'],
//         ['Y', 'Y'],
//         ['Z', 'Z'],
//       ];
//       let efim360ru = arrayLits
//         .map(i => {
//           if (i[0] === lit) {
//             return i[1];
//           } else {
//             return undefined;
//           }
//         })
//         .filter(i => i != undefined);
//       if (efim360ru.length > 0) {
//         return efim360ru[0];
//       } else {
//         return '-';
//       }
//     };
// );
//   }

//     return Array.from(value)
//       .map(i => magic(i))
//       .join('');
//   }

//   return (
//     <div>
//       <textarea value={value} onChange={handleChange} />
//       <p>{value}</p>
//     </div>
//   );
// }

//  21.1
// function App() {
//   const [checked, setChecked] = useState(true);

//   function handleChange() {
//     setChecked(!checked);
//   }

//   let msg = '';
//   function handleClick() {
//     if (checked) {
//       msg = <p>Hello</p>;
//     } else {
//       msg = <p>By</p>;
//     }
//   }

//   return (
//     <>
//       <input type="checkbox" checked={checked} onChange={handleChange} />
//       <button onClick={handleClick}>btn</button>
//       <p>{msg}</p>
//     </>
//   );
// }

// 21.2
// function App() {
//   const [checked, setChecked] = useState(true);

//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={() => setChecked(!checked)}
//       />
//       <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
//     </div>
//   );
// }

import { useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  // when component is mounted
  useEffect(() => {
    alert('Это сообщение показал useEffect после успешной отрисовки!');
  });

  // runs once when component mounted
  useEffect(() => {
    alert('Count поменлся!');
  }, [count]);

  useEffect(() => {
    return () => alert('Компонет умер :(');
  });

  const increment = () => {
    setCount(count + 1);
  };

  const incrementNewCount = () => {
    setNewCount(newCount + 1);
  };

  return (
    <div>
      <h2>useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>Increment with effect</button>

      <p>New Count: {newCount}</p>
      <button onClick={() => incrementNewCount()}>
        Increment without effect
      </button>
    </div>
  );
};

// export default UseEffectPage

export default App;

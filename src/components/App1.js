import { useState } from 'react';

// function App1() {
//   const [value, setValue] = useState('');

//   function handleChange(event) {
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <select value={value} onChange={handleChange}>
//         <option>text1</option>
//         <option>text2</option>
//         <option>text3</option>
//         <option>text4</option>
//       </select>
//       <p>ваш выбор: {value}</p>
//     </div>
//   );
// }

// 22.1-22.2
// function App1() {
//   const city = ['Kiev', 'Kherson', 'Dnepr', 'Kharkiv', 'Nikolaev'];
//   const [value, setValue] = useState('');

//   const newList = city.map((name, index) => {
//     return <option key={index}>{name}</option>;
//   });

//   function handleChange(event) {
//     setValue(event.target.value);
//   }

//   return (
//     <>
//       <select value={value} onChange={handleChange}>
//         {newList}
//       </select>
//       <p>City: {value}</p>
//       {/* <select value={value} onChange={handleChange}>
//         <option>Kiev</option>
//         <option>Kherson</option>
//         <option>Dnepr</option>
//         <option>Kharkov</option>
//         <option>Nikolaev</option>
//       </select>
//       // <p>City: {value}</p> */}
//     </>
//   );
// }

// 22,3

// function App1() {
//   const [value, setValue] = useState('');

//   const handleChange = e => {
//     setValue(e.target.value);
//   };

//   return (
//     <>
//       <select value={value} onChange={handleChange}>
//         <option value="1">text1</option>
//         <option value="2">text2</option>
//         <option value="3">text3</option>
//         <option value="4">text4</option>
//       </select>
//       <p>
//         {value === '1' && 'от 0 до 12 лет'}
//         {value === '2' && 'от 13 до 17 лет'}
//         {value === '3' && 'от 18 до 25 лет'}
//         {value === '4' && 'от 26 до 40 лет'}
//       </p>
//     </>
//   );
// }

// 23.1

// function App1() {
//   const [value, setValue] = useState(1);

//   function changeHandler(e) {
//     setValue(e.target.value);
//   }

//   return (
//     <>
//       <input
//         type="radio"
//         name="radio"
//         value="1"
//         checked={value === '1' ? true : false}
//         onChange={changeHandler}
//       />
//       <input
//         type="radio"
//         name="radio"
//         value="2"
//         checked={value === '2' ? true : false}
//         onChange={changeHandler}
//       />
//       <input
//         type="radio"
//         name="radio"
//         value="3"
//         checked={value === '3' ? true : false}
//         onChange={changeHandler}
//       />
//       <p>{value}</p>
//     </>
//   );

// 23.2
// function App1() {
//   const [value, setValue] = useState(1);
//   function changeHandler(e) {
//     setValue(e.target.value);
//   }

//   return (
//     <>
//       <p>What is your favorite language?</p>
//       <input
//         type="radio"
//         name="radio"
//         value="1"
//         checked={value === '1' ? true : false}
//         onChange={changeHandler}
//       />
//       <p>JavaScript</p>
//       <input
//         type="radio"
//         name="radio"
//         value="2"
//         checked={value === '2' ? true : false}
//         onChange={changeHandler}
//       />
//       <p>Java</p>
//       <input
//         type="radio"
//         name="radio"
//         value="3"
//         checked={value === '3' ? true : false}
//         onChange={changeHandler}
//       />
//       <p>Python</p>
//       <p>{value}</p>
//       <p>
//         {value === '1' && 'JavaScript. It is good'}
//         {value === '2' && 'Java'}
//         {value === '3' && 'Python'}
//       </p>
//     </>
//   );
// }

// function App1() {
//   const [checked, setChecked] = useState(true);

//   return (
//     <div>
//       <input type="checkbox" defaultChecked={checked} />
//     </div>
//   );
// }

// 25.1-25.4

// function App1() {
//   const [value, setValue] = useState([1, 2, 3]);
// let index = 1;
// const handleClick = () => {
//   // setValue([...value, 4]);
//   setValue([...value.slice(0, index), 10, ...value.slice(index + 1)]);
// };

//   const handleClick = () => {
//     let copy = Object.assign([], value).reverse();
//     setValue(copy);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>btn</button>
//       <p>{value}</p>
//     </>
//   );
// }

// 26.1-26.2

// function App1() {
//   const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
//   const [value, setValue] = useState('');

//   const result = notes.map((note, index) => {
//     return <ul key={index}>{note}</ul>;
//   });

//   const handleChange = e => {
//     setValue(e.target.value);
//   };

//   const onBlur = e => {
//     setNotes([...notes, value]);
//     setValue('');
//   };

//   return (
//     <>
//       {result}
//       <input value={value} onChange={handleChange} onBlur={onBlur} />
//     </>
//   );
// }

// function App1() {
//   const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);

//   const result = notes.map((note, index) => {
//     return (
//       <li key={index}>
//         {note}
//         <button onClick={() => remItem(index)}></button>
//       </li>
//     );
//   });

//   function remItem(index) {
//     setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
//   }

//   return <div>{result}</div>;
// }

// 28.1
// function getSum(arr) {
//   return arr.reduce((a, b) => (a + b) / arr.length, 0);
//   // let sum = 0;

//   // for (let elem of arr) {
//   //   sum += elem;
//   // }
//   // return sum / arr.length;
// }

// function App1() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//   function changeHandler(index, event) {
//     setNotes([
//       ...notes.slice(0, index),
//       event.target.value,
//       ...notes.slice(index + 1),
//     ]);
//   }
//   const result = notes.map((note, index) => {
//     return (
//       <input
//         key={index}
//         value={note}
//         onChange={event => changeHandler(index, event)}
//       />
//     );
//   });
//   return (
//     <>
//       {result}
//       {getSum(notes)}
//     </>
//   );
// }

// 29.1-29.2

// function App1() {
//   const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
//   const [editNum, setEditNum] = useState(null);

//   const list = notes.map((note, index) => {
//     return (
//       <li key={index}>
//         {note}
//         <button onClick={() => setEditNum(index)}></button>
//       </li>
//     );
//   });

//   function changeItem(event) {
//     setNotes([
//       ...notes.slice(0, editNum),
//       event.target.value,
//       ...notes.slice(editNum + 1),
//     ]);
//   }

//   const onBlur = () => {
//     setEditNum(null);
//   };

//   return (
//     <div>
//       <ul>{list}</ul>

//       <input
//         value={editNum ? notes[editNum] : ''}
//         onChange={changeItem}
//         onBlur={onBlur}
//       />
//     </div>
//   );
// }

// 30-1.1

// function App1() {
//   const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
//   const [editNum, setEditNum] = useState(null);
//   const [value, setValue] = useState('');

//   const result = notes.map((note, index) => {
//     return (
//       <li key={index} onClick={() => setEditNum(index)}>
//         {note}
//       </li>
//     );
//   });

//   const changeItem = event => {
//     setNotes([
//       ...notes.slice(0, editNum),
//       event.target.value,
//       ...notes.slice(editNum + 1),
//     ]);
//   };

//   const stopEdit = event => {
//     setEditNum(null);
//   };

//   const changeValue = event => {
//     setValue(event.target.value);
//   };

//   const addItem = event => {
//     setNotes([...notes, value]);
//   };

//   let input;
//   if (editNum) {
//     input = (
//       <input value={notes[editNum]} onChange={changeItem} onBlur={stopEdit} />
//     );
//   } else {
//     input = <input value={value} onChange={changeValue} onBlur={addItem} />;
//   }

//   return (
//     <div>
//       <ul>
//         {result}
//         {input}
//       </ul>
//     </div>
//   );
// }

//   let input;
//   if (editNum) {
//     input = (
//       <input value={notes[editNum]} onChange={changeItem} onBlur={stopEdit} />
//     );
//   } else {
//     input = <input value={value} onChange={changeValue} onBlur={addItem} />;
//   }

//   return (
//     <div>
//       {result}
//       {input}
//     </div>
//   );
// }

// function App1() {
//   const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
//   const [editNum, setEditNum] = useState(null);
//   const [value, setValue] = useState('');

//   const result = notes.map((note, index) => {
//     return (
//       <li key={index} onClick={() => startEdit(index)}>
//         {note}
//       </li>
//     );
//   });

//   function startEdit(index) {
//     setEditNum(index);
//     setValue(notes[index]);
//   }

//   const changeHandler = event => {
//     setValue(event.target.value);

//     if (editNum) {
//       setNotes([
//         ...notes.slice(0, editNum),
//         event.target.value,
//         ...notes.slice(editNum + 1),
//       ]);
//     }
//   };

//   function blurHandler(event) {
//     if (!editNum) {
//       setNotes([...notes, value]);
//     } else {
//       setEditNum(null);
//     }

//     setValue('');
//   }

//   return (
//     <div>
//       <ul>
//         {result}
//         <input value={value} onChange={changeHandler} onBlur={blurHandler} />
//       </ul>
//     </div>
//   );
// }

// 30-1.3

// function App1() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const [editNum, setEditNum] = useState(null);

//   const result = notes.map((note, index) => {
//     return (
//       <li key={index} onClick={() => startEdit(index)}>
//         {note}
//       </li>
//     );
//   });

//   function startEdit(index) {
//     setEditNum(index);
//   }
//   function editItem(event) {
//     setNotes([
//       ...notes.slice(0, editNum),
//       event.target.value,
//       ...notes.slice(editNum + 1),
//     ]);
//   }
//   function createItem() {
//     if (!editNum) {
//       const res = [...notes, ''];
//       setNotes(res);
//       setEditNum(res.length - 1);
//     }
//   }
//   function stopEdit() {
//     setEditNum(null);
//   }

//   return (
//     <div>
//       <ul>
//         {result}
//         <input
//           value={editNum ? notes[editNum] : ''}
//           onChange={editItem}
//           onFocus={createItem}
//           onBlur={stopEdit}
//         />
//       </ul>
//     </div>
//   );
// }

// const App1 = () => {
//   const [obj, setObj] = useState({
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
//   });

//   const handleChange1 = click => {
//     setObj({ ...obj, ...{ prop1: '!' } });
//   };

//   const handleChange2 = click => {
//     setObj({ ...obj, ...{ prop2: '!!' } });
//   };

//   const handleChange3 = click => {
//     setObj({ ...obj, ...{ prop3: '!!!' } });
//   };

//   return (
//     <div>
//       <span>{obj.prop1}</span>
//       <button onClick={handleChange1}>btn1</button> <br></br>
//       <span>{obj.prop2}</span>
//       <button onClick={handleChange2}>btn2</button> <br></br>
//       <span>{obj.prop3}</span>
//       <button onClick={handleChange3}>btn3</button>
//     </div>
//   );
// };

// 32.1-2

const initDate = {
  year: 2025,
  month: 12,
  day: 31,
};

function App1() {
  const [obj, setObj] = useState(initDate);

  function handleChange(prop, event) {
    setObj({ ...obj, ...{ [prop]: event.target.value } });
  }

  return (
    <div>
      <input value={obj.year} onChange={event => handleChange('year', event)} />
      <input
        value={obj.month}
        onChange={event => handleChange('month', event)}
      />
      <input value={obj.day} onChange={event => handleChange('day', event)} />
      <br />
      {obj.year}-{obj.month}-{obj.day}
    </div>
  );
}

export default App1;

// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [todoList, setTodoList] = useState([]);

  let saveToDoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;
    // alert(toname);

    if (!todoList.includes(toname)) {
      let finalToDo = [...todoList, toname];
      setTodoList(finalToDo);
    }
    else {
      alert("Already exist!...")
    }

  }

  let list = todoList.map((value, index) => {
    return (
      <ToDoListItems value={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList} />
    );
  })

  return (
    <div className="App">

      <h1>ToDo List</h1><hr />
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname' /><button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>
          {list}
        </ul>
      </div>

    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todoList, setTodoList }) {

  let deleteItem = () => {
    let finalData = todoList.filter((v, i) => i != indexNumber);
    setTodoList(finalData);
  }
  return (
    <li>{indexNumber + 1} :- {value} <span onClick={deleteItem}>X</span></li>
  );
}


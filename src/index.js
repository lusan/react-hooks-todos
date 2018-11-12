import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function TodoApp() {
  const [todoItems, setTodoItems] = useState([]);
  const [todo, setTodos] = useState('');
  
  function addTodoItem() {
    console.log(todo)
    setTodoItems(todoItems.concat(todo));
  }

  useEffect(() => {
    fetch("https://5be9b468b854d100131091cc.mockapi.io/todos")
      .then(res => res.json())
      .then(
        (result) => {
          setTodoItems(result); 
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
        }
      )
    }, []
  );
  
  return (
    <React.Fragment>
      <div>
        {
          todoItems.map((item) => (
            <div>{item.todo}</div>
          ))
        }
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

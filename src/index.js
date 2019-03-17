import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import todoListData from './components/todoList/todolistData';

import Header from './components/header';
import TodoList from './components/todoList';
// import CompletedList from './components/completedList';
import AddNewTask from './components/addNewTask';

import "./styles.css";

function App() {
  const { todolist } = todoListData;
  const [ todoListPayload, setTodoListPayload ] = useState(todolist);

  const addTodoTaskHandler = (value) => {
    setTodoListPayload([
      ...todoListPayload,
      {
        id: Math.random(),
        title: value
      }
    ])
  }

  useEffect(() => {
    console.log(todoListPayload)
  })

  return (
    <div className="App">
      <Header
        title={'My Tasks'}
      />
      <div className="PageLayout">
        <TodoList
          payload={todoListPayload}
        />
        {/* <CompletedList /> */}
        <AddNewTask
          addTodoTaskHandler={addTodoTaskHandler}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

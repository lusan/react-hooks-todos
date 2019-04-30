import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import todoListData from "./containers/todoList/todolistData";

import Header from "./containers/header";
import TodoList from "./containers/todoList";
import CompletedList from "./containers/completedList";
import AddNewTask from "./containers/addNewTask";
import Clock from "./components/Clock";
import "./styles.css";

function App() {
  const { todolist } = todoListData;
  const [todoListPayload, setTodoListPayload] = useState(todolist);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const addTodoTaskHandler = value => {
    setTodoListPayload([
      ...todoListPayload,
      {
        id: Math.random(),
        title: value
      }
    ]);
  };

  const removeTodoTaskHandler = ({ id }) => {
    // Remove from the set of todo list
    const filteredTodoList = todoListPayload.filter(item => item.id !== id);

    setTodoListPayload(filteredTodoList);
  };

  const completeTodoTaskHandler = ({ id }) => {
    // Get item to remove
    let filteredTodoItem = todoListPayload.find(item => item.id === id);

    removeTodoTaskHandler({ id });

    // add in the completed todo list
    setCompletedTodoList([...completedTodoList, filteredTodoItem]);
  };

  useEffect(() => {
    console.log(todoListPayload);
    console.log(completedTodoList);
  });

  return (
    <div className="App">
      <Header title={"My Tasks"} />
      <Clock />
      <div className="PageLayout">
        <TodoList
          payload={todoListPayload}
          completeTodoTaskHandler={completeTodoTaskHandler}
        />
        <CompletedList list={completedTodoList} />
        <AddNewTask addTodoTaskHandler={addTodoTaskHandler} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

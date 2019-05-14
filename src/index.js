import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";

import todoListData from "./containers/todoList/todolistData";

import Header from "./containers/header";
// import CompletedList from "./containers/completedList";
// import AddNewTask from "./containers/addNewTask";
import Clock from "./components/Clock";
import "./styles.css";

const TodoList = React.lazy(() => import("./containers/todoList"));
const CompletedList = React.lazy(() => import("./containers/completedList"));
const AddNewTask = React.lazy(() => import("./containers/addNewTask"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <TodoList
            payload={todoListPayload}
            completeTodoTaskHandler={completeTodoTaskHandler}
          />
          <CompletedList list={completedTodoList} />
          <AddNewTask addTodoTaskHandler={addTodoTaskHandler} />
        </Suspense>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

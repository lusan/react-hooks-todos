import React from "react";

import TodoListItem from "./todoListItem";

import "./TodoList.css";

const TodoList = ({ payload = [], completeTodoTaskHandler }) => {
  return (
    <div className="TodoList">
      <ul>
        {!!payload.length &&
          payload.map(item => (
            <li key={`todolist${item.id}`}>
              <TodoListItem
                title={item.title}
                id={item.id}
                completeTodoTaskHandler={completeTodoTaskHandler}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;

import React from 'react';

import TodoListItem from './todoListItem';

import './TodoList.css'

const TodoList = ({ payload = [] }) => {
  return (
    <div className="TodoList">
      <ul>
        {
          !!payload.length &&
          payload.map((item) => (
            <li key={`todolist${item.id}`}>
              <TodoListItem
                title={item.title}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList;
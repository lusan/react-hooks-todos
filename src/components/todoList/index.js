import React, { Fragment } from 'react';
import todoListData from './todolistData';

import TodoListItem from './todoListItem';

import './TodoList.css'

const TodoList = (props) => {
  const { children } = props;
  const { todolist = [] } = todoListData;
  return (
    <div className="TodoList">
      <ul>
        {
          !!todolist.length &&
          todolist.map((item) => (
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
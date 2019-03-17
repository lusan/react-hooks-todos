import React, { Fragment } from 'react'

import './TodoListItem.css'

const TodoListItem = ({ title }) => {
  return (
    <div className="TodoListItem">
      <label>
        <input
          type="checkbox"
          checked="checked"
        />
        <span class="checkmark"></span>
        {title}
      </label>
    </div>
  )
}

export default TodoListItem

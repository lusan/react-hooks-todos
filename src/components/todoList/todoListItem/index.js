import React from 'react'

import './TodoListItem.css'

const TodoListItem = ({ title }) => {
  return (
    <div className="TodoListItem">
      <label>
        <input
          type="checkbox"
          checked="checked"
        />
        <span className="checkmark"></span>
        {title}
      </label>
    </div>
  )
}

export default TodoListItem

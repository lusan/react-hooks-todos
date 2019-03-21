import React, { useState } from "react";

import "./TodoListItem.css";

const TodoListItem = ({ title, id, completeTodoTaskHandler }) => {
  const [isTodoChecked, setTodoCheck] = useState(false);

  const handleTodoItemCheck = () => {
    setTodoCheck(!isTodoChecked);
    // TODO below line should execute after
    // state is set
    completeTodoTaskHandler({ id });
  };

  return (
    <div className="TodoListItem">
      <label>
        <input
          type="checkbox"
          checked={isTodoChecked}
          onChange={handleTodoItemCheck}
        />
        <span className="checkmark" />
        {title}
      </label>
    </div>
  );
};

export default TodoListItem;

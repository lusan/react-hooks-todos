import React, { useState, useEffect, useRef } from "react";

import "./AddNewTaskPopup.css";

const AddNewTaskPopup = ({ addTodoTaskHandler, toggleNewTaskPopup }) => {
  const [myTask, setMyTask] = useState("");
  const inputRef = useRef();

  const onSaveTask = () => {
    addTodoTaskHandler(myTask);
    toggleNewTaskPopup();
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="AddNewTaskPopup">
      <div className="inputWrapper">
        <input
          type="text"
          onChange={e => setMyTask(e.target.value)}
          value={myTask}
          placeholder="Add task"
          ref={inputRef}
          onKeyPress={e => {
            if (e.key === "Enter") {
              onSaveTask();
            }
          }}
        />
        <div className="saveTask" onClick={onSaveTask}>
          Save
        </div>
      </div>
    </div>
  );
};

export default AddNewTaskPopup;

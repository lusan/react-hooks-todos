import React, { useState } from 'react';

import './AddNewTaskPopup.css';

const AddNewTaskPopup = ({ addTodoTaskHandler, toggleNewTaskPopup }) => {
  const [ myTask, setMyTask ] = useState('');

  const onSaveTask = () => {
    addTodoTaskHandler(myTask);
    toggleNewTaskPopup();
  }

  return (
    <div className="AddNewTaskPopup">
      <div className="inputWrapper">
        <input
          type="text"
          onChange={(e) => setMyTask(e.target.value)}
          value={myTask}
          placeholder="Add task"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSaveTask();
            }
          }}
        />
        <div className="saveTask" onClick={onSaveTask}>Save</div>
      </div>
    </div>
  )
}

export default AddNewTaskPopup

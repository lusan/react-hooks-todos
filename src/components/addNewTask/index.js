import React, { Fragment, useState } from 'react';

import './AddNewTask.css';

import AddNewTaskPopup from '../addNewTaskPopup';

const AddNewTask = ({ addTodoTaskHandler }) => {
  const [isNewTaskPopupVisible, setNewTaskPopupVisiblity] = useState(false);
  const toggleNewTaskPopup = () => setNewTaskPopupVisiblity(!isNewTaskPopupVisible)
  return (
    <Fragment>
      <div
        className="AddNewTask"
        onClick={toggleNewTaskPopup}
      >
        <span className="icon">+</span>Add a new task
      </div>
      {
        isNewTaskPopupVisible &&
        <Fragment>
          <AddNewTaskPopup
            addTodoTaskHandler={addTodoTaskHandler}
            toggleNewTaskPopup={toggleNewTaskPopup}
          />
          <div className="AddNewTaskOverlay" onClick={toggleNewTaskPopup} />
        </Fragment>
      }
    </Fragment>
  )
}

export default AddNewTask

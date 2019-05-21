import React from "react";

import TodoListItem from "../../components/todoListItem";

const CompletedList = ({ list = [] }) => {
  return (
    <div>
      <div>Completed List</div>
      <ul>
        {list.map((item, index) => (
          <TodoListItem
            key={`todolistitem-${index}`}
            title={item.title}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;

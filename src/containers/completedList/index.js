import React from "react";

const CompletedList = ({ list = [] }) => {
  return (
    <div>
      <div>Completed List</div>
      <ul>
        {list.map((item, index) => (
          <li key={`completedlist${index}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;

import React from "react";
import "./Info.css";

export const Info = ({ total, completed }) => {
  return (
    <div>
      <p className="info">Total todos: {total}</p>
      <p className="info">Completed todos: {completed}</p>
    </div>
  );
};

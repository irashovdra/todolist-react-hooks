import React from "react";
import "./Filter.css";

const Filter = ({ filter, onChange }) => {
  return (
    <input
      className="filter-input"
      type="text"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Фільтрувати завдання..."
    />
  );
};

export { Filter };

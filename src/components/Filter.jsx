import React from "react";

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Фільтрувати завдання..."
    />
  );
};

export { Filter };

import React from "react";

export const Filter = ({ filter, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Filter todos"
      />
    </div>
  );
};

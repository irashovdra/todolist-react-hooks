export const Filter = ({ filter, onChange }) => {
  const inputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={inputChange}
        placeholder="Filter todos"
      />
    </div>
  );
};

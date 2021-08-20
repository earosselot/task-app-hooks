import "./Input.css";

function Input({ value, onChange, handleAddNote }) {
  function handleInputChange(e) {
    onChange(e.target.value);
  }

  function onEnterKeyPress(e) {
    if (e.key === "Enter") {
      handleAddNote(value);
    }
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      className="input"
      placeholder="Add Task..."
      onKeyPress={onEnterKeyPress}
    />
  );
}

export default Input;

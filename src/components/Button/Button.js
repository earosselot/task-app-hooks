import "./Button.css";

function Button({ children, handleAddNote, inputText }) {
  return (
    <button className="btn" onClick={() => handleAddNote(inputText)}>
      {children}
    </button>
  );
}

export default Button;

import './Input.css'

function Input({ value, onChange }) {

    function handleInputChange(e) {
        onChange(e.target.value)
    }

    return <input type="text" value={value} onChange={handleInputChange} className="input" placeholder="Add Task..."/>
}

export default Input
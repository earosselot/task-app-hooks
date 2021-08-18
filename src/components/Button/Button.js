import './Button.css'

function Button({ children, onClick }) {

    function handleButtonClick() {
        onClick()
    }

    return <button className="btn" onClick={handleButtonClick}>{children}</button>
}

export default Button
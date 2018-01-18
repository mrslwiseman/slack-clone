import React from 'react'

const AddMessage = ({onAddMessage}) => {
    return (
        <footer onSubmit={(e) => onAddMessage(e, this.textInput.value)}>
            <form>
                <input ref={input => this.textInput = input }type="text" />
                <button>Send</button>
            </form>
        </footer>
    )
}

export default AddMessage;
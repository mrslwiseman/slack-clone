import React from 'react'

const StreamList = ({threads, users, selectThread, handleAddThread}) => {
    let textInput = null;

    return (
        <nav className='app__streams'>
            <section>
                <h3>Channels</h3>
                <ul>
                {
                    threads.map(thread => (
                        <li onClick={() => selectThread(thread)}>#{thread}</li>
                    ))
                }
                    
                </ul>
            </section>
            <section>
                <h3>Users</h3>
                <ul>
                    <li>#Matt</li>
                    <li>#John</li>
                    <li>#Kyle</li>
                </ul>
            </section>
            <section>
                <form onSubmit={(e) => {handleAddThread(e, textInput.value)}}>
                <label>Add a Thread</label>
                <input ref={input => textInput = input} type="text"/>
                <button>Add</button>
                </form>
            </section>
        </nav>
    )
}

export default StreamList;


import React from 'react'

const StreamList = ({threadList, users, selectThread}) => {
    return (
        <nav className='app__streams'>
            <section>
                <h3>Channels</h3>
                <ul>
                    <li onClick={() => selectThread('react')}>#react</li>
                    <li>#redux</li>
                    <li>#webpack</li>
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
        </nav>
    )
}

export default StreamList;

